$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Entrepreneur",
      "Enterprise Exectuive",
      "Program Exectuive",
      "Project Executive",
    ],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Entrepreneur",
      "Enterprise Exectuive",
      "Program Exectuive",
      "Project Executive",
    ],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  //own carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form-contact")[0];
let emailSent = false;
submit.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if email has already been sent
  if (emailSent) {
    return;
  }

  console.log("Clicked");
  console.log("sending email");

  let ebody = `
<b>Name: </b>${name.value}
<br>
<b>Email: </b>${email.value}
<br>
<b>subject: </b>${subject.value}
<br>
<b>Message: </b>${message.value}
<br>`;
  Email.send({
    SecureToken: "7a0415fe-dd69-4152-846e-199a34bdbe26",
    To: "madhukumar.naidu@gmail.com",
    From: "madhukumar.naidu@gmail.com",
    Subject: `${name.value} sent you a message`,
    Body: ebody,
  }).then(() => {
    emailSent = true;
  });
});
let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
