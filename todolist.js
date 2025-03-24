let List =[ 
    {Task:"Tiffin",id:1,Time: "08:00" },
    {Task:"PythonClass",id:2,Time:"09:00"},
    {Task:"AptitudeClass",id:3,Time:"11:00"},
    {Task:"Lunch",id:4,Time:"12:30"},
    
]

function display(){
let ele=document.getElementById("abc");

let tr=``;
  for(let i=0;i<List.length;i++){
    tr=tr+`
        <tr>
          <td>${List[i].id}</td>
          <td>${List[i].Task}</td>
          <td>${List[i].Time}</td>
          <td><button type="button" class="btn btn-danger btn-outline-light btn-sm" onclick="deleteList(${List.indexOf(List[i])})">Delete</button></td>
          <td><button type="button" class="btn btn-success btn-outline-light btn-sm" onclick="EditList(${List.indexOf(List[i])})">Edit</button></td>
        </tr>
    
    
    `
  }
  let table=`
  <table class="table table-success rounded table-borderless  table-hover table-responsive">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Task</th>
      <th scope="col">Time</th>
      <th scope="col">Delete Action</th>
      <th scope="col">Edit Action</th>
    </tr>
    
          ${tr}
      </table>
  </div>
  `
ele.innerHTML=table;
}
display();

function deleteList(para){
  List.splice(para,1);
  display();

}
function Adddata(){
  let eleid=document.getElementById("id");
  let eleTask=document.getElementById("Task");
  let eleTime=document.getElementById("Time");

  let id=eleid.value;
  let Task=eleTask.value;
  let Time=eleTime.value;

  let obj={
    id,
    Task,
    Time,
  }
  let a=List.push(obj);
  console.log(a)
  display();
}
function editdata() {
  let eleid=document.getElementById("id");
  let eleTask=document.getElementById("Task");
  let eleTime=document.getElementById("Time");

    eleid=List.value(b).id;
    eleTask=List.value(b).Task;
    eleTime=List.value(b).Time;

    display();

}

function EditList(index){
  document.getElementById("id").value=List[index].id;
  document.getElementById("Task").value=List[index].Task;
  document.getElementById("Time").value=List[index].Time;

}
function updated(){
  let index=-1;
for(let a=0;a<List.length;a++){
  if(List[a].id==document.getElementById("id").value){
    index=a;
  }
}
List[index].id=document.getElementById("id").value;
List[index].Task=document.getElementById("Task").value;
List[index].Time=document.getElementById("Time").value;
alert("Data Updated Successfully...")
display();
}

function deleteAllTasks() {
  List.splice(0,List.length);
  alert("ALL TASKS DELETED SUCCESSFULLY")
  display();
}