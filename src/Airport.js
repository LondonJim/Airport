function Airport (){
  this._hangar = [];
};

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this.isStormy() === false) {
    this._hangar.push(plane)
  }
  else {
    return 'stormy weather'
  };
};

Airport.prototype.clearForTakeoff = function(plane) {
  this._hangar.pop();
};

Airport.prototype.isStormy = function() {
  return Math.round((Math.random() * 1) + 0) === 0;
};
