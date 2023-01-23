/* variables: espacio de memoria para guardar datos */
const textArea = document.querySelector(".text-area");   /* DOM: es el arbol de objetos HTML */
const mensaje = document.querySelector(".mensaje");

/* vamos a trabajar con arreglos multidimensionales lo cual es un conjuto de arreglos*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";  /* para limpiar el campo */
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //console.table(matrizCodigo) para ver en el navegador
    
    stringEncriptada = stringEncriptada.toLowerCase()
    // toLowerCase() es para que las letras sean solo minusculas

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";  /* para limpiar el campo */
    
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //console.table(matrizCodigo) para ver en el navegador
    
    stringDesencriptada = stringDesencriptada.toLowerCase()
    // toLowerCase() es para que las letras sean solo minusculas

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


