var form=document.getElementById('addForm')
var itemlist=document.getElementById('items')
var  filter =document.getElementById('filter')


//form submit event
form.addEventListener('submit',additem)

//delete event
itemlist.addEventListener('click',removeItem)

//Filter event
filter.addEventListener('keyup',filterItems)

//additem function
function additem(e)
{
    e.preventDefault();
    //get input value
    var newItem =document.getElementById('item');

    //get desciption
    var description=document.getElementById('description')
   
    
    
    
    //create new element
    var li=document.createElement('li');
    //add class 
    li.className='list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem.value))
    
   

   //create delete button element
  var delete2=document.createElement('button')
  delete2.className=' btn btn-danger btn-sm float-right delete my-2 mx-2';
  //append text node
  delete2.appendChild(document.createTextNode('X'))
  //append button to li
  li.appendChild(delete2)

   //create edit button
   var edit=document.createElement('button')
   edit.className='btn btn-secondary btn-sm float-right my-2';
   edit.appendChild(document.createTextNode('Edit'))
   li.appendChild(edit)
  

  //ADD decsription
  li.appendChild(document.createElement('br'))
  li.appendChild(document.createTextNode(" "+description.value))
  
 console.log(li)

  //append li to list
  itemlist.appendChild(li)
  newItem.value="";
  description.value="";
}

//Remove Item function
function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
          var li=e.target.parentElement;
          itemlist.removeChild(li)
        // OR   li.remove();
        
        }

    }
}

//FilterItems function

// function filterItems(e){
//    //convert text to lower case
//     var text=e.target.value.toLowerCase();
//     //get lis
//     var items =itemlist.getElementsByTagName('li')
//     //convert to array
//     Array.from(items).forEach(function(item){
//         var itemName=item.firstChild.textContent;
        
//         if(itemName.toLowerCase().indexOf(text)!=-1){
//         item.style.display='block'   
//         }
//         else{
//             item.style.display='none'
//         }
//     })
// }
function filterItems(e){
    //convert text to lower case
     var text=e.target.value.toLowerCase();
     //get lis
     var items =itemlist.getElementsByTagName('li')
     //convert to array
     Array.from(items).forEach(function(item){
         var itemName=item.firstChild.textContent;
         console.log(itemName)
         var itemName2=item.lastChild.textContent;
         console.log(itemName2)
         
         if(itemName.toLowerCase().indexOf(text)!=-1 || itemName2.toLowerCase().indexOf(text)!=-1){
         item.style.display='block'; 
         }
         else{
             item.style.display='none';
         }
     })
 }