let resultado = document.getElementById('resultado')
let btn = document.getElementsByTagName('button')
function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            resultado.innerHTML = ''
            for(i=0; i < btn.length; i++){
                btn[i].disabled = false
            }
        }

        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
            resultado.innerHTML += valor
        }

        if(valor === '=') {
            try {
                let valorFinal = eval(resultado.innerHTML);
                resultado.innerHTML = valorFinal; 
                if(valorFinal.value == ''){
                    resultado.innerHTML = ''
                }
            } catch (e) {
                resultado.innerHTML = 'Erro';
                setTimeout(()=>{
                    resultado.innerHTML = '';
                }, 800)
            }
        }
        
    } else if(tipo === 'valor'){ 
        resultado.innerHTML += valor
    }

    if(resultado.innerHTML.length > 13){
        for(i=0; i < btn.length; i++){
            btn[i].disabled = true
            btn[0].disabled = false
        }
    }
}