/**
 * Created by ThinkPad User on 2017/8/21.
 */
(function(w){
  function Food(option){
    this.color = option.color ||"pink";
    this.size = option.size || 25;
    this.x = 0;
    this.y = 0;
    this.map = option.map;
   this.setPos();
  }
  //先生成食物
  Food.prototype.render = function(){
    var food = document.createElement("div");
    food.style.backgroundImage="url(images/food.PNG)";
    food.style.backgroundSize="25px 25px";
    food.style.borderRadius="50%";
    food.style.position="absolute";
    food.style.height=this.size+"px";
    food.style.width=this.size+"px";
    food.style.left=this.x*this.size+"px";
    food.style.top=this.y*this.size+"px";
    this.map.map.appendChild(food);
  }
  //再设置食物的随机位置
  Food.prototype.setPos=function() {
      this.x=parseInt(Math.random()*this.map.col);
      this.y=parseInt(Math.random()*this.map.row);
  }
  w.Food = Food;
})(window)