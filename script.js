let resultado = document.getElementById('resultado')
let btn = document.getElementsByTagName('button')
let container = document.getElementById('container')
let laranja = document.querySelector('.laranja')
let verde = document.querySelector('.verde')
let azul = document.querySelector('.azul')

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
            let valor = resultado.innerHTML
            let resultadoLimitado = valor.slice(0, 9);
            resultado.innerHTML = resultadoLimitado
        }
        
    } else if(tipo === 'valor'){ 
        resultado.innerHTML += valor
    }
    
}

laranja.addEventListener('click', ()=> {
    container.style.background = '#F7AC03'
    resultado.style.border = '10px inset #FC8E0A'
    for(i=0; i < btn.length; i++){
        btn[i].style.background = '#FC8E0A'
    }
})
verde.addEventListener('click', ()=> {
    container.style.background = '#9EDA2F'
    resultado.style.border = '10px inset #4FC002'
    for(i=0; i < btn.length; i++){
        btn[i].style.background = '#4FC002'
    }
})
azul.addEventListener('click', ()=> {
    container.style.background = '#42B1DE'
    resultado.style.border = '10px inset #0373C3'
    for(i=0; i < btn.length; i++){
        btn[i].style.background = '#0373C3'
    }
})



