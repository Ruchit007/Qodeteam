// $(document).ready(function(){
//     $(".menubutton").click(function(){
//         closemenu();
//          $(".login-popup").toggle();
//          $(".login-popup").addClass("open");
//      });
//      $(".close-icon").click(function(){
//          closemenu();
//       });
//       //close menu
//      function closemenu()
//      {
//          $(".menubutton").removeClass("open");
//      }
//   });

$(document).ready(function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

//formspree code

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    status.classList.add("success");
    status.textContent = "Thanks for your interest!";
    form.reset();
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! Something went wrong";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
