async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where user data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through each user in the users array
        users.forEach(user => {
            // Create a <li> element for each user
            const listItem = document.createElement('li');

            // Set the text content to the user's name
            listItem.textContent = user.name;

            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // Append the complete list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // If an error occurs, clear existing content and show error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});
