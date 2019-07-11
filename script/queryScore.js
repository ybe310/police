
function onShowScoreData() {
    var data = onLoadScoreData();

    var tableNode = document.getElementById("scoreDisplay");
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
        var elem3 = row.insertCell();
        elem3.innerHTML = data[i].date;
        var elem4 = row.insertCell();
        elem4.innerHTML = data[i].driverLicense;
        var elem5 = row.insertCell();
        elem5.innerHTML = data[i].scoreChange;
        var elem6 = row.insertCell();
        elem6.innerHTML = data[i].desc;
    }
}