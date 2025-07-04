import * as fs from 'fs';
import {World} from './world';
import {Server} from './ws';
import {Metrics} from './metrics';
import {Player} from './player';

function main(config) {
    var WorldServer = World,
        server = new Server(config.port),
        metrics = config.metrics_enabled ? new Metrics(config) : null,
        worlds = [],
        lastTotalPlayers = 0,
        checkPopulationInterval = setInterval(function() {
            if(metrics && metrics.isReady) {
                metrics.getTotalPlayers(function(totalPlayers) {
                    if(totalPlayers !== lastTotalPlayers) {
                        lastTotalPlayers = totalPlayers;
                        worlds.forEach(function(world) {
                            world.updatePopulation(totalPlayers);
                        });
                    }
                });
            }
        }, 1000);

    console.info("Starting BrowserQuest game server...");

    server.onConnect(function(connection) {
        var world, // the one in which the player will be spawned
            connect = function() {
                if(world) {
                    world.connect_callback(new Player(connection, world));
                }
            };

        if(metrics) {
            metrics.getOpenWorldCount(function(open_world_count) {
                console.log('open world count: ' + open_world_count);
                // choose the least populated world among open worlds
                world = worlds.find(world => world.playerCount < config.nb_players_per_world && world.playerCount < open_world_count);
                connect();
            });
        }
        else {
            // simply fill each world sequentially until they are full
            world = worlds.find(world => world.playerCount < config.nb_players_per_world);
            world.updatePopulation();
            connect();
        }
    });

    server.onError(function() {
        console.error(Array.prototype.join.call(arguments, ", "));
    });

    var onPopulationChange = function() {
        metrics.updatePlayerCounters(worlds, function(totalPlayers) {
            worlds.forEach(function(world) {
                world.updatePopulation(totalPlayers);
            });
        });
        metrics.updateWorldDistribution(getWorldDistribution(worlds));
    };

    Array.from({length: config.nb_worlds}, (_, i) => {
        var world = new WorldServer('world'+ (i+1), config.nb_players_per_world, server);
        world.run(config.map_filepath);
        worlds.push(world);
        if(metrics) {
            world.onPlayerAdded(onPopulationChange);
            world.onPlayerRemoved(onPopulationChange);
        }
    });

    server.onRequestStatus(function() {
        return JSON.stringify(getWorldDistribution(worlds));
    });

    if(config.metrics_enabled) {
        metrics.ready(function() {
            onPopulationChange(); // initialize all counters to 0 when the server starts
        });
    }

    // process.on('uncaughtException', function (e) {
    //     console.error('uncaughtException: ' + e);
    // });
}

function getWorldDistribution(worlds) {
    var distribution = [];

    worlds.forEach(function(world) {
        distribution.push(world.playerCount);
    });
    return distribution;
}

function getConfigFile(path, callback) {
    fs.readFile(path, 'utf8', function(err, json_string) {
        if(err) {
            console.error("Could not open config file:", err.path);
            callback(null);
        } else {
            callback(JSON.parse(json_string));
        }
    });
}

var configPath = './server/config.json';

process.argv.forEach(function (val, index, array) {
    if(index === 2) {
        configPath = val;
    }
});

getConfigFile(configPath, function(config) {
    main(config);
});