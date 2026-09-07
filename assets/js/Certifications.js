document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".cert-card");

  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certModalImg");
  const modalTitle = document.getElementById("certModalTitle");
  const modalIssuer = document.getElementById("certModalIssuer");
  const closeBtn = document.getElementById("certModalClose");

  if (
    !modal ||
    !modalImg ||
    !modalTitle ||
    !modalIssuer ||
    !closeBtn
  ) {
    console.warn("Certificate modal elements are missing.");
    return;
  }


  /* OPEN CERTIFICATE */
  cards.forEach((card) => {

    card.addEventListener("click", () => {

      const image = card.dataset.certImg;
      const title = card.dataset.certTitle;
      const issuer = card.dataset.certIssuer;

      if (!image) {
        return;
      }

      modalImg.src = image;
      modalImg.alt = title || "Certificate";

      modalTitle.textContent = title || "";
      modalIssuer.textContent = issuer || "";

      modal.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });


  /* CLOSE MODAL */
  function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

    setTimeout(() => {
      modalImg.src = "";
    }, 250);

  }


  /* CLOSE BUTTON */
  closeBtn.addEventListener("click", closeModal);


  /* CLOSE WHEN CLICKING BACKGROUND */
  const backdrop = modal.querySelector(".cert-modal-backdrop");

  if (backdrop) {
    backdrop.addEventListener("click", closeModal);
  }


  /* CLOSE WHEN PRESSING ESC */
  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("active")
    ) {
      closeModal();
    }

  });

});