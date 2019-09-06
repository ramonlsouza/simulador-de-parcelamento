const juros = 4.5; //valor percentual de juros por parcela (float)
const parcelas = 12; //numero de parcelas (int)
const moeda = 'R$';

function simular(valor){

    if(valor[valor.length -1] == ','){
        valor = valor.replace(',','.'); 
        document.getElementById('valor').value = valor;
    }

    let float = parseFloat(valor);
    let retorno = '';

    if(isNaN(float) === false){
        if(valor[valor.length -1] != '.'){
            document.getElementById('valor').value = float;
        }

        retorno = '<table><tr><th>Parcelas</th><th>Valor da parcela</th><th>Valor total</th></tr>';
        for(i=1;i<=parcelas;i++){
            valor_juros = float/100*(juros*(i-1));
            total = float+valor_juros;
            v = total/i;

            retorno += `<tr><td>${i}x</td><td>${moeda} ${v.toFixed(2)}</td><td>${moeda} ${total.toFixed(2)}</td></tr>`;
        }
    }else{
        retorno = 'Informe um valor válido';
    }

    document.getElementById('resultado').innerHTML = retorno;
}

simular(0);