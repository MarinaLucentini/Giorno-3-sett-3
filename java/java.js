const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", (e) => {
  const taskweek = document.getElementById("week-task");
  const taskel = document.getElementById("element-task");
  const main = document.getElementsByTagName("main")[0];
  let areaTask = document.getElementById(taskweek.value);

  main.appendChild(areaTask);
  const titleArea = document.createElement("p");
  const ulTask = document.createElement("ul");
  const liTask = document.createElement("li");
  const btnTask = document.createElement("button");
  areaTask.append(titleArea, ulTask);
  areaTask.className = "taskArea";
  areaTask.id = taskweek.value;
  ulTask.append(liTask, btnTask);
  titleArea.innerText = taskweek.value;
  titleArea.className = "p-class";
  liTask.innerText = taskel.value;
  btnTask.innerText = "Eliminalo";
  ulTask.className = "stile-lista";
  btnTask.className = "btn-class";
  liTask.className = "testo-lista";
  taskel.value = " ";
  liTask.addEventListener("click", () => {
    liTask.style.textDecoration = "line-through";
  });
  btnTask.addEventListener("click", () => {
    liTask.remove();
    btnTask.remove();
  });
  //   const weekArray = [];
  //   weekArray.push(taskweek.value)
  //   for(let i = 0; i<weekArray.length;i++){
  //     if(taskweek !== weekArray[i]){
  // const titleArea = document.createElement("p");
  // const ulTask = document.createElement("ul");
  // const liTask = document.createElement("li");
  // const btnTask = document.createElement("button");
  // areaTask.append(titleArea, ulTask);
  // areaTask.className = "taskArea";
  // ulTask.append(liTask, btnTask);
  // titleArea.innerText = taskweek.value;
  // titleArea.className = "p-class";
  // liTask.innerText = taskel.value;
  // btnTask.innerText = "Eliminalo dall'elenco";
  // ulTask.className = "stile-lista";
  // btnTask.className = "btn-class";
  // liTask.className = "testo-lista";
  // //     }
  //   else{
  // const liTask = document.createElement("li");
  // const btnTask = document.createElement("button");
  //   }
  //   }
});
