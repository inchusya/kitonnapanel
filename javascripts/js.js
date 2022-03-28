$(document).ready(function(){
setTimeout(function(){
  $(".alarm").css("display","block");
},60000);
});

$(document).ready(function(){
setTimeout(function(){
  $(".alarm2").css("display","block");
},30000);
});

$(function () {
let count = 0;
$(".alarm2,.alarmtext2").click(function () {
count += 1;
if (count == 1) {
$(".alarm2, .alarmtext2").css("display", "none");
}
});
});




// $(function () {
// let count = 0;
// $(".alarm,.alarmtext").click(function () {
// count += 1;
// if (count == 1) {
// $(".alarm, .alarmtext").css("display", "none");
// }
// });
// });


$(function(){
$(".s1, .s2, .s3, .s4, .s5, .s6, .circle1img ").click(function(){
$(this).toggleClass("white")
});
});


$( function() {
    $( ".triangle" ).draggable({containment: "parent"});
    $( ".inlever, .inbar" ).draggable({ axis: "y", containment: "parent"});
    $( ".dropbar" ).draggable({ axis: "x", containment: "parent"});
  } );




var num1 = 0;

$(function(){
$(".dropbar2").click(function(){
  num1 += 30;
  var str = "rotate(" + num1 + "deg)"
$(this).css("transform", str);
$(this).css("-webkit-transform", str);
$(this).css("-ms-transform", str);
});
});

var num2 = 0;

$(function(){
$(".dropbar3").click(function(){
  num2 += 30;
  var str = "rotate(" + num2 + "deg)"
$(this).css("transform", str);
$(this).css("-webkit-transform", str);
$(this).css("-ms-transform", str);

});
});

let xPrev = 0;
    jQuery(document).ready(function(){

       $(document).mousemove(function(e){
           xPrev<e.pageX ? $(".vor2 wrn2").html("right") : $(".vor2 wrn2").html("left");
           xPrev<e.pageX ? $(".Rtt").html("Rtt") : $(".Rtt").html("Rtstwk");
           xPrev<e.pageX ? $(".p125").html("p125/43      23") : $(".p125").html("p125/39      141");
           xPrev=e.pageX;
          $(".anb617").html(e.pageX +', '+ e.pageY);
       });
    })






    $(document).mousemove(function(e) {
    let body_size_x = $( window ).width();
    let body_size_y = $( window ).height();
    let half_body_size_x = parseInt(body_size_x / 2);
    let half_body_size_y = parseInt(body_size_y / 2);
    let left_dir = e.pageX;
    let top_dir = e.pageY;

    $('#body').html(body_size_x + ' + ' + body_size_y);
    $(".a5674c7").html(top_dir);
    $(".a6f7ddc").html(left_dir);



     if (left_dir > half_body_size_x && top_dir > half_body_size_y) {
       $(".vor27, .loc18, .loc14").css("color", "#7591FF");
     } else if (left_dir < half_body_size_x && top_dir < half_body_size_y) {
       $(".vor27, .loc18, .loc14").css("color", "#ffffff");
     } else if (left_dir > half_body_size_x && top_dir < half_body_size_y) {
       $(".vor27, .loc18, .loc14").css("color", "#7591FF");
     } else if (left_dir < half_body_size_x && top_dir > half_body_size_y) {
       $(".vor27, .loc18, .loc14").css("color", "#ffffff");
     }
     if (left_dir > half_body_size_x && top_dir > half_body_size_y) {
       $(".loc16, .loc13").css("color", "#ffffff");
     } else if (left_dir < half_body_size_x && top_dir < half_body_size_y) {
       $(".loc16, .loc13").css("color", "#7591FF");
     } else if (left_dir > half_body_size_x && top_dir < half_body_size_y) {
       $(".loc16, .loc13").css("color", "#ffffff");
     } else if (left_dir < half_body_size_x && top_dir > half_body_size_y) {
       $(".loc16, .loc13").css("color", "#7591FF");
     }

     if (left_dir > half_body_size_x && top_dir > half_body_size_y) {
       $(".loc15, .loc17").css("color", "#ffffff");
     } else if (left_dir < half_body_size_x && top_dir < half_body_size_y) {
       $(".loc15, .loc17").css("color", "#ffffff");
     } else if (left_dir > half_body_size_x && top_dir < half_body_size_y) {
       $(".loc15, .loc17").css("color", "#7591FF");
     } else if (left_dir < half_body_size_x && top_dir > half_body_size_y) {
       $(".loc15, .loc17").css("color", "#7591FF");
     }

     if (left_dir > half_body_size_x && top_dir > half_body_size_y) {
       $(".LOC19").css("color", "#7591FF");
     } else if (left_dir < half_body_size_x && top_dir < half_body_size_y) {
       $(".LOC19").css("color", "#7591FF");
     } else if (left_dir > half_body_size_x && top_dir < half_body_size_y) {
       $(".LOC19").css("color", "#ffffff");
     } else if (left_dir < half_body_size_x && top_dir > half_body_size_y) {
       $(".LOC19").css("color", "#ffffff");
     }
});


$(function () {
$({ n: 0 }).animate({n: 1E3 }, {
duration: 50E3,
step: function (a) {
$(".a324789").html(a | 0)
}
})
});



var i = 0;
var txt = "Солнце и Луна Вт, 1 фев, сегодня Долгота дня: 8 ч 39 мин Восход — 8:23 Заход — 17:03 Сегодня день на 4 минуты длиннее, чем вчера Луна стареющая, 0% Восход — 9:14 Заход — 15:19 Полнолуние — 16 февраля, через 16 дней Вт, 15 фев, сегодня   Ср, 16 Долгота дня: 9 ч 39 мин Восход — 7:54 Заход — 17:33 Сегодня день на 5 минут длиннее, чем вчера Луна растущая, 98% Восход — 14:17 Заход — 8:09 Ветер, м/с Вт, 15 фев, сегодня 000 Ю 300 Ю 600 ЮЮ 900 ЮЗ 1200 СЗ З З ЮЗ ЮЗ ЮЗ Вт, 22 мар, сегодня Ср, 23 Долгота дня: 12 ч 19 мин Восход — 6:27 Заход — 18:46 Сегодня день на 4 минуты длиннее, чем вчера Луна стареющая, 81% Восход — 23:11 Заход — 7:52 Полнолуние — 16 апреля, через 26 дней ебольшие возмущения 5 Слабая буря 6 Умеренная буря 7 Сильная буря 8 Шторм 9 Экстремальный шторм Вт, 22 мар 18:00 Вт, 22 мар 21:00 Ср, 23 мар 0:00 Ср, 23 мар 3:00 Ср, 23 мар 6:00 Ср, 23 мар 9:00 Ср, 23 мар 12:00 Ср, 23 мар 15:00 Ср, 23 мар 18:00 Ср, 23 мар 21:00 Чт, 24 мар 0:00 Чт, 24 мар 3:00 Чт, 24 мар 6:00 Чт, 24 мар 9:00 Чт, 24 мар 12:00 Чт, 24 мар 15:00 Чт, 24 мар 18:00 Чт, 24 мар 21:00 Пт, 25 мар 0:00 Пт, 25 мар 3:00"
var speed = 110;
$(document).ready(function firststring() {
$(document).ready(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("turnred").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
});
});

var str = ""

$(document).ready(function() {
	$(".one").click( function () {
    str += "1"
    let rez = $('<div class="popup">1 </div>');
    $("#callone").append(rez);
    setTimeout( function() { rez.remove(); }, 500);


  });
});






$(document).ready(function() {
	$(".two").click( function () {
    str += "2"
    let rez1 = $('<div class="popup1">2 </div>');
    $("#callthree").append(rez1);
    setTimeout( function() { rez1.remove(); }, 500);
  });
});

$(document).ready(function() {
	$(".three").click( function () {
    str += "3"
    let rez2 = $('<div class="popup2">3 </div>');
    $("#callthree").append(rez2);
    setTimeout( function() { rez2.remove(); }, 500);

    var str1 = (str[str.length - 3] + str[str.length - 2] + str[str.length - 1]).toString()
    if (str1.includes("1") && str1.includes("4") && str1.includes("3")) {
      // alert("Код исправен")
      $("p, body, .screenimg, .voz, .speedimg, .dropbar, .bar, .GSNASA11, .dropbar, .dropbar2, .dropbar3, .alarm, .alarm2 .alarmtext, .alarmtext2").css("animation-play-state", "running")
      $(".weather, .phone, .map, .course, .screen, .compasimg, .buttons").css("animation-play-state", "running")
      $(".one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .net, .zero, .star").css("animation-play-state", "running")
      $(".p125, .a5674c7, .a6f7ddc, .anb617, .a324789").css("animation-play-state", "running")
      $(".circlebuttons, .square, .verticalbar, .inbar, .lever, .spin1img, .spin2img").css("animation-play-state", "running")
      $(".LOC19, .loc18, .loc17, .loc16, .loc15, .loc14, .loc13").css("animation-play-state", "running")
      $("#number21, .number22, .number22, .number23, .number25, .number26, .number27, .number28, .number29").css("animation-play-state", "running")

    }
  });
});

$(document).ready(function() {
	$(".four").click( function () {
    str += "4"
    let rez3 = $('<div class="popup3">4 </div>');
    $("#callfour").append(rez3);
    setTimeout( function() { rez3.remove(); }, 500);

  });
});

$(document).ready(function() {
	$(".five").click( function () {
    str += "5"
    let rez4 = $('<div class="popup4">5 </div>');
    $("#callfive").append(rez4);
    setTimeout( function() { rez4.remove(); }, 500);
  });
});

$(document).ready(function() {
	$(".six").click( function () {
    str += "6"
    let rez5 = $('<div class="popup5">6 </div>');
    $("#callsix").append(rez5);
    setTimeout( function() { rez5.remove(); }, 500);
  });
});

$(document).ready(function() {
	$(".seven").click( function () {
    str += "7"
    let rez6 = $('<div class="popup6">7 </div>');
    $("#callseven").append(rez6);
    setTimeout( function() { rez6.remove(); }, 500);
  });
});

$(document).ready(function() {
	$(".eight").click( function () {
    str += "8"
    let rez7 = $('<div class="popup7">8 </div>');
    $("#calleight").append(rez7);
    setTimeout( function() { rez7.remove(); }, 500);
  });
});

$(document).ready(function() {
	$(".nine").click( function () {
    str += "9"
    let rez8 = $('<div class="popup8">9 </div>');
    $("#callnine").append(rez8);
    setTimeout( function() { rez8.remove(); }, 500);

  });
});




$(document).ready(function() {
	$(".net").click( function () {
    str += "#"
    let rez11 = $('<div class="popup11"># </div>');
    $("#callnet").append(rez11);
    setTimeout( function() { rez11.remove(); }, 500);
  });
});

$(document).ready(function() {
	$(".zero").click( function () {
    str += "0"
    let rez12 = $('<div class="popup12">0 </div>');
    $("#callzero").append(rez12);
    setTimeout( function() { rez12.remove(); }, 500);
  });
});

$(document).ready(function() {
	$(".star").click( function () {
    str += "*"
    let rez10 = $('<div class="popup10">* </div>');
    $("#callstar").append(rez10);
    setTimeout( function() { rez10.remove(); }, 500);
  });
});
