const name = document.getElementById("name");
const add = document.getElementById("add"); 
const root = document.getElementById("root");






let nameList = localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];

const render = () =>{
    root.innerHTML = '';
    nameList.forEach(item =>{
        root.innerHTML += ` 
    <hr>
    <div class="action">
        <div class="action-outputs">    
            <div id="item-${item.id}"><h3 id="name-${item.id}">${item.name}</h3></div><input type="text" id="editInput-${item.id}" value="${item.name}" style="display:none;">
        </div>
        <div class="action-buttons">
            <button class="btn-style del" id="del-${item.id}" onclick="deleteName(${item.id})">delete</button>
            <button class="btn-style edit" id="edit-${item.id}" onclick="editMode(${item.id})">edit</button>
            <button class="btn-style" id="cancel-${item.id}" onclick="cancelEdit(${item.id})" style="display:none;">Cancel</button>
            <button class="btn-style" id="save-${item.id}" onclick="saveEdit(${item.id})" style="display:none;">Save</button>
        </div>
    </div>
    <hr>`;
    });
}

render()


add.onclick = () =>{
    if(name.value.trim()){
        nameList = [
            {
                id: nameList.length == 0 ? 1 : nameList[0].id + 1,
                name: name.value.trim()
            },
            ...nameList
        ]
        localStorage.setItem("name", JSON.stringify(nameList))
        render()
    }
}

const editMode = (id) => {
    document.getElementById(`name-${id}`).style.display = "none";
    document.getElementById(`editInput-${id}`).style.display = "block";
    document.getElementById(`del-${id}`).style.display = "none"; 
    document.getElementById(`edit-${id}`).style.display = "none"; 
    document.getElementById(`cancel-${id}`).style.display = "block"; 
    document.getElementById(`save-${id}`).style.display = "block"; 
    document.getElementById(`editInput-${id}`).value = nameList.find(item => item.id === id).name;
}

const saveEdit = (id) => {
    const newName = document.getElementById(`editInput-${id}`).value;
    nameList = nameList.map(item => {
        if (item.id === id) {
            return { ...item, name: newName };
        }
        return item;
    });
    localStorage.setItem("name", JSON.stringify(nameList));
    render();
}

const cancelEdit = (id) => {
    document.getElementById(`name-${id}`).style.display = "block";
    document.getElementById(`editInput-${id}`).style.display = "none";
    document.getElementById(`del-${id}`).style.display = "block"; 
    document.getElementById(`edit-${id}`).style.display = "block"; 
    document.getElementById(`cancel-${id}`).style.display = "none"; 
    document.getElementById(`save-${id}`).style.display = "none"; 
    render();
}

const deleteName = (id) =>{
    nameList = nameList.filter(item => item.id != id);
    localStorage.setItem("name", JSON.stringify(nameList))
    render();
}


// let obj = {
//     name: 'DJDD'
// }

// let obj2 = {...obj}