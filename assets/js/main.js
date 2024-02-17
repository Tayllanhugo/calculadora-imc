const form = window.document.getElementById('form');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const pesoUsuario = parseFloat(window.document.getElementById('pesoUsuario').value)
    const alturaUsuario = parseFloat(window.document.getElementById('alturaUsuario').value)
    const resultadoImc = window.document.querySelector('.resultadoImc')
    
    const calcularImc = function (peso, altura) { // Declara os parametros
        return peso / (altura * altura); // faz os calculos com os parametros
    }

    const imc = calcularImc(pesoUsuario, alturaUsuario) // pega a função e adiciona os argumentos para os parametros

    if (imc < 18.5) {
        resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
        resultadoImc.style.backgroundColor = 'rgb(13, 255, 174)'
    }else if (imc >= 18.5 && imc <= 24.9) {
        resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
        resultadoImc.style.backgroundColor = 'rgb(13, 255, 174)'
    }else if (imc >= 25 && imc <= 29.9) {
        resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
        resultadoImc.style.backgroundColor = 'rgb(13, 255, 174)'
    }else if (imc >= 30 && imc <= 34.9) {
        resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
        resultadoImc.style.backgroundColor = 'rgb(13, 255, 174)'
    }else if (imc >= 35 && imc <= 39.9) {
        resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
        resultadoImc.style.backgroundColor = 'rgb(13, 255, 174)'
    }else if (imc >= 40) {
        resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
        resultadoImc.style.backgroundColor = 'rgb(13, 255, 174)'
    }else if (isNaN(pesoUsuario) || isNaN(alturaUsuario) || pesoUsuario <= 0 || alturaUsuario <= 0) {
        resultadoImc.innerHTML = 'ERRO, PREENCHA OS CAMPOS'
        resultadoImc.style.backgroundColor = 'rgba(253, 76, 32, 0.617)'
    }
});



