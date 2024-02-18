// select plusbtn and popup 
var plusbtn=document.getElementById("plusbtn")
var popup=document.querySelector(".popup")
plusbtn.addEventListener("click",function(){
    popup.style.display="block"
    overlay.style.display="block"
})
// select container,add-btn ,title-input,author-input and Description.
var container=document.querySelector(".container")
var add_btn=document.getElementById("add-btn")
var title_input=document.getElementById("title-input")
var author_input=document.getElementById("author-input")
var Description=document.getElementById("Description")
var overlay=document.querySelector(".overlay")

add_btn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title_input.value}</h2>
    <h3>${author_input.value}</h3>
    <p>${Description.value}</p>
    <button onclick="delbtn(event)">Delete</button>`
    container.append(div)
    popup.style.display="none"
    overlay.style.display="none"
})
// Sslect cancel btn
var cancel_btn=document.getElementById("cancel-btn")
cancel_btn.addEventListener("click",function(){
    event.preventDefault()
    popup.style.display="none"
    overlay.style.display="none"
})

function delbtn(event){
    event.target.parentElement.remove()
}