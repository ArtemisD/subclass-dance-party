var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.name = "dancer";
  this.top = top;
  this.left = left;
  $(this.$node).on('click', function(e) {
    $(this).toggle("explode");
  });
};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  var that = this;
  setTimeout(function() {
    that.step();
  }, this._timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  $(this.$node).animate({
    top: top,
    left: left
  }, 900);
};
