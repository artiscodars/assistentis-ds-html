

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl);
});
$(".mini-menu-button").click(function (e) {
//e.preventDefault();
$("body").toggleClass("mini-menu");
});
$(".mini-menu-button.set-cookie").click(function (e) {
//e.preventDefault();
$(".has-children span.active").next().removeClass("show");
});
$(".mini-menu-button.unset-cookie").click(function (e) {
//e.preventDefault();
$(".has-children span.active").next().addClass("show");
});

function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
var expires = "expires=" + d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for (var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
  }
}
return "";
}

function checkCookie() {
var user = getCookie("minimenu");
if (user == "on") {
  $("body").addClass("mini-menu");
}

}

$(function () {
$('.mini-menu-button').click(function () {
  $('body').toggleClass('transformer');
  setTimeout(function () {
    $('body').removeClass('transformer');
  }, 1000);
});
});

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        //document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        //document.querySelector("body").style.visibility = "visible";
    }
}



$(".menu_opener").click(function () {
$("body").toggleClass("mobmenu");
});

$(".top_nav_opener").click(function() {
  $("body").toggleClass("mob_user_menu");
  });


$(".active-menu-bg").click(function () {
$("body").toggleClass("mobmenu");
});




$(document).keyup(function(e)
{
  //alert(e.keyCode);

  if(e.keyCode==27)
  {
      //alert ("Esc key");
    //  hide_menu();
    if ($("body").hasClass("active-swither")) {$("body").toggleClass("active-swither")}
  }
});


$(".menesis").datepicker( {
    format: "mm-yyyy",
    startView: "months",
    minViewMode: "months"
});


$(".left_menu").scroll(function () {
sessionStorage.scrollTop = $(this).scrollTop();
});

$(".switcher").click(function (e) {
$("body").toggleClass("active-swither");
});
$(".switcher-close").click(function (e) {
$("body").toggleClass("active-swither");
});


$(document).ready(function () {
if (sessionStorage.scrollTop != "undefined") {
  $(".left_menu").scrollTop(sessionStorage.scrollTop);
}

$('.audio-text').summernote({
 focus: true ,
        toolbar: [
          ['font', ['bold', 'underline', 'clear']],
          ['color', ['color']],
        ]
});

$(".recorder").click(function () {
$(this).toggleClass("recording");
});
});


$(document).ready(function() {
  $('#exampleSelect2').select2();
});