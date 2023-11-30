// export default (() => {

//     const input = document.querySelector(".validate");
//     input?.addEventListener("input", () => {
//         const validate = input.value;

//         const minLength = parseInt(input.dataset.minlength);
        
//         if (validate.length < minLength) {
           
//             input.classList.add("invalid");
//         }
//         else {
//             input.classList.remove("invalid");

//         }
//     })




// })()
export default (() => {

    const formInput = document.querySelector(".form");
    console.log(formInput)
    input?.addEventListener("input", () => {
        const validate = input.value;

        const minLength = parseInt(input.dataset.minlength);
        
        if (validate.length < minLength) {
           
            input.classList.add("invalid");
        }
        else {
            input.classList.remove("invalid");

        }
    })




})()
