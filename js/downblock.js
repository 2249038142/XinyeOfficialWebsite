var downBlock = document.getElementById('downBlock');
var out = document.querySelector('.select');
// 弹出下拉窗口
downBlock.onmouseover = function () {
    document.querySelector('.select').style.display = "block";
    setTimeout(() => {
        out.style.opacity = '1';
        out.style.transform = "translateY(0)"
    }, 0)

}
downBlock.onmouseout = function () {
    out.style.opacity = '0';
    out.style.transform = "translateY(50%)";
    document.querySelector('.select').style.display = 'none';


}
var out = document.querySelector('.select');
out.onmouseover = function () {
    document.querySelector('.select').style.display = "block";
    setTimeout(() => {
        out.style.opacity = '1';
        out.style.transform = "translateY(0)";
    }, 0)
}
out.onmouseout = function () {
    out.style.opacity = '0';
    out.style.transform = "translateY(50%)";
    document.querySelector('.select').style.display = 'none';
}