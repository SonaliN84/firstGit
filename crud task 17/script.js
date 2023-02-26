var button=document.getElementById('button')
button.addEventListener('click',Post)


var itemlist=document.getElementById('item')
itemlist.addEventListener('click',removeItem)
itemlist.addEventListener('click',editItem)


function Post(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    
    var obj={
        "name":name,
        "email":email,
        "PhoneNumber":phone
    }
    axios.post('https://crudcrud.com/api/371e20aca21a4cfdbadbd9d11a7c189a/Appointmentdata',obj)
    .then((response)=>{
        print(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })


}








function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Do you want to remove it?"))
        {
            var litag=e.target.parentElement;
            var remove=litag.childNodes[2].textContent;
            console.log(remove)
            itemlist.removeChild(litag)
            // console.log(localStorage.removeItem(remove))
        }
        
    }
}
function print(obj){
   
   
   let li=document.createElement('li')
   li.className="margin";
//    li.appendChild(document.createTextNode(name+"-"+email+"-"+phone))
   li.appendChild(document.createTextNode(obj.name))
   li.appendChild(document.createTextNode("-"))
   li.appendChild(document.createTextNode(obj.email))
   li.appendChild(document.createTextNode("-"))
   li.appendChild(document.createTextNode(obj.PhoneNumber))

   var editbutton=document.createElement('button')
   editbutton.className="edit"
   editbutton.appendChild(document.createTextNode('Edit'))
   li.appendChild(editbutton)

   var delete2=document.createElement('button')
   delete2.className="delete"
   delete2.appendChild(document.createTextNode('Delete'))
   li.appendChild(delete2)
   
   var ul=document.getElementById('item')
   // container.appendChild(document.createElement('br'))
   ul.appendChild(li)
   }

   function editItem(e){
    if(e.target.classList.contains('edit')){
        if(confirm("Do you want to edit it?"))
        {
            var litag=e.target.parentElement;
            var remove=litag.childNodes[2].textContent;
            console.log(remove)
            itemlist.removeChild(litag)
            // console.log(localStorage.removeItem(remove))
            var n=litag.childNodes[0].textContent;
            var e=litag.childNodes[2].textContent;
            var p=litag.childNodes[4].textContent;
           
            var name=document.getElementById('name');
            var email=document.getElementById('email');
            var phone=document.getElementById('phone');

            name.value=n;
            email.value=e;
            phone.value=p
        }
        



        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var phone=document.getElementById('phone').value;
    }


   }