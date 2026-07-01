addBtn.addEventListener("click", () => {
     if(task.value === ""){
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");
    li.innerText = task.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    task.value = "";
});
