$(window).ready(function() {
  var center = {
    x: Math.floor(window.innerWidth / 2),
    y: Math.floor(window.innerHeight / 2)
  }

  var r = Snap("#rectangle")
  var rect = r.rect(650, 200, 400, 600)
  rect.attr({
    fill: "rgba(236, 240, 241, 0)",
    stroke: "#2c308c",
    strokeWidth: 15
  })

  var c = Snap("#circle");
  var circle = c.circle(1125, 275, 20);
  circle.attr({
    fill: "rgba(236, 240, 241, 0)",
    stroke: "#dfdfe4",
    strokeWidth: 5
  });

  var l = Snap("#line");
  var line = l.rect(675, 250, 100, 0.5);
  line.attr({
    fill: "rgba(236, 240, 241, 0)",
    stroke: "#dfdfe4",
    strokeWidth: 5
  });

  var t = Snap("#text");
  var text = t.text(500, 750, ["INSPIRED BY BIOLOGY AND ENGINEERING."]);
  text.selectAll("tspan").attr({
    fill: "#bcbcc2",
    "font-weight": "500",
    "font-family": "Work Sans",
    "font-size": "32px"
  });
})

$(window).mousemove(function() {
  var currentMousePos = {
    x: -1,
    y: -1
  };

  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;

  $('.title').css({
    'transform': 'translate(' + -currentMousePos.x / 1400 + '%, ' +
      -currentMousePos.y / 30 + '%)'
  })

  $('#rectangle').css({
    'transform': 'translate(' + -currentMousePos.x / 2000 + '%, ' +
      currentMousePos.y / 1000 + '%)'
  })

  $('#circle').css({
    'transform': 'translate(' + -currentMousePos.x / 5000 + '%, ' +
      currentMousePos.y / 2000 + '%)'
  })

  $('#line').css({
    'transform': 'translate(' + -currentMousePos.x / 5000 + '%, ' +
      -currentMousePos.y / 5000 + '%)'
  })

  $('#text').css({
    'transform': 'translate(' + currentMousePos.x / 800 + '%, ' +
      -currentMousePos.y / 300 + '%)'
  })
})

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  console.log(wScroll)

  $('.profile').css({
    'transform': 'translate(0px, ' + -(wScroll - 800) / 15 + '%)'
  })
})
