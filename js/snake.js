/**
 * Created by ThinkPad User on 2017/8/21.
 */
(function(w){
  function Snake(option){
    this.color=option.color||"pink";
    this.x=0;
    this.y=0;
    this.direction=option.direction || "left";
    this.size=option.size || 25;
    this.map=option.map;
    this.body=[
      {x:10,y:10},
      {x:11,y:10},
      {x:12,y:10},
      {x:13,y:10},
    ]
  }
  Snake.prototype={
    //先渲染蛇
    render:function(){
      this.move();
      for (var i = 0; i < this.body.length; i++) {
        var snakes = document.createElement("div");
        var obj=this.body[i];
        snakes.style.backgroundColor="white";
        if(i%2==0){
          snakes.style.backgroundColor="black";
        }
        if(i==0){
          snakes.style.boxShadow="-2px -2px 1px gold";
        }
        snakes.style.width=this.size+"px";
        snakes.style.height=this.size+"px";
        snakes.style.position="absolute";
        snakes.style.left=obj.x*this.size+"px";
        snakes.style.top=obj.y*this.size+"px";
        snakes.style.borderRadius="50%";
        this.map.map.appendChild(snakes);
      }
    },
    //让蛇运动
    move:function(){
      //蛇的身体先运动，然后头部再运动
      for (var i = this.body.length-1; i>0 ; i--) {
        var obj = this.body;
        obj[i].x=obj[i-1].x;
        obj[i].y=obj[i-1].y;
      }
      var head = this.body[0];
      switch(this.direction){
        case "left":
          head.x -= 1;
          break;
        case "right":
          head.x += 1;
          break;
        case "up":
          head.y -= 1;
          break;
        case "down":
          head.y += 1;
          break;
      }
    },
    //让蛇吃食物
    eat:function(){
      var last = this.body[this.body.length-1];
      var s = {
        x:last.x,
        y:last.y
      }
      this.body.push(s);
    }
  }
  w.Snake=Snake;
})(window)