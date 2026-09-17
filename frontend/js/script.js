const API = "http://127.0.0.1:8000/api/students/";

async function loadStudents(){
    const table = document.getElementById("studentTable");
    if(!table) return;
    const search = (document.getElementById("search")?.value || "").toLowerCase();
    try{
        const response = await fetch(API);
        const students = await response.json();
        table.innerHTML = "";
        students.filter(s => (s.student_name+s.student_id+s.course+s.department).toLowerCase().includes(search))
        .forEach(s => {
            table.innerHTML += `<tr>
            <td>${s.student_id}</td><td>${s.student_name}</td><td>${s.course}</td>
            <td>${s.department}</td><td>${s.year}</td>
            <td><button class="small-btn" onclick="deleteStudent(${s.id})">Delete</button></td></tr>`;
        });
    }catch(e){ table.innerHTML = "<tr><td colspan='6'>Start the Django backend first.</td></tr>"; }
}

async function deleteStudent(id){
    if(!confirm("Delete this student?")) return;
    await fetch(API+id+"/",{method:"DELETE"});
    loadStudents();
}
