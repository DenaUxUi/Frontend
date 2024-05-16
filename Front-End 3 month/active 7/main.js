let wrapperButton = document.getElementById("btn-show")
let wrapperHideButton = document.getElementById("hide-btn")
let wrapper = document.getElementById("wrapper")


const showPopup = () =>{

    wrapper.innerHTML = `
        <button onclick="hidePopup()" class="bg-link"></button>
        <div class="popup">
            <img src="./2020_Volkswagen_Golf_Style_1.5_Front.jpg" alt="" class="popup-img">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa aut nam quidem veniam deserunt. Dolores hic incidunt nesciunt! Iusto.</p>
            <button onclick="hidePopup()" class="btn">закрыть</button>
        </div>
    `

    
}

const hidePopup = () => {
    wrapper.innerHTML =`<button onclick="showPopup()" class="btn" id="btn-show">показать</button>
`}

wrapperButton.onclick = showPopup;

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => responce.json())
.then(data =>{
    data.forEach(item => {
        document.getElementById("root")
        .innerHTML += `<h1>${item.name}</h1>`

        
    });
})