/*Javascript file for shopping list */
let ul = document.getElementById("itemList");
let items = ["Fruits", "Vegetables", "Millets", "Dairy", "Snacks"];

function display_list() {
    //array with grocery items
    
  
    //code to display each array items as a list
    for (i = 0; i < items.length; i++) {
        let list = document.createElement("li");
        list.innerHTML = items[i];
        ul.appendChild(list);
        
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        list.appendChild(span);
    }



   // deleteList();
}

function updateList()
{
    //alert('Test update page');
    let add_text = document.querySelector(".userInput").value;
    let text_field = document.querySelector(".userInput");
    // let list = document.createElement("li");
    // list.innerHTML = add_text;
    if(text_field.value!= '')
    {
    //ul.appendChild(list);
    items.push(add_text);
    
    }
    else{
        alert('Please insert an item');
    }
    text_field.value ='';

    display_list();
}

function createList()
{
    
}


display_list();