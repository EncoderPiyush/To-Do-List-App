let inputEl=document.querySelector("input")
let ulEl=document.querySelector("ul")
let subBtn=document.querySelector("#submit")

subBtn.addEventListener("click",()=>{
  addTask()
})
let addTask=()=>{
  if(inputEl.value==""){
    alert("Enter Your Task")
  }
  else{
    let li=document.createElement("li")
    ulEl.appendChild(li)
    li.innerHTML=inputEl.value
    let btnX=document.createElement("button")
    btnX.innerHTML="X"
    li.appendChild(btnX)
    inputEl.value=""
  }
  storeData()
}
ulEl.addEventListener("click",(event)=>{
  if(event.target.tagName=="LI"){                      // tagName holds only capitalize texts
    event.target.classList.toggle("change")
    storeData()
  }
  else if(event.target.tagName=="BUTTON"){
    event.target.parentElement.remove()
    storeData()
  }
  else{
    false
  }
})
let storeData=()=>{
  localStorage.setItem("store",ulEl.innerHTML)
}
let getData=()=>{
  ulEl.innerHTML=localStorage.getItem("store")
}
getData()