// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// console.log(navbar)

// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
$(window).bind("load resize scroll",function(e) {
    var y = $(window).scrollTop();
 
    $(".back").filter(function() {
        return $(this).offset().top < (y + $(window).height()) &&
               $(this).offset().top + $(this).height() > y;
    }).css('background-position', '0px ' + parseInt(-y / 6) + 'px');
});
$(window).bind("load resize scroll",function(e) {
    var y = $(window).scrollTop();
 
    $(".parallax").filter(function() {
        return $(this).offset().top < (y + $(window).height()) &&
               $(this).offset().top + $(this).height() > y;
    }).css('background-position', '0px ' + parseInt(y /45) + 'px');
});