
var userName = "";
var passWord = "";

function onLogin() {
    if (userName != "admin" || passWord != "admin") {
        alert('账号或密码错误！');
        return;
    }
    //document.write("userName = " + userName + ", passWord = " + passWord);

    window.location.href='../html/main.html';
}

function onInputUserName(str) {
    userName = str;
}

function onInputPassWord(str) {
    passWord = str;
}
