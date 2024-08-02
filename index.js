const inputTask = document.getElementById("add-input");
const taskList = document.getElementById("add-list");
const list = document.getElementById("list");

// function addTask(){
//     const inputTask = document.getElementById('add-input');
//     const inputAddTask = inputTask.trim();

//     if (inputAddTask === "") {
//         alert("Digite uma task");
//         return;
//     }
// }



function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
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
    buttonClear.setAttribute('title', 'Apagar Task')
    li.appendChild(buttonClear);

}

function createTask(textoInput) {
    const li = createLi();
    li.innerHTML = textoInput;
    list.appendChild(li);
    clearInput();
    createButtonClear(li);
};

taskList.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});


document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
});

