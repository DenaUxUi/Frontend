let title = document.getElementById('title')
let h1 = document.getElementsByTagName('h1')
let block = document.getElementsByClassName('block')
let div = document.querySelector('div')
let divs = document.querySelectorAll('div')
let button = document.getElementById('button')
let root = document.getElementById('root')
let child = document.getElementById('child')
let input = document.getElementById('input')

let childNode = document.createElement('h2')
childNode.textContent = 'hello'
root.append(childNode)

button.onclick = () => {
    h1.style.cssText = "color: #FF0000;";
}

input.addEventListener('change', (event)=> {
    let root = input.onchange
})
root.style.cssText = 'width: 100px; height: 100px; background: red;'

console.log(title.textContent);

console.log(title.innerHTML);

console.log(title.innerText);

title.textContent = 'hello'

title.innerHTML = 'hello'

title.innerText = 'hello'

console.log(btn.getAttribute('id'));
btn.setAttribute('class', 'btn')
btn.removeAttribute('id')


console.log(child.parentNode);
root.removeChild(child)


function swapValues() {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    document.getElementById('input1').value = input2;
    document.getElementById('input2').value = input1;
}


function changeColor() {
    let colorInput = document.getElementById('input3');
    let colorBlock = document.getElementsByClassName('container')[0];

    colorBlock.style.backgroundColor = colorInput.value;
}
