function initServices() {
  const btn = document.getElementById("show-all-btn");
  const extraCards = document.querySelectorAll(".extra-service");

  if (!btn) return;

  btn.addEventListener("click", function () {
    const isShowingAll = !extraCards[0].classList.contains("d-none");

    if (isShowingAll) {
      // Hide extra cards
      extraCards.forEach((card) => card.classList.add("d-none"));
      btn.textContent = "عرض الكل";
    } else {
      // Show all cards
      extraCards.forEach((card) => card.classList.remove("d-none"));
      btn.textContent = "عرض أقل";
    }
  });
}
