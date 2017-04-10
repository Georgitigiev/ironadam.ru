//прелоадер для сайта, то есть будет идти анимация пока грузиться сайт
function preload () {
    var deg = 0;
        setInterval(function () {
            deg=deg-5;
            $('.preload div').css({"transform":"rotate("+deg+"deg)"});
        },30)
}
preload();
var callback = function(){
     $('.preload').css({"transition":"1s all","opacity":"0"});
     setTimeout(function(){
         $('.preload').remove();	
     },3000)
     
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}
//прелоадер для сайта, то есть будет идти анимация пока грузиться сайт