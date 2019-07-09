var carNumber = "";
var lowPerson = "";

function onGetData() {
    var tableNode = document.getElementById("table");
    for (var i = tableNode.rows.length; i > 0; i--){
        tableNode.deleteRow(0);
    }

    var data = onLoadData();
    for (var i = 0; i < data.length; i++) {
        var trNode = tableNode.insertRow();
        var tdNode = trNode.insertCell();
        tdNode.innerHTML= data[i].name + "   " + data[i].age;
    }
}

function onInputCarNumber(str) {
    carNumber = str;
}

function onInputLowPerson(str) {
    lowPerson = str;
}


function onClickCheckCar() {
    
}
