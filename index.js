const inputTask = document.getElementById("add-input");
const taskList = document.getElementById("add-list");
const list = document.getElementById("list");

function addTask() {
    const inputAddTask = inputTask.value.trim(); // Mudança: Usando .trim() para remover espaços extras
    if (inputAddTask === "") {
        alert("Digite uma task");
        return;
    }
    createTask(inputAddTask);
}

function createLi() {
    const li = document.createElement('li');
    return li;
}

// Mudança: Adicionado .trim() e e.preventDefault() para evitar criação de tasks com apenas espaços
inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { // Enter key
        e.preventDefault(); // Evitar o comportamento padrão do enter
        if (inputTask.value.trim() === "") {
            alert("Digite uma task");
            return;
        }
        createTask(inputTask.value.trim());
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createButtonClear(li) {
    li.innerText += ' ';
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Apagar';
    buttonClear.setAttribute('class', 'apagar');
    buttonClear.setAttribute('title', 'Apagar Task');
    li.appendChild(buttonClear);
}

function createTask(textoInput) {
    const li = createLi();
    li.innerHTML = textoInput;
    list.appendChild(li);
    clearInput();
    createButtonClear(li);
}

// Mudança: Usando .trim() para evitar adição de tasks com apenas espaços
taskList.addEventListener('click', function() {
    if (inputTask.value.trim() === "") {
        alert("Digite uma task");
        return;
    }
    addTask();
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
});
