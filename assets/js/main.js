// MIXITUP FILTER

let mixerProjects = mixitup(".projects__container", {
  selectors: {
    target: ".project__item ",
  },
  animation: {
    duration: 300,
  },
});

// ACTIVE WORK
const linkWork = document.querySelectorAll(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkWork.forEach((a) => a.addEventListener("click", activeWork));

// TESTIMONIALS SWIPER

var testiSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// CONTACT FORM
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessageInput = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // CHECK IF THE FIELD HAS A VALUE
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessageInput.value === ""
  ) {
    // ADD AND REMOVE COLOR
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    // SHOW MESSAGE
    contactMessage.textContent = "Please enter all the fields 🥺";
  } else {
    // SERVICEID - TEMPLATEID - #FORM -PUBICKEY
    emailjs
      .sendForm(
        "service_1nnltwj",
        "template_iret3rn",
        "#contact-form",
        "oRTlHXik8hPC5hm55"
      )
      .then(
        () => {
          // SHOW MESSAGE AND ADD COLOR, WINDOW + DOT TO OPEN EMOJI
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent! ✅";

          // REMOVE MESSAGE AFTER 5 SECONDS
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING WENT WRONG..."), error;
        }
      );

    // CLEAR INPUT FIELD
    contactName.value = "";
    contactEmail.value = "";
    Message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
