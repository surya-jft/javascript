var pageNo = 1;

function changePage(i) {
    pageNo = i;
    $("#d").slideUp();
    dataSlice(i);
}

function add() {
    const newEmployee = {
        name: $("#Name").val(),
        course: $("#Course").val(),
        rollno: $("#Rollno").val(),
        phoneno: $("#Phoneno").val(),
        address: $("#Address").val()
    }
    addEmployee(newEmployee);
}

async function updater(i, emp) 
{
    const buttonText = $(`#editButton${i}`).text();

    if (buttonText === "Edit") 
    {
        let table = $("#table").children();
        let tr = table.eq(i);

        tr.children().eq(0).html(`<input type="text" id="name"></input>`)
        tr.children().eq(1).html(`<input type="text" id="course"></input>`)
        tr.children().eq(2).html(`<input type="text" id="rollNo"></input>`)
        tr.children().eq(3).html(`<input type="text" id="phoneNo"></input>`)
        tr.children().eq(4).html(`<input type="text" id="address"></input>`)
        tr.children().eq(5).children().hide();
        tr.children().eq(6).children().html("Update")

        $("#name").val(emp.name);
        $("#course").val(emp.course);
        $("#rollNo").val(emp.rollno);
        $("#phoneNo").val(emp.phoneno);
        $("#address").val(emp.address);
    }

    else if (buttonText === "Update") 
    {
        const oldEmployee = {
            name: $("#name").val(),
            course: $("#course").val(),
            rollno: $("#rollNo").val(),
            phoneno: $("#phoneNo").val(),
            address: $("#address").val()
        }
        updateData(emp.id, oldEmployee);
    }
}

async function showInConsole() {
    const employees = await getEmployees();
    console.log(employees);
}


function LoadInTable()
{
    pageNo=1;
    $("#d").slideUp();
    $("#d").slideDown();
    createPage();
}

async function createPage() {
    const employees = await getEmployees();
    const dataCount = employees.length;
    const pageCount = Math.ceil(dataCount / 10);
    let pageButton = '';

    for (let i = 1; i <= pageCount; i++) {
        pageButton += `<button type="button" class="btn btn-link" id="pageBtn" onclick='changePage(${i})'>${i}</button>`;
    }
    $('#pagination').html(pageButton);
    dataSlice(pageNo);
    
}

async function dataSlice(currentPage) {
    console.log(pageNo);
    pageNo = currentPage;
    let endValue = currentPage * 10;
    let startValue = endValue-10;
    
    $("#d").slideDown();

    let table = $("#table");
    let data = '';
    const employees = await getEmployees();

    employees.slice(startValue,endValue).forEach((emp,index) => {
        const temp = JSON.stringify(emp);
        data += `<tr>
        <td>${emp.name}</td><td>${emp.course}</td><td>${emp.rollno}</td><td>${emp.phoneno}</td><td>${emp.address}</td>
        <td><button class="btn btn-danger" type="button" onclick="deleteData(${emp.id})">Delete</button></td>
      <td><button class="btn btn-info" id="editButton${index}" type="button" onclick='updater(${index},${temp})'>Edit</button></td>
      </tr>`;
    })
    table.html(data);
}

createPage();
// $('#update').hide();

console.log(pageNo);