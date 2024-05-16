const preload = document.getElementById("preloader")

const showPreload = () =>{
    preload.style.display = "block";
}

const hidePreload = () =>{
    preload.style.display = "none";
}

const dataFetch = () => {
    showPreload();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        hidePreload();
        data.forEach(item => {
          document.getElementById("root").innerHTML += `
            <br>
            <h2 style="margin: 0; padding: 0;">Name: ${item.name}</h2>
            <p style="margin: 0; padding: 0;">Username: <b>${item.username}</b></p>
            <p style="margin: 0; padding: 0;">Email: <b>${item.email}</b></p>
            <p style="margin: 0; padding: 0;">ID: <b>${item.id}</b></p>
            <hr style="margin: 0; padding: 0;">
          `
        })
      })
  }
  
dataFetch()