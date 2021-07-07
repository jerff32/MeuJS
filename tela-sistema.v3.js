$(document).ready(function(){
  $('#letra-zoom').each(function() {
      var texto = $(this).html();
      var dv1 = '<hr id="DV1" />';
      var envenenamento = '<img class="alignnone wp-image-81823" src="https://vulcannovel.com.br/wp-content/uploads/2021/03/envenenamento-300x57.png" alt="" width="128" height="29" />';
      var sangr = '<img class="alignnone wp-image-80472" src="https://vulcannovel.com.br/wp-content/uploads/2021/03/sangramento-1-300x80.png" alt="" width="134" height="35" />';
      var dv2 = '<hr id="DV2" />';
      var dv3 = '<hr id="DV3" />';
      var dv4 = '<hr id="DV4" />';
      var dv5 = '<hr id="DV5" />';
      var dv6 = '<hr id="DV6" />';
      var dv7 = '<hr id="DV7" />';
      var dv8 = '<hr id="DV8" />';
      var dv9 = '<hr id="DV9" />';
      var dv10 = '<hr id="DV10" />';
       var dv11 = '<hr id="DV11" />';
        var dv12 = '<hr id="DV12" />';
         var dv13 = '<hr id="DV13" />';
          var dv14 = '<hr id="DV14" />';
           var dv15 = '<hr id="DV15" />';
            var dv16 = '<hr id="DV16" />';
             var dv17 = '<hr id="DV17" />';
              var dv18 = '<hr id="DV18" />';
               var dv19 = '<hr id="DV19" />';
                var dv20 = '<hr id="DV20" />';
                var dv21 = '<hr id="DV21" />';
                var dv22 = '<hr id="DV22" />';
                var dv23 = '<hr id="DV23" />';
                var dv24 = '<hr id="DV24" />';
                var dv25 = '<hr id="DV25" />';
                var dv26 = '<hr id="DV26" />';
                var dv27 = '<hr id="DV27" />';
                var dv28 = '<hr id="DV28" />';
                var dv29 = '<hr id="DV29" />';
                var dv30 = '<hr id="DV30" />';
                var dv31 = '<hr id="DV31" />';
                var dv32 = '<hr id="DV32" />';
                var dv33 = '<hr id="DV33" />';
                var dv34 = '<hr id="DV34" />';
                var dv35 = '<hr id="DV35" />';
                var dv36 = '<hr id="DV36" />';
                var dv37 = '<hr id="DV37" />';
                var dv38 = '<hr id="DV38" />';
                var dv39 = '<hr id="DV39" />';
                var dv40 = '<hr id="DV40" />';
                var dv41 = '<hr id="DV41" />';
                
                
      var st00 = '<div id="SYS0"><hr id="DVZZ" />';
      var stt00 = '<div id="SYS0" class="CINZA"><hr id="DVZZ1" />';
       var stt01 = '<div id="SYS0" class="COR"><hr id="DVZZ" />';
       var stt02 = '<div id="SYS0" class="VERMELHO"><hr id="DVZZ" />';
       var stt03 = '<div id="SYS0" class="VERDE"><hr id="DVZZ" />';
        var stt04 = '<div id="SYS0" class="VERMELHO"><hr id="DVSEN" />';
var st01 = '<hr id="DVZX" /></div>';
var st011 = '<hr id="DVZX1" /></div>';
var st02 = '<hr id="DVSEN1" /></div>' 
     var azul = '<div id="SYS0" class="AZUL"><hr id="DVBLU" />'
     var Over = '<div id="SYS0" class="OVER"><hr id="DVBLU" />'
     var Ouro = '<div id="SYS0" class="OURO"><hr id="DVBLU" class="Dourado" />'
      var Vermelho1 = '<div id="SYS0" class="VERMELHO1"><hr id="Vermelho1" />'
      
      var Esverdeado = '<div id="SYS0" class="Verde4"><hr id="DVBLU" class="Esverdeado" />'
      var Dragao = '<div id="SYS0" class="Draco"><hr id="DRG1" />'
      var Dragao_Fim = '<hr id="DRG2" /></div>'
      $(this).html(texto.replace(/#01#/g, dv1).replace(/\[themoneytizer id=”35847-1″\]|\[themoneytizer id=”35847-28″]|\[themoneytizer id=”35847-19″]|\[themoneytizer id=”35847-16″]|\[themoneytizer id=”35847-2″]|\[themoneytizer id=”35847-3″]/g, ' ').replace(/#envenenamento#/g, envenenamento).replace(/#sangramento#/g, sangr).replace(/#02#/g, dv2).replace(/#03#/g, dv3).replace(/#04#/g, dv4).replace(/#05#/g, dv5).replace(/#06#/g, dv6).replace(/#07#/g, dv7).replace(/#08#/g, dv8).replace(/#09#/g, dv9).replace(/#10#/g, dv10).replace(/#11#/g, dv11).replace(/#12#/g, dv12).replace(/#13#/g, dv13).replace(/#14#/g, dv14).replace(/#15#/g, dv15).replace(/#16#/g, dv16).replace(/#17#/g, dv17).replace(/#18#/g, dv18).replace(/#19#/g, dv19).replace(/#20#/g, dv20).replace(/#21#/g, dv21).replace(/#22#/g, dv22).replace(/#23#/g, dv23).replace(/#24#/g, dv24).replace(/#25#/g, dv25).replace(/#26#/g, dv26).replace(/#27#/g, dv27).replace(/#28#/g, dv28).replace(/#29#/g, dv29).replace(/#30#/g, dv30).replace(/#sistema#/g, st00).replace(/#sistema-fim#/g, st01).replace(/#sistema-escuro#/g, stt00).replace(/#sistema-cor#/g, stt01).replace(/#sistema-red#/g, stt02).replace(/#sistema-verde#/g, stt03).replace(/#31#/g, dv31).replace(/#32#/g, dv32).replace(/#33#/g, dv33).replace(/#34#/g, dv34).replace(/#35#/g, dv35).replace(/#36#/g, dv36).replace(/#37#/g, dv37).replace(/#38#/g, dv38).replace(/#39#/g, dv39).replace(/#40#/g, dv40).replace(/#41#/g, dv41).replace(/#sistema-sen#/g, stt04).replace(/#fim-sen#/g, st02).replace(/#escuro-fim#/g, st011).replace(/#sistema-azul#/g, azul).replace(/#azul-fim#|#over-fim#|#ouro-fim#|#vermelho-fim#|#esverdeado-fim#/g, '</div>').replace(/#sistema-over#/g, Over).replace(/#sistema-ouro#/g, Ouro).replace(/#sistema-vermelho#/g , Vermelho1).replace(/#sistema-esverdeado#/g, Esverdeado).replace(/\/">Capítulo Anterior<\/a>|">Capítulo Anterior<\/a>/g, '/" id="OCULTO">Capítulo Anterior</a>').replace(/\/">Próximo Capítulo<\/a>|">Próximo Capítulo<\/a>/g, '/" id="OCULTO">Próximo Capítulo</a>').replace(/#sistema-cell#/g, '<div id="sistema-celular"><div id="screen"><div id="tela-celular"><div class="txt">').replace(/#cell-fim#/g, '</div></div></div><div id="button"></div><div id="speaker"></div><div id="camera"></div></div>').replace(/#sistema-draco#/g, Dragao).replace(/#draco-fim#/g, Dragao_Fim)
      
      
      
      
      ); });});
document.getElementById("botao").addEventListener("click", function(){

document.getElementById("texto").select();

document.execCommand('copy');
  
  });
  document.getElementById("botao1").addEventListener("click", function(){

document.getElementById("texto1").select();

document.execCommand('copy');
  
  });function msg() {
  $("#mensagem").addClass('ver');
  setTimeout(function() {$("#mensagem").removeClass('ver'); }, 3000);
};function msg2() {
  $("#mensagem2").addClass('ver');
  setTimeout(function() {$("#mensagem2").removeClass('ver'); }, 3000);
};
