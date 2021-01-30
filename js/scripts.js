function newItem() {

    //1. Adding a new item to the list of items: 
    let li = $("<li></li>");
    let inputValue = $("input").val(); //getting input values
    li.append(inputValue);

    if (inputValue === '') {
        alert("please input a value");
    } else {
        let list = $('#list');
        list.append(li);
    }

    //2. Crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3. Adding the delete button "X": 

    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    function deleteListItem() {
        this.parentElement.remove();
    }

    // 4. Reordering the items: 
    $('#list').sortable();

}