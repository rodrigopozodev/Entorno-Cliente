function actualizarReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    var horaActual = horas + ":" + minutos + ":" + segundos;

    document.getElementById("reloj").innerHTML = horaActual;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();