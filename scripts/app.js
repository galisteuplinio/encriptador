

function copiaTexto(){
    let textoDaCaixa = document.querySelector("#story").value;
    limparCampo('#story') 
   return textoDaCaixa
   
}

function colaTexto(texto){
    console.log("Coloca o texto no lugar correto")
    document.querySelector("#tela").value = texto;
}

function criptografaTexto(texto = copiaTexto()){
    let charts  = [] = texto.split('')
    for(var item in charts){
        if (charts[item] == 'a'){
            charts[item] = 'ai'
        }
        if(charts[item] == 'e'){
            charts[item] = 'enter'
        }
        if(charts[item] == 'i'){
            charts[item] = 'imes'
        }
        if(charts[item] == 'o'){
            charts[item] = 'obter'
        }
        if(charts[item] == 'u'){
            charts[item] = 'ufar'
        }
    }
    texto = charts.join('')
    colaTexto(texto)
}   

function descriptografaTexto(texto = copiaTexto()){
   let codigos = ['ufar', 'obter', 'imes', 'enter', 'ai'];
   codigos.forEach((codigo)=>{
        if (codigo == 'ai'){
           texto = texto.replace(/ai/g,'a')
        }
        if(codigo == 'enter'){
            texto = texto.replace(/enter/g, 'e')
        }
        if(codigo == 'imes'){
            texto = texto.replace(/imes/g, 'i')
        }
        if(codigo == 'obter'){
            texto = texto.replace(/obter/g, 'o')
        }
        if(codigo == 'ufar'){
            texto = texto.replace(/ufar/g, 'u')
        }
   })
     colaTexto(texto)
}
function limparCampo(campo){
    document.querySelector(campo).value = '';
}

function CopiaAreaTrasferencia() {
    let texto = document.getElementById("tela");
    navigator.clipboard.writeText(texto.value);
    texto.value='';   
}