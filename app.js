// eventos del navegador manejados por js
document.getElementById(`form`).addEventListener(`submit`, async (e) => {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById('input1').value,
        contacto: document.getElementById('input2').value,
        mensaje: document.getElementById('input3').value
    };
    try {
        const respuesta = await fetch(`http://localhost:3000/api/contacto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        if(respuesta.ok){
            alert('Datos nviaods a la bd');
        } else {
            alert('Error')
        };
    } catch (error) {
        console.log(`Ocurrio un error: ${error}`);
    };
});