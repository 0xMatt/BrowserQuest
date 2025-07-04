"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = void 0;
const _ = __importStar(require("lodash"));
exports.Types = {
    Messages: {
        HELLO: 0,
        WELCOME: 1,
        SPAWN: 2,
        DESPAWN: 3,
        MOVE: 4,
        LOOTMOVE: 5,
        AGGRO: 6,
        ATTACK: 7,
        HIT: 8,
        HURT: 9,
        HEALTH: 10,
        CHAT: 11,
        LOOT: 12,
        EQUIP: 13,
        DROP: 14,
        TELEPORT: 15,
        DAMAGE: 16,
        POPULATION: 17,
        KILL: 18,
        LIST: 19,
        WHO: 20,
        ZONE: 21,
        DESTROY: 22,
        HP: 23,
        BLINK: 24,
        OPEN: 25,
        CHECK: 26
    },
    Entities: {
        WARRIOR: 1,
        RAT: 2,
        SKELETON: 3,
        GOBLIN: 4,
        OGRE: 5,
        SPECTRE: 6,
        CRAB: 7,
        BAT: 8,
        WIZARD: 9,
        EYE: 10,
        SNAKE: 11,
        SKELETON2: 12,
        BOSS: 13,
        DEATHKNIGHT: 14,
        FIREFOX: 20,
        CLOTHARMOR: 21,
        LEATHERARMOR: 22,
        MAILARMOR: 23,
        PLATEARMOR: 24,
        REDARMOR: 25,
        GOLDENARMOR: 26,
        FLASK: 35,
        BURGER: 36,
        CHEST: 37,
        FIREPOTION: 38,
        CAKE: 39,
        GUARD: 40,
        KING: 41,
        OCTOCAT: 42,
        VILLAGEGIRL: 43,
        VILLAGER: 44,
        PRIEST: 45,
        SCIENTIST: 46,
        AGENT: 47,
        RICK: 48,
        NYAN: 49,
        SORCERER: 50,
        BEACHNPC: 51,
        FORESTNPC: 52,
        DESERTNPC: 53,
        LAVANPC: 54,
        CODER: 55,
        SWORD1: 60,
        SWORD2: 61,
        REDSWORD: 62,
        GOLDENSWORD: 63,
        MORNINGSTAR: 64,
        AXE: 65,
        BLUESWORD: 66
    },
    Orientations: {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    }
};
var kinds = {
    warrior: [exports.Types.Entities.WARRIOR, 'player'],
    rat: [exports.Types.Entities.RAT, 'mob'],
    skeleton: [exports.Types.Entities.SKELETON, 'mob'],
    goblin: [exports.Types.Entities.GOBLIN, 'mob'],
    ogre: [exports.Types.Entities.OGRE, 'mob'],
    spectre: [exports.Types.Entities.SPECTRE, 'mob'],
    deathknight: [exports.Types.Entities.DEATHKNIGHT, 'mob'],
    crab: [exports.Types.Entities.CRAB, 'mob'],
    snake: [exports.Types.Entities.SNAKE, 'mob'],
    bat: [exports.Types.Entities.BAT, 'mob'],
    wizard: [exports.Types.Entities.WIZARD, 'mob'],
    eye: [exports.Types.Entities.EYE, 'mob'],
    skeleton2: [exports.Types.Entities.SKELETON2, 'mob'],
    boss: [exports.Types.Entities.BOSS, 'mob'],
    sword1: [exports.Types.Entities.SWORD1, 'weapon'],
    sword2: [exports.Types.Entities.SWORD2, 'weapon'],
    axe: [exports.Types.Entities.AXE, 'weapon'],
    redsword: [exports.Types.Entities.REDSWORD, 'weapon'],
    bluesword: [exports.Types.Entities.BLUESWORD, 'weapon'],
    goldensword: [exports.Types.Entities.GOLDENSWORD, 'weapon'],
    morningstar: [exports.Types.Entities.MORNINGSTAR, 'weapon'],
    firefox: [exports.Types.Entities.FIREFOX, 'armor'],
    clotharmor: [exports.Types.Entities.CLOTHARMOR, 'armor'],
    leatherarmor: [exports.Types.Entities.LEATHERARMOR, 'armor'],
    mailarmor: [exports.Types.Entities.MAILARMOR, 'armor'],
    platearmor: [exports.Types.Entities.PLATEARMOR, 'armor'],
    redarmor: [exports.Types.Entities.REDARMOR, 'armor'],
    goldenarmor: [exports.Types.Entities.GOLDENARMOR, 'armor'],
    flask: [exports.Types.Entities.FLASK, 'object'],
    cake: [exports.Types.Entities.CAKE, 'object'],
    burger: [exports.Types.Entities.BURGER, 'object'],
    chest: [exports.Types.Entities.CHEST, 'object'],
    firepotion: [exports.Types.Entities.FIREPOTION, 'object'],
    guard: [exports.Types.Entities.GUARD, 'npc'],
    villagegirl: [exports.Types.Entities.VILLAGEGIRL, 'npc'],
    villager: [exports.Types.Entities.VILLAGER, 'npc'],
    coder: [exports.Types.Entities.CODER, 'npc'],
    scientist: [exports.Types.Entities.SCIENTIST, 'npc'],
    priest: [exports.Types.Entities.PRIEST, 'npc'],
    king: [exports.Types.Entities.KING, 'npc'],
    rick: [exports.Types.Entities.RICK, 'npc'],
    nyan: [exports.Types.Entities.NYAN, 'npc'],
    sorcerer: [exports.Types.Entities.SORCERER, 'npc'],
    agent: [exports.Types.Entities.AGENT, 'npc'],
    octocat: [exports.Types.Entities.OCTOCAT, 'npc'],
    beachnpc: [exports.Types.Entities.BEACHNPC, 'npc'],
    forestnpc: [exports.Types.Entities.FORESTNPC, 'npc'],
    desertnpc: [exports.Types.Entities.DESERTNPC, 'npc'],
    lavanpc: [exports.Types.Entities.LAVANPC, 'npc'],
    getType: function (kind) {
        if (typeof kinds[exports.Types.getKindAsString(kind)] !== 'undefined') {
            return kinds[exports.Types.getKindAsString(kind)][1];
        }
        console.log('failed to load kind: ' + kind);
    }
};
exports.Types.rankedWeapons = [
    exports.Types.Entities.SWORD1,
    exports.Types.Entities.SWORD2,
    exports.Types.Entities.AXE,
    exports.Types.Entities.MORNINGSTAR,
    exports.Types.Entities.BLUESWORD,
    exports.Types.Entities.REDSWORD,
    exports.Types.Entities.GOLDENSWORD
];
exports.Types.rankedArmors = [
    exports.Types.Entities.CLOTHARMOR,
    exports.Types.Entities.LEATHERARMOR,
    exports.Types.Entities.MAILARMOR,
    exports.Types.Entities.PLATEARMOR,
    exports.Types.Entities.REDARMOR,
    exports.Types.Entities.GOLDENARMOR
];
exports.Types.getWeaponRank = function (weaponKind) {
    return _.indexOf(exports.Types.rankedWeapons, weaponKind);
};
exports.Types.getArmorRank = function (armorKind) {
    return _.indexOf(exports.Types.rankedArmors, armorKind);
};
exports.Types.isPlayer = function (kind) {
    return kinds.getType(kind) === 'player';
};
exports.Types.isMob = function (kind) {
    return kinds.getType(kind) === 'mob';
};
exports.Types.isNpc = function (kind) {
    return kinds.getType(kind) === 'npc';
};
exports.Types.isCharacter = function (kind) {
    return exports.Types.isMob(kind) || exports.Types.isNpc(kind) || exports.Types.isPlayer(kind);
};
exports.Types.isArmor = function (kind) {
    return kinds.getType(kind) === 'armor';
};
exports.Types.isWeapon = function (kind) {
    return kinds.getType(kind) === 'weapon';
};
exports.Types.isObject = function (kind) {
    return kinds.getType(kind) === 'object';
};
exports.Types.isChest = function (kind) {
    return kind === exports.Types.Entities.CHEST;
};
exports.Types.isItem = function (kind) {
    return exports.Types.isWeapon(kind)
        || exports.Types.isArmor(kind)
        || (exports.Types.isObject(kind) && !exports.Types.isChest(kind));
};
exports.Types.isHealingItem = function (kind) {
    return kind === exports.Types.Entities.FLASK
        || kind === exports.Types.Entities.BURGER;
};
exports.Types.isExpendableItem = function (kind) {
    return exports.Types.isHealingItem(kind)
        || kind === exports.Types.Entities.FIREPOTION
        || kind === exports.Types.Entities.CAKE;
};
exports.Types.getKindFromString = function (kind) {
    if (kind in kinds) {
        return kinds[kind][0];
    }
};
exports.Types.getKindAsString = function (kind) {
    for (var k in kinds) {
        if (kinds[k][0] === kind) {
            return k;
        }
    }
};
exports.Types.forEachKind = function (callback) {
    for (var k in kinds) {
        callback(kinds[k][0], k);
    }
};
exports.Types.forEachArmor = function (callback) {
    exports.Types.forEachKind(function (kind, kindName) {
        if (exports.Types.isArmor(kind)) {
            callback(kind, kindName);
        }
    });
};
exports.Types.forEachMobOrNpcKind = function (callback) {
    exports.Types.forEachKind(function (kind, kindName) {
        if (exports.Types.isMob(kind) || exports.Types.isNpc(kind)) {
            callback(kind, kindName);
        }
    });
};
exports.Types.forEachArmorKind = function (callback) {
    exports.Types.forEachKind(function (kind, kindName) {
        if (exports.Types.isArmor(kind)) {
            callback(kind, kindName);
        }
    });
};
exports.Types.getOrientationAsString = function (orientation) {
    let normalized;
    switch (orientation) {
        case exports.Types.Orientations.LEFT:
            normalized = 'left';
            break;
        case exports.Types.Orientations.RIGHT:
            normalized = 'right';
            break;
        case exports.Types.Orientations.UP:
            normalized = 'up';
            break;
        case exports.Types.Orientations.DOWN:
            normalized = 'down';
            break;
    }
    return normalized;
};
exports.Types.getRandomItemKind = function (item) {
    var all = _.union(this.rankedWeapons, this.rankedArmors), forbidden = [exports.Types.Entities.SWORD1, exports.Types.Entities.CLOTHARMOR], itemKinds = _.difference(all, forbidden), i = Math.floor(Math.random() * _.size(itemKinds));
    return itemKinds[i];
};
exports.Types.getMessageTypeAsString = function (type) {
    var typeName;
    _.each(exports.Types.Messages, function (value, name) {
        if (value === type) {
            typeName = name;
        }
    });
    if (!typeName) {
        typeName = 'UNKNOWN';
    }
    return typeName;
};
