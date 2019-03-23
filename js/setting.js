/* 时钟区域 */
var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function Scale(color) {
    //大圆
    ctx.beginPath();
    ctx.arc(75, 75, 70, 0, 2 * Math.PI, false);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.stroke();

    var hours = 12;
    var mins = 60;
    for (var i = 0; i < hours; i++) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.translate(75, 75);
        ctx.rotate((i * 30 * Math.PI) / 180);
        ctx.moveTo(-2, -65);
        ctx.lineTo(2, -65);
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.restore();
    }
    /*  for(var i=0;i<mins;i++){
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle="#c45b3f";
            ctx.translate(75,75);
            ctx.rotate(i*6*Math.PI/180);
            ctx.moveTo(-1,-65);
            ctx.lineTo(1,-65);
            ctx.stroke();
            ctx.restore();
        } */
    ctx.save();
    ctx.beginPath();
    ctx.beginPath();
    ctx.translate(75, 75);
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

function Needle(color) {
    /* var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes() + sec / 60;
    var hour = date.getHours() + min / 60;
    hour = hour > 12 ? hour - 12 : hour; */

    var sec = con;
    var min = con / 60;
    var hour = con / 3600;
    //时针
    ctx.save();
    ctx.beginPath();
    ctx.translate(75, 75);
    ctx.rotate((hour * 30 * Math.PI) / 180);
    ctx.strokeStyle = color;
    ctx.moveTo(0, -40);
    ctx.lineTo(0, 2);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();
    //分针
    ctx.save();
    ctx.beginPath();
    ctx.translate(75, 75);
    ctx.rotate((min * 6 * Math.PI) / 180);
    ctx.strokeStyle = color;
    ctx.moveTo(0, -55);
    ctx.lineTo(0, 2);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();

    //秒
    ctx.save();
    ctx.beginPath();
    ctx.translate(75, 75);
    ctx.rotate((sec * 6 * Math.PI) / 180);
    ctx.strokeStyle = color;
    ctx.moveTo(0, -65);
    ctx.lineTo(0, 2);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

}

Scale("#000");
Needle("#000");


var cBtn = document.querySelector(".button");
var sin = cBtn.getElementsByTagName('span');
var con = 0;
var acon=0;
var times = 24 * 60 * 60;
var timer = null;
var dtime = document.querySelector(".dtime");
var di = dtime.getElementsByTagName('i');

var wtime = document.querySelector('.wtime');
var wi = wtime.getElementsByTagName('i');

var date = new Date();
console.log(date.getDay());


cBtn.onclick = function () {

    if (sin[0].innerHTML == '签到') {
        sin[0].innerHTML = '退签';
        /* cBtn.style['background'] = 'url(../images/g-button.png)'; */
        cBtn.style.background = '#c45b3f';
        timer = setInterval(function () {
            con++;
            acon++;
            
            clear();
            Scale("#c45b3f");
            Needle("#c45b3f");

            di[0].innerHTML = parseInt(con / 3600);
            di[1].innerHTML = parseInt(con / 60) % 60;
            di[2].innerHTML = con % 60;
            for (var i = 0; i < di.length; i++) {
                if (parseInt(di[i].innerHTML) < 10) {
                    di[i].innerHTML = '0' + di[i].innerHTML;
                }
            }

            /* 总时间 */
            wi[0].innerHTML = parseInt(acon / 3600);
            wi[1].innerHTML = parseInt(acon / 60) % 60;
            wi[2].innerHTML = acon % 60;
            for (var i = 0; i < wi.length; i++) {
                if (parseInt(wi[i].innerHTML) < 10) {
                    wi[i].innerHTML = '0' + wi[i].innerHTML;
                }
            }

            /*  times--;
                if(times>0){
                var day=parseInt(timrs/(60*60*24));
                var hour=parseInt(times/(60*60));
                var minute=parseInt(times/60)-(hour*60);
                var second=parseInt(times)-(hour*60*60)-(minute*60);
            }
            if(hour<=9) hour='0'+hour;
            if(minute<=9) minute='0'+minute;
            if(second<=9) second='0'+second;

            wi[0].innerHTML=hour;
            wi[1].innerHTML=minute;
            wi[2].innerHTML=second; */

        }, 1000);
    } else {
        clearInterval(timer);
        sin[0].innerHTML = '签到';
        cBtn.style.background = '#49B675';
        Scale("#000");
        Needle("#000");
    }

}