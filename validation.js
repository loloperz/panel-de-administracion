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

    const form = document.querySelector(".form");
    
    form?.addEventListener("input", (event) => {

        if(event.target.closest('[data-minlength')){
            const input = event.target.closest('[data-minlength')
            
            if (input.value.length < input.dataset.minlength) {
            
                input.classList.add("invalid");
            }
            else {
                input.classList.remove("invalid");
            }
        }

        if(event.target.closest('[data-onlyletters')){
            const onlyletters= event.target.closest('[data-onlyletters]');
     
            const letters=  /^[A-Za-z\s]+$/;

            if (!event.target.value.match(letters)){
                onlyletters.classList.add("invalid");
            }
            else{
                onlyletters.classList.remove("invalid");
            }
        }
        if(event.target.closest('[data-email')){
            const onlyEmail= event.target.closest('[data-email]');
     
            const email= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!event.target.value.match(email)){
                onlyEmail.classList.add("invalid");
            }
            else{
                onlyEmail.classList.remove("invalid");
            }
        }
      
    })




})()
