var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();

}

function readFormData() {
    formData = [];
    formData["name"] = document.getElementById("name").value;
    formData["cost"] = document.getElementById("cost").value;
    formData["description"] = document.getElementById("description").value;
    formData["status"] = document.getElementById("status").value;

    return formData;
}

function insertNewRecord(data) {
    table = document.getElementById("employeList").getElementsByTagName('tbody')[0];
    newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cost;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.status;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button>  
                       <button onClick="onDelete(this)">Delete</button>`;
    // console.log(formData);
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("description").value = "";
    document.getElementById("status").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cost").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("status").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.cost;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.status;
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?'))
        row = td.parentElement.parentElement;
    document.getElementById("employeList").deleteRow(row.rowIndex);

}




