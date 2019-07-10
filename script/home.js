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
    
}

function onClickCheckPerson() {
    
}
