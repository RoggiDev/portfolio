document.querySelectorAll('.offcanvas a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvasEl = document.querySelector(".offcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas?.hide();
  });
});
