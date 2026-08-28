"use strict";

(() => {
  const chain = document.getElementById("why-chain");
  if (chain) {
    const steps = [1, 2, 3, 4]
      .map((n) => document.getElementById(`chain-step-${n}`))
      .filter(Boolean);
    let lit = false;
    const timers = [];
    const io = new IntersectionObserver(
      (entries) => {
        if (lit) return;
        if (entries.some((e) => e.isIntersecting)) {
          lit = true;
          steps.forEach((el, i) => {
            const n = i + 1;
            timers.push(setTimeout(() => { el.style.opacity = "1"; }, 220 + n * 620));
          });
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(chain);
  }

  const form = document.getElementById("contact-form");
  if (form) {
    const waBase = "https://wa.me/573001234567?text=";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      const g = (n) => (f.elements[n] && f.elements[n].value) || "—";
      const msg =
        "Hola Desencajados 👋\n" +
        "Nombre: " + g("nombre") + "\n" +
        "Marca: " + g("marca") + "\n" +
        "Necesito: " + g("servicio") + "\n" +
        "Cuándo: " + g("fecha");
      window.open(waBase + encodeURIComponent(msg), "_blank", "noopener");
    });
  }
})();
