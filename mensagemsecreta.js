 //variáveis
 let inputCripto = document.querySelector(".info-cripto");
 let inputDescripto = document.querySelector(".info-descripto");
 let botaoCriptografa = document.querySelector(".criptografa");
 let botaoDescriptografa = document.querySelector(".descriptografa");
 let botaoCopiar = document.querySelector(".copiar")
 let palavra
 let palavraCriptografada
 let clone;
 //funções de criptografia e descriptografia

 function Criptografar(){
                         palavra = inputCripto.value.toLowerCase();
                         //console.log(palavra)
                         palavra=palavra.replace(/e/g, "enter");
                         palavra=palavra.replace(/i/g , "imes");
                         palavra=palavra.replace(/a/g , "ai");
                         palavra=palavra.replace(/o/g , "ober");
                         palavra=palavra.replace(/u/g , "ufat");
                         inputDescripto.value=palavra
                         inputCripto.value = "";
 }
 function descriptografar(){
                             palavraCriptografada = inputDescripto.value.toLowerCase();
                             palavraCriptografada = palavraCriptografada.replace(/enter/g,"e");
                             palavraCriptografada = palavraCriptografada.replace(/imes/g , "i");
                             palavraCriptografada = palavraCriptografada.replace(/ai/g , "a");
                             palavraCriptografada = palavraCriptografada.replace(/ober/g,"o");
                             palavraCriptografada = palavraCriptografada.replace(/ufat/g , "u");
                             inputCripto.value=palavraCriptografada;
                             inputDescripto.value = "";
                             
 }
 function copia(){
                     if(inputDescripto.value==""){
                                                 clone = navigator.clipboard.writeText(inputCripto.value);
                                                 console.log(clone)
                     }else if(inputCripto.value==""){
                                                     clone=navigator.clipboard.writeText(inputDescripto.value);
                                                     console.log(clone)
                     }
                     
 }
 

 botaoCriptografa.addEventListener("click",Criptografar)
 botaoDescriptografa.addEventListener("click", descriptografar)
 botaoCopiar.addEventListener("click",copia )