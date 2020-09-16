document.addEventListener("DOMContentLoaded", () => {
const taskForm = document.querySelector('form')
taskForm.addEventListener('submit', function(event){
  event.preventDefault()

const comment = event.target["new-task-description"].value
const name = event.target["name-field"].value

const pTag2 = document.createElement('p')
const pTag = document.createElement('p')
pTag.innerText = comment
pTag2.innerText = name

const commentsContainer = document.querySelector('#tasks')
const commentsContainer2 = document.querySelector('#tasks')
commentsContainer.append(pTag2) 
commentsContainer.append(pTag) 

taskForm.reset()

})


});
