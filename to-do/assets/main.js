
const input = document.querySelector('#myInput')
input.addEventListener('keyup',createNewItem)
const val = []



function createNewItem(event) {
 if (event.keyCode === 13 && event.target.value) {

     const filter = (element) => element === event.target.value ;
     const myUl = document.querySelector('#myUL')

     if (!val.some(filter)){
         myUl.innerHTML =''
            val.push(event.target.value)
             val.forEach((item ,i)=>{
             const li = document.createElement('li')
             const div =  document.createElement('div')
             const input =  document.createElement('input')
             const edit = document.createElement('button')
             const delete_button =  document.createElement('button')
             edit.innerText = 'edit'
             delete_button.innerText = 'delete'
             myUl.appendChild(li)
             li.appendChild(input)
             input.setAttribute('value',item)
             input.setAttribute('disabled','disabled')
             li.appendChild(div)
             div.classList.add('crude')
             div.appendChild(edit)
             edit.classList.add('edit')
             div.appendChild(delete_button)
             delete_button.classList.add('delete')
             delete_button.dataset.id = i
         })


     }

     deleteItem()
     updateItem()
 }


}


function updateItem(){
    const edit = document.querySelectorAll('.edit')
    for (let i = 0;i <edit.length;i++){
        edit[i].addEventListener('click',function () {
            const  id = this.getAttribute('data-id')
            this.parentElement.previousElementSibling.toggleAttribute('disabled')
            val.splice(id,1,this.parentElement.previousElementSibling.value)
        })
    }
}

function deleteItem(){
    const del = document.querySelectorAll('.delete')
    for (let i = 0;i <del.length;i++){
        del[i].addEventListener('click',function () {
            const  id = this.getAttribute('data-id')
            val.splice(id,1)
            this.parentElement.parentElement.remove()
        })
    }

}
