const employees = document.querySelectorAll(".form-control");
let Table = document.querySelector("table");
let Data = [];
let theader = `<table class="table table-bordered"><tr><th class="table-dark">id</th><th class="table-dark">Employee Name</th><th class="table-dark">Employee Address</th><th class="table-dark">Employee Salary</th><th class="table-dark">Employee Photo</th><th class="table-dark">Edit/Delete</th></tr></table>`
const submit = () => {
    const name = employees[0].value.trim();
    const address = employees[1].value.trim();
    const salary = parseInt(employees[2].value);
    const department = employees[3].value.trim();
    if (name == "" || address == "" || salary == "" || department == "") {
        alert("input Data cannot be blank")
        return false;

    }
    if (isNaN(salary)) {
        alert("Emp Salary Invalid")
        return false;
    }

    const Empdata = { Name: name.toUpperCase(), Address: address.toUpperCase(), Salary: salary, Department: department.toUpperCase() }
    Data.push(Empdata)
    Table.innerHTML = display(theader);
    employees[0].value = "";
    employees[1].value = "";
    employees[2].value = "";
    employees[3].value = "";

}

// table display
function display(x) {
    Data.forEach((element, index) => {
        x += `<tr>
<td class="table-dark">${"1" + index}</td>
<td class="table-light">${element.Name}</td>
<td class="table-light">${element.Address}</td>
<td class="table-light">${element.Salary}/-</td>
<td class="table-light">${element.Department}</td>
<td class="table-light">
<button class="edit" onclick=Edit(${index})><i class='fa fa-edit'></i></button>
<button class="delete"onclick=Delete(${index})><i class="fa fa-trash"></i></span></button></td>   
</tr>`});

    return x;
}
let Delete = (del) => { Data.splice(del, 1); Table.innerHTML = display(theader) };
let Edit = (edt) => {
    if (confirm("Are you Agree !")) {
        if (H = prompt("If do you change name?\n  Enter NAME and press ok. \n else Press cancel")) {
            Data[edt].Name = H.toUpperCase();
        }
        if (I = prompt("If do you change Address?\n  Enter ADDRESS and press ok. \n else Press cancel")) {
            Data[edt].Address = I.toUpperCase();
        }
        if (N = prompt("If do you change Sallary?\n Enter SALARY and press ok. \n else Press cancel")) {
            Data[edt].Salary = N;
        }
        if (U = prompt("If do you change Sallary?\n  Enter DEPARMENT and press ok. \n else Press cancel")) {
            Data[edt].Department = U.toUpperCase();
        }
    }
    Table.innerHTML = display(theader);
}

employees[4].onkeyup = () => {
    Table.innerHTML = filter(theader);
}
// table Filter
function filter(y) {
    let search = employees[4].value;

    var filters = Data.filter(function (x, i) {
        if (x.Name.startsWith(search.toUpperCase()) || x.Address.startsWith(search.toUpperCase()) || x.Salary.toString().startsWith(search) ||x.Department.startsWith(search.toUpperCase())) {
            return x;
        }
    })

    filters.forEach((element, index) => {
        y += `<tr>
    <td class="table-dark">${index}</td>
    <td class="table-light">${element.Name}</td>
    <td class="table-light">${element.Address}</td>
    <td class="table-light">${element.Salary}/-</td>
    <td class="table-light">${element.Department}</td>
    <td class="table-light">
    <button class="edit" onclick=Edit(${index})><i class='fa fa-edit'></i></button>
    <button class="delete"onclick=Delete(${index})><i class="fa fa-trash"></i></span></button></td>   
    </tr>`
    })
    return y;

}




// copyright By  adarsh kumar prajapati
