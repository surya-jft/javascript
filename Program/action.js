var task = document.getElementById("text");

var tasks = document.getElementById("tb1");

var button = document.getElementById("button");
button.addEventListener("click", add);

var editTask;

function add() {

    if (button.value == "add" && task.value.trim() !== "") {

        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerText = task.value;
        tr.appendChild(td1);

        var td2 = document.createElement('input');
        td2.type = "submit";
        td2.value = "Edit";
        tr.appendChild(td2);

        var td3 = document.createElement('input');
        td3.type = "submit";
        td3.value = "Delete";
        tr.appendChild(td3);

        tasks.appendChild(tr);

        task.value = "";

    }

    if (button.value == 'Update') {

        var allTasks = document.querySelectorAll("tr");

        for (var i of allTasks) 
        {
            if (i.firstElementChild.innerText == editTask) 
            {
                i.firstElementChild.innerText = task.value;
            }
        }
        
        task.value = "";
        button.value = "add";

    }
}

tasks.addEventListener("click", function (event) {
    if (event.target.value == "Delete") 
    {
        var delTask = event.target.parentElement;
        tasks.removeChild(delTask);
    }
    
    if (event.target.value == "Edit") 
    {
        editTask = event.target.parentElement.firstElementChild.innerText;
        task.value = editTask;
        button.value = "Update";
    }
});