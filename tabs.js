//  export default (() => {
//      const tabs = document.querySelector('.tabs');
//      tabs?.addEventListener("click", async (event) => {
//          const tabButton = event.target.closest(".tab-button");
        
//          if (tabButton) {
//             const tabButton=event.target.closest(".tab-Button");
//             tabButton.parentElement.querySelector('.active').classList.remove('active'); 
//             tabButton.classList.add("active");

//             tabButton.closest("section").querySelector(".tab-content.active").classList.remove("active");
//             tabButton.closest("section").querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add("active");
//            }
       
        
//    });
//   })();
// export default (() => {

//     const main = document.querySelector('main');
  
//     main?.addEventListener('click', (event) => {
  
//       if (event.target.closest('.tab')) {
//         const tab = event.target.closest('.tab');
//         tab.parentElement.querySelector('.active').classList.remove('active');
//         tab.classList.add('active');
  
//         tab.closest('section').querySelector(".tab-content.active").classList.remove('active');
//         tab.closest('section').querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
//       }
//     });
    
//   })();

 export default (() => {
     const tabsContainer = document.querySelector('.tabs');
    
     tabsContainer?.addEventListener("click", (event) => {
         const tabButton = event.target.closest(".tab-button");
        
         if (tabButton) {
             const dataTab = tabButton.dataset.tab;
             const matchingTabContent = document.querySelector(`.tab-content[data-tab="${dataTab}"]`);

            if (matchingTabContent) {
               const activeTabButton = tabsContainer.querySelector('.tab-button.active');
                const activeTabContent = document.querySelector(".tab-content.active");
                
               if (activeTabButton && activeTabContent) {
                    activeTabButton.classList.remove('active'); 
                    activeTabContent.classList.remove("active");
                }
                
                 matchingTabContent.classList.add("active");
                tabButton.classList.add("active");
            }
         }
    });
})();