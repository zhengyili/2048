function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

Tile.prototype.title = function () {
  switch (this.value)
  {
	case 2:
		return '雯雯';
	case 4:
		return '果果';
	case 8:
		return '小鱼';
	case 16:
		return '星星';
	case 32:
		return '冷漠';
	case 64:
		return '絮繁';
	case 128:
		return '菜菜';
	case 256:
		return '怒怒';
	case 512:
		return '东方';
	case 1024:
		return '百越';
	case 2048:
		return '江南';
	case 4096:
		return '女人香';
	case 8192:
		return '妖';
	case 16384:
		return '神';
	default:
		return '人';
  }
};
