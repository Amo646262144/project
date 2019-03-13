
var oCon = document.getElementById('con');
var oDays = document.getElementById('days')

    document.onscroll=function(){
        // var oCon = document.getElementById('con');
        // var oDays = document.getElementById('days')
        var t=document.documentElement.scrollTop;
        if(t>200){
        oDays.style.position = 'fixed';
        oDays.style.top = 0;
        oDays.style.left = 0;
        oCon.style.position = 'fixed';
        oCon.style.top = '44px';
        oCon.style.left = 0;
        }else{
            oDays.style.position="static";
            oCon.style.position='static';
        }
        console.log(t);
        
    }
