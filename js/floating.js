/* =========================================
   FLOATING BUTTON DRAG SYSTEM
   ------------------------------------------------
   Mengatur tombol floating agar:
   - bisa digeser
   - responsive
   - aman di mobile
========================================= */

export function initFloatingButton() {

  // Cari tombol floating
  const fab = document.querySelector(
    ".floating-action-btn"
  );

  // Jika tombol tidak ada → hentikan
  if (!fab) return;


  // Status drag
  let isDragging = false;

  // Offset posisi sentuhan
  let offsetX = 0;
  let offsetY = 0;


  /* =====================================
     TOUCH START
  ===================================== */

  fab.addEventListener(

    "touchstart",

    (e) => {

      isDragging = true;

      const touch = e.touches[0];

      offsetX =
        touch.clientX - fab.offsetLeft;

      offsetY =
        touch.clientY - fab.offsetTop;

    }

  );


  /* =====================================
     TOUCH MOVE
  ===================================== */

  fab.addEventListener(

    "touchmove",

    (e) => {

      // Jika tidak drag → stop
      if (!isDragging) return;


      const touch = e.touches[0];


      // Hitung posisi baru
      let x =
        touch.clientX - offsetX;

      let y =
        touch.clientY - offsetY;


      // ===============================
      // BATAS LAYAR
      // ===============================

      const maxX =
        window.innerWidth
        - fab.offsetWidth;

      const maxY =
        window.innerHeight
        - fab.offsetHeight;


      // Jangan keluar layar
      x = Math.max(0, Math.min(x, maxX));

      y = Math.max(0, Math.min(y, maxY));


      // Terapkan posisi
      fab.style.left = x + "px";

      fab.style.top = y + "px";


      // Nonaktifkan right/bottom
      fab.style.right = "auto";

      fab.style.bottom = "auto";

    }

  );


  /* =====================================
     TOUCH END
  ===================================== */

  fab.addEventListener(

    "touchend",

    () => {

      isDragging = false;

    }

  );

}