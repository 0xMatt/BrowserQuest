import {Types} from '../../../shared/ts/gametypes';

export class Entity {

  id;
  kind;
  name;
  x = 0;
  y = 0;
  gridX;
  gridY;

  // Renderer
  sprite = null;
  flipSpriteX = false;
  flipSpriteY = false;
  animations = null;
  currentAnimation = null;
  shadowOffsetY = 0;

  // Modes
  isLoaded = false;
  isHighlighted = false;
  visible = true;
  isFading = false;

  normalSprite
  hurtSprite;

  ready_func;
  isDirty;
  dirty_callback;
  blinking;
  startFadingTime;

  constructor(id, kind) {
    this.id = id;
    this.kind = kind;


    // Position
    this.setDirty();
  }

  setName(name) {
    this.name = name;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setGridPosition(x, y) {
    this.gridX = x;
    this.gridY = y;

    this.setPosition(x * 16, y * 16);
  }

  setSprite(sprite) {
    if (!sprite) {
      console.error(this.id + ' : sprite is null', true);
      throw 'Error';
    }

    if (this.sprite && this.sprite.name === sprite.name) {
      return;
    }

    this.sprite = sprite;
    this.normalSprite = this.sprite;

    if (Types.isMob(this.kind) || Types.isPlayer(this.kind)) {
      this.hurtSprite = sprite.getHurtSprite();
    }

    this.animations = sprite.createAnimations();

    this.isLoaded = true;
    if (this.ready_func) {
      this.ready_func();
    }
  }

  getSprite() {
    return this.sprite;
  }

  getSpriteName() {
    return Types.getKindAsString(this.kind);
  }

  getAnimationByName(name) {
    var animation = null;

    if (name in this.animations) {
      animation = this.animations[name];
    }
    else {
      console.error('No animation called ' + name);
    }
    return animation;
  }

  setAnimation(name, speed, count, onEndCount) {
    var self = this;

    if (this.isLoaded) {
      if (this.currentAnimation && this.currentAnimation.name === name) {
        return;
      }

      var s = this.sprite,
        a = this.getAnimationByName(name);

      if (a) {
        this.currentAnimation = a;
        if (name.substr(0, 3) === 'atk') {
          this.currentAnimation.reset();
        }
        this.currentAnimation.setSpeed(speed);
        this.currentAnimation.setCount(count ? count : 0, onEndCount || function () {
          self.idle();
        });
      }
    }
    else {
      this.log_error('Not ready for animation');
    }
  }

  hasShadow() {
    return false;
  }

  ready(f) {
    this.ready_func = f;
  }

  clean() {
    this.stopBlinking();
  }

  idle() {

  }

  log_info(message) {
    console.info('[' + this.id + '] ' + message);
  }

  log_error(message) {
    console.error('[' + this.id + '] ' + message);
  }

  setHighlight(value) {
    if (value === true) {
      this.sprite = this.sprite.silhouetteSprite;
      this.isHighlighted = true;
    }
    else {
      this.sprite = this.normalSprite;
      this.isHighlighted = false;
    }
  }

  setVisible(value) {
    this.visible = value;
  }

  isVisible() {
    return this.visible;
  }

  toggleVisibility() {
    if (this.visible) {
      this.setVisible(false);
    } else {
      this.setVisible(true);
    }
  }

  /**
   *
   */
  getDistanceToEntity(entity) {
    var distX = Math.abs(entity.gridX - this.gridX);
    var distY = Math.abs(entity.gridY - this.gridY);

    return (distX > distY) ? distX : distY;
  }

  isCloseTo(entity) {
    var dx, dy, d, close = false;
    if (entity) {
      dx = Math.abs(entity.gridX - this.gridX);
      dy = Math.abs(entity.gridY - this.gridY);

      if (dx < 30 && dy < 14) {
        close = true;
      }
    }
    return close;
  }

  /**
   * Returns true if the entity is adjacent to the given one.
   * @returns {Boolean} Whether these two entities are adjacent.
   */
  isAdjacent(entity) {
    var adjacent = false;

    if (entity) {
      adjacent = this.getDistanceToEntity(entity) > 1 ? false : true;
    }
    return adjacent;
  }

  /**
   *
   */
  isAdjacentNonDiagonal(entity) {
    var result = false;

    if (this.isAdjacent(entity) && !(this.gridX !== entity.gridX && this.gridY !== entity.gridY)) {
      result = true;
    }

    return result;
  }

  isDiagonallyAdjacent(entity) {
    return this.isAdjacent(entity) && !this.isAdjacentNonDiagonal(entity);
  }

  forEachAdjacentNonDiagonalPosition(callback) {
    callback(this.gridX - 1, this.gridY, Types.Orientations.LEFT);
    callback(this.gridX, this.gridY - 1, Types.Orientations.UP);
    callback(this.gridX + 1, this.gridY, Types.Orientations.RIGHT);
    callback(this.gridX, this.gridY + 1, Types.Orientations.DOWN);

  }

  fadeIn(currentTime) {
    this.isFading = true;
    this.startFadingTime = currentTime;
  }

  blink(speed, callback) {
    var self = this;

    this.blinking = setInterval(function () {
      self.toggleVisibility();
    }, speed);
  }

  stopBlinking() {
    if (this.blinking) {
      clearInterval(this.blinking);
    }
    this.setVisible(true);
  }

  setDirty() {
    this.isDirty = true;
    if (this.dirty_callback) {
      this.dirty_callback(this);
    }
  }

  onDirty(dirty_callback) {
    this.dirty_callback = dirty_callback;
  }
}
