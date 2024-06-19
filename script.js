document.addEventListener('DOMContentLoaded', function () {
    var inputText = document.getElementById('inputText');
    var addButton = document.getElementById('addButton');
    var container = document.getElementById('container');

    addButton.addEventListener('click', function () {
        var inputValue = inputText.value.trim();
        if (inputValue !== '') {
            var newElement = document.createElement('div');
            newElement.className = 'post';

            var contentElement = document.createElement('p');
            contentElement.className = 'post-text';
            contentElement.textContent = inputValue;

            var dateElement = document.createElement('p');
            dateElement.className = 'date';
            dateElement.textContent = new Date().toLocaleString();

            var deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Use Font Awesome trash icon
            deleteButton.addEventListener('click', function () {
                container.removeChild(newElement);
            });

            newElement.appendChild(contentElement);
            newElement.appendChild(dateElement);
            newElement.appendChild(deleteButton);

            container.insertBefore(newElement, container.firstChild);
            inputText.value = '';
        }
    });
});
