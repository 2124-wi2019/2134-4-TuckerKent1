/*
    Tucker Kent
    script.js
    19SP_INFO_2134_WW - Online - JavaScript II
    Thoendel
    1 April 2020
*/
window.addEventListener('load', ()=> {
    const todoList = [];
    const actionDisplayList = document.getElementById("actionDisplayList");
    const actionAddListItem = document.getElementById("actionAddListItem");
    const actionPrintList = document.getElementById("actionPrintList");
    const listHolder = document.getElementById("listHolder");
    
    actionDisplayList.addEventListener('click', ()=>{
        todoList.push("Wash car");
        todoList.push("Wash dog");
        todoList.push("Get groceries");
        todoList.push("Do INFO 2134 homework");
        rebuildList(todoList);

    });
    actionAddListItem.addEventListener('click', ()=> {
        let newItem = prompt("Please enter a new list item");
        todoList.push(newItem);
        rebuildList(todoList);
    });
    actionPrintList.addEventListener('click', ()=>{
        try{ //try...catch added 
            printToDoList(); // try block calls printToDoList function still
        } catch(e){ //catch block takes argument e for error
            console.log("Error was thrown --> " + e + ".\nThis function has not yet been implemented."); //if catch block catches error, logs message to console
        }
    });

    function rebuildList(listItems) {
        listHolder.innerHTML = '';
        for(let i = 0; i < listItems.length; i++) { //the bug was located in the for loop declaration -- (i <= listItems.length) was adding one extra list item
            let listItem = document.createElement('li');
            listItem.innerHTML = listItems[i];
            listHolder.appendChild(listItem);
        }
    }

});

