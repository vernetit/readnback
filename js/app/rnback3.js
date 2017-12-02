__arrayColors=["Blue","Brown","Red","Green","Yellow","Purple","Gray"];
arrayColors=["rgb(0,0,255)","rgb(165,42,42)","rgb(255,0,0)","rgb(0,128,0)","rgb(216, 242, 24)","rgb(128,0,128)","rgb(128,128,128)"];


estadoEmpezar=0;
empezar=0;
delaySalida=0;
colorTextoSalida="";
viejoPasadas=0;

preventBackCount=0;

function selectTime(def,x){

  h=`
    <select id="tt${x}" class="mySelect">
      <option value="50">.05</option>
      <option value="100">.1</option>
      <option value="200">.2</option>
      <option value="300">.3</option>
      <option value="400">.4</option>
      <option value="500">.5</option>
      <option value="600">.6</option>
      <option value="700">.7</option>
      <option value="800">.8</option>
      <option value="900">.9</option>
      <option value="1000">1</option>
      <option value="2000">2</option>
      <option value="3000">3</option>
      <option value="4000">4</option>
      <option value="5000">5</option>
      <option value="6000">6</option>
    </select>
  `;
  $("#t"+x).html(h);
  $("#tt"+x).val(def);
}

selectTime("1000","1");


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


arrayImages=[];
arrayImages1=[];
arrayImages2=[];
arrayPreloadImages=[];

zPreload=0;
imgLoadedCount=0;
/*
function preload() {

    $("#preload").html(""); 

    for(i=0;i<arrayPreloadImages.length;i++){

      //console.log(`<img src="${arrayImages[i]}" id="imgPreload-${zPreload}">`);

       $("#preload").append(`<img src="${arrayPreloadImages[i]}" id="imgPreload-${zPreload}"  width="32" height="32" style="opacity: 0.5;">`);

       $(`#imgPreload-${zPreload}`).on("load",function(){
          
          imgLoadedCount++;

          if(imgLoadedCount==arrayPreloadImages.length){      

            //$("#screen").html(""); 
            $("#preload").hide(); 
            $("#loading").hide(); 
             $("#stop1").show();
            //$("#recall-btn").show(); 
            $("#controls-div").show();

            //console.log(imgLoadedCount);

            setTimeout(play(1),500); 
                         
           // init(0);

         }
       });

     zPreload++;

  } //end for
} //end preload
*/

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
var cantidadElementos=3;
var cantidadLoci=2;

var bVariable=1;
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

function play(_xxx){

  if(_xxx==0){

    if(bOnGame)
      return;

    colorTextoSalida="black";

    empezar=0;

    bVariable=n("isVariable");

    cantidadElementos=n("cantidadElementos");
    cantidadLoci=n("cantidadLoci");

    realCantidadBack=parseInt($("#cantidadBack").html());
    cantidadBack1=parseInt($("#cantidadBack1").html());
    //console.log(realCantidadBack);

    cantidadBack=realCantidadBack;
    currentVariable=cantidadBack;

    $("#stop1").show();

    $("#resultsList").hide();
    
    bOnGame=1;

    imgLoadedCount=0;

    //$("#preload").show(); 
      //$("#loading").show(); 
      //$("#controls-div").hide();

      rndPorcentaje=parseInt($("#rndPorcentaje").val());

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

    // str = $("#input1").val();

    // limpia = str.split("\n").join(" ");
    // limpia = limpia.split("\t").join(" ");
    // limpia = limpia.split("\r").join(" ");
    // limpia = limpia.split(",").join(" ");
    // limpia = limpia.split(".").join(" ");
    // limpia = limpia.split(")").join(" ");
    // limpia = limpia.split("(").join(" ");
    // limpia = limpia.split(";").join(" ");
    // limpia = limpia.split("-").join(" ");

    // limpia = limpia.split("   ").join(" ");
    // limpia = limpia.split("  ").join(" ");

    // str = limpia;

    // cadena=str.split(" ");
    // cantidad=cadena.length;
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


  //Loci match error
  /*
  if(currentPasada>cantidadBack && bOk==0){

      _s=currentPasada-1;
      _b=currentPasada-1-cantidadBack;

      comparar=-1; comparar1=-1; comparar2=-1;

      if(cantidadLoci==2)
       comparar=salidas[_b][1];

     if(cantidadLoci==3){
       comparar=salidas[_b][1];
       comparar1=salidas[_b][2];
     }

     if(cantidadLoci==4){
       comparar=salidas[_b][1];
       comparar1=salidas[_b][2];
       comparar2=salidas[_b][3];
     }

     if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==comparar && salidas[_s][2]==comparar1 && salidas[_s][3]==comparar2){
        //console.log("e pm");
         //error++;
         $("#pm").css("color","red");
         actualizarErrores();
         setTimeout(function(){ $("#pm").css("color","black"); },500);
     }
    }
  bOk=0;

  //Number match error
  if(currentPasada>cantidadBack && bOk1==0 && sAct>0){

    _s=currentPasada-1;
    _b=currentPasada-1-cantidadBack;

    comparar=-1; comparar1=-1; comparar2=-1; comparar3=-1; comparar4=-1; comparar5=-1; comparar6=-1;

     if(cantidadElementos==2)
       comparar=salidas1[_b][1];

     if(cantidadElementos==3){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
     }

     if(cantidadElementos==4){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
     }

     if(cantidadElementos==5){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
     }

     if(cantidadElementos==6){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
       comparar4=salidas1[_b][5];
     }

     if(cantidadElementos==7){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
       comparar4=salidas1[_b][5];
       comparar5=salidas1[_b][6];
     }

    if(cantidadElementos==8){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
       comparar4=salidas1[_b][5];
       comparar5=salidas1[_b][6];
       comparar6=salidas1[_b][7];
     }

    if(salidas1[_s][0]==salidas1[_b][0] && salidas1[_s][1]==comparar && salidas1[_s][2]==comparar1 && salidas1[_s][3]==comparar2 && salidas1[_s][4]==comparar3  && salidas1[_s][5]==comparar4  && salidas1[_s][6]==comparar5  && salidas1[_s][7]==comparar6){
       error1++;
       $("#sm").css("color","red");
       actualizarErrores();
       setTimeout(function(){ $("#sm").css("color","black"); },500);
    }
  }*/
  bOk1=0;

  if(currentPasada==pasadas){

    viejoPasadas=pasadas;

    console.log("hola");


     //$("#stop1").hide();
     //$("#resultsList").show();

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

      // porcentaje_ok = (total_ok * 100)/total_ps;
      // porcentaje_ok = Math.round(porcentaje_ok);

      porcentaje_ok = (ok * 100)/(ok+error);
      porcentaje_ok = Math.round(porcentaje_ok);

      porcentaje_ok1 = (ok1 * 100)/(ok1+error1);
      porcentaje_ok1 = Math.round(porcentaje_ok1);

      //agregarResultado(cantidadBack,porcentaje_ok);

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

         if(cantidadBack>2){ cantidadBack--; colorTextoSalida="red"; } 

         // pasadas += ( 20 + (cantidadBack-1) * 6 ) ;
         $("#cantidadBack").html(cantidadBack);
        
         
         recomendacion="If persist in this Score is recomended decrease the level. Low score count: " + perdidas; //decrease

      }

      ////////

      // recomendacion="Same level";
      //colorTextoSalida="blue"; 
      if(porcentaje_ok1>=75){
         // recomendacion="Level augmented";
         cantidadBack1++;
         // pasadas += ( 20 + (cantidadBack-1) * 6 );
         $("#cantidadBack1").html(cantidadBack1);
         // $("#pasadas").html(pasadas);
         //colorTextoSalida="green";
      
      }
      if(porcentaje_ok1<75 && porcentaje_ok1>=50){
         // recomendacion="Keep on the same level";
         perdidas1=0;
      }
      if(porcentaje_ok1<50){
         perdidas1++;

         if(cantidadBack1>2){ cantidadBack1--; /*colorTextoSalida="red"; */} 

         // pasadas += ( 20 + (cantidadBack-1) * 6 ) ;
         $("#cantidadBack1").html(cantidadBack1);
        
         
         // recomendacion="If persist in this Score is recomended decrease the level. Low score count: " + perdidas; //decrease

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
      if(ok!=0 || error!=0){

        positionTxt="Position: "+ok+"-"+error;

      }
      if(ok1!=0 || error1!=0){

        soundTxt="Numbers: "+ok1+"-"+error1;

      }

       if(ok2!=0 || error2!=0){

        imageTxt="images: "+ok2+"-"+error2;
      }
      if(ok3!=0 || error3!=0){

        colorTxt = "colors: "+ok3+"-"+error3;
      }
      if(ok4!=0 || error4!=0){

        vaTxt = "vis & n-audio: "+ok4+"-"+error4;
      }
      if(ok5!=0 || error5!=0){

        avTxt = "audio & n-vis: "+ok5+"-"+error5;
      }
      sumaTxtTxt="";
      if(iAct==4){
        sumaTxtTxt=" Sum of numbers= " + acumuladorSuma + "<br>";
      }

      txt="<h3>Results</h3>" + positionTxt + " " + soundTxt + " " + imageTxt + " " + colorTxt + " " + vaTxt + " " + avTxt + "<br>" + sumaTxtTxt +
         "Score: "+ porcentaje_ok + "%<br>"; // + recomendacion;

      // $("#results").html(txt);
      //$("#canvas").html(`<div id="canvas11">Hello!<br>Here the instructions of the original nback game to guide you in locinback: <a href="http://brainworkshop.sourceforge.net/tutorial.html">http://brainworkshop.sourceforge.net/tutorial.html</a></div>`);

      bOnGame=0;

      // currentPasada=0;

      // $("html, body").animate({ scrollTop: $(document).height() }, 1000);

      // limpiar();

       // clearTimeout(killInterval);
      // clearTimeout(kill2);
      //  clearTimeout(kill3);

      //  return;

      ok=0; error=0; ok1=0; error1=0;

      // $("#myTable").css("border", "green solid 1px");

      actualizarOk(); actualizarErrores();
   }

   /*
    if(bVariable==1){
    
      currentVariable=_.random(1,realCantidadBack);
      //console.log(realCantidadBack);
      cantidadBack=currentVariable;

    }*/


   _r=_.random(1,100);
   //console.log(_r);

   //Position
   _txt="misma";
   if((currentPasada>( /*viejoPasadas + */cantidadBack)  && _r<=rndPorcentaje)/* || currentPasada==2 */){
      _poner = currentPasada-cantidadBack;
      __x=salidas[_poner][0];
      __y=salidas[_poner][1];
  
      mismo++;
     
   }else{
      _txt="random";  

      _count=0;

      for(;;){
       
         __x = _.random(0,2);
         __y = _.random(0,2);

         // console.log(__x+"-"+__y)

         console.log(_count);

         _count++;

         if(_count==100) break;
                  
         if(__x!=1 || __y!=1){
            if( currentPasada > ( /* viejoPasadas +*/ cantidadBack)  ){
              // console.log(currentPasada-cantidadBack+""+cantidadBack)
              // console.log(currentPasada-1)

              //console.log(currentPasada+"-"+cantidadBack+"-"+viejoPasadas)

               if( ( __x!=salidas[currentPasada-cantidadBack][0] || __y!=salidas[currentPasada-cantidadBack][1] ) && ( __x!=salidas[currentPasada-1][0] || __y!=salidas[currentPasada-1][1] )  ){
                  break;
               }
            }else{

               /*
               if(currentPasada>0){
                   if(_x!=salidas[currentPasada-1][0] && _y!=salidas[currentPasada-1][1] && _z!=salidas[currentPasada-1][2])
                     break;

               }
               if(currentPasada==0)*/

                if(currentPasada==0 /*|| ( __x!=salidas[currentPasada-1][0] && __y!=salidas[currentPasada-1][1] ) */)
                  break; 


            }
              
         }
         
       // break;
      }//for  
   }//currentPasada>cantidadBack

   //Image
  _r=_.random(1,100);;
  _txt="misma";

  // cifras=n("cifras");

  // if(cifras==2){ myMax=99; myMin=10; } 
  // if(cifras==3){  myMax=999; myMin=110; }
  // if(cifras==4){ myMax=9999; myMin=1010; } 
  // if(cifras==5){ myMax=99999; myMin=10010; } 

  

  if(currentPasada>cantidadBack1 && _r<=rndPorcentaje){

    _poner = currentPasada-cantidadBack1;

    _myImagen1=salidas1[_poner];
      
    mismo1++; bMismo=1;

    //console.log("vis & n-vis: " + _myImagen + "-" + _myImagen2 + "-" + _myImagen3);   
   }else{//currentPasada>cantidadBack
      _txt="random";
      
      contador=0;

      bMismo=0;

      /*
      _pon = currentPasada-cantidadBack;


      if(currentPasada>cantidadBack)
        posibleMismo = salidas1[_pon];
      else
        posibleMismo = _.random(0,9)+""+_.random(0,9);
      */

      for(;;){

         //_myImagen1=arrayImages1[_.random(0,9)]+""+arrayImages1[_.random(0,9)]; 
         // _myImagen1=colores_array[_.random(0,colores_array.length-1)]; 

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


   /*if(empezar)*/ delaySalida=300;

   salidas[currentPasada][0] = __x;
   salidas[currentPasada][1] = __y;

   if(!empezar) play1();

   

   empezar=1;

   //console.log(currentPasada+"-"+__x+"-"+__y+"-"+ salidas[currentPasada][1]);
   //console.log(salidas[currentPasada][1]);


  salidas1[currentPasada]=[];
  salidas1[currentPasada]=_myImagen1;
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

  // for(j=0;j<wbf;j++){

  //   __poner+=" "+cadena[posicion];
  //   posicion++;
  // }

  // $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1] ).html(`<center><b><span style="color: ${r};">${__poner}</span></b></center>`);


  //muestra();

  colorTextoSalida=_myImagen1;
  console.log(colorTextoSalida);

  //kill2=setTimeout(function(){ muestra(); },300);
    
   bIntroducir=1; bIntroducir1=1; bIntroducir2=1; bIntroducir3=1;  bIntroducir4=1;  bIntroducir5=1;
   // pasadas--;

   $("#pasadas").html(currentPasada);

   estadoEmpezar=1;

  killInterval = setTimeout(function(){ /* $("#myTable").css("border", "black solid 1px"); */  currentPasada++; play(1);},myInterval);
  kill4=setTimeout(function(){ /*limpiar();*/ },myInterval1);
   

}//en play()

var kill4;
var poner1;
var poner;

function killAll(){
  
}

function muestra(){

  

  // arraySel=[0,2,4,6,8,10,12,14,16,18,20,22,24];

  // poner="";
  // poner1="";

  // /*
  //  if(time<1000){
  //   sel=_.random(0,max-1);
  //   }else{

  //     sel=_.random(0,max-1);
  //   }*/

  // for(;;){

  //   sel=arraySel[_.random(0,arraySel.length-1)];

  //   if(sel<max-1) break;

  // }

  // for(;;){

  //   sel1=arraySel[_.random(0,arraySel.length-1)];

  //   if(sel1<max-1  && sel1!=sel) break;
   
  // }

  // bTruculento=0;
  // if(!bMismo && _.random(1,100)<20){bTruculento=1; console.log("truculento"); } 
  
  // for(let i=0;i<max;i++){
  //   space="";    
  //   if(i%2==0 && i!=0) space="&nbsp;";

  //   if(i>9 && i%2==0){
  //     space="<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

  //   }

  //   rnd=_.random(0,9);

  //   if(bTruculento && (i==sel1 || i==sel1+1) ){
  //     if(i==sel1){ rnd=posibleMismo[0]; }
  //     if(i==sel1+1){ rnd=posibleMismo[1]; }


  //   }else{
  //     if(i==sel){ rnd=salidas1[currentPasada][0]; }
  //     if(i==sel+1){ rnd=salidas1[currentPasada][1]; }
  //   }
    
  //   poner+=(space+rnd);
  //   poner1+=""+rnd;
  //   //console.log(poner);
  // }    
  // //console.log(salidas[currentPasada]);



  // $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1] ).html("<center><b>"+poner+"</b></center>");


  pregunta();

  // kill2=setTimeout(function(){
  //   $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1]).html("");

  //   kill3=setTimeout(function(){ pregunta(); },n("preguntaTime"));
  //   //pregunta();
  // },time);


}


var sel=0;
var sel1=0;

function pregunta(){

  // poner="";
  // for(i=0;i<max;i++){
  //   space="";    
  //   if(i%2==0 && i!=0) space="&nbsp;";

  //   if(i>9 && i%2==0){
  //     space="<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

  //   }


  //   if(i!=sel && i!=sel+1)
  //     poner+=space+"0";
  //   else
  //     poner+=space+"1";

  // }
  // $("#d"+salidas[currentPasada][0]+salidas[currentPasada][1]).html("<center><b>"+poner+"</b></center>");
  
  // at=1;
  // if(at!=0){

  //   kill2=setTimeout(function(){

  //      console.log("limpiar");



  //      $("#d"+salidas[currentPasada][0]+salidas[currentPasada][1]).html("");

  //   },500);
  // }
}

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

   $("#sm, #controls-r").click(function(){


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
    $("#stop1").hide();
    clearTimeout(killInterval);
    clearTimeout(kill2);
    clearTimeout(kill3);
    stopFlash();
    bOnGame=0;
    limpiar();

});


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
function getRndTxt(){
    contadorRnd++;
    if(contadorRnd>12)
      return;

    $.ajax({url: "http://leerencolores.appspot.com/multiReader2?rnd=1&libro=aleatory&cPage=aleatory", success: function(result){
        $("#input1").val(result);
       // mode=1; bPrev=0; bNext=0;  play();
    }});
}

// for(i=0;i<colores_array.length;i++){
//   $("#test").append(`<span style="color: ${colores_array[i]}; font-size: 30px;">${colores_array[i]}</span>&nbsp;`);
// }

/*
$("#d00").css("background-image","url('https://maps.googleapis.com/maps/api/streetview?size=290x190&location=25.1854152,55.3699478&fov=90&heading=297&pitch=10&key=AIzaSyB-CedQccD4tyO5TGMOSb5s1fMb-c6Nh-A')");
*/

velocity=250;
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

    // start();

    if(myExperiment==8){
      clearInterval(kill6);

      kill6=setInterval(function(){

        maxChange=_.random(0,10);
        $("#left-screen").css("padding-left",maxChange+"px");
        $("#right-screen").css("padding-right",maxChange+"px");
        $("#left-screen").css("padding-top",maxChange+"px");
        $("#right-screen").css("padding-top",maxChange+"px");

        $("#center-screen").css("padding-left",maxChange+"px");
        $("#center-screen").css("padding-top",maxChange+"px");

        /*
        $("#up-screen").html("");
        $("#down-screen").html("");
        $("#center-screen").html("");

        $("#left-up-screen").html("");
        $("#right-up-screen").html("");
        $("#left-down-screen").html("");
        $("#right-down-screen").html("");*/



      },1);


    }

    /*
    if(bCW){
      for(i=0;i<cadena.length;i++){
        if(cadena[i].length>6){
          cadena[i]=cadena[i].substr(0, 6);
          console.log(cadena[i]);
        }
      }
    }*/

    //console.log(arrayRandomWord);
    bLugar=1;

    iniciar=0;

    calcularTiempo();

  }


  clearTimeout(killIntervalRc);

  if(myExperiment==4 || myExperiment==5){
    bColors=0;
    wordsByFlash=4;
  } 
  if(myExperiment==6 || myExperiment==7 ){
    bColors=0;
    wordsByFlash=2;
  } 
  
  if(wordsByFlash==1){
    mostrar = cadena[posicion];

  }

  if(wordsByFlash==2){
    mostrar = cadena[posicion] + " " + cadena[posicion+1] ;

  }

  if(wordsByFlash==3){
    mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] ;

  }

  if(wordsByFlash==4){
    mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] ;

  }
  
  if(wordsByFlash==5){
    mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] + " " + cadena[posicion+4];

  }

  if(wordsByFlash==6){
    mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] + " " + cadena[posicion+4] + " " + cadena[posicion+5];

  }

  if(wordsByFlash==7){
    mostrar = cadena[posicion] + " " + cadena[posicion+1] + " " + cadena[posicion+2] + " " + cadena[posicion+3] + " " + cadena[posicion+4] + " " + cadena[posicion+5] + " " + cadena[posicion+6];

  }
  //console.log(cadena);

  bLugar=!bLugar;

  $("#left-screen").html("");
  $("#right-screen").html("");
  $("#up-screen").html("");
  $("#down-screen").html("");
  $("#center-screen").html("");

  $("#left-up-screen").html("");
  $("#right-up-screen").html("");
  $("#left-down-screen").html("");
  $("#right-down-screen").html("");

  if(readingMode==1){
  

    if(bLugar){

      lugar="right-screen";
      $("#left-screen").html("");

    }else{
      lugar="left-screen";
      $("#right-screen").html("");

    }

  }

  if(readingMode==2){

    

    if(bLugar){

      lugar="down-screen";
      $("#up-screen").html("");

    }else{
      lugar="up-screen";
      $("#down-screen").html("");

    }

  }

  if(readingMode==3){

    if(circleFase==0){
      lugar="left-screen";
    }

    if(circleFase==1){
      lugar="up-screen";
      
    } 

    if(circleFase==2){

      lugar="right-screen";
    }

    if(circleFase==3){
      lugar="down-screen";
    
    }
    

    circleFase++;
    if(circleFase==4)
      circleFase=0;

  }

  if(readingMode==4){


    if(circleFase==2){
      lugar="left-screen";
    }

    if(circleFase==1){
      lugar="up-screen";
      
    } 

    if(circleFase==0){

      lugar="right-screen";
    }

    if(circleFase==3){
      lugar="down-screen";
    
    }
    

    circleFase++;
    if(circleFase==4)
      circleFase=0;

  }

  if(readingMode==5){

    _circleFase=circleFase;

    for(;;){

      circleFase=_.random(0,3);

      if(circleFase!=_circleFase)
        break;
    }

    if(circleFase==2){
      lugar="left-screen";
    }

    if(circleFase==1){
      lugar="up-screen";
      
    } 

    if(circleFase==0){

      lugar="right-screen";
    }

    if(circleFase==3){
      lugar="down-screen";
    
    }
  

  }

  if(readingMode==6){
    $("#left-screen").html("");
    $("#right-screen").html("");
    $("#up-screen").html("");
    $("#down-screen").html("");
    $("#center-screen").html("");

    lugar="center-screen";

  }

  if(readingMode==7){


    if(circleFase==2){
      lugar="left-down-screen";
    }

    if(circleFase==1){
      lugar="right-up-screen";
      
    } 

    if(circleFase==0){

      lugar="left-up-screen";
    }

    if(circleFase==3){
      lugar="right-down-screen";
    
    }
    

    circleFase++;
    if(circleFase==4)
      circleFase=0;

  }

  if(readingMode==8){


    if(circleFase==2){
      lugar="right-up-screen";
    }

    if(circleFase==1){
      lugar="right-down-screen";
      
    } 

    if(circleFase==0){

      lugar="left-up-screen";
    }

    if(circleFase==3){
      lugar="left-down-screen";
    
    }
    

    circleFase++;
    if(circleFase==4)
      circleFase=0;

  }

  if(readingMode==9){

    _circleFase=circleFase;

    for(;;){

      circleFase=_.random(0,3);

      if(circleFase!=_circleFase)
        break;
    }


    if(circleFase==2){
      lugar="right-up-screen";
    }

    if(circleFase==1){
      lugar="right-down-screen";
      
    } 

    if(circleFase==0){

      lugar="left-up-screen";
    }

    if(circleFase==3){
      lugar="left-down-screen";
    
    }
    
    /*
    circleFase++;
    if(circleFase==4)
      circleFase=0;*/

  }

  //console.log(readingMode);

  fontSize=30;

  if(wordsByFlash>4)
    fontSize=24;

  transform="";

  if(myTransformation==2){
    
    transform="transform:rotateX(180deg);";
    
  }
  if(myTransformation==3){
    transform="transform:rotateY(180deg);";
          
  }
  /*
  if(myTransformation==4){
    transform="transform:rotateX(180deg) ";
    transform+="transform:rotateY(180deg);";
  


  }*/
  if(myTransformation==4){

    if(bLugar){

      //lugar="right-screen";
      //$("#left-screen").html("");
      transform="transform:skewY(30deg);"

    }else{
      //lugar="left-screen";
      //$("#right-screen").html("");
      transform="transform:skewY(-30deg);"

    }
    
    
          
  }

  if(myTransformation==5){
    
    transform="transform:skewY("+_.random(-40,40)+"deg);"
          
  }

  //genero la impresion
  txtLength=0;

  emo="";

  if(myExperiment==9){
    letras_emo="abcdefghilmnopqrstuvy".split("");
    rnd=_.random(0,letras_emo.length-1);
    cara=letras_emo[rnd];

    if(cara=="a" || cara=="e"  || cara=="n" || cara=="o"  || cara=="r"  || cara=="s")
      cara+=_.random(1,4);

    poner_1=`<img src="emociones/${cara}.gif" width="74" height="100">`;
    emo=`<center>${poner_1}</center><br>`;


  }

  if(myExperiment==10){
    a_1=["female","male"];
    rnd=_.random(1,155);
    rnd1=_.random(0,1);
    sexo=a_1[rnd1];

    poner_1=`<img src="faces/${sexo}/${rnd}.png" width="74" height="100">`;
    emo=`<center>${poner_1}</center><br>`;


  }
  
  if(bColors){

    if(bRc){

      

      killIntervalRc=setInterval(function(){

        poneme="";
        for(i=0;i<mostrar.length;i++){

          

          if(mostrar[i]==" "){
            poneme += `<span style="color: black;">&nbsp;</span>`;

          }else{
            poneme += `${emo}<span style="color: ${random_color('rgb')}; text-shadow: 1px 1px ${random_color('rgb')}; font-size: ${fontSize}px;">${mostrar[i]}</span>`;

          }

          
        }

        $("#"+lugar).html(`<div style="${transform}">`+poneme+"</div>");


      },10);

    }else{
      poneme="";
      for(i=0;i<mostrar.length;i++){

        if(mostrar[i]==" "){
          poneme += `<span style="color: black;">&nbsp;</span>`;

        }else{
          poneme += `<span style="color: ${abc1[mostrar[i]]}; text-shadow: 1px 1px gray;  font-size: ${fontSize}px;">${mostrar[i]}</span>`;

        }

        
      }

      $("#"+lugar).html(`${emo}<div style="${transform}">`+poneme+"</div>");


    }

  }else{
    if(myExperiment==4 || myExperiment==5 || myExperiment==6 || myExperiment==7){


      if(myExperiment==4){
        $("#left-up-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion] +`</span></div>`);
        $("#right-up-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+1] +`</span></div>`);
        $("#left-down-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+2] +`</span></div>`);
        $("#right-down-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+3] +`</span></div>`);

      }
      if(myExperiment==5){
        $("#left-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion] +`</span></div>`);
        $("#up-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+1] +`</span></div>`);
        $("#right-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+2] +`</span></div>`);
        $("#down-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+3] +`</span></div>`);

      }
      if(myExperiment==6){
        $("#left-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion] +`</span></div>`);
        $("#right-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+1] +`</span></div>`);
        

      }
      if(myExperiment==7){
        $("#up-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion] +`</span></div>`);
        $("#down-screen").html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+cadena[posicion+1] +`</span></div>`);
      }

      


    }else{//myExperiment

      if(myExperiment==3){
        _p="";
        for(kk=0;kk<mostrar.length;kk++){

          if(kk==0 || mostrar[kk+1]==" " || kk==mostrar.length-1){
            _p+=`<span class="t-m">${mostrar[kk]}</span>`;
          }
          else
          {
            _p+=`<span class="t-e">${mostrar[kk]}</span>`;
          }

        }
        mostrar = _p;
      }

      $("#"+lugar).html(`<div style="${transform}"><span style="font-size: ${fontSize}px;">`+mostrar+`</span></div>`);

      if(myExperiment==3){
        $(".t-e").css("color","black");
        setTimeout(function(){ $(".t-e").css("color",currentColor); }, 50 );

      }
  
    }//else myExperiment
    txtLength=mostrar.length;
    

    /*

    var Hello = React.createClass({
      displayName: 'Hello',
      render: function() {
        return React.createElement("div", null, "", this.props.name);
      }
    });

    ReactDOM.render(
      React.createElement(Hello, {name: mostrar}),
      document.getElementById(lugar)
    );
    */

  }

  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      //if(i=!1 || j!=1){
        if(i==1 && j==1) continue;
       $("#d"+ i + "" + j ).html(``);
     // }

    }

  }

   if(posicion>cantidad){
    stopFlash();
    return;

  } 


  if(estadoEmpezar){

    if(cantidadBack1==0) colorTextoSalida="black";


    $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1] ).html(`<center><b><span style="color: ${colorTextoSalida};">${mostrar}</span></b></center>`);
    // colorTextoSalida="black";
    

    posicion+=wordsByFlash;


  }
  

 

  calcularTiempo();

  velocity=n("velocityFlash");
  if(myExperiment==2){
    if(txtLength>30){
      velocity=250;
      console.log("retardo")
    }
  }


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
  $("#left-screen").html("Emdr");
  $("#right-screen").html("Reader!");
  $("#up-screen").html(":)");
  $("#down-screen").html(":)");

  $("#center-screen").html("");

  $("#left-up-screen").html("");
  $("#right-up-screen").html("");
  $("#left-down-screen").html("");
  $("#right-down-screen").html("");

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

  $("#color-n-back").hide();
  $("#sm").hide();
  $("#pm").hide();

  $("#myControl").css("zoom","3")
  $("#control").css("zoom","2")
  $("#rnd-btn").css("zoom","3")
  $("#myTable td").css("font-size","40px")
  $("#rndPorcentaje").val("25")
}

// $("#mas1").click();
