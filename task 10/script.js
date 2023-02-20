var button=document.getElementById('submit');
button.addEventListener('click',addData)

function addData(e){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    localStorage.setItem('name',name)
    localStorage.setItem('Email',email)
}