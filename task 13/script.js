var button=document.getElementById('button')
button.addEventListener('click',print)
// function print(e){
//  e.preventDefault();   
// var name=document.getElementById('name').value;
// var email=document.getElementById('email').value;
// var phone=document.getElementById('phone').value;

// var obj={
//     "name":name,
//     "email":email,
//     "PhoneNumber":phone
// }
// var newobj=JSON.stringify(obj);
// localStorage.setItem(email,newobj)

// let li=document.createElement('li')
// li.className="margin";
// li.appendChild(document.createTextNode(name+"-"+email+"-"+phone))
// var delete2=document.createElement('button')
// delete2.className="delete"
// delete2.appendChild(document.createTextNode('Delete'))
// li.appendChild(delete2)

// var ul=document.getElementById('item')
// // container.appendChild(document.createElement('br'))
// ul.appendChild(li)
// }

var itemlist=document.getElementById('item')
itemlist.addEventListener('click',removeItem)


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Do you want to remove it?"))
        {
            var litag=e.target.parentElement;
            var remove=litag.childNodes[1].textContent;
            console.log(remove)
            itemlist.removeChild(litag)
            console.log(localStorage.removeItem(remove))
        }
        
    }
}
function print(e){
    e.preventDefault();   
   var name=document.getElementById('name').value;
   var email=document.getElementById('email').value;
   var phone=document.getElementById('phone').value;
   
   var obj={
       "name":name,
       "email":email,
       "PhoneNumber":phone
   }
   var newobj=JSON.stringify(obj);
   localStorage.setItem(email,newobj)
   
   let li=document.createElement('li')
   li.className="margin";
//    li.appendChild(document.createTextNode(name+"-"+email+"-"+phone))
   li.appendChild(document.createTextNode(name+"-"))
   li.appendChild(document.createTextNode(email))
   li.appendChild(document.createTextNode("-"+phone))

   var delete2=document.createElement('button')
   delete2.className="delete"
   delete2.appendChild(document.createTextNode('Delete'))
   li.appendChild(delete2)
   
   var ul=document.getElementById('item')
   // container.appendChild(document.createElement('br'))
   ul.appendChild(li)
   }