function addTask(){
          const input = document.getElementById('taskInput');  
          const taskText = input.value.trim();  
          if(taskText ===""){
                    alert(`Please enter a Task!`);
                    return;  
          } 
          let li =document.createElement("li");  
          li.innerHTML = `${taskText}<button class = "delete" onclick = "deleteTask(this)">X</button>`;  
           li.addEventListener('click', function(e) {
                    if(e.target.tagName !== 'BUTTON') { 
                              li.classList.toggle('completed'); // add/remove strike-through
                              saveTasks();
                               // save updated list 
                              }
                    });  
                    document.getElementById('taskList').appendChild(li);  
                    saveTasks(); 
                    input.value = ''; 
}  
function deleteTask(btn) {
  btn.parentElement.remove(); // Remove the task (li) when X is clicked
  saveTasks(); // Update the list in browser storage
}
function saveTasks() {
  let tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    tasks.push({
      text: li.firstChild.textContent.trim(),
      done: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks when page opens
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    let li = document.createElement('li');
    li.innerHTML = `${task.text} <button onclick="deleteTask(this)">X</button>`;
    if (task.done) li.classList.add('completed');
    li.addEventListener('click', function(e) {
      if(e.target.tagName !== 'BUTTON') {
        li.classList.toggle('completed');
        saveTasks();
      }
    });
    document.getElementById('taskList').appendChild(li);
  });
}
          
                              
          
