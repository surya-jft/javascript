var emp =[];

function Submit()
{
    var employee = { 
        name : document.getElementById('name').value,
        job : document.getElementById('job').value,
        salary : document.getElementById('salary').value
    }
    addEmployee(employee, ShowInTable);
}

function addEmployee(employee, callback)
{
    console.log("Adding Employee");

    setTimeout(()=>{
        emp.push(employee);
        console.log("Employee Added");
        callback()
    },1000);
}

function ShowInTable()
{
    getEmployee(show);
}

function getEmployee(callback)
{
    console.log("Fetching Employee");

    setTimeout(()=> {
        console.log("Fetched");
        callback(emp)
    },2000);
}

function show(employee)
{
    document.getElementById("table").innerHTML = ""; 
    var rownum =0;  
    employee.forEach(emp => {
        document.getElementById("table").innerHTML += `<tr> <td>${emp.name}</td> <td>${emp.job}</td> <td>${emp.salary}</td> <td><button class="btn btn-dark" type="button" onclick="delete_fun(${rownum++})">delete</button></td></tr>`;
    })
};

function delete_fun(index)
{
    console.log("entry deleting....");
    emp.splice(index,1);
    ShowInTable();
}

function LoadInTable(employee)
{
    console.log(employee);
}

function ShowInConsole()
{
    getEmployee(showConsole)
}

function showConsole(employees){
    console.log(employees)
  }