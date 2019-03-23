var head = document.getElementById('head');
var composition = document.querySelector('.composition');
var cBlock = document.querySelector('.c_block');

window.onscroll = function() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop > 700) {
        composition.style.marginTop = "50px";
        cBlock.style.opacity = '1';
    }
    if (scrollTop < 700) {
        composition.style.marginTop = "200px";
        cBlock.style.opacity = '0';
    }

}