var tasks = [];

var taskStatus = {
    active: 'active',
    completed: 'completed'
};

function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement (task){
    var listEl = document.getElementById('active');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(text.name);
    taskEl.setAttribute('id', task.id);
    taskEl.appendChild(textEl);
    listEl.appendChild(taskEl);
}

function addTask (event){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != ''){
        var id = 'item-' + task.length;
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);
        inputEl.value = '';
    }
}

function completeTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    for (var i = 0; i < tasks.length; i++){
        if (tasks[i].id === id){
            document.getElementById('add-task').click();
        }
    }
}

function init(){
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
    document.getElementById('input-task').onkeypress = clickButton;
}

init();