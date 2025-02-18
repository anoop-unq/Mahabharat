AOS.init({
  duration: 3000, // Animation duration in milliseconds
  once: true,     // Animation happens only once while scrolling
});
  // AOS.init();
  
 // JavaScript to adjust the height of the vertical line dynamically
  document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".timeline");
    const verticalLine = document.querySelector(".vertical-line");

    // Get the first and last event positions
    const firstEvent = document.querySelector(".event:first-child");
    const lastEvent = document.querySelector(".event:last-child");

    if (firstEvent && lastEvent) {
      const firstEventTop = firstEvent.offsetTop;
      const lastEventBottom =
        lastEvent.offsetTop + lastEvent.offsetHeight;

      // Set the vertical line height and position
      verticalLine.style.top = firstEventTop + "px";
      verticalLine.style.height = lastEventBottom - firstEventTop + "px";
    }
  });
 // JavaScript for Scroll Animation on One Box
 document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("selected-box");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("bounce-in-top");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(selectedBox);
    });
   
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("on");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("tilt-in-bottom-2");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(on);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("off");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("flip-scale-down-ver");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(off);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("casual");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-up-bottom");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(casual);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("casualless");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("flip-scale-down-ver");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(casualless);
    });
  
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fade");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-right");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },);

      // Observe only the selected box
      observer.observe(fade);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadeless");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-left");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },);

      // Observe only the selected box
      observer.observe(fadeless);
    });
   
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fademore");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("tilt-in-fwd-br");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fademore);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadecool");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-right");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fadecool);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("faderich");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-left");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(faderich);
    });
    
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadepoor");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("tilt-in-right-1");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fadepoor);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadeultra");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
    entry.target.classList.add("bounce-in-top");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fadeultra);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadecheck");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
    entry.target.classList.add("slide-in-blurred-left");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fadecheck);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fades");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
    entry.target.classList.add("fade-in-right");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fades);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadess");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
    entry.target.classList.add("fade-in-left");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fadess);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadesss");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
    entry.target.classList.add("slide-in-elliptic-top-fwd");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fadesss);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadessss");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
    entry.target.classList.add("flip-in-diag-2-br");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      }, );

      // Observe only the selected box
      observer.observe(fadessss);
    });

    document.addEventListener("DOMContentLoaded", function () {
      var selectedBox = document.getElementById("fadesssss");

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
    entry.target.classList.add("slide-in-bck-bottom");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },);

      // Observe only the selected box
      observer.observe(fadesssss);
    });
