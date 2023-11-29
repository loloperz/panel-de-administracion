export default (() => {

    const mainTab = document.querySelector('.tab-main');
    const tabs = document.querySelector('.tab');

    mainTab?.addEventListener("click", () => {
        tabs.classList.toggle("active");
        
    });
})();
