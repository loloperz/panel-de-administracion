 export default(() => {

    const filterModal = document.querySelector(".filter-modal");

    document.addEventListener("openModalFilter", (event) => {
        filterModal.classList.add("active");
    });

    filterModal?.addEventListener("click", async (event) => {
        if (event.target.closest(".confirm")){
        }

        if (event.target.closest(".cancel")){
            filterModal.classList.remove("active");
        }
    })
    
})();