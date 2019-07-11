

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
    array[0] = {name:"王凯" ,number:"津A66666"};
    array[1] = {name:"王俊凯" ,number:"津B88888"};
	array[2] = { name: "王凯俊", number:"津C77777" };
	array[3] = { name: "王帅凯", number:"津D99999" };

    return array;
}

function onLoadScoreData()
{
	var array = new Array();
	array[0] = {name:"姓名" ,number:"涉嫌违章车牌照号",date:"时间", driverLicense:"驾照号",scoreChange:"积分变化",desc:"具体情况"};
    array[1] = {name:"王凯" ,number:"津A66666",date:"2019年7月10日", driverLicense:"1234567890",scoreChange:"0",desc:"违章停车"};
    array[2] = {name:"王俊凯" ,number:"津B88888",date:"2019年7月11日", driverLicense:"6666666666",scoreChange:"-2",desc:"压线"};
	array[3] = {name: "王凯俊", number:"津C77777" ,date:"2019年7月12日", driverLicense:"888888888",scoreChange:"-6",desc:"闯红灯"};
	array[4] = {name: "王帅凯", number:"津D99999" ,date:"2019年7月13日", driverLicense:"2222222222",scoreChange:"-6",desc:"未按规定系安全带"};

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
    array[1] = {name:"王俊凯"};
	array[2] = { name: "易烊千玺"};
	array[3] = { name: "迪丽热巴"};

    return array;
}