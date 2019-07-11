function onShowBreakRuleData() {
    var data = onLoadBreakData();

    var tableNode = document.getElementById("breakRuleDisplay");
    for (var i = tableNode.rows.length; i > 0; i--){
        tableNode.deleteRow(0);
    }
    for (var i = 0; i < data.length; i++){
        tableNode.insertRow();
    }
    for (var i = 0; i < tableNode.rows.length; i++){
        var row = tableNode.rows[i];
        
        var elem1 = row.insertCell();
        elem1.innerHTML = data[i].date;
        var elem2 = row.insertCell();
        elem2.innerHTML = data[i].place;
        var elem3 = row.insertCell();
        elem3.innerHTML = data[i].money;
    }
}

function onShowPersonData() {
    var data = onLoadPersonData();

    var tableData = "";
    for (var i = 0; i < data.length; i++) {
        tableData += "<tr>";
        tableData += "<td class=\"presonItem\">" + data[i].name + "</td>";
        tableData += "</tr>";
    }
    
    $("#personDisplay").html(tableData);
}