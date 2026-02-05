window.addEventListener("hashchange", () => {
  if (window.location.hash) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  }
});

document.querySelectorAll('.offcanvas a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvasEl = document.querySelector(".offcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas?.hide();
  });
});
