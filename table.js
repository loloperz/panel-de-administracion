export default (() => {
    const deleteModal = document.querySelector(".delete-modal")
    const tableSection = document.querySelector('.table');
    tableSection?.addEventListener("click", async (event) => {
        if (event.target.closest(".delete-button"))
        deleteModal.classList.toggle("active");
});
 })();
