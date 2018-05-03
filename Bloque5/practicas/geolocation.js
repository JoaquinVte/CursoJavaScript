navigator.geolocation.getCurrentPosition(function (pos) {
    var p = document.getElementById("coordenadas");
    p.textContent = "Latitud: " + pos.coords.latitude + ".Longitud: " + pos.coords.longitude + ".Precision: " + pos.coords.accuracy;
    console.log("Latitud: " + pos.coords.latitude + ".Longitud: " + pos.coords.longitude + ".Precision: " + pos.coords.accuracy);
}, function (error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            p.textContent = "El usuario ha denegado la petion de geolocalizacion";
            break;
        case error.POSITION_UNAVAILABLE:
            p.textContent = "La informacion de geolocalizacion no esta disponible";
            break;
        case error.TIMEOUT:
            p.textContent = "Ha expirado el tiempo maximo para obtener la geolocalizacion";
            break;
        case error.UNKNOWN_ERROR:
            p.textContent = "se ha producido un error desconocido";
            break;
    }
});