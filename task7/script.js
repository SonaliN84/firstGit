var itemlist=document.querySelector("#items")
//parentNode 
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor="red"
// console.log(itemlist.parentNode.parentNode.parentNode)

//parentElement
// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor="red"
// console.log(itemlist.parentElement.parentElement.parentElement)

//childNodes
// console.log(itemlist.childNodes)
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.color="blue"

//firstChild
// console.log(itemlist.firstChild)
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent="hello 1"

//lastChild
// console.log(itemlist.lastChild)
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent="hello 1"

//nextsibling
// console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)

//previoussibling
// console.log(itemlist.previousSibling)
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color="green"

//createElement
//create a div
var newDiv=document.createElement('div')
//add class
newDiv.className="hello"
//add ID
newDiv.id="hey"
//add attribute
newDiv.setAttribute('title','newdiv')
//add text
// newDiv.innerHTML="hi"

//create text node and then add text to div
var newDivText=document.createTextNode("hello")
//add text to div
newDiv.appendChild(newDivText)
console.log(newDiv)

var container=document.querySelector('header .container')
console.log(container)
var h1=document.querySelector('header h1')

newDiv.style.fontSize="30px"

container.insertBefore(newDiv,h1)

var newli=document.createElement('li')
newli.className="list-group-item";
var newlitext=document.createTextNode("hello")
newli.appendChild(newlitext)
var li=document.querySelector("li")
li.insertAdjacentElement("beforebegin",newli)




