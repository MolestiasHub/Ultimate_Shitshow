let i = 0;
const create = () => {
    newElement();
    document.getElementById("sub").value = "";
    i++;
};

const newT = () => {
    let taskEl = document.createElement("div");
    taskEl.setAttribute("class","border");
    taskEl.setAttribute("id",`div${i}`);
    if (document.getElementById("sub").value == ""){
        alert("E M P T Y !");
        return;
    }
    taskEl.innerHTML = `<h1>Task: </h1> <h3 class="id3">${document.getElementById("sub").value}</h3>`;
    id.append(taskEl);
}

const delB = () => {
    let button = document.createElement("button");
    button.setAttribute("onclick",`delEl(${i})`);
    button.innerHTML = "Delete"
    let el = document.getElementById(`div${i}`);
    el.append(button);
}

const delEl = (i) => {
    let el = document.getElementById(`div${i}`);
    console.log(`div${i}`)
    el.remove();
}

const editEl = (i) => {
    let el = document.getElementById(`div${i}`);
    id3 = el.getElementsByClassName("id3");
    id3.innerHTML = prompt("",);
    console.log(id3.innerHTML);
}

const editB = () => {  
    let button = document.createElement("button");
    button.setAttribute("onclick",`editEl(${i})`);
    button.innerHTML = "Edit"
    let el = document.getElementById(`div${i}`);
    el.append(button);
}

const newElement = () => {
    newT();
    delB();
    editB();
}




