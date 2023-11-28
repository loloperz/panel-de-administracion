export default (() => {

    const formSection = document.querySelector('.form');
    const tabs = document.querySelector("form");
    formSection?.addEventListener("click", async (event) => {
        if (event.target.closest(".tabs"))
        document.form.innerHtml="";
    });
})();
