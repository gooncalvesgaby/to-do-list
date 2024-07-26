const inputTask = document.getElementById("add-input");
const taskList = document.getElementById("add-list");
const list = document.getElementById("list");

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
};

taskList.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

