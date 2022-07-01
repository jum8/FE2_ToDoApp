window.addEventListener('load', function () {
    const form = document.forms[0];
    const emailInput = document.querySelector('#inputEmail')
    const passwordInput = document.querySelector('#inputPassword')
    const url = 'https://ctd-todo-api.herokuapp.com/v1';
    const errMessageContainer = this.document.querySelector('errMessageContainer');


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1:         
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if(emailInput && passwordInput) {
            const payload = {
                email: emailInput.value,
                password: passwordInput.value
            };
            const settings = {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            realizarLogin(settings);
    
            form.reset();
        } else {
            errMessageContainer.innerHTML = `
                <p>Todos los campos deben estar completos</p>
            `
        }
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2:                    
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        console.log("Lanzando la consulta a la API...");
        fetch(`${url}/users/login`, settings)
            .then(response => {
                console.log(response);

                if (response.ok != true) {
                    alert("Alguno de los datos es incorrecto.")
                }

                return response.json();

            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    location.replace('./mis-tareas.html');
                }
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    };


});
