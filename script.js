$(document).ready(function(){

var runda = 1;
var tablica = [];
var i = 0;
var j = 0;


    $("#play").click(function(){
        $("#landing-page").css("display","none");
        $("#game").css("display","flex");
        gra();
    });


    function gra(){
        
        if (j<runda)
        {
            if(j===0)
            {
                //alert("1");
                losuj();
                i=0;
                myLoop();
            }
        //alert("2");
        
        $("#red").off();
        $("#green").off();
        $("#blue").off();
        $("#yellow").off();
        $("#red").on("click",checkred);
        $("#green").on("click",checkgreen);
        $("#blue").on("click",checkblue);
        $("#yellow").on("click",checkyellow);
        
        }
        else if (j===runda)
        {
            $("#score").text(runda);
            //alert("3");
            j=0;
            runda++;
            gra();
        }
        
           
        

        
            
    }

    function checkred(){
        //alert("red");
        
        if(tablica[j]===0)
        {
           j++;
            gra();
        }
        else{
          location.reload();
        }
    }
    function checkgreen(){
        
        //alert("green");
        if(tablica[j]===2)
        {
          j++;
            gra();
        }
        else{
          location.reload();
        }
    }
    function checkblue(){
        
       // alert("blue");
        if(tablica[j]===1)
        {
           j++;
            gra();
        }
        else{
          location.reload();
        }
    }
    function checkyellow(){
        
        //alert("yellow");
        if(tablica[j]===3)
        {
             j++;
            gra();
        }
        else{
         location.reload();
        }
    }
    function losuj(){
        tablica.push(Math.floor(Math.random()*4))
    }

    function myLoop () {  
           
       setTimeout(function () {    
          if(tablica[i]==0)
          {
            shakered();
          }
          if(tablica[i]==1)
          {
              shakeblue();
          }
          if(tablica[i]==2)
          {
              shakegreen();
          }
          if(tablica[i]==3)
          {
              shakeyellow();
          }         
          i++;                     
          if (i < tablica.length) {            
             myLoop();             
          }                        
       }, 1000)
    }



    function shakered(){

        a = document.getElementById("red");
        x = a.className;
        a.className += " shakecolor";
    
        setTimeout(function(){
            a = document.getElementById("red");
            a.className = x;
        }, 500);
    }
    function shakeyellow(){
    
        a = document.getElementById("yellow");
        x = a.className;
        a.className += " shakecolor";
    
        setTimeout(function(){
            a = document.getElementById("yellow");
            a.className = x;
        }, 500);
    }
    function shakeblue(){
    
        a = document.getElementById("blue");
        x = a.className;
        a.className += " shakecolor";
    
        setTimeout(function(){
            a = document.getElementById("blue");
            a.className = x;
        }, 500);
    }
    function shakegreen(){
    
        a = document.getElementById("green");
        x = a.className;
        a.className += " shakecolor";
    
        setTimeout(function(){
            a = document.getElementById("green");
            a.className = x;
        }, 500);
    }
});