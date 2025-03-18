document.addEventListener("DOMContentLoaded", () => {

    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTask');
    const todoList = document.getElementById('todoList');
    const clearCompletedBtn = document.getElementById('clearCompleted');
    const clearAllBtn = document.getElementById('clearAll');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }


    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            if (todo.completed) {
                li.classList.add('completed');
            }

            li.innerHTML = `
                <span>${todo.text}</span>
                <div class="task-actions">
                    <button class="toggle" data-index="${index}">${todo.completed ? '↩️' : '✓'}</button>
                    <button class="delete" data-index="${index}">🗑️</button>
                </div>
            `;

            todoList.appendChild(li);
        });

        saveTodos();
    }


    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        todos.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTodos();
    });

   
    todoList.addEventListener('click', (event) => {
        const target = event.target;
        const index = target.dataset.index;

        if (target.classList.contains('toggle')) {
            todos[index].completed = !todos[index].completed; 
        } else if (target.classList.contains('delete')) {
            todos.splice(index, 1); 
        }

        renderTodos();
    });


    clearCompletedBtn.addEventListener('click', () => {
        todos = todos.filter(todo => !todo.completed);
        renderTodos();
    });


    clearAllBtn.addEventListener('click', () => {
        todos = [];
        renderTodos();
    });


    renderTodos();
});