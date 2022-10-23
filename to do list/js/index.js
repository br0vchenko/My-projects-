window.onload = function () {
   const addButton = document.querySelector('.addButton');
   var inputValue = document.getElementById('input');
   const container = document.querySelector('.container');
   
 
    class item {
       constructor(itemName){
           this.createDiv(itemName);
       }
        
       createDiv(itemName){
           
         
           
           let input = document.createElement('input');
           input.value = itemName;
           input.disabled = true;
           input.classList.add('item_input');
           input.type = "text";
          
           let itemBox = document.createElement('div');
           itemBox.classList.add('item');
           
           let checkBox = document.createElement('label')
           checkBox.innerHTML = ' <label class="containers"><input type="checkbox"><span class="checkmark"></span></label>'
           checkBox.classList.add('containers');
           
           let editButton = document.createElement('button');
           editButton.innerHTML = '<button class="editButton"><i class="fas fa-edit">';
           editButton.classList.add('editButton');
           
           let removeButton = document.createElement('button');
           removeButton.innerHTML = '<button class="removeButton"><i class="fas fa-trash-alt"></i></button>'
           removeButton.classList.add('removeButton');
           

           
           container.appendChild(itemBox);
           
           itemBox.appendChild(input);
           itemBox.appendChild(checkBox);
           itemBox.appendChild(editButton);
           itemBox.appendChild(removeButton);
          
           
           editButton.addEventListener('click', () => this.edit(input));
           
           removeButton.addEventListener('click', () => this.remove(itemBox));
           
           localStorage.setItem('qwer', 'itemBox');
         
       }
       
        edit(input){
            input.disabled = !input.disabled;
        }
        
        remove(item){
            container.removeChild(item);
        }
   
   }    
     
    function check(){
        if(input.value != " "){
            new item(input.value);
            input.value = "";
        }
    
    }
    
    addButton.addEventListener('click', check);
    window.addEventListener('keydowm', (e) => {
        if(e.which == 13){
            check();
        }
    })
   
}

//    }