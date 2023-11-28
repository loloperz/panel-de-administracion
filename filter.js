export default (() => {

    const filterButton = document.querySelector('.filter-button');
    const filterModal = document.querySelector(".filter-modal");

    filterButton?.addEventListener("click", () => {
        filterModal.classList.toggle("active");
    });
 })();
  