window.onload = function(){
    
      
    var move = document.getElementById("button");
    move.onclick = function() {
        function randomInteger(min, max) {
            var rand = min + Math.random() * (max - min)
            rand = Math.round(rand);
            return rand;
          }
      var l = randomInteger(0, 1000);
      var top = randomInteger(0, 1000);
      var b = randomInteger(0, 1000);
      var r = randomInteger(0, 1000);
      console.log( l, top, b, r);
      this.style.left = l+'px';
      this.style.top =  top+'px';
      this.style.right = r+'px';
        this.style.bottom =  b+'px';
      };
    
     
}

