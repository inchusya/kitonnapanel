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


//     $(function(){
//   $(".dropbar2, .dropbar3").click(function(){
//     $(this).toggleClass("gospin");
//   });
// });

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
