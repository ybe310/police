

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
    array[1] = {name:"王俊凯" ,number:"津A88888"};
	array[2] = { name: "王凯俊", number:"津77777" };
	array[3] = { name: "王帅凯", number:"津A99999" };

    return array;
}