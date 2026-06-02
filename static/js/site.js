(() => {
  const buttons = document.querySelectorAll(".segmented button");
  const resultImage = document.getElementById("result-image");
  const resultCaption = document.getElementById("result-caption");

  if (!buttons.length || !resultImage || !resultCaption) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");
      resultImage.src = button.dataset.figure;
      resultImage.alt = `${button.textContent.trim()} study result figure for UltraVoxelGS`;
      resultCaption.textContent = button.dataset.caption;
    });
  });
})();
