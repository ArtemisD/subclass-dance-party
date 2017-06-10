var mexinyan = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.name = 'mexinyan';
  this.rainbowWrap = $(
    '<div class="rainbow_wrap">\
    </div>\
  ');
  this.rainbowOne = $(
    '<div class="rainbow_one">\
      <div class="rainbow_top"></div>\
      <div class="rainbow_second_top"></div>\
      <div class="rainbow_middle_top"></div>\
      <div class="rainbow_second_bottom"></div>\
      <div class="rainbow_bottom"></div>\
    </div>\
  ');
  this.rainbowTwo = $(
    '<div class="rainbow_two">\
      <div class="rainbow_top"></div>\
      <div class="rainbow_second_top"></div>\
      <div class="rainbow_middle_top"></div>\
      <div class="rainbow_second_bottom"></div>\
      <div class="rainbow_bottom"></div>\
    </div>\
  ');
  this.rainbowThree = $(
    '<div class="rainbow_three">\
      <div class="rainbow_top"></div>\
      <div class="rainbow_second_top"></div>\
      <div class="rainbow_middle_top"></div>\
      <div class="rainbow_second_bottom"></div>\
      <div class="rainbow_bottom"></div>\
    </div>\
  ');
  this.rainbowFour = $(
    '<div class="rainbow_four">\
      <div class="rainbow_top"></div>\
      <div class="rainbow_second_top"></div>\
      <div class="rainbow_middle_top"></div>\
      <div class="rainbow_second_bottom"></div>\
      <div class="rainbow_bottom"></div>\
    </div>\
  ');
  this.rainbowFive = $(
    '<div class="rainbow_five">\
      <div class="rainbow_top"></div>\
      <div class="rainbow_second_top"></div>\
      <div class="rainbow_middle_top"></div>\
      <div class="rainbow_second_bottom"></div>\
      <div class="rainbow_bottom"></div>\
    </div>\
  ');
  this.nyanGif = $('<img class="nyan" src="src/mexinyan.gif"></img>');
  $(this.rainbowWrap).append(this.rainbowOne);
  $(this.rainbowWrap).append(this.rainbowTwo);
  $(this.rainbowWrap).append(this.rainbowThree);
  $(this.rainbowWrap).append(this.rainbowFour);
  $(this.rainbowWrap).append(this.rainbowFive);
};

mexinyan.prototype = Object.create(MakeDancer.prototype);
mexinyan.prototype.constructor = mexinyan;

mexinyan.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this);
  $(this.rainbowTwo).animate({
    top: '-=10',
  }, 100);
  $(this.rainbowThree).animate({
    top: '-=20',
  }, 100);
  $(this.rainbowFour).animate({
    top: '-=10',
  }, 100);

  $(this.rainbowTwo).animate({
    top: '+=10',
  }, 100);
  $(this.rainbowThree).animate({
    top: '+=20',
  }, 100);
  $(this.rainbowFour).animate({
    top: '+=10',
  }, 100);

  $(this.rainbowTwo).animate({
    top: '+=10',
  }, 100);
  $(this.rainbowThree).animate({
    top: '+=20',
  }, 100);
  $(this.rainbowFour).animate({
    top: '+=10',
  }, 100);

  $(this.rainbowTwo).animate({
    top: '-=10',
  }, 100);
  $(this.rainbowThree).animate({
    top: '-=20',
  }, 100);
  $(this.rainbowFour).animate({
    top: '-=10',
  }, 100);
};
