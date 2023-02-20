var form=document.getElementById('addForm')
var itemlist=document.getElementById('items')

//form submit event

form.addEventListener('submit',additem)

//add item function

//delete event

itemlist.addEventListener('click',removeItem)

function additem(e)
{
    e.preventDefault();
    //get input value
    var newItem =document.getElementById('item');
    //create new element
    var li=document.createElement('li');
    //add class 
    li.className='list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem.value))
    //create edit button
  var edit=document.createElement('button')
  edit.className='btn btn-danger btn-sm float-right';
  edit.appendChild(document.createTextNode('Edit'))
  li.appendChild(edit)

   //create delete button element
  var delete2=document.createElement('button')
  delete2.className='mx-2 btn btn-danger btn-sm float-right delete';
  //append text node
  delete2.appendChild(document.createTextNode('X'))
  //append button to li
  li.appendChild(delete2)
  //append li to list
  itemlist.appendChild(li)

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