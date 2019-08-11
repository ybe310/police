

function onSendRequest(method, url, func)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if (func != null) {
                func(xmlhttp);
            }
		}
	}
	xmlhttp.open(method,url,true);
	xmlhttp.send();
}

function onLoadData()
{
    var array = new Array();
    array[0] = {name:"王凯" ,number:"津KAL232"};
    array[1] = {name:"张某某" ,number:"津B32321"};
	array[2] = { name: "陈某某", number:"津CB1231" };
	array[3] = { name: "刘某", number:"津DQC23" };
	array[4] = { name: "宋某某", number:"津DQC233" };
	array[5] = { name: "王某某", number:"津AZQC233" };
	array[6] = { name: "刘某某", number:"津BU4331" };
	array[7] = { name: "张某", number:"津E35336" };
	array[8] = { name: "寇某某", number:"津NQC233" };

    return array;
}

function onLoadScoreData()
{
	var array = new Array();
	array[0] = {name:"姓名" ,number:"涉嫌违章车牌照号",date:"时间", driverLicense:"驾照号",scoreChange:"积分变化",desc:"具体情况"};
    array[1] = {name:"王凯" ,number:"津B3232",date:"2019年7月10日", driverLicense:"1234567890",scoreChange:"0",desc:"违章停车"};
    array[2] = {name:"张某某" ,number:"津B32321",date:"2019年7月11日", driverLicense:"6666666666",scoreChange:"-2",desc:"压线"};
	array[3] = {name: "陈某某", number:"津C1231" ,date:"2019年7月12日", driverLicense:"888888888",scoreChange:"-6",desc:"闯红灯"};
	array[4] = {name: "刘某", number:"津DQC233" ,date:"2019年7月13日", driverLicense:"2222222222",scoreChange:"-6",desc:"未按规定系安全带"};

    return array;
}

function onLoadBreakData()
{
	var array = new Array();
	array[0] = {date:"时间", place:"地点",money:"罚款金额"};
    array[1] = {date:"2019年7月10日", place:"五大道",money:"200"};
    array[2] = {date:"2019年7月11日", place:"和平路",money:"600"};
	array[3] = {date:"2019年7月12日", place:"营口道",money:"1000"};
	array[4] = {date:"2019年7月13日", place:"梅江会展中心",money:"100"};

    return array;
}

function onLoadPersonData()
{
	var array = new Array();
	array[0] = {name:"王凯"};
    array[1] = {name:"陈某"};
	array[2] = { name: "寇某某"};
	array[3] = { name: "李某某"};

    return array;
}