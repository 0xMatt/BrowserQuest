import {Types} from '../../shared/ts/gametypes';
import * as _ from 'lodash';
export const Messages = {
  Spawn: class {
    constructor(private entity) {
    }

    serialize() {
      return [Types.Messages.SPAWN].concat(this.entity.getState());
    }
  },
  Despawn: class {
    constructor(private entityId) {
    }

    serialize() {
      return [Types.Messages.DESPAWN, this.entityId];
    }
  },
  Move: class {
    constructor(private entity) {
    }

    serialize() {
      return [Types.Messages.MOVE,
        this.entity.id,
        this.entity.x,
        this.entity.y];
    }
  },
  LootMove: class {
    constructor(private entity, private item) {
    }

    serialize() {
      return [Types.Messages.LOOTMOVE,
        this.entity.id,
        this.item.id];
    }
  },
  Attack: class {
    constructor(private attackerId, private targetId) {
    }

    serialize() {
      return [Types.Messages.ATTACK,
        this.attackerId,
        this.targetId];
    }
  },
  Health: class {
    constructor(private points, private isRegen = false) {
    }

    serialize() {
      var health = [Types.Messages.HEALTH,
        this.points];

      if (this.isRegen) {
        health.push(1);
      }
      return health;
    }
  },
  HitPoints: class {
    constructor(private maxHitPoints) {
    }

    serialize() {
      return [Types.Messages.HP, this.maxHitPoints];
    }
  },
  EquipItem: class {
    playerId;
    constructor(private player, private itemKind) {
      this.playerId = player.id;
    }

    serialize() {
      return [Types.Messages.EQUIP,
        this.playerId,
        this.itemKind];
    }
  },
  Drop: class {
    constructor(private mob, private item) {
    }

    serialize() {
      var drop = [Types.Messages.DROP,
        this.mob.id,
        this.item.id,
        this.item.kind,
        _.pluck(this.mob.hatelist, 'id')];

      return drop;
    }
  },
  Chat: class {
    playerId;

    constructor(player, private message) {
      this.playerId = player.id;
    }

    serialize() {
      return [Types.Messages.CHAT,
        this.playerId,
        this.message];
    }
  },
  Teleport: class {
    constructor(private entity) {
    }

    serialize() {
      return [Types.Messages.TELEPORT,
        this.entity.id,
        this.entity.x,
        this.entity.y];
    }
  },

  Damage: class {
    constructor(private entity, private points) {
    }

    serialize() {
      return [Types.Messages.DAMAGE,
        this.entity.id,
        this.points];
    }
  },

  Population: class {
    constructor(private world, private total?) {
    }

    serialize() {
      // Hacked this
      // Made total prop optional
      // Added condition to fallbac to world count
      return [Types.Messages.POPULATION,
        this.world,
        this.total || this.world];
    }
  },

  Kill: class {
    constructor(private mob) {
    }

    serialize() {
      return [Types.Messages.KILL,
        this.mob.kind];
    }
  },

  List: class {
    constructor(private ids) {
    }

    serialize() {
      var list = this.ids;

      list.unshift(Types.Messages.LIST);
      return list;
    }
  },

  Destroy: class {
    constructor(private entity) {
    }

    serialize() {
      return [Types.Messages.DESTROY,
        this.entity.id];
    }
  },

  Blink: class {
    constructor(private item) {
    }

    serialize() {
      return [Types.Messages.BLINK,
        this.item.id];
    }
  }
};



