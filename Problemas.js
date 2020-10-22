var entrada = document.getElementById("In").value;


function problema1(entrada){
    event.preventDefault()

    nCaracteres = entrada.length;

    for(var i = 0; i<nCaracteres; i++){
        validador = entrada.charAt(i)
        if(validador == validador){
            
        }
    }

    periodo = entrada.repeat()

    switch(perido){
        case 1:
            break;
    }

    var salida = document.getElementById('Out').value = entrada;
}

function problema2(){
    event.preventDefault();
    var saludo = document.getElementById("saludo").value;

    var expresionReg2 = /h+o+l+a+\s?/gi;
    var resultado = expresionReg2.test(saludo);

    var salida = document.getElementById('verificacion').value = resultado;
}

function problema3(){
    event.preventDefault();

    var cadena_1 = document.getElementById("cadena_1").value;
    var cadena_2 = document.getElementById("cadena_2").value;

    var nCaracteres_c1 = cadena_1.length;
    var nCaracteres_c2 = cadena_2.length;
    var concatenacion = [];
    var numeracion = 0;
    var letras;
    var oracion = '';

    for(var i=0; i<nCaracteres_c2; i++){
        caracter_c2 = cadena_2.charAt(i);
        for(var j=0;j<nCaracteres_c1;j++){
            caracter_c1 = cadena_1.charAt(j);
            if(caracter_c1 == caracter_c2){
                if(concatenacion.indexOf(caracter_c2) !== -1){
                    console.log('No incluido')
                }   
                else{
                    concatenacion [numeracion] = caracter_c2;
                    console.log('Estos son los valores'+concatenacion[numeracion]);
                    numeracion++
                }

            }
        }
    }

    console.log(concatenacion);

    for(var i=0; i<concatenacion.length;i++){
        letras = concatenacion[i];
        oracion = oracion+letras;
    }
    console.log('Esta es la oracion: '+oracion);

    if(oracion==cadena_1){
        console.log('Yes')
    }
    else{
        console.log('No')
    }
}

