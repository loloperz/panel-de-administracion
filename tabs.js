
// export default (() => {
//     const tabs = document.querySelector('.tabs');
  
//     tabs?.addEventListener("click", async (event) => {

//         if (event.target.closest(".tab-button")) {
//             const tabButton = event.target.closest(".tab-button");
//             const tabButtons = document.querySelectorAll(".tab-button");

//             tabButtons.forEach(button => {
//                 button.classList.remove("active");
//             });

//             tabButton.classList.add("active");
//         }
//     });
// })();
export default (() => {
    const tabs = document.querySelector('.tabs');
  
    tabs?.addEventListener("click", async (event) => {
        const tabButton = event.target.closest(".tab-button");
        
        if (tabButton) {
            const tabButtons = Array.from(tabButton.parentElement.children);
            
            tabButtons.forEach(button => {
                button.classList.remove("active");
            });
            
            tabButton.classList.add("active");
        }
    });
})();