// typewriter code
var line = document.getElementById("line");
var txts = "Haziq Hassan";
var speed = 120;

async function typewriter() {
  for (let i = 0; i < txts.length; i++) {
    line.innerHTML += txts[i];
    await delay(speed);
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

typewriter();

//=========================navbar =========================//

function navbar() {
  const sections = document.querySelectorAll("section");
  const navActive = document.getElementById("navActive");

  const backgroundColor = " #1ee4fa";
  const textColor = "#1ee4fa";
  const intro = document.getElementById("nav-text-intro");
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const { top, left, height, width } = activeAnchor.getBoundingClientRect();

      activeAnchor.style.cssText = "color:white;";

      if (entry.isIntersecting) {
        if (window.innerWidth <= 768) {
          if (document.getElementById("menu-btn").checked) {
            activeAnchor.style.cssText = "color:black;";
            navActive.style.cssText = `top: ${top}px; left: ${left}px; height: ${height}px; width: ${width}px; background-color: ${backgroundColor};`;
          } else {
            navActive.style.cssText = "block";
          }
        } else {
          activeAnchor.style.cssText = "color:black;";
          navActive.style.cssText = `top: ${top}px; left: ${left}px; height: ${height}px; width: ${width}px; background-color: ${backgroundColor};`;
        }
      } else {
        activeAnchor.style.cssText = "color:white;";
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
}

//=========================change navActive position on window size change =========================//
navbar();
$(window).resize(function () {
  navbar();
});

const checkbox = document.getElementById("menu-btn");

checkbox.addEventListener("change", (event) => {
  navbar();
});

//==================== header transparency =====================//

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  }
});
