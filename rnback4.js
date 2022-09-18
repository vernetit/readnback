__arrayColors=["Blue","Brown","Red","Green","Yellow","Purple","Gray"];
arrayColors=["rgb(0,0,255)","rgb(165,42,42)","rgb(255,0,0)","rgb(0,128,0)","rgb(216, 242, 24)","rgb(128,0,128)","rgb(128,128,128)"];

//christian Faur
abc2 = {
'a' : 'rgb(0,0,180)','A' : 'rgb(0,0,180)','á' : 'rgb(0,0,180)','Á' : 'rgb(0,0,180)','b' : 'rgb(175,13,102)','B' : 'rgb(175,13,102)','c' : 'rgb(146,248,70)','C' : 'rgb(146,248,70)','d' : 'rgb(255,200,47)','D' : 'rgb(255,200,47)','e' : 'rgb(255,118,0)','E' : 'rgb(255,118,0)','é' : 'rgb(255,118,0)','É' : 'rgb(255,118,0)','f' : 'rgb(185,185,185)','F' : 'rgb(185,185,185)','g' : 'rgb(235,235,222)','G' : 'rgb(235,235,222)','h' : 'rgb(100,100,100)','H' : 'rgb(100,100,100)','i' : 'rgb(255,255,0)','I' : 'rgb(255,255,0)','í' : 'rgb(255,255,0)','Í' : 'rgb(255,255,0)','j' : 'rgb(55,19,112)','J' : 'rgb(55,19,112)','k' : 'rgb(255,255,150) ','K' : 'rgb(255,255,150) ','l' : 'rgb(202,62,94)','L' : 'rgb(202,62,94)','m' : 'rgb(205,145,63)','M' : 'rgb(205,145,63)','n' : 'rgb(12,75,100)','N' : 'rgb(12,75,100)','ñ' : 'rgb(12,75,100)','ñ' : 'rgb(12,75,100)','o' : 'rgb(255,0,0)','O' : 'rgb(255,0,0)','ó' : 'rgb(255,0,0)','Ó' : 'rgb(255,0,0)','p' : 'rgb(175,155,50)','P' : 'rgb(175,155,50)','q' : 'rgb(185,185,185)','Q' : 'rgb(185,185,185)','r' : 'rgb(37,70,25)','R' : 'rgb(37,70,25)','s' : 'rgb(121,33,135)','S' : 'rgb(121,33,135)','t' : 'rgb(83,140,208)','T' : 'rgb(83,140,208)','u' : 'rgb(0,154,37)','U' : 'rgb(0,154,37)','ú' : 'rgb(0,154,37)','Ú' : 'rgb(0,154,37)','v' : 'rgb(178,220,205)','V' : 'rgb(178,220,205)','w' : 'rgb(255,152,213)','W' : 'rgb(255,152,213)','x' : 'rgb(0,0,74)','X' : 'rgb(0,0,74)','y' : 'rgb(175,200,74)','Y' : 'rgb(175,200,74)','z' : 'rgb(63,25,12)','Z' : 'rgb(63,25,12)','0' : 'rgb(0,0,180)','0' : 'rgb(0,0,180)','1' : 'rgb(175,13,102)','1' : 'rgb(175,13,102)','2' : 'rgb(146,248,70)','2' : 'rgb(146,248,70)','3' : 'rgb(255,200,47)','3' : 'rgb(255,200,47)','4' : 'rgb(255,118,0)','4' : 'rgb(255,118,0)','5' : 'rgb(255,152,213)','5' : 'rgb(255,152,213)','6' : 'rgb(235,235,222)','6' : 'rgb(235,235,222)','7' : 'rgb(100,100,100)','7' : 'rgb(100,100,100)','8' : 'rgb(255,255,0)','8' : 'rgb(255,255,0)','9' : 'rgb(255,255,150)','9' : 'rgb(255,255,150)'   
};

arrayColors1=["000000","974b00","ff0000","ff8c55","fff200","00ff00","0000ff","800080","808080","ffffff"];

for(i=0;i<arrayColors1.length;i++){
  abc2[i+""]="#"+arrayColors1[i];
}

estadoEmpezar=0;
empezar=0;
delaySalida=0;
colorTextoSalida="";
viejoPasadas=0;

preventBackCount=0;
imagenDimension=600;

$("#resultsList").hide();

$("#loading").hide();
//$("#controls-div").hide();
$("#stop1").hide();
$("#clearResultsList").hide();

function n(x){ return parseInt($("#"+x).val()); }

bMobile=0;
if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
  bMobile=1;
  $(".fb-share-button").hide();
} 


tricky=12;

arrayImages=[];
arrayImages1=[];
arrayImages2=[];
arrayPreloadImages=[];

zPreload=0;
imgLoadedCount=0;


bOnGame=0;

var tcAct=0;
var cAct=0, iAct=0, sAct=1;
var salidas = [], salidas1 = [],cantidadBack=2, cantidadBack1=2, pasadas=26, currentPasada=0;
var bIntroducir=0, bIntroducir1=0, bIntroducir2=0, bIntroducir3=0, bIntroducir4=0, bIntroducir5=0;
var ok=0, ok1=0, ok2=0, ok3=0, ok4=0, ok5=0;
var error=0 , error1=0, error2=0, error3=0, error4=0, error5=0, mismo=0,mismo1=0, mismo2=0,mismo3=0,mismo4=0,mismo5=0;
var killInterval,myInterval,killCamera;
var bOk=0,bOk1=0,bOk2=0,bOk3=0,bOk4=0,bOk5=0;
var arrayImagenes=[];
var acumuladorSuma=0;

function actualizarOk(){
  $("#ok").html(parseInt(ok)+parseInt(ok1)+parseInt(ok2)+parseInt(ok3));
}

function actualizarErrores(){
  $("#error").html(parseInt(error)+parseInt(error1)+parseInt(error2)+parseInt(error2));
}

var perdidas=0;
var perdidas1=0;

var currentVariable=1;
var realCantidadBack=1;
var sel=0;
var max=0;
var kill2;
var kill3;
var time;
var bMismo=0;
var posibleMismo="";
var mostrarOp="";

var break_1=0,break_2=0,_contador=0,op_array=[],_arr=[];
var colores_array=["Blue"/*,"Black"*/,"BlueViolet","Brown","DarkGreen","DarkSlateGrey","Fuchsia","GoldenRod"/*,"DimGray"*/,"Red"/*,"Sienna"*/];

var cadena,cantidad,posicion;

inicioN=1;
inicioN1=1;

function play(_xxx){

  if(_xxx==0){

    if(bOnGame)
      return;

    colorTextoSalida="black";

    empezar=0;

    realCantidadBack=parseInt($("#cantidadBack").html());
    cantidadBack1=parseInt($("#cantidadBack1").html());
    inicioN=realCantidadBack;
    inicioN1=cantidadBack1;
    //console.log(realCantidadBack);

    cantidadBack=realCantidadBack;
    currentVariable=cantidadBack;

    $("#stop1").show();
    $("#resultsList").hide();
    
    bOnGame=1;

    imgLoadedCount=0;


    rndPorcentaje=parseInt($("#rndPorcentaje").val());
    console.log("rndPorcentaje "+rndPorcentaje)

    salidas=[]; 
    salidas1=[]; 
  

    currentPasada=0;
    pasadas = 20 + (cantidadBack-1) * 6;  

    ok=0; ok1=0; ok2=0; ok3=0; ok4=0; ok5=0;
    error=0; error1=0; error2=0; error3=0; error4=0; error5=0;

    myInterval=parseInt($("#timeValue").val());
    myInterval1=parseInt($("#timeValue1").val());

    clearTimeout(killInterval); 
    
    clearInterval(kill2); 
    clearInterval(kill3); 

    bOk=0; bOk1=0; bOk2=0; bOk3=0; bOk4=0; bOk5=0;
    mismo=0; mismo1=0; mismo2=0; mismo3=0; mismo4=0; mismo5=0;

    arrayImages=[];
    arrayImages1=[];
    arrayPreloadImages=[];

    zPreload=0;
    imgLoadedCount=0;

    $("#error").html(parseInt(error)+parseInt(error1));
    $("#ok").html(parseInt(ok)+parseInt(ok1));
    $("#results").html(""); 

    arrayImages1=[0,1,2,3,4,5,6,7,8,9];

    var limpia = "";
    resultados = "";
    cantidadPalabras = 0;

    posicion = 0;
    viejoPasadas=posicion;
    perdidas=0;
    perdidas1=0;


    colorTextoSalida="black";

    estadoEmpezar=0;
    

  }//end x==0


  bOnGame=1; 

  bIntroducir=0; bIntroducir1=0; bIntroducir2=0; bIntroducir3=0; bIntroducir4=0; bIntroducir5=0;  

   //position match error
   if(currentPasada>cantidadBack && bOk==0){

      _s=currentPasada-1;
      _b=currentPasada-1-cantidadBack;

      if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==salidas[_b][1]){
        //console.log("e pm");
         error++;
         // $("#pm").css("color","red");
         actualizarErrores();
         setTimeout(function(){ $("#pm").css("color","black"); },300);
      }
   }
   bOk=0;

   //color match error
   if(currentPasada>cantidadBack1 && bOk1==0 && cantidadBack1>0){

      _s=currentPasada-1;
      _b=currentPasada-1-cantidadBack1;

      if(salidas1[_s]==salidas1[_b]){
         error1++;
         // $("#sm").css("color","red");
         actualizarErrores();
         setTimeout(function(){ $("#sm").css("color","black"); },300);
      }
   }
   bOk1=0;


  if(currentPasada==pasadas){

    viejoPasadas=pasadas;

    console.log("hola");


      total_p = ok + error;
      total_s =  ok1 + error1;
      total_i = ok2 + error2;
      total_c = ok3 + error3;
      //tc  
      total_va = ok4 + error4;
      total_av = ok5 + error5;


      total_ps = total_p + total_s + total_i + total_c + total_va + total_av;
      total_ok = ok + ok1 + ok2 + ok3 + ok4 + ok5;

      if(total_ps==0)
        total_ps=1;


      porcentaje_ok = (ok * 100)/(ok+error);
      porcentaje_ok = Math.round(porcentaje_ok);

      porcentaje_ok1 = (ok1 * 100)/(ok1+error1);
      porcentaje_ok1 = Math.round(porcentaje_ok1);

      recomendacion="Same level";
      colorTextoSalida="blue"; 
      if(porcentaje_ok>=75){
         recomendacion="Level augmented";
         cantidadBack++;
         // pasadas += ( 20 + (cantidadBack-1) * 6 );
         $("#cantidadBack").html(cantidadBack);
         // $("#pasadas").html(pasadas);
         colorTextoSalida="green";
      
      }
      if(porcentaje_ok<75 && porcentaje_ok>=50){
         recomendacion="Keep on the same level";
         perdidas=0;
      }
      if(porcentaje_ok<50){
         perdidas++;

         if(cantidadBack>2/*inicioN*/){ cantidadBack--; colorTextoSalida="red"; } 

         // pasadas += ( 20 + (cantidadBack-1) * 6 ) ;
         $("#cantidadBack").html(cantidadBack);
        
         
         recomendacion="If persist in this Score is recomended decrease the level. Low score count: " + perdidas; //decrease

      }

      ////////
      // recomendacion="Same level";
      //colorTextoSalida="blue"; 
      if(porcentaje_ok1>=75){
         
         cantidadBack1++; 
         $("#cantidadBack1").html(cantidadBack1);
        
      }
      if(porcentaje_ok1<75 && porcentaje_ok1>=50){
        
         perdidas1=0;
      }
      if(porcentaje_ok1<50){
         perdidas1++;

         if(cantidadBack1>/*inicioN1*/2){ cantidadBack1--; } 
         $("#cantidadBack1").html(cantidadBack1);
        
      }

       $("#pasadas").html(currentPasada);

       if(cantidadBack>cantidadBack1)
         pasadas += ( 20 + (cantidadBack-1) * 6 ) ;
       else
        pasadas += ( 20 + (cantidadBack1-1) * 6 ) ;   

     txtCentral=`${cantidadBack}-${cantidadBack1}`;
     $("#d11").html("<center>"+txtCentral+"</center>");

     setTimeout(function(){   $("#d11").html(""); }, 4000);

      //ok=1; ok1=1; ok2=1; ok3=1; error=1; error1=1; error2=1; error3=1;  

      positionTxt = ""; soundTxt = ""; imageTxt= ""; colorTxt=""; vaTxt=""; avTxt="";
      txt=""; // + recomendacion;

      
      bOnGame=0;

      ok=0; error=0; ok1=0; error1=0;

      actualizarOk(); actualizarErrores();
   }

   //Position
   _txt="misma"; _r=_.random(1,100);


   if(currentPasada>=cantidadBack  && _r<=rndPorcentaje){

      _poner = currentPasada-cantidadBack;

      __x=salidas[_poner][0];
      __y=salidas[_poner][1];

      mismo++;

       if ( __x==salidas[currentPasada-1][0] && __y==salidas[currentPasada-1][1] ){

        mismo--;

         for(;;){

          __x = _.random(0,2); __y = _.random(0,2);

           if(__x==1 && __y==1) continue;

          if ( __x==salidas[currentPasada-1][0] && __y==salidas[currentPasada-1][1] ) continue;

          break;
         }

       }

      
     
   }else{
      _txt="random";  

      _count=0;

      for(;;){
       
         __x = _.random(0,2); __y = _.random(0,2);

         if(__x==1 && __y==1) continue;

          if(_.random(1,100)<=tricky && tricky!=0 && cantidadBack>=1 && currentPasada-2>=0){
            __x=salidas[_.random(currentPasada-2,currentPasada-2)][0];
            __y=salidas[_.random(currentPasada-2,currentPasada-2)][1];
            console.log("tricky n-back A");
          }

         _count++;

         //if(_count==100) break;

         if(parseInt(__x)==1 && parseInt(__y)==1) continue;

         if( ( currentPasada > cantidadBack) && (__x==salidas[currentPasada-cantidadBack][0] && __y==salidas[currentPasada-cantidadBack][1] ) ) continue;    
         if(currentPasada >= 1 &&  ( __x==salidas[currentPasada-1][0] && __y==salidas[currentPasada-1][1] ) ) continue;

         break;

      }//for  
   }//currentPasada>cantidadBack

   //Image
  _r=_.random(1,100);;
  _txt="misma";

 
  if(currentPasada>cantidadBack1 && _r<=rndPorcentaje){

    _poner = currentPasada-cantidadBack1;

    _myImagen1=salidas1[_poner];
    _myImagen1 = arrayColors[_.random(0,arrayColors.length-1)];
      
    mismo1++; bMismo=1;

      
   }else{ //currentPasada>cantidadBack
      _txt="random";
      
      contador=0;

      bMismo=0;

      

      for(;;){

          _myImagen1 = arrayColors[_.random(0,arrayColors.length-1)];

        //checkear
         if(currentPasada>cantidadBack1){
            if(_myImagen1!=salidas1[currentPasada-cantidadBack1])
               break;        
         }else{
               break;

         }
          
           //break;
      }//for  
   }//currentPasada>cantidadBack
  
   salidas[currentPasada]=[];

   //console.log(salidas[currentPasada])

   /*if(empezar)*/ delaySalida=250;

   salidas[currentPasada][0] = __x;
   salidas[currentPasada][1] = __y;

   if(!empezar) play1();

   empezar=1;

  salidas1[currentPasada]=[];
  salidas1[currentPasada]=_myImagen1;

  console.log(_myImagen1)



  // console.log(_myImagen1);

  bRespuesta=0;
  test=0;
  at=n("at-sel");
  //test=0;

  max=n("milis-val");

  time=n("tt"+(test+1));

  //p="+";
   r=_myImagen1;
   x=0;

   operadores=n("operadores");
  //p=a+myOperador+b

  __poner="";
  wbf=n("wordsByFlash");



  colorTextoSalida=_myImagen1;
  console.log(colorTextoSalida);

  
    
   bIntroducir=1; bIntroducir1=1; bIntroducir2=1; bIntroducir3=1;  bIntroducir4=1;  bIntroducir5=1;
   

   $("#pasadas").html(currentPasada);

   estadoEmpezar=1;

  killInterval = setTimeout(function(){  currentPasada++; play(1); },myInterval);
  kill4=setTimeout(function(){  },myInterval1);
   

}//en play()

var kill4;
var poner1;
var poner;
var sel=0;
var sel1=0;



function limpiar(){
  
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      $(`#d${j}${i}`).html("");
    }
  }

}

$(document).keypress(function(e) {
  console.log("");

  //console.log("key" + e.which);

  if(!bOnGame) return;

   //Position match letter A
       if(e.which==97){

         if(bIntroducir){
            
            if(currentPasada+1>cantidadBack){
                console.log("A");
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack;

                if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==salidas[_b][1]){
                  bOk=1;
                  ok++;
                  $("#ok").html(ok);
                  actualizarOk();
                  // $("#pm").css("color","green");
                  //console.log("ok");

                  
                }else{
                  // $("#pm").css("color","red");

                  console.log("error");
                  error++;
                  bOk=1;
                  //$("#error").html(error);
                  actualizarErrores();

                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir=0;
         setTimeout(function(){ $("#pm").css("color","black"); },300);
       }//wich a


       //Number letter L
       if(e.which==108){

         if(bIntroducir1){
            
            
            if(currentPasada+1>cantidadBack1){
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack1;

                if(salidas1[_s]==salidas1[_b]){
                  bOk1=1;
                  ok1++;
                  //$("#ok").html(parseInt(ok)+parseInt(ok1));
                  actualizarOk();
                  // $("#sm").css("color","green");
                  //console.log("ok-s");

                  
                }else{
                  // $("#sm").css("color","red");

                  //console.log("error-s");
                  error1++;
                  bOk1=1;
                  //$("#error").html(parseInt(error)+parseInt(error1));
                  actualizarErrores();


                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir1=0;
         setTimeout(function(){ $("#sm").css("color","black"); },300);
       }//wiich l

  //console.log(e.which);
});//on keypress

$("#mas").click(function(){
      cantidadBack++;
      pasadas = 20 + (cantidadBack-1) * 6;
      $("#cantidadBack").html(cantidadBack);
      $("#pasadas").html(pasadas);
      clearTimeout(killInterval);
      clearTimeout(kill2);
    clearTimeout(kill3);
      perdidas=0;
      perdidas1=0;
      

});

 $("#menos").click(function(){
    if(cantidadBack==2)
       return;
     perdidas=0;
    cantidadBack--;
    pasadas = 20 + (cantidadBack-1) * 6;
    $("#cantidadBack").html(cantidadBack);
    $("#pasadas").html(pasadas);
    clearTimeout(killInterval);
    clearTimeout(kill2);
  clearTimeout(kill3);

 });

 $("#mas1").click(function(){
  console.log("mas1");
    cantidadBack1++;
    pasadas = 20 + (cantidadBack1-1) * 6;
    $("#cantidadBack1").html(cantidadBack1);
    $("#pasadas").html(pasadas);
    clearTimeout(killInterval);
    clearTimeout(kill2);
  clearTimeout(kill3);
    perdidas=0;
    perdidas1=0;

    ajustarColor();
    

 });

 $("#menos1").click(function(){
    if(cantidadBack1==0)
       return;
     perdidas=0;
    cantidadBack1--;
    pasadas = 20 + (cantidadBack-1) * 6;
    $("#cantidadBack1").html(cantidadBack1);
    $("#pasadas1").html(pasadas);
    clearTimeout(killInterval);
    clearTimeout(kill2);
  clearTimeout(kill3);
  ajustarColor();

 });

   //Match Buttons

   $("#pm, #footer-l").click(function(){
     

    if(bIntroducir){
            
            if(currentPasada+1>cantidadBack){
                console.log("A");
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack;

                if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==salidas[_b][1]){
                  bOk=1;
                  ok++;
                  $("#ok").html(ok);
                  actualizarOk();
                 // $("#pm").css("color","green");
                  //console.log("ok");

                  
                }else{
                 // $("#pm").css("color","red");

                  console.log("error");
                  error++;
                  bOk=1;
                  //$("#error").html(error);
                  actualizarErrores();

                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir=0;
         setTimeout(function(){ $("#pm").css("color","black"); },300);
  

   });

   $("#sm, #controls-r ,#footer-r").click(function(){


         if(bIntroducir1){
            
            if(currentPasada+1>cantidadBack1){
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack1;

                if(salidas1[_s]==salidas1[_b]){
                  bOk1=1;
                  ok1++;
                  //$("#ok").html(parseInt(ok)+parseInt(ok1));
                  actualizarOk();
                  // $("#sm").css("color","green");
                  //console.log("ok-s");

                  
                }else{
                  // $("#sm").css("color","red");

                  //console.log("error-s");
                  error1++;
                  bOk1=1;
                  //$("#error").html(parseInt(error)+parseInt(error1));
                  actualizarErrores();


                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir1=0;
         setTimeout(function(){ $("#sm").css("color","black"); },300);

});

$("#stop1").click(function(){
   
  detener();
});

function detener(){
   $("#stop1").hide();
    clearTimeout(killInterval);
    clearTimeout(kill2);
    clearTimeout(kill3);
    stopFlash();
    bOnGame=0;
    limpiar();
}


if(bMobile==1){
     _ww=$(window).width();
    _wh=$(window).height();
    _cw = (_ww - canvas.width)/2-20;

    imagenDimension=500;

   //$("#controls-l").css("width",_cw+"px"); 
   $("#controls-l").css("width","70px"); 
   $("#controls-l").css("height",_wh+"px"); 
   $("#controls-l").css("display","flex");  
   //$("#controls-l").css("z-index","10000");

    //$("#controls-r").css("width",_cw+"px"); 
    $("#controls-r").css("width","70px"); 
    $("#controls-r").css("height",_wh+"px"); 
    $("#controls-r").css("display","flex"); 
   // $("#controls-r").css("z-index","10000");
    
    
    $("#controls-l").html(`<div style="align-self: center; margin-left: 30%;">A</div>`);
    $("#controls-r").html(`<div style="align-self: center; margin-left: 40%;">S</div>`);

    $("#cnv111").css("float","left");
}

function remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
        arr.splice(found, 1);
        found = arr.indexOf(what);
    }
}

var contadorRnd=0;

var contadorRnd;

function getRndTxt(){
  console.log("hola")
    contadorRnd++;
  


    
       $.ajax({url: "/mr.php?rnd=1&libro="+$("#book").val()+"&cPage=aleatory"+"&limit=40000", success: function(result){
        $("#input1").val(result);
       
     }});



   
   


}

function getPage(x){

  if(parseInt(x)==0) return;

     tipoMuestra=0;
    //ontadorRnd++;

    //$("#center-screen").append("<br>Loading page...");

    $.ajax({url: "/mr.php?rnd=1&libro="+$("#book").val()+"&cPage="+x+"&limit=10000", success: function(result){
        //$("#input1").val(result);
         $("#input1").val(result);
       
        // $("#center-screen").append("<br>");
       // mode=1; bPrev=0; bNext=0;  play();
       
    }});
}
// for(i=0;i<colores_array.length;i++){
//   $("#test").append(`<span style="color: ${colores_array[i]}; font-size: 30px;">${colores_array[i]}</span>&nbsp;`);
// }

/*
$("#d00").css("background-image","url('https://maps.googleapis.com/maps/api/streetview?size=290x190&location=25.1854152,55.3699478&fov=90&heading=297&pitch=10&key=AIzaSyB-CedQccD4tyO5TGMOSb5s1fMb-c6Nh-A')");
*/

velocity=200;
txtLength=0;

myExperiment=1;

bRc=0;

function n(x){ return parseInt($("#"+x).val()); }

var bPlay=0;
var wordsByFlash=1;
var readingMode=1;
var circleFase=0;
var bCW=0;
bColors=0;
fontSize=30;

var cadena;
var cantidad;
var posicion=0;
var lugar="left-screen";

bLugar=1;
iniciar = 1;
tiempo = 0;

lugar = "";
mostrar="";

var killIntervalRc;

function init(x){

  if(iniciar==1){
    var limpia = "";
    resultados = "";
    cantidadPalabras = 0;

    str = $("#input1").val();

    limpia = str.split("\n").join(" ");
    limpia = limpia.split("\t").join(" ");
    limpia = limpia.split("\r").join(" ");
    limpia = limpia.split(",").join(" ");
    limpia = limpia.split(".").join(" ");
    limpia = limpia.split(")").join(" ");
    limpia = limpia.split("(").join(" ");
    limpia = limpia.split(";").join(" ");
    limpia = limpia.split("-").join(" ");

    limpia = limpia.split("   ").join(" ");
    limpia = limpia.split("  ").join(" ");

    str = limpia;

    cadena=str.split(" ");
    cantidad=cadena.length;
    posicion = 0;
  
    //console.log(arrayRandomWord);
    bLugar=1;

    iniciar=0;

    calcularTiempo();

  }

  clearTimeout(killIntervalRc);

  if(posicion>=cantidad){
    detener(); return;
  }

  
  if(wordsByFlash==1){
    mostrar = cadena[posicion];

  }

  if(wordsByFlash==2){ mostrar = cadena[posicion] + " " + cadena[posicion+1] ; }
  if(wordsByFlash==3){ mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] ; }
  if(wordsByFlash==4){ mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] ; }
  if(wordsByFlash==5){ mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] + " " + cadena[posicion+4]; }
  if(wordsByFlash==6){ mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] + " " + cadena[posicion+4] + " " + cadena[posicion+5]; }
  if(wordsByFlash==7){ mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] + " " + cadena[posicion+4] + " " + cadena[posicion+5] + " " + cadena[posicion+6]; }


  bLugar=!bLugar;


  //console.log(readingMode);

  fontSize=30;

  if(wordsByFlash>4)
    fontSize=24;

  transform="";


  //genero la impresion
  txtLength=0;
  txtLength=mostrar.length;
    

  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      //if(i=!1 || j!=1){
        if(i==1 && j==1) continue;
       $("#d"+ i + "" + j ).html(``);
       $("#d"+ i + "" + j ).parent().css("background-color","white");
     // }

    }

  }


  myCol="black"
  if(_myImagen1=="rgb(128,0,128)") myCol="gray";
  if(_myImagen1=="rgb(0,0,255)") myCol="gray";
  if(_myImagen1=="rgb(255,0,0)") myCol="gray";
  if(_myImagen1=="rgb(0,0,255)") myCol="gray";

  _mostrar=""
  for(i=0;i<mostrar.length;i++){

    try{  
      _mostrar+=`<span style="-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: ${myCol}; color: ${abc2[mostrar[i]]}">${mostrar[i]}</span>`

    }catch(err){}
  }
  mostrar=_mostrar;
 


  if(estadoEmpezar){

    if(cantidadBack1==0) colorTextoSalida="black";

    $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1] ).parent().css("background-color",_myImagen1);


    $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1] ).html(`<center><b><span style="/*color: ${colorTextoSalida};*/">${mostrar}</span></b></center>`);
    // colorTextoSalida="black";
    
    posicion+=wordsByFlash;


  }
  
  calcularTiempo();

  velocity=n("velocityFlash");

  killInterval777=setTimeout(function(){ init() },  ( 60000/ velocity ) * wordsByFlash + delaySalida  );

  delaySalida=0;

  calcularTiempo();

  //console.log( ( 60000/n("velocityFlash") ) * wordsByFlash );

}

function calcularTiempo(){
  if(iniciar==0){
    tiempo = ( cantidad - posicion ) * ( 60000/n("velocityFlash") );

    poner = `${posicion+1}/${cantidad} - ${getDuration(tiempo)}`;
    $("#stats").html(poner);

  }
}

function play1(){

  bPlay=!bPlay;

  if(bPlay){
    $("#play-btn").val("pause");

    init();

  }else{
    clearTimeout(killInterval);
    clearTimeout(killIntervalRc);
    mostrar="";
    $("#play-btn").val("start");
  }
}

var getDuration = function(millis){
  var dur = {};
  var units = [
      {label:"millis",    mod:1000},
      {label:"seconds",   mod:60},
      {label:"minutes",   mod:60},
      {label:"hours",     mod:24},
      {label:"days",      mod:31}
  ];
  // calculate the individual unit values...
  units.forEach(function(u){
      millis = (millis - (dur[u.label] = (millis % u.mod))) / u.mod;
  });
  // convert object to a string representation...
  var nonZero = function(u){ return dur[u.label]; };
  dur.toString = function(){
      return units
          .reverse()
          .filter(nonZero)
          .map(function(u){
              return dur[u.label] + " " + (dur[u.label]==1?u.label.slice(0,-1):u.label);
          })
          .join(', ');
  };

  /*
  console.log(dur);
  x = dur.split(",");
  poner = "";
  for(i=0;i<x.length;i++){
    if(x[i].indexOf("millis")!=1){
      continue;
    }
    poner += x[i];

  }*/

  //return dur;
  return dur.hours+":"+dur.minutes+":"+dur.seconds;//+":"+dur.millis;
};

function ajustarColor(){
  if(cantidadBack1==0){
    $("#footer-r").hide();
    $("#footer-l").css("width","100%");

  }else{
    $("#footer-r").show();
    $("#footer-l").css("width","50%");

  }
}


function quitaAcentos(str){ 
  for (var i=0;i<str.length;i++){ 
  //Sustituye "á é í ó ú" 
    if (str.charAt(i)=="á") str = str.replace(/á/,"a"); 
    if (str.charAt(i)=="é") str = str.replace(/é/,"e"); 
    if (str.charAt(i)=="í") str = str.replace(/í/,"i"); 
    if (str.charAt(i)=="ó") str = str.replace(/ó/,"o"); 
    if (str.charAt(i)=="ú") str = str.replace(/ú/,"u"); 
  } 
  return str; 
} 

//$("#down-screen")

myTransformation=1;

function stopFlash(){
  

  if(bPlay){
    bPlay=0;
    $("#play-btn").val("start");

    
    
  }
  mostrar="";


  iniciar=1;

  clearTimeout(killInterval777);
  clearTimeout(killIntervalRc);
  $("#stats").html("");
  $("#stop1").hide();
  
  clearTimeout(killInterval);
  clearTimeout(kill2);
  clearTimeout(kill3);

  limpiar();

  bOnGame=0;

}

ww=$(window).width();
$("#footer").hide();

if(ww<1000){
  $("#footer").show();
  $(".other-games").hide();

  $("#controls-l").hide();
  $("#controls-r").hide();

 // $("#color-n-back").hide();
  $("#sm").hide();
  $("#pm").hide();

  $("#myControl").css("zoom","3")
  $("#control").css("zoom","2")
  $("#control2").css("zoom","2")
  //$("#rnd-btn").css("zoom","3")
  $("#myTable td").css("font-size","40px")
  $("#rndPorcentaje").val("20")

  $("#footer-r").hide();
  $("#footer-l").css("width","100%");

}

// $("#mas1").click();


