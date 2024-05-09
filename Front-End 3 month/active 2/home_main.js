const getDataButton = document.getElementById('get-data');
const idInput = document.getElementById('id');
const dataContainer = document.getElementById('data');

// Нажатие кнопки ENTER

getDataButton.addEventListener('click', fetchData);
idInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    fetchData();
  }
});

// Инициализация функции по нажатию кнопки

function fetchData() {
  const id = idInput.value;
  if (id < 1 || id > 10) {
    alert('Please enter a number between 1 and 10');
    return;
  }
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {
      const name = data.name;
      const username = data.username;
      const phone = data.phone;
      const html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `;
      dataContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}