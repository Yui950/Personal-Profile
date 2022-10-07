let body = document.querySelector("body");
let Project_box_1 = document.querySelector("#Project_box_1");
let form_text = document.querySelectorAll(".form_text");

// Project
let project_part = document.querySelector("#project_part");
let test_button = document.querySelector("#test_button");
let project_content = document.querySelectorAll(".project_content");
let project_details_button = document.querySelector("#project_details_button");

let ProjectWasOpened = false;

project_details_button.addEventListener("click", (o) => {
  if (ProjectWasOpened == false) {
    ProjectWasOpened = true;
    project_part.style.animation = "open 1s forwards";
    project_part.style.display = "flex";
    project_details_button.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    setTimeout(() => {
      project_content.forEach((a) => {
        a.style.opacity = "1";
      });
    }, 1000);
  } else if (ProjectWasOpened == true) {
    project_content.forEach((a) => {
      a.style.opacity = "0";
    });
    setTimeout(() => {
      project_part.style.animation = "close 1s forwards";
    }, 100);
    setTimeout(() => {
      project_part.style.display = "none";
      ProjectWasOpened = false;
    }, 1000);
    project_details_button.innerHTML =
      '<i class="fa-solid fa-chevron-down"></i>';
  }
});

//To top button
let totop = document.createElement("up");
totop.setAttribute("id", "totop");
let to0 = false;

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset !== 0 && to0 == false) {
    totop.style.animation = "addframe 0.3s forwards";
    totop.innerHTML =
      '<a href="#title_box"><i class="fa-solid fa-circle-up"></i></a>';
    body.appendChild(totop);
    to0 = true;
  } else if (window.pageYOffset == 0 && to0 == true) {
    totop.style.animation = "removeframe 0.3s forwards";
    setTimeout(() => {
      if (to0 == true) {
        return;
      } else {
        totop.remove();
      }
    }, 300);
    to0 = false;
  }
});

// form
form_text.forEach((i) => {
  i.addEventListener("focus", () => {
    alert(
      "I'm Sorry!\nThis feature is currently not available. If you want to contact me, pleace use the following methods.\n\nWhatsapp: 5372-3090\nE-mail: hoyuiwong@gmail.com"
    );
    form_text = document.activeElement.blur();
  });
});

//nav situation
let nav_bar = document.querySelectorAll(".nav_bar");

window.addEventListener("scroll", (i) => {
  let scroll_num = window.pageYOffset;
  if (scroll_num >= 970 && scroll_num < 1900) {
    nav_bar[0].style.animation = "show 0.5s forwards";
  } else {
    nav_bar[0].style.animation = "hide 0.5s forwards";
  }
  if (scroll_num >= 1900 && scroll_num < 2700) {
    nav_bar[1].style.animation = "show 0.5s forwards";
  } else {
    nav_bar[1].style.animation = "hide 0.5s forwards";
  }
  if (scroll_num >= 2700 && scroll_num < 3670) {
    nav_bar[2].style.animation = "show 0.5s forwards";
  } else {
    nav_bar[2].style.animation = "hide 0.5s forwards";
  }
  if (scroll_num >= 3670 && scroll_num < 5600) {
    nav_bar[3].style.animation = "show 0.5s forwards";
  } else {
    nav_bar[3].style.animation = "hide 0.5s forwards";
  }
  if (scroll_num >= 5600) {
    nav_bar[4].style.animation = "show 0.5s forwards";
  } else {
    nav_bar[4].style.animation = "hide 0.5s forwards";
  }
});

// window.addEventListener("scroll", (i) => {
//   console.log(window.pageYOffset);
// });
