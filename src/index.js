document.addEventListener("DOMContentLoaded", () => {
 
const form = document.getElementById("create-task-form");



form.addEventListener("submit", function(event) {
  event.preventDefault();
  const comment = event.target['new-task-description'].value
  
  const liTag = document.createElement('li')
  liTag.innerText = comment
  const commentsContainer = document.querySelector("ul")
  commentsContainer.append(liTag)
  //appendLiTag(liTag);
  form.reset()
  //const appendLiTag = document.getElementsById("tasks").appendChild(liTag) 

});
});
