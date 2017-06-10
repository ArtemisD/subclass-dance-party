$(document).ready(function() {
  window.dancers = [];

  $('.lineUpNyancats').on('click', function(event) {
    for (var i of window.dancers) {
      i.setPosition(100, i.left);
    }
  });

  $('.lineDance').on('click', function(event) {
    var nyancats = [];
    var mexinyans = [];
    var pikanyans = [];
    for (var i of window.dancers) {
      if (i.name === 'nyancat') {
        nyancats.push(i);
      } else if (i.name === 'mexinyan') {
        mexinyans.push(i);
      } else if (i.name === 'pikanyan') {
        pikanyans.push(i);
      }
    }
    // line up three different cats on different height position
    for (let i of nyancats) {
      i.setPosition(100, i.left);
    }
    for (let i of mexinyans) {
      i.setPosition(300, i.left);
    }
    for (let i of pikanyans) {
      i.setPosition(500, i.left);
    }
  });

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(this);
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addPikanyanButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new pikanyan(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    $(dancer.$node[0]).append(dancer.rainbowWrap);
    $(dancer.$node[0]).append(dancer.nyanGif);
    window.dancers.push(dancer);
  });

  $('.addMexinyanButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new mexinyan(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    $(dancer.$node[0]).append(dancer.rainbowWrap);
    $(dancer.$node[0]).append(dancer.nyanGif);
    window.dancers.push(dancer);
  });

});
