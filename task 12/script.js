var button=document.getElementById('button')
button.addEventListener('click',print)
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
li.appendChild(document.createTextNode(name+"-"+email+"-"+phone))
var container=document.getElementById('container')
// container.appendChild(document.createElement('br'))
container.appendChild(li)
}