/* Dark Mode in jQuery
 * Dark Mode Sample By Nathan Amaral
 */
 
jQuery(function ($) {
  var darkMode = getCookie("darkMode");
  if (darkMode == "1") {
    // use darkmode
    enableDarkMode();
  } else {
    // no darkmode
    disableDarkMode();
  }

  $(".dark-mode-toggle").on("click", function () {
   
    if ($("body").hasClass("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});

/*
 *   LOGICAL COOKIE IMPLEMENT
 */
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  // the following code allows multiple cookie values and splits them apart
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

/*
 * DARK MODE FUNCTIONALITY
 */
function enableDarkMode() {
  $("body").addClass("dark-mode");
  $(".inner-switch").text("ON");
  setCookie("darkMode", "1", 7);
}

function disableDarkMode() {
  $("body").removeClass("dark-mode");
  $(".inner-switch").text("OFF");
  setCookie("darkMode", "0", 7);
}
