(function ($) {
  // mude o link aqui
  //var LINK1 = 'http://combateaedes.saude.gov.br/';
  //var LINK2 = 'http://combateaedes.saude.gov.br/';
  //var LINK3 = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

 
  //
  // Sai Zica - Obrigado Governo Federal
  // aedes aegypti: sou brasileiro e nao desisto nunca
  //
  var Sai_Zica = "Obrigado Governo Federal";
  var aedes_aegypti = "sou brasileiro e nao desisto nunca";


  $(window).ready(function() {
    $('head').append('<style type="text/css">.flipAE { transform: scaleX(-1); } @media (min-width: 940px) { body #aegypti-intervencao #aegypti-close { width: 42px; height: 42px; margin-left: 348px; top: 42px; left: 50%; } } #aegypti-intervencao { width: 100%; margin-top: -140px; position: fixed; top: 50%; text-align: center; } #aegypti-intervencao #aegypti-banner:focus { outline: none !important; } #aegypti-intervencao #aegypti-close { width: 4.4%; height: 12%; display: block; position: absolute; top: 12.4%; left: 87.2%; overflow: hidden; text-indent: -999999px; } #aegypti-intervencao img { width: 100%; max-width: 939px; } div#aegypti-voo { position: absolute; z-index:9999; top: -300px; left: 0px; height:300px; width:70%; } .aegypti { display: block; position:fixed; width: 60px; height: 50px; margin: 2% auto; cursor:url("https://www.brasil.gov.br/mata_moscas.cur"), default; background: url("data:image/png;base64,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") left center; animation: play .2s steps(6) infinite; z-index: 10; } @keyframes play { 100% { background-position: -360px; } } .rotateAE { animation: playRotate .3s steps(4) infinite; } @keyframes playRotate { 100% { background-position: 240px; } }</style>');
    $(document).ready(function() {
      var aegyptiContent = '<div id="aegypti-voo"><a href="#" target="_blank" class="aegypti"></a><a href="#" target="_blank" class="aegypti"></a><a href="#" target="_blank" class="aegypti"></a></div>';
      $('#barra-brasil').length ? $(aegyptiContent).insertAfter($('#barra-brasil')) : $(document.body).prepend($(aegyptiContent));

      $('.aegypti').each(function(num, el) {
        $el = $(el);
        $parent = $el.parent();
        // Randomize start point:
        $(el).css({
          top: $parent.height() * Math.random() + 'px'
        });
        animateAedes($(el));
      });
    });
  });

  function makeNewPosition($container) {
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return {
      left: nw,
      top: nh
    };
  }

  function animateAedes($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var origAngle = $target[0].angle || 0;
    var angle = ((Math.atan2(newq.top - oldq.top, newq.left - oldq.left) / Math.PI) * 180) - 90;

    // .flipAE é animaç no sentido contrario, usar somente .aegypti énimaç sentido normal
    // .rotateAE sã4 frames para rotaç, deve reproduzir somente no limite/retorno 
    for (var step = 0; step <= 1; step += .1) {
      setTimeout(function() {
        $target.removeClass('aegypti flipAE').addClass('aegypti')
      }, 50 * step);
      (function(stepAngle) {
        setTimeout(function() {
          $target.removeClass('aegypti rotateAE').addClass('aegypti flipAE')
        }, 50 * step);
      })($target.removeClass('aegypti flipAE').addClass('aegypti rotateAE'), 300 * step);
    }

    var speed = calcSpeed(oldq, newq);

    $target.animate({
      left: newq.left,
      top: newq.top
    }, speed, function() {
      setTimeout(function() {
        animateAedes($target)
      }, 500);
    });
  }

  function calcSpeed(prev, next) {
    var x = Math.abs(prev.left - next.left);
    var y = Math.abs(prev.top - next.top);
    var dist = Math.sqrt(x * x + y * y);

    return Math.log(dist / 10 + 1) * 900;
  }

}(jQuery));

