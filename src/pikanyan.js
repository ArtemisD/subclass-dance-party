var pikanyan = function(top, left, timeBetweenSteps) {
  mexinyan.call(this, top, left, timeBetweenSteps);
  this.name = 'pikanyan';
  this.nyanGif = $('<img class="nyan" src="src/pikanyan.gif"></img>');
  var filterVal = 'invert(100%)';
  $(this.rainbowWrap).css('filter', filterVal);
};

pikanyan.prototype = Object.create(mexinyan.prototype);
pikanyan.prototype.constructor = pikanyan;

pikanyan.prototype.step = function(timeBetweenSteps) {
  mexinyan.prototype.step.call(this);
};
