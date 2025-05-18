document.querySelector('#createList').addEventListener('click', createList);

const activeListView = [];

localStorage.setItem('activeListView', JSON.stringify(activeListView)); // save activeListView to local storage

function createList() {
    const listName = document.querySelector('#getListName').value;
    const listDescription = document.querySelector('#getListDescription').value;

    const todoList = {
        name: listName,
        description: listDescription,
        items: [],
        removeList: function(){/*remove this object*/},
        renameList: function(newName) { this.name = newName; }
    };

    // Use the properties directly, not this.name/this.description
    todoList.listUI = `<div class="list">
        <h2>${todoList.name}</h2>
        <p>${todoList.description}</p>
        <button id="removeList">Remove List</button>
        <button id="renameList">Rename List</button>
    </div>`;

    document.querySelector('#listView').innerHTML = todoList.listUI;
    activeListView.push(todoList);

    console.log(todoList);
}



