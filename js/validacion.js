
const formularios = document.querySelector("#formularioUsuarios")
const exitoso = document.getElementById('exitoso');
const fallido= document.getElementById('fallido');







formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()
    mensaje()
    
})

function mensaje(){
    const Name = formularios.nombre.value;
    const email = formularios.email.value;
    const msg = formularios.msg.value;

    if(Name.value === '' || email.value === '' || msg.value === ''){
        fallido.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        exitoso.style.display = 'block';
    }


    setTimeout(() => {
        fallido.style.display = 'none';
        exitoso.style.display = 'none';
    }, 4000);

}
