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
		return '东方';
	case 8:
		return '怒怒';
	case 16:
		return '果果';
	case 32:
		return '小鱼';
	case 64:
		return '妖';
	case 128:
		return '神';
	default:
		return '人';
  }
};
