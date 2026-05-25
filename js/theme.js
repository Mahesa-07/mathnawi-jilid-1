export function initTheme() {
  const btn = document.getElementById("themeBtn");
  const body = document.body;

  if (!btn) return;

  // =========================
  // LOAD SAVED THEME
  // =========================
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  // =========================
  // TOGGLE THEME
  // =========================
  btn.addEventListener("click", () => {

    const isDark = body.classList.toggle("dark");

    // save
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // optional: efek kecil
    btn.style.transform = "scale(0.92)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 120);

  });
}



/* =========================================
   DRAG FLOATING BUTTON
========================================= */

const fab = document.querySelector(
  ".floating-action-btn"
);

if (fab){

  let isDragging = false;

  let offsetX = 0;
  let offsetY = 0;


  fab.addEventListener("touchstart", e => {

    isDragging = true;

    const touch = e.touches[0];

    offsetX =
      touch.clientX -
      fab.offsetLeft;

    offsetY =
      touch.clientY -
      fab.offsetTop;

  });


  fab.addEventListener("touchmove", e => {

    if (!isDragging) return;

    const touch = e.touches[0];

    fab.style.left =
      (touch.clientX - offsetX)
      + "px";

    fab.style.top =
      (touch.clientY - offsetY)
      + "px";

    fab.style.right = "auto";
    fab.style.bottom = "auto";

  });


  fab.addEventListener("touchend", () => {

    isDragging = false;

  });

}