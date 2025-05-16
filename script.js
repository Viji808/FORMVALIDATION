//document.addEventListener("DOMContentLoaded", function () {

const form= document.getElementById("student-register-form");
const tablebody= document.getElementById("table-body");

form.addEventListener("submit",function(event){
event.preventDefault();
   let name= document.getElementById("name").value;
let age= document.getElementById("age").value;
let gender = document.querySelector('input[name="gender"]:checked')?.value || "N/A";
let course= document.getElementById("course").value;
let email= document.getElementById("email").value;


let row= document.createElement("tr");

row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td> 
    <td>${email}</td> 
 <td><button class="delete-btn" >Delete</button></td>`;
 tablebody.appendChild(row);
 

  row.querySelector(".delete-btn").addEventListener("click", function (event) {
    
        
        event.target.closest("tr").remove();

        
    })  
form.reset()
})
//})