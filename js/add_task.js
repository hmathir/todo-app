let count = 0;
document.getElementById('add-task-btn').addEventListener('click',function(){
    // Getting New Task From Input Field.
    const newTaskInputField = document.getElementById('task-input');
    const newTaskInputValue = newTaskInputField.value;
    newTaskInputField.value = '';
    if(newTaskInputValue == ''){
        alert("Empty Task Can't Added.");
        return;
    }
    count++;
    const incompleteTaskParentDiv = document.getElementById('incomplete-task-div');
    const newIncompleteTask = document.createElement('div');
    newIncompleteTask.classList.add("flex" ,"justify-between", "items-center", "mt-3");
    newIncompleteTask.innerHTML = `
    <p>${count}</p>
    <h1 id="incomplete-task-value" class="font-bold">${newTaskInputValue}</h1>
    <div>
        <button  class="complete-task-btn bg-pink-300 px-3 py-1 rounded-lg">Complete</button>
        <button class="bg-red-600 px-3 py-1 rounded-lg text-white">Delete</button>
    </div>
    `
    incompleteTaskParentDiv.appendChild(newIncompleteTask);


    const completeBtn = document.getElementsByClassName('complete-task-btn');
    for(btn of completeBtn){
        btn.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.display = 'none';
            const completeTaskParentDiv = document.getElementById('complete-task-div');
            const completeTask = document.createElement('div');
            completeTask.classList.add("flex" ,"justify-between", "items-center", "mt-3");
            completeTask.innerHTML = `
            <p>${count}</p>
            <h1 id="incomplete-task-value" class="font-bold">${newTaskInputValue}</h1>
            <div>
            <button class="bg-lime-300 px-3 py-1 rounded-lg ">Incomplete</button>
            <button class="bg-red-600 px-3 py-1 rounded-lg text-white">Delete</
            </div>
            `;
            completeTaskParentDiv.appendChild(completeTask);
        })
    }


})