let arrayList = []


function addtolist() {
    let inputAdicionar = document.getElementById("add-input")

    if(inputAdicionar.value == ""){
        alert("Digite um valor valido")
    } else {
        arrayList.push(inputAdicionar.value)
    }    
}

