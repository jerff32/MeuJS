 jQuery(document).ready(function($) {
var xd = '<div class="novel_bloco"> <div class="novel_cartao"> <img src="';
var dx = '</titulo_novel> </a> </div>';

var novels = [
' IMG >> [/wp-content/uploads/2021/03/TLM-450x600-1.jpg] LINK >> [tlm-the-legendary-mechanic] NOME >> [The Legendary Mechanic',
' IMG >> [/wp-content/uploads/2021/04/Ned.jpg] LINK >> [/nascimento-da-espada-demoniaca-ned/] NOME >> [Nascimento da Espada Demoníaca',
' IMG >> [/wp-content/uploads/2021/03/MP-3x4-1.jpg] LINK >> [/mpe-monster-pet-evolution/] NOME >> [Monster Paradise',
' IMG >> [/wp-content/uploads/2021/03/EGP-3x4-1.jpg] LINK >> [/the-evolution-of-a-goblin-to-the-peak-egp/] NOME >> [The Evolution of a Goblin to the Peak',
' IMG >> [/wp-content/uploads/2021/03/MDS-3x4-1.jpg] LINK >> [/my-dragon-system-mds/] NOME >> [My Dragon System',
' IMG >> [/wp-content/uploads/2021/02/NR  3x4.jpg] LINK >> [/nr-nanomancer-reborn-index/] NOME >> [Nanomancer Reborn',
' IMG >> [/wp-content/uploads/2021/03/Tutorial-3x4-1.jpg] LINK >> [/ttd-o-tutorial-e-tao-dificil/] NOME >> [O Tutorial é Tão Difícil',
' IMG >> [/wp-content/uploads/2021/06/SHS_300px.jpg] LINK >> [/summoning-the-holy-sword-shs/] NOME >> [Summoning the Holy Sword',
' IMG >> [/wp-content/uploads/2021/03/NV1-3x4-1.jpg] LINK >> [/esqueleto-nv1/] NOME >> [Esqueleto Nível 1',
' IMG >> [/wp-content/uploads/2021/02/SUD  3x4.jpg] LINK >> [/o-sistema-do-ultimo-desejo-sud/] NOME >> [Sistema do Último Desejo',
' IMG >> [/wp-content/uploads/2021/07/MCK.jpg] LINK >> [/mck-mestre-cacador-k/] NOME >> [Mestre Caçador K',
' IMG >> [/wp-content/uploads/2021/02/SBS  3x4.jpg] LINK >> [o-mundo-dos-sistemas-sbs/] NOME >> [O Mundo dos Sistemas',
' IMG >> [/wp-content/uploads/2021/06/MPE-300px.jpg] LINK >> [/mpe-monster-pet-evolution/] NOME >> [Monster Pet Evolution',
' IMG >> [/wp-content/uploads/2021/02/RML  3x4.jpg] LINK >> [/rml-realm-of-myths-and-legends/] NOME >> [Realm of Myths and Legends',
' IMG >> [/wp-content/uploads/2021/06/KOC_300px.jpg] LINK >> [/koc-knight-of-chaos/] NOME >> [Knight of Chaos',
' IMG >> [/wp-content/uploads/2021/03/PTO-3x4-1.jpg] LINK >> [/pto-exaltem-o-orc/] NOME >> [Exaltem o Orc!',
' IMG >> [/wp-content/uploads/2021/02/OSI  3x4.jpg] LINK >> [/osi-o-sistema-incubo/] NOME >> [Sistema Íncubo',
' IMG >> [/wp-content/uploads/2021/03/HC-1.jpg] LINK >> [/hc-homicida-convocado/] NOME >> [Homicida Convocado',
' IMG >> [/wp-content/uploads/2021/03/STAE-3x4-1.jpg] LINK >> [/sistema-de-tecnologia-avancada-do-estudioso/] NOME >> [Sistema de Tecnologia Avançada do Estudioso',
' IMG >> [/wp-content/uploads/2021/03/SFF-3x4-1.jpg] LINK >> [/pare-fogo-amigo-sff/] NOME >> [Stop, Friendly Fire',
' IMG >> [/wp-content/uploads/2021/02/PD 3x4.jpg] LINK >> [/pd-plague-doctor/] NOME >> [Plague Doctor',
' IMG >> [/wp-content/uploads/2021/06/Kalui_300px.jpg] LINK >> [kalui] NOME >> [Kalui',
' IMG >> [/wp-content/uploads/2021/03/DV-3x4-1.jpg] LINK >> [/ds-destino-subvertido/] NOME >> [Destino Subvertido',
' IMG >> [/wp-content/uploads/2021/04/08.jpg] LINK >> [/creating-your-rebirth-cyr/] NOME >> [Creating Your Rebirth',
' IMG >> [/wp-content/uploads/2021/04/10.jpg] LINK >> [/tr-tower-ranker/] NOME >> [Tower Ranker',
' IMG >> [/wp-content/uploads/2021/02/Makai 3x4.jpg] LINK >> [/makai-hongi-mh/] NOME >> [Makai Hongi',
' IMG >> [/wp-content/uploads/2021/04/16.jpg] LINK >> [/eu-reencarnei-em-uma-maquina-de-vendas-rmv/] NOME >> [Eu Reencarnei em Uma Máquina de Vendas',
' IMG >> [/wp-content/uploads/2021/07/Jack1.jpg] LINK >> [/jack-park-e-o-misterio-das-realidades-alternativas/] NOME >> [Jack Park e o Mistério das Realidades Alternativas',
' IMG >> [/wp-content/uploads/2021/04/23.jpg] LINK >> [/grimgar-de-fantasia-e-cinzas-gfc/] NOME >> [Hai to Gensou no Grimgar',
' IMG >> [/wp-content/uploads/2021/03/MPS-3x4-1.jpg] LINK >> [/my-pick-up-artist-system-mps/] NOME >> [My Pick Up Artist System',
' IMG >> [/wp-content/uploads/2021/02/DT 3x4.jpg] LINK >> [/dt-dungeon-tale/] NOME >> [Dungeon Tale',
' IMG >> [/wp-content/uploads/2021/04/MAI-300.jpg] LINK >> [/mai-o-mago-do-arco-iris-retorna/] NOME >> [Mago do Arco-Íris',
' IMG >> [/wp-content/uploads/2021/05/CE-300px.jpg] LINK >> [/ce-corvo-escarlate] NOME >> [Corvo Escarlate',
' IMG >> [/wp-content/uploads/2021/05/TOB-300px.jpg] LINK >> [/tob-tales-of-blood/] NOME >> [Tales of Blood',
' IMG >> [/wp-content/uploads/2021/06/LDD-300px.jpg] LINK >> [/lenda-de-demonios-e-deidades-ldd/] NOME >> [Lendas de Demônios e Deidades',
' IMG >> [/wp-content/uploads/2021/05/ROC.jpg] LINK >> [/roc-return-of-chaos/] NOME >> [Return of Chaos',
' IMG >> [/wp-content/uploads/2021/06/RAC-_300px.jpg] LINK >> [/rac-rei-do-abismo-convocado] NOME >> [Rei do Abismo Convocado',
' IMG >> [/wp-content/uploads/2021/06/OUR-300px.jpg] LINK >> [/our-o-ultimo-rei/] NOME >> [O Ultimo Rei',
' IMG >> [/wp-content/uploads/2021/04/sws-300px.jpg] LINK >> [/sws-sky-way-slides/] NOME >> [Sky Way: Sides',
' IMG >> [/wp-content/uploads/2021/02/SDEG  3x4.png] LINK >> [/sistema-divino-a-evolucao-de-um-gatinho-sdeg/] NOME >> [Sistema Divino: A Evolução de Um Gatinho',
' IMG >> [/wp-content/uploads/2021/07/GB.jpg] LINK >> [/gb-glutton-berserker-index/] NOME >> [Glutton Berserker',
' IMG >> [/wp-content/uploads/2021/04/14.jpg] LINK >> [/sun-eu-sou-o-unico-necromante/] NOME >> [Eu Sou o Único Necromante',
' IMG >> [/wp-content/uploads/2021/05/UC_300px.jpg] LINK >> [/uc-upando-comendo/] NOME >> [Upando Comendo',
' IMG >> [/wp-content/uploads/2021/04/RGK-1.jpg] LINK >> [/rise-of-the-godking-rgk/] NOME >> [Rise of The Godking'
]
const rps = novels[Math.floor(Math.random()*novels.length)].replace('] LINK >> [',' /> <a href="').replace('] NOME >> [','"> <titulo_novel>').replace(' IMG >> [', '')

$("#Recomendar").replaceWith(xd+rps+dx).css("display", "block");
 $('#rcmdc').css('box-shadow', 'inset 0 0 15px black').css('background', '#00000026');
 });
