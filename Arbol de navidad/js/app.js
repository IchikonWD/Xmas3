$(document).ready(function () {
    //Contadores
    cuentatotal = 0;
    cuenta = 0;
    adornosborrados = 0;
    numerodeadornos = 0;
    //Crear adornos
    function crearAdorno(numerodeadornos) {
        var adornoscreados = "<div class='ornament' id='ornament" + numerodeadornos + "'></div<";
        $("#adornos").append(adornoscreados);
        numerodeadornos = "#ornament" + numerodeadornos;
        var minNumber = 1;
        var maxNumber = 5;
        function randomNumberFromRange(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var randomNumberColour = randomNumberFromRange(minNumber, maxNumber);
        var randomNumberDirection = randomNumberFromRange(minNumber, maxNumber);
        //Randomizar el color de los adornos
        switch (randomNumberColour) {
            case 1:
                $(numerodeadornos).css("background-color", "red");
                break;
            case 2:
                $(numerodeadornos).css("background-color", "blue");
                break;
            case 3:
                $(numerodeadornos).css("background-color", "green");
                break;
            case 4:
                $(numerodeadornos).css("background-color", "purple");
                break;
            case 5:
                $(numerodeadornos).css("background-color", "orange");
                break;
        }
        //Posicionar aleatoriamente las bolas en el Árbol
        switch (randomNumberDirection) {
            case 1:
                $(numerodeadornos).animate({"left": (Math.random() * 1000) + -200 + "px", "top": -50 + "px"}, 0);
                $(numerodeadornos).animate({"left": (Math.random() * 30) + 210 + "px", "top": Math.floor((Math.random() * 80) + 10) + "px"}, 600);
                break;
            case 2:
                $(numerodeadornos).animate({"left": (Math.random() * 1000) + -200 + "px", "top": -50 + "px"}, 0);
                $(numerodeadornos).animate({"left": (Math.random() * 75) + 185 + "px", "top": Math.floor((Math.random() * 80) + 60) + "px"}, 600);
                break;
            case 3:
                $(numerodeadornos).animate({"left": (Math.random() * 1000) + -200 + "px", "top": -50 + "px"}, 0);
                $(numerodeadornos).animate({"left": (Math.random() * 130) + 160 + "px", "top": Math.floor((Math.random() * 80) + 115) + "px"}, 600);
                break;
            case 4:
                $(numerodeadornos).animate({"left": (Math.random() * 1000) + -200 + "px", "top": -50 + "px"}, 0);
                $(numerodeadornos).animate({"left": (Math.random() * 165) + 150 + "px", "top": Math.floor((Math.random() * 80) + 175) + "px"}, 600);
                break;
            case 5:
                $(numerodeadornos).animate({"left": (Math.random() * 1000) + -200 + "px", "top": -50 + "px"}, 0);
                $(numerodeadornos).animate({"left": (Math.random() * 235) + 110 + "px", "top": Math.floor((Math.random() * 70) + 245) + "px"}, 600);
                break;
        }
    }
    //Remover adornos del Árbol
    function quitarAdornos(cuentatotal) {
        for (i = 0; i <= cuentatotal; i++) {
            deletingOrnaments = "#ornament" + i;
            $(deletingOrnaments).animate({"top": Math.floor((Math.random() * 10) + 365) + "px"}, 800);
        }
    }
    //Agitar el Árbol
    function agitarArbol() {
        $("#arbol").animate({"left": "50px"}, 20);
        $("#arbol").animate({"left": "-50px"}, 20);
        $("#arbol").animate({"left": "50px"}, 20);
        $("#arbol").animate({"left": "-50px"}, 20);
        $("#arbol").animate({"left": "40px"}, 20);
        $("#arbol").animate({"left": "-40px"}, 20);
        $("#arbol").animate({"left": "40px"}, 20);
        $("#arbol").animate({"left": "-40px"}, 20);
        $("#arbol").animate({"left": "30px"}, 20);
        $("#arbol").animate({"left": "-30px"}, 20);
        $("#arbol").animate({"left": "30px"}, 20);
        $("#arbol").animate({"left": "-30px"}, 20);
        $("#arbol").animate({"left": "0px"}, 20);
    }
    //Boton para crear adornos
    $("#adornizar").click(function () {
        cuenta++;
        cuentatotal++;
        numerodeadornos++;
        $("#adornosarbol").text("Adornos en el Árbol: " + cuenta);
        crearAdorno(numerodeadornos);
    });
    //Remover los adornos poner el contador de adornos a 0
    $("#agitar").click(function () {
        agitarArbol();
        quitarAdornos(cuentatotal);
        adornosborrados = cuentatotal;
        $("#adornosborrados").text("Adornos eliminados: " + adornosborrados);
        cuenta = 0;
        $("#adornosarbol").text("Adornos en el Árbol: " + cuenta);
    });
})