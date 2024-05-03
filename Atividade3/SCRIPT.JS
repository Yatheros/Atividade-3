

const form = document.getElementById("form");
const nome = document.getElementById("nome")
const CPF = document.getElementById("CPF")
const Email = document.getElementById("Email")
const Masculino = document.getElementById("masculino")
const Feminino = document.getElementById("feminino")
const Outro = document.getElementById("outro")

form.addEventListener("submit",(evebt)=>{ 
    Event.preventDefault();
    alert("CADASTRADO COM SUCESSO")
})

function checkInputnome() {
    const nomevalue= nome.value;
    console.log(nomevalue)
 }