class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(sqrt) {
    this._sqrt = sqrt;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
