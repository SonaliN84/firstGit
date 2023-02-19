// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123  or  "hello";
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[14])
// document.all[14].textContent="hello"
// console.log(document.forms)
// console.log(document.links)

// console.log(document.getElementById("header-title"))
// var header=document.getElementById("header-title")
// var mainheader=document.getElementById("main-header")
// console.log(header)
// header.textContent="hello";
// header.innerText="goodbye";
// console.log(header.textContent)
// console.log(header.innerText)
// header.innerHTML="<h3>HELLO</h3>"
// header.style.borderBottom="solid 3px #000"
// mainheader.style.borderBottom="solid 3px #000"

// var a=document.getElementById("add")
// a.style.color="green"
// a.style.fontWeight="bold"
// console.log(document.body.innerText)

var items =document.getElementsByClassName("list-group-item")
// console.log(items)
// console.log(items[1])
// items[1].textContent="hello 2"
// items[1].style.fontWeight="bold"
// items[1].style.backgroundColor="yellow";
// for(var i=0;i<items.length;i++ )
// {
//     items[i].style.backgroundColor="grey"
// }

items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++ )
 {
     items[i].style.fontWeight="bold"
 }

