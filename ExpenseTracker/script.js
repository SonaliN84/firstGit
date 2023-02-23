var button=document.getElementById('button')
button.addEventListener('click',print)


var itemlist=document.getElementById('itemlist')
itemlist.addEventListener('click',removeItem)
itemlist.addEventListener('click',editItem)


function print(e){
    e.preventDefault();   
   var expenseamount=document.getElementById('expenseamount').value;
   var description=document.getElementById('description').value;
   var category=document.getElementById('category').value;
   
   var obj={
       "Expenseamount":expenseamount,
       "Description":description,
       "Category":category
   }
   var newobj=JSON.stringify(obj);
   localStorage.setItem(description,newobj)
   
   let li=document.createElement('li')
   li.className='add my-2';

   li.appendChild(document.createTextNode(expenseamount))
   li.appendChild(document.createTextNode("-"))
   li.appendChild(document.createTextNode(description))
   li.appendChild(document.createTextNode("-"))
   li.appendChild(document.createTextNode(category))

   var delete2=document.createElement('button')
   delete2.className="btn btn-danger btn-sm delete float-right"
   delete2.appendChild(document.createTextNode('X'))
   li.appendChild(delete2)

   var editbutton=document.createElement('button')
   editbutton.className="btn btn-secondary btn-sm mx-2 edit float-right"
   editbutton.appendChild(document.createTextNode('Edit'))
   li.appendChild(editbutton)

  
   
   var ul=document.getElementById('itemlist')
   
   ul.appendChild(li)
   
   document.getElementById('expenseamount').value="";
   document.getElementById('description').value="";
   document.getElementById('category').value="";
   }

   function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Do you want to remove it?"))
        {
            var litag=e.target.parentElement;
            var remove=litag.childNodes[2].textContent;
            
            itemlist.removeChild(litag)
            localStorage.removeItem(remove)
        }
        
    }
   }

   function editItem(e){
    if(e.target.classList.contains('edit')){
        if(confirm("Do you want to edit it?"))
        {
            var litag=e.target.parentElement;
            var remove=litag.childNodes[2].textContent;
        
            itemlist.removeChild(litag)
            localStorage.removeItem(remove)
            var n=litag.childNodes[0].textContent;
            var e=litag.childNodes[2].textContent;
            var p=litag.childNodes[4].textContent;
           
            var expenseamount=document.getElementById('expenseamount');
            var description=document.getElementById('description');
            var category=document.getElementById('category');
            

            expenseamount.value=n;
            description.value=e;
            category.value=p
        }
        
    }

   }