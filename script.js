$(document).ready(function(){
  $("input[name='calc']").click(function() {
    var might  = parseInt($("input[name='might']").val());
    var kills  = parseInt($("input[name='kills']").val());
    var stone  = parseInt($("input[name='stone']").val());
    var timber = parseInt($("input[name='timber']").val());
    var ore    = parseInt($("input[name='ore']").val());
    var helps  = parseInt($("input[name='helps']").val());
    
    var rss = stone + timber + ore;
    
    var res = might/5e6 + kills/1e6 + rss/25e6 + Math.max(0,(helps-5000)/5000);
    
    res = parseFloat(Math.round(res * 100) / 100).toFixed(2);
    
    res = "Your points: " + res
    
    $("#result").text(res);
  });
});
