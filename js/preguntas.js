//inputs
let tierraInput = document.getElementById("tierraInput");
let stCruzInput = document.getElementById("stCruzInput");
let chubutInput = document.getElementById("chubutInput");
let rioInput = document.getElementById("rioInput");
let neuquenInput = document.getElementById("neuquenInput");
let pampaInput = document.getElementById("pampaInput");
let buenosInput = document.getElementById("buenosInput");
let entreInput = document.getElementById("entreInput");
let feInput = document.getElementById("feInput");
let cordobaInput = document.getElementById("cordobaInput");
let sanLuisInput = document.getElementById("sanLuisInput");
let mendozaInput = document.getElementById("mendozaInput");
let corrientesInput = document.getElementById("corrientesInput");
let chacoInput = document.getElementById("chacoInput");
let misionesInput = document.getElementById("misionesInput");
let santiagoInput = document.getElementById("santiagoInput");
let tucumanInput = document.getElementById("tucumanInput");
let sanJuanInput = document.getElementById("sanJuanInput");
let riojaInput = document.getElementById("riojaInput");
let catamarcaInput = document.getElementById("catamarcaInput");
let formosaInput = document.getElementById("formosaInput");
let saltaInput = document.getElementById("saltaInput");
let jujuyInput = document.getElementById("jujuyInput");



//botones
let botonTierra = document.getElementById("btn-tierra");
let botonStCruz = document.getElementById("btn-stCruz");
let botonChubut = document.getElementById("btn-chubut");
let botonRio = document.getElementById("btn-rio");
let botonNeuquen = document.getElementById("btn-neuquen");
let botonPampa = document.getElementById("btn-pampa");
let botonBuenos = document.getElementById("btn-buenos");
let botonEntre = document.getElementById("btn-entre");
let botonFe = document.getElementById("btn-fe");
let botonCordoba = document.getElementById("btn-cordoba");
let botonSanLuis = document.getElementById("btn-sanLuis");
let botonMendoza = document.getElementById("btn-mendoza");
let botonCorrientes = document.getElementById("btn-corrientes");
let botonChaco = document.getElementById("btn-chaco");
let botonMisiones = document.getElementById("btn-misiones");
let botonSantiago = document.getElementById("btn-santiago");
let botonTucuman = document.getElementById("btn-tucuman");
let botonSanJuan = document.getElementById("btn-sanJuan");
let botonRioja = document.getElementById("btn-rioja");
let botonCatamarca = document.getElementById("btn-catamarca");
let botonFormosa = document.getElementById("btn-formosa");
let botonSalta = document.getElementById("btn-salta");
let botonJujuy = document.getElementById("btn-jujuy");


//manchas
let tierraMancha = document.getElementById("ARG1272");
let stCruzMancha = document.getElementById("ARG1271");
let chubutMancha = document.getElementById("ARG1274");
let rioMancha = document.getElementById("ARG1297");
let neuquenMancha = document.getElementById("ARG1276");
let pampaMancha = document.getElementById("ARG1296");
let buenosMancha = document.getElementById("ARG1295");
let entreMancha = document.getElementById("ARG1309");
let feMancha = document.getElementById("ARG1310");
let cordobaMancha = document.getElementById("ARG1299");
let sanLuisMancha = document.getElementById("ARG1298");
let mendozaMancha = document.getElementById("ARG1275");
let corrientesMancha = document.getElementById("ARG1308");
let chacoMancha = document.getElementById("ARG1306");
let misionesMancha = document.getElementById("ARG1312");
let santiagoMancha = document.getElementById("ARG1304");
let tucumanMancha = document.getElementById("ARG1305");
let sanJuanMancha = document.getElementById("ARG1273");
let riojaMancha = document.getElementById("ARG1302");
let catamarcaMancha = document.getElementById("ARG1300");
let formosaMancha = document.getElementById("ARG1307");
let saltaMancha = document.getElementById("ARG1303");
let jujuyMancha = document.getElementById("ARG1301");

//titulo label
let labelTitulo = document.getElementById("label-titulo");



//colores
let $colorFoco = "#28B463";
let $colorOk = "#3498DB";
let $colorMal = "red";

//sonidos
let efectoOk = document.getElementById("efectoOk");
let efectoFinal = document.getElementById("efectoFinal");

//nombre
const nombreJugador = document.getElementById("nombreInput");
const botonNombre = document.getElementById("btn-nombre");
let mostrarNombre = [];
const contenidoJuego = document.querySelector(".contenido-juego");
const contenidoNombre = document.querySelector(".contenido-nombre");


//funcionamiento nombre
botonNombre.addEventListener("click", () => {
    if (nombreJugador.value === "") {
        alert("Ingrese un nombre por favor");
    } else {
        mostrarNombre.push(nombreJugador.value);
        contenidoNombre.classList.add("ocultar");
        contenidoJuego.classList.add("mostrar");
    }

});

//puntuacion
let puntaje = [];
const pantallaFinal = document.querySelector(".contenido-final");
const campoNombre = document.getElementById("nombreDelJugador");
const campoPuntaje = document.getElementById("puntajeDelJugador");




//funcionamiento
//tierra del fuego
botonTierra.addEventListener("click", () => {
    if (tierraInput.value === "tierra del fuego") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {

            tierraMancha.style.fill = $colorOk;
            tierraInput.value = "";
            tierraInput.style.display = "none";
            botonTierra.style.display = "none";
            stCruzInput.style.display = "inline";
            stCruzMancha.style.fill = $colorFoco;
            botonStCruz.style.display = "inline";
        }, 500);



    } else {
        tierraMancha.style.fill = $colorMal;
        tierraInput.value = "";
        tierraInput.style.display = "none";
        botonTierra.style.display = "none";
        stCruzInput.style.display = "inline-block";
        botonStCruz.style.display = "inline-block";
        stCruzMancha.style.fill = $colorFoco;
    }
});

//santa cruz
botonStCruz.addEventListener("click", () => {
    if (stCruzInput.value === "santa cruz") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            stCruzMancha.style.fill = $colorOk;
            stCruzInput.value = "";
            stCruzInput.style.display =
                botonStCruz.style.display = "none";
            chubutInput.style.display = "inline-block";
            chubutMancha.style.fill = $colorFoco;
            botonChubut.style.display = "inline-block";
        }, 500);


    } else {
        stCruzMancha.style.fill = $colorMal;
        stCruzInput.style.display = "none";
        botonStCruz.style.display = "none";
        stCruzInput.value = "";
        chubutMancha.style.fill = $colorFoco;
        chubutInput.style.display = "inline-block";
        botonChubut.style.display = "inline-block";

    }
});

//chubut
botonChubut.addEventListener("click", () => {
    if (chubutInput.value == "chubut") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            chubutMancha.style.fill = $colorOk;
            chubutInput.style.display = "none";
            botonChubut.style.display = "none";
            chubutInput.value = "";
            rioMancha.style.fill = $colorFoco;
            rioInput.style.display = "inline-block";
            botonRio.style.display = "inline-block";
        }, 500);


    } else {
        chubutMancha.style.fill = $colorMal;
        chubutInput.style.display = "none";
        botonChubut.style.display = "none";
        chubutInput.value = "";
        rioMancha.style.fill = $colorFoco;
        rioInput.style.display = "inline-block";
        botonRio.style.display = "inline-block";
    }
});

//rio negro
botonRio.addEventListener("click", () => {
    if (rioInput.value == "rio negro") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            rioMancha.style.fill = $colorOk;
            rioInput.style.display = "none";
            botonRio.style.display = "none";
            rioInput.value = "";
            neuquenMancha.style.fill = $colorFoco;
            neuquenInput.style.display = "inline-block";
            botonNeuquen.style.display = "inline-block";
        }, 500);


    } else {
        rioMancha.style.fill = $colorMal;
        rioInput.style.display = "none";
        botonRio.style.display = "none";
        rioInput.value = "";
        neuquenMancha.style.fill = $colorFoco;
        neuquenInput.style.display = "inline-block";
        botonNeuquen.style.display = "inline-block";
    }
});

//neuquen
botonNeuquen.addEventListener("click", () => {
    if (neuquenInput.value == "neuquen") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            neuquenMancha.style.fill = $colorOk;
            neuquenInput.style.display = "none";
            botonNeuquen.style.display = "none";
            neuquenInput.value = "";
            pampaMancha.style.fill = $colorFoco;
            pampaInput.style.display = "inline-block";
            botonPampa.style.display = "inline-block";
        }, 500);


    } else {
        neuquenMancha.style.fill = $colorMal;
        neuquenInput.style.display = "none";
        botonNeuquen.style.display = "none";
        neuquenInput.value = "";
        pampaMancha.style.fill = $colorFoco;
        pampaInput.style.display = "inline-block";
        botonPampa.style.display = "inline-block";
    }
});


//pampa
botonPampa.addEventListener("click", () => {
    if (pampaInput.value === "la pampa") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            pampaMancha.style.fill = $colorOk;
            pampaInput.style.display = "none";
            botonPampa.style.display = "none";
            pampaInput.value = "";
            buenosMancha.style.fill = $colorFoco;
            buenosInput.style.display = "inline-block";
            botonBuenos.style.display = "inline-block";
        }, 500);


    } else {
        pampaMancha.style.fill = $colorMal;
        pampaInput.style.display = "none";
        botonPampa.style.display = "none";
        pampaInput.value = "";
        buenosMancha.style.fill = $colorFoco;
        buenosInput.style.display = "inline-block";
        botonBuenos.style.display = "inline-block";
    }
});

//buenos
botonBuenos.addEventListener("click", () => {
    if (buenosInput.value === "buenos aires") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            buenosMancha.style.fill = $colorOk;
            buenosInput.style.display = "none";
            botonBuenos.style.display = "none";
            buenosInput.value = "";
            entreMancha.style.fill = $colorFoco;
            entreInput.style.display = "inline-block";
            botonEntre.style.display = "inline-block";
        }, 500);


    } else {
        buenosMancha.style.fill = $colorMal;
        buenosInput.style.display = "none";
        botonBuenos.style.display = "none";
        buenosInput.value = "";
        entreMancha.style.fill = $colorFoco;
        entreInput.style.display = "inline-block";
        botonEntre.style.display = "inline-block";
    }
});

//entre rios
botonEntre.addEventListener("click", () => {
    if (entreInput.value === "entre rios") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            entreMancha.style.fill = $colorOk;
            entreInput.style.display = "none";
            botonEntre.style.display = "none";
            entreInput.value = "";
            feMancha.style.fill = $colorFoco;
            feInput.style.display = "inline-block";
            botonFe.style.display = "inline-block";
        }, 500);


    } else {
        entreMancha.style.fill = $colorMal;
        entreInput.style.display = "none";
        botonEntre.style.display = "none";
        entreInput.value = "";
        feMancha.style.fill = $colorFoco;
        feInput.style.display = "inline-block";
        botonFe.style.display = "inline-block";
    }
});

//santa fe
botonFe.addEventListener("click", () => {
    if (feInput.value == "santa fe") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            feMancha.style.fill = $colorOk;
            feInput.style.display = "none";
            botonFe.style.display = "none";
            feInput.value = "";
            cordobaMancha.style.fill = $colorFoco;
            cordobaInput.style.display = "inline-block";
            botonCordoba.style.display = "inline-block";
        }, 500);


    } else {
        feMancha.style.fill = $colorMal;
        feInput.style.display = "none";
        botonChubut.style.display = "none";
        feInput.value = "";
        botonFe.style.display = "none";
        cordobaMancha.style.fill = $colorFoco;
        cordobaInput.style.display = "inline-block";
        botonCordoba.style.display = "inline-block";
    }
});

//cordoba
botonCordoba.addEventListener("click", () => {
    if (cordobaInput.value == "cordoba") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            cordobaMancha.style.fill = $colorOk;
            cordobaInput.style.display = "none";
            botonCordoba.style.display = "none";
            cordobaInput.value = "";
            sanLuisMancha.style.fill = $colorFoco;
            sanLuisInput.style.display = "inline-block";
            botonSanLuis.style.display = "inline-block";
        }, 500);


    } else {
        cordobaMancha.style.fill = $colorMal;
        cordobaInput.style.display = "none";
        botonCordoba.style.display = "none";
        cordobaInput.value = "";
        sanLuisMancha.style.fill = $colorFoco;
        sanLuisInput.style.display = "inline-block";
        botonSanLuis.style.display = "inline-block";
    }
});

//san luis
botonSanLuis.addEventListener("click", () => {
    if (sanLuisInput.value === "san luis") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            sanLuisMancha.style.fill = $colorOk;
            sanLuisInput.style.display = "none";
            botonSanLuis.style.display = "none";
            sanLuisInput.value = "";
            mendozaMancha.style.fill = $colorFoco;
            mendozaInput.style.display = "inline-block";
            botonMendoza.style.display = "inline-block";

        }, 500);

    } else {
        sanLuisMancha.style.fill = $colorMal;
        sanLuisInput.style.display = "none";
        botonSanLuis.style.display = "none";
        sanLuisInput.value = "";
        mendozaMancha.style.fill = $colorFoco;
        mendozaInput.style.display = "inline-block";
        botonMendoza.style.display = "inline-block";
    }
});

//mendoza
botonMendoza.addEventListener("click", () => {
    if (mendozaInput.value == "mendoza") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            mendozaMancha.style.fill = $colorOk;
            mendozaInput.style.display = "none";
            botonMendoza.style.display = "none";
            mendozaInput.value = "";
            sanJuanMancha.style.fill = $colorFoco;
            sanJuanInput.style.display = "inline-block";
            botonSanJuan.style.display = "inline-block";
        }, 500);


    } else {
        mendozaMancha.style.fill = $colorMal;
        mendozaInput.style.display = "none";
        botonMendoza.style.display = "none";
        mendozaInput.value = "";
        sanJuanMancha.style.fill = $colorFoco;
        sanJuanInput.style.display = "inline-block";
        botonSanJuan.style.display = "inline-block";
    }
});

//san juan
botonSanJuan.addEventListener("click", () => {
    if (sanJuanInput.value == "san juan") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            sanJuanMancha.style.fill = $colorOk;
            sanJuanInput.style.display = "none";
            botonSanJuan.style.display = "none";
            sanJuanInput.value = "";
            riojaMancha.style.fill = $colorFoco;
            riojaInput.style.display = "inline-block";
            botonRioja.style.display = "inline-block";
        }, 500);


    } else {
        sanJuanMancha.style.fill = $colorMal;
        sanJuanInput.style.display = "none";
        botonSanJuan.style.display = "none";
        sanJuanInput.value = "";
        riojaMancha.style.fill = $colorFoco;
        riojaInput.style.display = "inline-block";
        botonRioja.style.display = "inline-block";
    }
});

//la rioja
botonRioja.addEventListener("click", () => {
    if (riojaInput.value == "la rioja") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            riojaMancha.style.fill = $colorOk;
            riojaInput.style.display = "none";
            botonRioja.style.display = "none";
            riojaInput.value = "";
            catamarcaMancha.style.fill = $colorFoco;
            catamarcaInput.style.display = "inline-block";
            botonCatamarca.style.display = "inline-block";
        }, 500);


    } else {
        riojaMancha.style.fill = $colorMal;
        riojaInput.style.display = "none";
        botonRioja.style.display = "none";
        riojaInput.value = "";
        catamarcaMancha.style.fill = $colorFoco;
        catamarcaInput.style.display = "inline-block";
        botonCatamarca.style.display = "inline-block";
    }
});

//catamarca
botonCatamarca.addEventListener("click", () => {
    if (catamarcaInput.value == "catamarca") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            catamarcaMancha.style.fill = $colorOk;
            catamarcaInput.style.display = "none";
            botonCatamarca.style.display = "none";
            catamarcaInput.value = "";
            tucumanMancha.style.fill = $colorFoco;
            tucumanInput.style.display = "inline-block";
            botonTucuman.style.display = "inline-block";
        }, 500);


    } else {
        catamarcaMancha.style.fill = $colorMal;
        catamarcaInput.style.display = "none";
        botonCatamarca.style.display = "none";
        catamarcaInput.value = "";
        tucumanMancha.style.fill = $colorFoco;
        tucumanInput.style.display = "inline-block";
        botonTucuman.style.display = "inline-block";
    }
});

//tucuman
botonTucuman.addEventListener("click", () => {
    if (tucumanInput.value === "tucuman") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            tucumanMancha.style.fill = $colorOk;
            tucumanInput.style.display = "none";
            botonTucuman.style.display = "none";
            tucumanInput.value = "";
            santiagoMancha.style.fill = $colorFoco;
            santiagoInput.style.display = "inline-block";
            botonSantiago.style.display = "inline-block";
        }, 500);


    } else {
        tucumanMancha.style.fill = $colorMal;
        tucumanInput.style.display = "none";
        botonTucuman.style.display = "none";
        tucumanInput.value = "";
        santiagoMancha.style.fill = $colorFoco;
        santiagoInput.style.display = "inline-block";
        botonSantiago.style.display = "inline-block";
    }
});

//santiago del estero
botonSantiago.addEventListener("click", () => {
    if (santiagoInput.value == "santiago del estero") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            santiagoMancha.style.fill = $colorOk;
            santiagoInput.style.display = "none";
            botonSantiago.style.display = "none";
            santiagoInput.value = "";
            chacoMancha.style.fill = $colorFoco;
            chacoInput.style.display = "inline-block";
            botonChaco.style.display = "inline-block";
        }, 500);


    } else {
        santiagoMancha.style.fill = $colorMal;
        santiagoInput.style.display = "none";
        botonSantiago.style.display = "none";
        santiagoInput.value = "";
        chacoMancha.style.fill = $colorFoco;
        chacoInput.style.display = "inline-block";
        botonChaco.style.display = "inline-block";
    }
});

//chaco
botonChaco.addEventListener("click", () => {
    if (chacoInput.value == "chaco") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            chacoMancha.style.fill = $colorOk;
            chacoInput.style.display = "none";
            botonChaco.style.display = "none";
            chacoInput.value = "";
            formosaMancha.style.fill = $colorFoco;
            formosaInput.style.display = "inline-block";
            botonFormosa.style.display = "inline-block";
        }, 500);


    } else {
        chacoMancha.style.fill = $colorMal;
        chacoInput.style.display = "none";
        botonChaco.style.display = "none";
        chacoInput.value = "";
        formosaMancha.style.fill = $colorFoco;
        formosaInput.style.display = "inline-block";
        botonFormosa.style.display = "inline-block";
    }
});

//formosa
botonFormosa.addEventListener("click", () => {
    if (formosaInput.value === "formosa") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            formosaMancha.style.fill = $colorOk;
            formosaInput.style.display = "none";
            botonFormosa.style.display = "none";
            formosaInput.value = "";
            corrientesMancha.style.fill = $colorFoco;
            corrientesInput.style.display = "inline-block";
            botonCorrientes.style.display = "inline-block";
        }, 500);


    } else {
        formosaMancha.style.fill = $colorMal;
        formosaInput.style.display = "none";
        botonFormosa.style.display = "none";
        formosaInput.value = "";
        corrientesMancha.style.fill = $colorFoco;
        corrientesInput.style.display = "inline-block";
        botonCorrientes.style.display = "inline-block";
    }
});

//corrientes
botonCorrientes.addEventListener("click", () => {
    if (corrientesInput.value == "corrientes") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            corrientesMancha.style.fill = $colorOk;
            corrientesInput.style.display = "none";
            botonCorrientes.style.display = "none";
            corrientesInput.value = "";
            saltaMancha.style.fill = $colorFoco
            saltaInput.style.display = "inline-block";
            botonSalta.style.display = "inline-block";
        }, 500);


    } else {
        corrientesMancha.style.fill = $colorMal;
        corrientesInput.style.display = "none";
        botonCorrientes.style.display = "none";
        corrientesInput.value = "";
        saltaMancha.style.fill = $colorFoco;
        saltaInput.style.display = "inline-block";
        botonSalta.style.display = "inline-block";
    }
});

//salta
botonSalta.addEventListener("click", () => {
    if (saltaInput.value === "salta") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            saltaMancha.style.fill = $colorOk;
            saltaInput.style.display = "none";
            botonSalta.style.display = "none";
            saltaInput.value = "";
            jujuyMancha.style.fill = $colorFoco;
            jujuyInput.style.display = "inline-block";
            botonJujuy.style.display = "inline-block";
        }, 500);


    } else {
        saltaMancha.style.fill = $colorMal;
        saltaInput.style.display = "none";
        botonSalta.style.display = "none";
        saltaInput.value = "";
        jujuyMancha.style.fill = $colorFoco;
        jujuyInput.style.display = "inline-block";
        botonJujuy.style.display = "inline-block";
    }
});


//jujuy
botonJujuy.addEventListener("click", () => {
    if (jujuyInput.value === "jujuy") {
        efectoOk.play();
        puntaje.push("ok");
        setTimeout(function() {
            jujuyMancha.style.fill = $colorOk;
            jujuyInput.style.display = "none";
            botonJujuy.style.display = "none";
            misionesMancha.style.fill = $colorFoco;
            misionesInput.style.display = "inline-block";
            botonMisiones.style.display = "inline-block";
        }, 500);


    } else {
        jujuyMancha.style.fill = $colorMal;
        jujuyInput.style.display = "none";
        botonJujuy.style.display = "none";
        misionesMancha.style.fill = $colorFoco;
        misionesInput.style.display = "inline-block";
        botonMisiones.style.display = "inline-block";
    }
});

//misiones
botonMisiones.addEventListener("click", () => {
    if (misionesInput.value === "misiones") {
        efectoFinal.play();
        puntaje.push("ok");
        misionesMancha.style.fill = $colorOk;
        misionesInput.style.display = "none";
        botonMisiones.style.display = "none";
        labelTitulo.style.display = "none";


    } else {
        efectoFinal.play();
        misionesMancha.style.fill = $colorMal;
        misionesInput.style.display = "none";
        botonMisiones.style.display = "none";
        labelTitulo.style.display = "none";

    }

    pantallaFinal.style.display = "block";
    campoNombre.innerHTML = mostrarNombre;
    campoPuntaje.innerHTML = puntaje.length;

});