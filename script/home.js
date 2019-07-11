var carNumber = "";
var lowPerson = "";

function onGetData() {
    var data = onLoadData();

    var tableNode = document.getElementById("table");
    for (var i = tableNode.rows.length; i > 0; i--){
        tableNode.deleteRow(0);
    }
    for (var i = 0; i < data.length; i++){
        tableNode.insertRow();
    }
    for (var i = 0; i < tableNode.rows.length; i++){
        var row = tableNode.rows[i];
        
        var elem1 = row.insertCell();
        elem1.innerHTML = data[i].name;
        var elem2 = row.insertCell();
        elem2.innerHTML = data[i].number;
    }
}

function onInputCarNumber(str) {
    carNumber = str;
}

function onInputLowPerson(str) {
    lowPerson = str;
}


function onClickCheckCar() {
    if (carNumber == "") {
        alert('输入有误！');
        return;
    }
    window.location.href='../html/breakRuleInfo.html';
}

function onClickCheckPerson() {
    if (lowPerson == "") {
        alert('输入有误！');
        return;
    }
    window.location.href='../html/queryScore.html';
}
