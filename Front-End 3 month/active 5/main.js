

const task1 = () =>{
    return document.querySelector('li').textContent
}

// console.log(task1());

const task2 = () =>{
    let nodeList = document.querySelectorAll('li');
    return Array.from(nodeList).map(item => item.textContent)
}

// console.log(task2());

const task3 = () =>{
    let list = document.getElementsByClassName("list-item");
    return Array.from(list).map(item => item.textContent)
}

// console.log(task3())

const task4 = () =>{
    let classList = document.getElementsByClassName("list-item");
    return Array.from(classList).map(item => item.className)
}

// console.log(task4());

const task5 = () =>{
    let idList = document.getElementsByClassName("list-item");
    return Array.from(idList).map(item => item.getAttribute('data-test-id'))
}

// console.log(task5());

const task6 = () =>{
    let styleList = document.getElementsByClassName("list-item");
    let arr = Array.from(styleList);
    let result = arr.filter((item)=>{
        return !item.className.includes(item.textContent)
    })
    return result.from(styleList).map(item => item.getAttribute('data-test-id'))
}

// console.log(task6());

const task7 = () =>{
    let styleList = document.getElementsByClassName("list-item");
    let arr = Array.from(styleList);
    arr.forEach((item)=> {
        item.textContent = `${item.getAttribute("data-test-id")} ${item.textContent}`
    })
}

// task7()

const task8 = () =>{
    let styleList = document.getElementsByClassName("list-item");
    let arr = Array.from(styleList);
    arr.forEach((item)=>{
        if (!item.className.includes(item.textContent)){
            item.parentNode.removeChild(item)
        }
    })
}

// task8()

const task9 = () =>{
    document.getElementById("secret-login").value = "You were hacked";
}

// task9()

const task10 = () =>{
    document.getElementById("button-send").onclick = () =>{
        document.getElementsByClassName("login-screen")[0].textContent = "You were hacked"
    }
}

// task10()

const task11 = () =>{
    let add = document.getElementById("append-div");
    let pullDiv = document.createElement("div");
    pullDiv.id = "just-text";
    pullDiv.textContent = "Hello!";
    add.append(pullDiv)
}

// task11()

const task12 = () =>{
    let add = document.getElementById("append-div");
    let pullUl = document.createElement("ul");
    pullUl.id = "list";
    i = 0
    while(i < 10){
        i++
        pullUl.innerHTML += `<li>Child${i}</li>`;
    } 
    add.append(pullUl)
}

task12()