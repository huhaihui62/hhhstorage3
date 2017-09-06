/**
 * Created by ThinkPad User on 2017/8/21.
 */
(function(w){

  function Director(){
    this.map = new Map({color:"gray"});
    this.food = new Food({map:this.map});
    this.snake = new Snake({map:this.map});
    this.timer = null;
  }
  Director.prototype = {
    gameStart:function(){
      this.map.render();
      this.userHandle();
      var _this=this;
      this.timer=setInterval(function(){
        _this.map.map.innerHTML = "";
        _this.render();
        _this.impact();
        _this.gameOver();
      },500)
    },
    render:function(){
      this.food.render();
      this.snake.render();
    },
    impact:function(){
      var head = this.snake.body[0];
      if(head.x==this.food.x && head.y==this.food.y){
        this.snake.eat();
        this.food.setPos();
      }
    },
    userHandle:function(){
      var _this=this;
      window.onkeydown = function (e) {
        var code = e.keyCode;
//        console.log(code)
        switch (code) {
          case 37:
            _this.snake.direction = "left";
            break;
          case 38:
            _this.snake.direction = "up";
            break;
          case 39:
            _this.snake.direction="right";
            break;
          case 40:
            _this.snake.direction="down";
            break;
        }
      }
    },
    gameOver:function(){
      var head = this.snake.body[0]; //ÉßÍ·
      if (head.x < 0 || head.y < 0 || head.x > this.map.col - 1 || head.y > this.map.row - 1) {
        clearInterval(this.timer);
        alert("gameOver !");
      }
    }
  }
  w.Director = Director;
})(window)