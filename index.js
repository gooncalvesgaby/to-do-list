const inputTask = document.getElementById("add-input");
const taskList = document.getElementById("add-list");
const list = document.getElementById("list");

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

