// elemnts to interact with
const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const secretKey = "It's a secret to everybody.";
const secretMessage = "Brewers in 6"
const userInput = document.getElementById('todo-input')
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

document,addEventListener('DOMContentLoaded', () => {
  try {
    localStorage.setItem(secretKey, secretMessage);
    console.log( 'Secret message stored! Key: "${secretKey}" ');
    console.log('Message: "${secretMessage}" ');
  } catch (e) {
    console.error("Error:", e);
  }   
})
 
if (isMorning) {
  console.log("Good morning! ");
} else if (isAfternoon) {
  console.log("Good afternoon! ");
} else if (isEvening) {
  console.log("Good evening! ");
} else {
  console.log("Hello!");
}

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

const prevButton = document.querySelector('#prev')
prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})

const nextButton = document.querySelector('#next')
nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    console.log();
    currentImage++
    showImages()
}, 5000)

showImages()
const todos = JSON.parse(localStorage.getItem('todo-list') || '[]')


todos.push({ text: taskInput, completed: false })

const userData = JSON.stringify({ todos: [] })

const getUserData = () => {
    const data = localStorage.getItem('userData')
    return data ? JSON.parse(data) : JSON.parse(defaultUserData)
}
// save user data to local storage
const setUserData = (data) => {
    localStorage.setItem('userData', JSON.stringify(data))
}

const renderTodos = () => {
    const userData = getUserData()
    todoList.innerHTML = ''
    userData.todos.map((todo, index) => {
        const li = document.createElement('li')
    })
  }