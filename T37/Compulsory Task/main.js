/*Javascript file for shopping list */

function display_list() {
    //array with grocery items
    let items = ["Fruits", "Vegetables", "Millets", "Dairy", "Snacks"];
    let ul = document.getElementById("itemList");
    //code to display each array items as a list
    for (i = 0; i <= items.length; i++) {
        let list = document.createElement("li");
        list.innerHTML = items[i];
        ul.appendChild(list);
    }
}

display_list();