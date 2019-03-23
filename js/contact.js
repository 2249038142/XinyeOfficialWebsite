/* document.querySelector(".btn").onclick=function(){

        var xhr=new XMLHttpRequest();
        xhr.open('post','xxxphp.php',true);

        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                console.log(xhr.responseText);
            }
        }

        
        var form=document.getElementById("user");
        xhr.send(new FormData(form));
    };
 */



var Map=document.querySelector(".Map");
var close=document.querySelector(".close");


document.querySelector(".amap").onclick = function () {
    Map.style.display = "block";
    close.style.display="block";
    var map = new BMap.Map("allmap"); // 创建Map实例 */
    // 百度地图API功能
    map.centerAndZoom(new BMap.Point(111.66588, 29.05204), 11); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    map.setCurrentCity("湖南省常德市武陵区"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    
}

close.onclick = function () {
    Map.style.display = "none";
    this.style.display = "none";
    
}
