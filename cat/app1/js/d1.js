       window.onload = function(){
          (function(){
            var oCon = document.getElementById('con');
            var oDays = document.getElementById('days');
            document.onscroll = function () {
            
            var t = document.documentElement.scrollTop;
            if (t > 200) {
                oDays.style.position = 'fixed';
                oDays.style.top = 0;
                oDays.style.left = 0;
                oCon.style.position = 'fixed';
                oCon.style.top = '44px';
                oCon.style.left = 0;
            } else {
                oDays.style.position = "static";
                oCon.style.position = 'static';
            }}

            document.ontouchmove = function(e){
                var oBom = document.getElementById('bottom');
                var touch = e.touches[0];
                var x = Number(touch.clientX);
                var y = Number(touch.clientY);
                console.log("当前触摸点的横坐标"+x+"当前触摸点的纵坐标"+y);
            
                if(this.ontouchmove){
                    oBom.style.display="none";
                    console.log(event)
                document.ontouchend = function(){
                     if(this.ontouchend){
                    oBom.style.display="block"
                }
                };
                
                   
                
                
            }
            };
                
          })();
       }
            

           

        
        
            
        