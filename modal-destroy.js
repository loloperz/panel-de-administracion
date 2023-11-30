export default(() => {

    const deleteModal = document.querySelector(".delete-modal");

    document.addEventListener("openModalDestroy", (event) => {
        deleteModal.classList.add("active");
    });

    deleteModal?.addEventListener("click", async (event) => {
        if (event.target.closest(".confirm")){
        }

        // if (event.target.closest(".cancel")){
        //     deleteModal.classList.remove("active");
        // }
        
    })
    
})();