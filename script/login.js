
var userName = "";
var passWord = "";

function onLogin() {
    if (userName == "" || passWord == "") {
        alert('输入有误！');
        return;
    }
    //document.write("userName = " + userName + ", passWord = " + passWord);

    window.location.href='../html/home.html';
}

function onInputUserName(str) {
    userName = str;
}

function onInputPassWord(str) {
    passWord = str;
}
