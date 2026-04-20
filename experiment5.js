let employees =[];
function addEmployee(){
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary= parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;
    if(name === " "|| empId === "" || isNaN(salary) || department === ""){
        alert("please fill alll detail Properly");
        return;
    }
    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: department
    };
    employees.push(employee);
    alert("Employee added successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";

}
function displayAll(){
    let output = "<h3> all employee</h3>";
    employees.forEach(emp => {
        output +=
       ` Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ${emp.salary} |
        department: ${emp.department}`
        + "<br>"
    })
document.querySelector(".output").innerHTML=output;
}
function salary(){
    let output="<h3> salary more than 50 thousand </h3>";
    
    employees.forEach(emp => {
        if(emp.salary>50000){
            output +=
       ` Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ${emp.salary} |
        department: ${emp.department}`
        + "<br>"
        }
        
    })
    document.querySelector(".output").innerHTML=output;
}