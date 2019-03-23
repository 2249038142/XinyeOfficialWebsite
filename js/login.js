var signUp = document.querySelector(".user_before").getElementsByTagName("a"),
    user = document.querySelector(".user"),
    userList = document.querySelector(".user-list"),
    formLogin = document.getElementById("form1"),
    formSign = document.getElementById("form2"),
    transSign = document.getElementById("getform2")
    //登陆
signUp[0].addEventListener("click", function(event) {
    user.classList.remove('hide');
    if (formLogin.className === 'hide') {
        formLogin.classList.remove('hide');
        formSign.classList.add('hide');
    }
    userList.style.height = '300px';
    event = event || window.event;
    event.stopPropagation();
}, false);
//注册

function signBox(el) {
    el.addEventListener("click", function(event) {
        userList.style.height = '350px';
        user.classList.remove('hide');
        formLogin.classList.add('hide');
        formSign.classList.remove('hide');
        event = event || window.event;
        event.stopPropagation();
    }, false);
}
signBox(signUp[1]);
signBox(transSign);
document.addEventListener("click", function() {
    user.classList.add('hide');
});
userList.addEventListener("click", function(event) {
    event = event || window.event;
    event.stopPropagation();
});
var tips = document.getElementsByClassName('tips');
//用户名验证
var nm = document.querySelector('.getusername');
nm.onblur = function() {
    var nmNum = nm.value;
    var re = /^\w{1,10}$/g;
    var rez = re.test(nmNum);
    if (rez == true) {
        tips[0].style.display = 'block';
        tips[0].innerHTML = '<img src="./imgs/正确选择.png" >';
    } else if (nmNum == '') {
        tips[0].style.display = 'block';
        tips[0].innerHTML = '用户名不能为空';
    } else {
        tips[0].style.display = 'block';
        tips[0].innerHTML = '用户名长度在10个字符以内';
    }
}


var pw1 = document.querySelector('.getpass');
pw1.onblur = function() {
    var pw1Num = pw1.value;
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/g; //密码必须有大小写字母和数字且6-20位
    var rez = re.test(pw1Num);
    if (rez == true) {
        tips[2].innerHTML = '<img src="./imgs/正确选择.png" >';
        tips[2].style.display = 'block';
    } else if (pw1Num == '') {
        tips[2].innerHTML = '密码不能为空';
        tips[2].style.display = 'block';
    } else {
        tips[2].innerHTML = '请输入6-20位密码(必须有大小写及数字)';
        tips[2].style.display = 'block';
    }
}

var yx = document.querySelector('.getEmail');
yx.onblur = function() {
    var yxads = yx.value;
    var reg = /^\w+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/g;
    var yxResult = reg.test(yxads);
    if (yxResult == true) {
        tips[1].style.display = 'block';
        tips[1].innerHTML = '<img src="./imgs/正确选择.png" >';
    } else if (yxads == '') {
        tips[1].style.display = 'block';
        tips[1].innerHTML = '请输入邮箱地址';
    } else {
        tips[1].style.display = 'block';
        tips[1].innerHTML = '格式不正确';
    }
}
var textC = document.querySelector(".getbutton1").getElementsByTagName('input')[0];
var textTime = null;
textC.onclick = function() {
    clearInterval(textTime); //这句话至关重要
    var time = 30;
    textTime = setInterval(function() {
        console.log(time);
        if (time <= 0) {
            textC.value = "重新发送";
            textC.disabled = false;

        } else {
            textC.disabled = true;
            textC.value = (time) + "秒";
            if (time > 0) { time--; }
        }
    }, 1000);
}
var getSignIn = document.querySelector("#getsubmit"),
    sucBox = document.querySelector(".loginSuc"),
    lasTime = sucBox.getElementsByTagName("em");

function showSuccess(e) {
    e.addEventListener("click", function() {
        if (e == getSignIn) {
            lasTime[0].innerText = "注册 ";
        }
        sucBox.classList.remove("hide");
        var time = 3;
        setInterval(function() {
            console.log(time);
            if (time <= 0) {
                sucBox.classList.add("hide");
            } else {
                lasTime[1].innerText = (time);
                if (time > 0) { time--; }
            }
        }, 1000);

    });
}
showSuccess(getSignIn);