async function addEmployee(employee) {
    await $.ajax({
        url: 'http://localhost:3000/emps/',
        type: 'POST',
        data: employee
    })
    createPage();
    $("#d").slideDown();
    dataSlice(pageNo);
}

async function getEmployees(i = '') {
    let response = await fetch('http://localhost:3000/emps/' + i);
    return (await response.json());
}

async function deleteData(i) 
{
    await $.ajax({
      url : 'http://localhost:3000/emps/' + i, 
      type : 'DELETE',
      data : null
    })
    createPage();
}

async function updateData(i, employee) 
{
    await $.ajax({
      url : 'http://localhost:3000/emps/' + i,
      type : 'PUT',
      data : employee
    })

    createPage();
    console.log(pageNo);
    dataSlice(pageNo);
}