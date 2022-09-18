<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Read N-back</title>

  <meta name="description" content="Read N-Back">
  <meta name="keywords" content="mental training, memory, working memory">

  <script src='js/jquery.min.js'></script>
  <script src="js/underscore-min.js"></script>
  <script src="js/jquery.cookie-dist.js" type="text/javascript"></script>

  <style type="text/css">
    .inp-num{
    text-align: center; 
   }
    table{
      table-layout: fixed;
    }
    td{
      font-size:27px;
      /*text-shadow: 2px 2px gray;*/
    }
    #canvas {
        height: 600px;
        display:table;
        width:100%;
        z-index: 500;
        
    }

    #canvas11 {

        height:100%;
        display:table-cell;
        vertical-align:middle;
        text-align:center;
        z-index: 1000;
        /*height: 60px;*/
        /*width: 60px;*/

    }
    #cnv {

        height:100%;
        display:table-cell;
        vertical-align:middle;
        text-align:center;
        z-index: 1000;
        /*height: 60px;*/
       
        /*width: 60px;*/

    }
    #controls-r{
       /* float:right; width:50px; margin-left: 0px; */
       position: fixed;
       right: 0px;
       top: 50px;

    }
    #controls-l{
       /*float: left; width:50px; */
        /* float:right; width:50px; margin-left: 0px; */
       position: fixed;
       left: 0px;
       top: 50px;


    }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
           
        }
        .dropdown:hover .dropdown-content {
            display: block;
        }

        #footer {
            position:fixed;
            bottom:0;
            background-color: gray;
        }


      </style>
  <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-45359665-3', 'auto');
      ga('send', 'pageview');

      
 function _newSel(id,min,max,advance,select,onchange="",onclick="",style="",text="",post=""){



  $("#"+id+"-span").append(`
    <select id="${id}" onchange="${onchange}" onclick="${onclick}" style="${style}"></select>
  `)  


  for(var i=min;i<max;i+=advance){
    sel=""; 
    
    if(i==select) sel="selected";
    $("#"+id).append(`<option value="${i}" ${sel}>${text}${i}${post}</option>`)
  }  

}

    </script>
</head>
<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<div id="loading"><h1>Loading...<span><img src="/img/loading.gif"></span></h1></div>

<!-- Controles -->
<div id="myControl">

 <b>//Read<sup>4</sup></b> &nbsp;

<span style="/*font-size: 20px*/" id="logo-span-1">Position</span>
 <a href="#" id="mas" style="text-decoration:none; color: #7D0552;"><b>+</b></a> 
 <span id="cantidadBack">2</span>
 <a href="#" id="menos"  style="text-decoration:none; color: #7D0552;"><b>-</b></a>
  &nbsp;
  

<span id="color-n-back" style="display: none;">
<span style="/*font-size: 20px*/" id="logo-span-1">Color</span> <!--<span style="font-size: 40px">𝄢</span>-->
<a href="#" id="mas1" style="text-decoration:none; color: #7D0552;"><b>+</b></a> 
<span id="cantidadBack1">2</span>
<a href="#" id="menos1"  style="text-decoration:none; color: #7D0552;"><b>-</b></a>
</span>
&nbsp;

[Back]&nbsp;


&nbsp;
<input type="number" value="8" id="milis-val" class="inp-num" style="width: 50px; display:none;">


<b>
 <a href="#" id="start" onclick="setTimeout(function(){play(0)},300);">Play</a>&nbsp;
 <a href="#" id="stop1">Stop&nbsp;</a>
</b> 


 <span style="">
 <span>
  t: 
  <span id="timeValue-span"></span><script type="text/javascript">_newSel("timeValue",0,6500,500,2500,`/**/`," "," ","","");</script>
  <!-- <input type="text" value="3000" id="timeValue" style="width: 30px;"> -->
  &nbsp;<input type="text" value="1000" id="timeValue1" style="width: 28px; display:none;"></span>&nbsp;
 </span>
 c: <span id="pasadas"></span>&nbsp;

 <span class="oke">ok: <span id="ok">0</span>&nbsp;</span>
 <span class="oke">E: <span id="error">0</span>&nbsp;</span>
&nbsp;

%: 
<span id="rndPorcentaje-span"></span><script type="text/javascript">_newSel("rndPorcentaje",10,105,5,30,`/*getPage(this.value);*/`," "," ","","");</script>
<!-- <input type="text" value="20" id="rndPorcentaje" style="width: 25px;">&nbsp;  -->
<? @include "otherNback.php"; ?>
<a href="#" onclick="alert('Read N-Back\To learn the n-back trainning go to http://brainworkshop.sourceforge.net/tutorial.html\n%: is the probability of elements repetition\nColor n-back = 0 (color is desactivated)\nThis software is experimental and may contain errors.\nLicense: MIT\nSource Code: https://github.com/vernetit/readnback\nContact: robertchalean@gmail.com');">?</a>
&nbsp;<div class="fb-share-button" data-href="http://competicionmental.appspot.com/router?page=rnback3" data-layout="button_count" style="float: right;"></div>
</div> <!-- Fin Controles -->
<br>
<!-- Canvas - Resultados -->
<div>
<div style=""   id="controls-l"></div>
<div id="cnv111">
  <div id="canvas" style=" height: 600px; background-color: white; z-index: 1000;"> <!-- #eee;" > -->
     <center>
       <table border="1" id="myTable">
         <tr style="height: 190px;">
           <td  style="width: 290px;"><div id="d00"></div></td>
           <td  style="width: 290px;"><div id="d10"></div></td>
           <td  style="width: 290px;"><div id="d20"></div></td>
         </tr>
          <tr style="height: 190px;">
           <td  style="width: 290px;"><div id="d01"></div></td>
           <td  style="width: 290px;"><div id="d11"></div></td>
           <td  style="width: 290px;"><div id="d21"></div></td>
         </tr>
          <tr style="height: 190px;">
           <td  style="width: 290px;"><div id="d02"></div></td>
           <td  style="width: 290px;"><div id="d12"></div></td>
           <td  style="width: 290px;"><div id="d22"></div></td>
         </tr>
       </table>
     </center>
  </div>
</div>
<div style="" id="controls-r"></div>

 <!-- Fin Canvas - Resultados -->
<div style="clear: both"></div>
<!-- Botonera -->
<br>
<center>
<div id="controls-div" style="width:700px;">

<input type="button" value="A: Loci Match" id="pm" style="font-size: 20px; zoom: 1.2;">
<input type="button" value="L: Color Match" id="sm" style="font-size: 20px; zoom: 1.2; /*display:none;*/">


</div>
</center>


<div style="clear: both"></div>
<div id="results"></div>
<br><br>
<div id="control" style="margin-left:150px;">
    <input  type="button" value="start" onclick="play1();" id="play-btn" style="display:none;">
    <input  type="button" value="stop" onclick="stopFlash();" style="display:none;">
    <input type="button" value="clearTxt" onclick="$('#input1').val(''); stopFlash();" style="display: none;">


    <select id="velocityFlash" style="width: 75px;" onchange="calcularTiempo();">   
      <option value="50">50wpm</option>
      <option value="60">60wpm</option>
      <option value="75">75wpm</option>
      <option value="100">100wpm</option>
      <option value="125">125wpm</option> 
      <option value="150">150wpm</option>
      <option value="175">175wpm</option>
      <option value="200" selected>200wpm</option>
      <option value="225">225wpm</option>
      <option value="250" >250wpm</option>
      <option value="275">275wpm</option>
      <option value="300">300wpm</option>
      <option value="325">325wpm</option>
      <option value="350">350wpm</option>
      <option value="375">375wpm</option>
      <option value="400">400wpm</option>
      <option value="425">425wpm</option>
      <option value="450">450wpm</option>
      <option value="475">475wpm</option>
      <option value="500">500wpm</option>
      <option value="525">525wpm</option>
      <option value="550">550wpm</option>
      <option value="575">575wpm</option>
      <option value="600">600wpm</option>
      <option value="625">625wpm</option>
      <option value="650">650wpm</option>
      <option value="675">675wpm</option>
      <option value="700">725wpm</option>
      <option value="725">700wpm</option>
      <option value="750">750wpm</option>
      <option value="775">775wpm</option>
      <option value="800">800wpm</option>
      <option value="825">825wpm</option>
      <option value="850">850wpm</option>
      <option value="875">875wpm</option>
      <option value="900">900wpm</option>
      <option value="925">925wpm</option>
      <option value="950">950wpm</option>
      <option value="975">975wpm</option>
      <option value="1000">1000wpm</option>
      <option value="1100">1100wpm</option>
      <option value="1200">1200wpm</option>
      <option value="1500">1500wpm</option>
    </select>
    
    <select id="wordsByFlash" onchange="wordsByFlash=n('wordsByFlash');" style="display: none;">   
      <option value="1"  selected>1w</option>
      <option value="2">2w</option>
      <option value="3">3w</option>
      <option value="4" >4w</option>
      <option value="5">5w</option>
      <option value="6">6w</option>
      <option value="7">7w</option>
    </select>
    <select id="readingMode" onchange="bLugar=1; circleFase=0; readingMode=n('readingMode');" style="display:none;">   
      <option value="1" selected>left-right</option>
      <option value="2">up-down</option>
      <option value="3">circle</option>
      <option value="4">circle inv</option>
      <option value="5">random Circle</option>
      <option value="6">center</option>
      <option value="7">Square</option>
      <option value="8">Cross</option>
      <option value="9">Random Square</option>
      <!--<option value="6">center</option>-->
    </select>
   <!--  <textarea rows="1" cols="25" style="margin-top: 5px;" id="input1">Para Sherlock Holmes ella es siempre la mujer. Rara vez he oído que la mencione por otro nombre. A sus ojos, ella eclipsa al resto del sexo débil. No es que haya sentido por Irene Adler una emoción que pueda compararse al amor. Todas las emociones, y ésa particularmente, son opuestas a su mente fría, precisa, pero admirablemente equilibrada. Es, puedo asegurarlo, la máquina de observación y razonamiento más perfecta que el mundo ha visto; pero como amante, como enamorado, Sherlock Holmes había estado en una posición completamente falsa. Jamás hablaba de las pasiones, aun de las más suaves, sin un dejo de burla y desprecio. Eran cosas admirables para el observador... excelentes para recorrer el velo de los motivos y acciones de los hombres. Pero para el razonador preparado, admitir tales intromisiones en su propio temperamento, cuidadosamente ajustado, era introducir un factor que distraería y descompensaría todos los delicados resultados mentales. Una basura en un instrumento sensitivo o una grieta en un lente finísimo, no habría sido más perjudicial que una emoción intensa en una naturaleza como la suya. Y, sin embargo, para él no hubo más que una mujer, y esa mujer fue la difunta Irene Adler, de dudosa y turbia memoria.
  Había visto poco a Holmes últimamente. Mi matrimonio nos había alejado. Mi propia felicidad y los intereses domésticos que surgén alrededor del hombre que se encuentra por primera vez convertido en amo y señor de su casa, eran suficientes para absorber toda mi atención; mientras que Holmes, que odiaba cualquier forma de sociedad con toda su alma de bohemio, permaneció en nuestras habitaciones de Baker Street, sumergido entre sus viejos libros y alternando, de semana en semana, entre la cocaína con la ambición, la somnolencia de la droga con la feroz energía de su propia naturaleza inquieta. Continuaba, como siempre, profundamente interesado en el estudio del crimen y ocupando sus inmensas facultades y sus extraordinarios poderes de observación en seguir las pistas y aclarar los misterios que habían sido abandonados por la policía oficial, como casos desesperados. De vez en cuando escuchaba algún vago relato de sus hazañas: su intervención en el caso del asesinato Trepoff, en Odessa; su solución en la singular tragedia de los hermanos Atkinson, en Trincomalee, y, finalmente, en la misión que había realizado, con tanto éxito, para la familia reinante de Holanda. Sin embargo, más allá de estas muestras de actividad, que me concretaba a compartir con todos los lectores de la prensa diaria, sabía muy poco de mi antiguo amigo y compañero.
  Una noche -fue el 20 de marzo de 1888- volvía de visitar a un paciente (había vuelto al ejercicio de mi profesión como médico civil), cuando mi recorrido de regreso a casa me obligó a pasar por Baker Street. Al pasar por aquella puerta tan familiar para mí, que siempre estará asociada en mi mente a la época de mi noviazgo y a los oscuros incidentes del Estudio en escarlata, me sentí invadido por un intenso deseo de ver a Holmes y de saber cómo estaba empleando, ahora, sus extraordinarias facultades. Sus habitaciones estaban brillantemente iluminadas. Al levantar la mirada hacia ellas, noté su figura alta y esbelta pasar dos veces, convertida en negra silueta, cerca de la cortina. Estaba recorriendo la habitación rápida, ansiosamente, con la cabeza sumida en el pecho y las manos unidas a la espalda. Para mí, que conocía a fondo cada uno de sus hábitos y de sus estados de ánimo, su actitud y su comportamiento eran reveladores. Estaba trabajando de nuevo. Se había sacudido de sus ensueños toxicómanos y estaba sobre la pista candente de algún nuevo caso. Toqué la campanilla y fui conducido a la sala que por tanto tiempo compartí con Sherlock.
  No fue muy efusivo. Rara vez lo era; pero creo que se alegró de verme. Casi sin decir palabra, aunque con los ojos brillándole bondadosamente, me indicó un sillón, me arrojó su cajetilla de cigarrillos y señaló hacia una botella de whisky y un sifón que había encima de una cómoda. Entonces se puso de pie frente al fuego y me miró con el detenimiento tan peculiar de él.  
  </textarea> -->
  <!-- <input type="button" value="colors on/off" onclick="bColors=!bColors;"> -->
  <!--<input  type="button" value="cw" onclick="bCW=!bCW;">-->
  <!-- <input type="button" value="rc" onclick="if(bColors==0){ bColors=1; } bRc=!bRc; clearTimeout(killIntervalRc);"> -->
  <select onchange="cambiarColores(this.value);" id="colors-select" style="width: 65px; display:none;">
    <option value="1">Green</option>
    <option value="2">Blue</option>
    <option value="3">Gray</option>
    <option value="4">Color Alphabet</option>
    <option value="5">Random colors</option>
  </select>
  <select onchange="cambiarTransformation(this.value);" id="transform-select" style="width: 90px; display:none;">
    <option value="1">noTransform</option>
    <option value="2">up-down</option>  
    <option value="3">right to left</option>  
    <!--<option value="4">All previous</option> -->
    <option value="4">Skew</option> 
    <option value="5">Random Skew</option>  
  </select>
  <? $exp=1; if(isset($_GET["exp"])){ $exp=intval($_GET["exp"]); } ?>
  <select id="experiment-select" onchange="clearInterval(kill6); myExperiment=n('experiment-select');" style="display:none;">   
      <option value="1" <?=$exp==1?"selected":""?>>noExperiment</option>
      <option value="2" <?=$exp==2?"selected":""?>>longWordsPause</option>
      <option value="3" <?=$exp==3?"selected":""?>>temporaryHideLetters</option>
      <option value="4" <?=$exp==4?"selected":""?>>PeripheralVisionSquare</option>
      <option value="5" <?=$exp==5?"selected":""?>>PeripheralVisionCross</option>
      <option value="6" <?=$exp==6?"selected":""?>>PeripheralVisionLeftRight</option>
      <option value="7" <?=$exp==7?"selected":""?>>PeripheralVisionUpDown</option>
      <option value="8" <?=$exp==8?"selected":""?>>vibration</option>
      <option value="9" <?=$exp==9?"selected":""?>>emotion</option>
      <option value="10" <?=$exp==10?"selected":""?>>face</option>
    </select>
  <input  type="button" value="?" onclick="alert('To put the words more close adjust the window width.\ncontact: robertchalean@gmail.com');">
   <span id="stats" style="font-size: 12px;"></span>
  </div>
<textarea rows="3" cols="100" style="margin-top: 5px;" id="input1">Para Sherlock Holmes ella es siempre la mujer. Rara vez he oído que la mencione por otro nombre. A sus ojos, ella eclipsa al resto del sexo débil. No es que haya sentido por Irene Adler una emoción que pueda compararse al amor. Todas las emociones, y ésa particularmente, son opuestas a su mente fría, precisa, pero admirablemente equilibrada. Es, puedo asegurarlo, la máquina de observación y razonamiento más perfecta que el mundo ha visto; pero como amante, como enamorado, Sherlock Holmes había estado en una posición completamente falsa. Jamás hablaba de las pasiones, aun de las más suaves, sin un dejo de burla y desprecio. Eran cosas admirables para el observador... excelentes para recorrer el velo de los motivos y acciones de los hombres. Pero para el razonador preparado, admitir tales intromisiones en su propio temperamento, cuidadosamente ajustado, era introducir un factor que distraería y descompensaría todos los delicados resultados mentales. Una basura en un instrumento sensitivo o una grieta en un lente finísimo, no habría sido más perjudicial que una emoción intensa en una naturaleza como la suya. Y, sin embargo, para él no hubo más que una mujer, y esa mujer fue la difunta Irene Adler, de dudosa y turbia memoria.
Había visto poco a Holmes últimamente. Mi matrimonio nos había alejado. Mi propia felicidad y los intereses domésticos que surgén alrededor del hombre que se encuentra por primera vez convertido en amo y señor de su casa, eran suficientes para absorber toda mi atención; mientras que Holmes, que odiaba cualquier forma de sociedad con toda su alma de bohemio, permaneció en nuestras habitaciones de Baker Street, sumergido entre sus viejos libros y alternando, de semana en semana, entre la cocaína con la ambición, la somnolencia de la droga con la feroz energía de su propia naturaleza inquieta. Continuaba, como siempre, profundamente interesado en el estudio del crimen y ocupando sus inmensas facultades y sus extraordinarios poderes de observación en seguir las pistas y aclarar los misterios que habían sido abandonados por la policía oficial, como casos desesperados. De vez en cuando escuchaba algún vago relato de sus hazañas: su intervención en el caso del asesinato Trepoff, en Odessa; su solución en la singular tragedia de los hermanos Atkinson, en Trincomalee, y, finalmente, en la misión que había realizado, con tanto éxito, para la familia reinante de Holanda. Sin embargo, más allá de estas muestras de actividad, que me concretaba a compartir con todos los lectores de la prensa diaria, sabía muy poco de mi antiguo amigo y compañero.
Una noche -fue el 20 de marzo de 1888- volvía de visitar a un paciente (había vuelto al ejercicio de mi profesión como médico civil), cuando mi recorrido de regreso a casa me obligó a pasar por Baker Street. Al pasar por aquella puerta tan familiar para mí, que siempre estará asociada en mi mente a la época de mi noviazgo y a los oscuros incidentes del Estudio en escarlata, me sentí invadido por un intenso deseo de ver a Holmes y de saber cómo estaba empleando, ahora, sus extraordinarias facultades. Sus habitaciones estaban brillantemente iluminadas. Al levantar la mirada hacia ellas, noté su figura alta y esbelta pasar dos veces, convertida en negra silueta, cerca de la cortina. Estaba recorriendo la habitación rápida, ansiosamente, con la cabeza sumida en el pecho y las manos unidas a la espalda. Para mí, que conocía a fondo cada uno de sus hábitos y de sus estados de ánimo, su actitud y su comportamiento eran reveladores. Estaba trabajando de nuevo. Se había sacudido de sus ensueños toxicómanos y estaba sobre la pista candente de algún nuevo caso. Toqué la campanilla y fui conducido a la sala que por tanto tiempo compartí con Sherlock.
No fue muy efusivo. Rara vez lo era; pero creo que se alegró de verme. Casi sin decir palabra, aunque con los ojos brillándole bondadosamente, me indicó un sillón, me arrojó su cajetilla de cigarrillos y señaló hacia una botella de whisky y un sifón que había encima de una cómoda. Entonces se puso de pie frente al fuego y me miró con el detenimiento tan peculiar de él.  
</textarea>
<br>
<span id="control2">
book
<select id="book" onchange="getRndTxt();" style="width: 100px;"></select>
  <script type="text/javascript">
    
    lib=`01 - Harry Potter y la Piedra Filosofal.html|aleph.html|Elsenordelosanillos.html|boys dont cry.html|Haruki Murakami - Kafka en la Orilla.html|divergente.html|HarukiMurakami.DeQueHAbloCuandoHabloDeCorrer.html|el capital en el siglo xxi - piketty thomas.html|Homero.LaIliada1.html|hp3.html|La Torre Oscura I.html|hp3e.html|La conjura de los necios.html||Rayuela_libro.html|The 4-Hour Body.html|rae.html|William Gibson - Neuromante.html|rand ayn - el manantial.html`;

    <?

      function explora_ruta($ruta){
          
          $cadena = "";
          $manejador = @dir($ruta);
          
          while ($recurso = $manejador->read()){
          
              $nombre = "$recurso";
             
            if(stripos($nombre,".html")>2){
            
            
              $cadena .= "$nombre|";

              
              
              
            }
          }
          $manejador->close();
          return $cadena;
      }

      $ruta = "libros/";


        //Si la ruta es vacia, pone la del presente script
        if ($ruta == "") $ruta = "libros/";

        $presenta_nodos = "";
        $presenta_archivo = "";

        //Si la ruta es una carpeta, la exploramos. Si es un archivo
        //sacamos tambi�n el contenido del archivo.

        if (is_dir($ruta)){//ES UNA CARPETA
          
            $presenta_nodos = explora_ruta($ruta);
        } 

      ?>

      lib="<?=$presenta_nodos?>";



    lib=lib.split("|");

    for(let i=0;i<lib.length-1;i++){
      $("#book").append(`<option value="${lib[i]}">${lib[i]}</option>`)
    }

    $("#book").val("aleph2.html")
     <? if(isset($_GET["en"])){ ?> 
     $("#book").val("hp3e.html") 

     <? } ?>
  </script>
  
    page
   <span id="myPage-span"></span><script type="text/javascript">_newSel("myPage",1,100,1,0,`getPage(this.value);`," "," ","","");</script>
<input type="button" value="clearTxt" onclick="$('#input1').val(''); stopFlash();" style="display:none;">
<input type="button" value="getRandomTxt" onclick="getRndTxt();" id="rnd-btn">
</span>
<div id="preload"></div><br>
<div id="test"></div>

<div id="footer" style="height: 300px; width:100%;">

<div style="float: left; width: 50%; height: 250px; font-size: 50px;" id="footer-l"><br><center>A</center></div>
<div style="float: left; width: 50%; height: 250px; font-size: 50px;" id="footer-r"><br><center>R</center></div> 
  
</div>
<div id="div-br">
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<script src='js/app/rnback4.js'></script>

<script type="text/javascript">

   // r="100";
   // x=0;

   // for(;;){
   //  a=_.random(1,99);
   //  b=_.random(1,99);

   //  if(a+b==100){

   //    console.log(a+"+"+b);
   //    x++;
   //  }  
   //  if(x==100) break;

   // } 

   if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) || $(window).width()<900 ) {
     // run your code here
     $("#myOther").hide();

    }

    <? if(isset($_GET["en"])){ ?>  

    textoEn = `To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer--excellent for drawing the veil from mens motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.
    I had seen little of Holmes lately. My marriage had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the man who first finds himself master of his own establishment, were sufficient to absorb all my attention, while Holmes, who loathed every form of society with his whole Bohemian soul, remained in our lodgings in Baker Street, buried among his old books, and alternating from week to week between cocaine and ambition, the drowsiness of the drug, and the fierce energy of his own keen nature. He was still, as ever, deeply attracted by the study of crime, and occupied his immense faculties and extraordinary powers of observation in following out those clues, and clearing up those mysteries which had been abandoned as hopeless by the official police. From time to time I heard some vague account of his doings: of his summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which he had accomplished so delicately and successfully for the reigning family of Holland.
    Beyond these signs of his activity, however, which I merely shared with all the readers of the daily press, I knew little of my former friend and companion.
    One night--it was on the twentieth of March, 1888--I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through Baker Street. As I passed the
    well-remembered door, which must always be associated in my mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized with a keen desire to see Holmes again, and to
    know how he was employing his extraordinary powers.
    His rooms were brilliantly lit, and, even as I looked up, I saw his tall, spare figure pass twice in a dark silhouette against the blind. He was pacing the room swiftly, eagerly, with his head sunk
    upon his chest and his hands clasped behind him. To me, who knew his every mood and habit, his attitude and manner told their own story. He was at work again. He had risen out of his drug-created
    dreams and was hot upon the scent of some new problem. I rang the bell and was shown up to the chamber which had formerly been in part my own.
    His manner was not effusive. It seldom was; but he was glad, I think, to see me. With hardly a word spoken, but with a kindly eye, he waved me to an armchair, threw across his case of cigars, and
    indicated a spirit case and a gasogene in the corner. Then he stood before the fire and looked me over in his singular introspective fashion.
    `;

    $("#input1").val(textoEn);


    <? } ?>
    $("#menos1").click(); $("#menos1").click();

 //    textoEn="To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes";
 // $("#input1").val(textoEn);

getRndTxt();
</script>


</body>
</html>