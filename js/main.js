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

    todoList.listUI = `<div class="list">
        <h2 class="text-2xl font-bold">${todoList.name}</h2>
        <p class="text-gray-600">${todoList.description}</p>
        <button id="removeList" class="bg-red-500 text-white px-4 py-2 rounded">Remove List</button>
        <button id="renameList" class="bg-blue-500 text-white px-4 py-2 rounded">Rename List</button>
    </div>`;

    document.querySelector('#listView').innerHTML = todoList.listUI;
    activeListView.push(todoList);

    console.log(todoList);
}