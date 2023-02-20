function calcular(){
    let valor1 = Number(document.getElementById('valor1').value)
    let valor2 = Number(document.getElementById('valor2').value)
    let total = 0

        if(document.getElementById('radio1').checked)
            total = valor1 + valor2

        else if(document.getElementById('radio2').checked)
            total = valor1 - valor2

        else if(document.getElementById('radio3').checked)
            total = valor1 * valor2

        else
            total = valor1 / valor2
        
        document.getElementById('resultado').innerHTML = 'Resultado: ' + String(total)

    }