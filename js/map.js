//利用沙箱保护数据
(function(w){
  function Map(option){
    this.color = option.color || "gray";
    this.col = option.col || 30;
    this.row = option.row || 20;
    this.size = option.size || 25;
    this.map = null;
  }
  Map.prototype={
    //渲染功能
    render:function(){
      //动态创建div
      var map = document.createElement("div");
      this.map = map;
      map.style.backgroundColor=this.color;
      map.style.height=this.row*this.size+"px";
      map.style.width=this.col*this.size+"px";
      map.style.position="relative";
      w.document.body.appendChild(map);
    }
  }
  w.Map = Map;
})(window);
