//Arquivo JS da calculadora

function calcular(){
    //Escopo da função calcular

    let operacao = document.getElementById('operacao').value;
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    //console.log(numero1, numero2, operacao);
    //console.log(typeof numero1);

    let resultado;

    if(!Number.isNaN(numero1) && !Number.isNaN(numero2)){ 
        
        switch(operacao){
            case 'adicao': resultado = numero1 + numero2;
                break;
            case 'subtracao': resultado = numero1 - numero2;
                break;
            case 'multiplicacao': resultado = numero1 * numero2;
                break;
            case 'divisao': resultado = numero1 / numero2;
                break;
            default: alert('Selecione uma operação!')
                return false;
        }

        document.getElementById('resultado').value = resultado;

    }else{
        alert('Preencha campos com número!')
    }
    
}


function trocarTema(){
    let tema = document.documentElement.getAttribute('data-bs-theme');

    console.log(tema);

    if(tema === 'dark'){
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }else{
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }

}