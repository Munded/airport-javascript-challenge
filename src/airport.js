var Airport = function(){
  this.terminal = [];
};

Airport.prototype.land = function(plane) {
  this.terminal = [plane];
};