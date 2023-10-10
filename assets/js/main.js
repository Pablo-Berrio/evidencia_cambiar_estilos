var vistaActual = 1; 

function cambiarVista() {
    var vista1 = document.getElementsByClassName("vistaSinEstilos")[0];
    var vista2 = document.getElementsByClassName("vistaConEstilos")[0];

    if (vistaActual === 1) {
        vista1.style.display = 'none';
        vista2.style.display = 'block';
        vistaActual = 2;
    } else {
        vista1.style.display = 'block';
        vista2.style.display = 'none';
        vistaActual = 1;
    }
}

var cambiarVistaBtn = document.getElementById('cambiarVista');

if (cambiarVista) {
    cambiarVistaBtn.addEventListener('click', cambiarVista);
}
