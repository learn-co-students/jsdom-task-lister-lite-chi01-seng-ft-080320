

document.addEventListener("DOMContentLoaded", () => {
main()

  function createFormListener(){
    const form = document.querySelector("form")
    form.addEventListener("submit", function(event){
    event.preventDefault()
    const comment = event.target["new-task-description"].value
    const pTag = document.createElement("li")
    pTag.innerText = comment
    const commentsContainer = document.querySelector("#tasks")
    commentsContainer.append(pTag)
    form.reset()
  })
  }

  function createAlertBtnListener(){
    const alertBtn = document.querySelector("#submitBtn")
    alertBtn.addEventListener("click", function(){
    alert("Whatever Bro")  
    }
    )
  }

  function main(){
   createFormListener() 
   createAlertBtnListener()
  }

});
