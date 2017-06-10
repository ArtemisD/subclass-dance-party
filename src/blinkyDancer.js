var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).append($('<img class="nyan" src="src/technyancolor.gif"></img>'));
  this.name = 'nyancat';
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
