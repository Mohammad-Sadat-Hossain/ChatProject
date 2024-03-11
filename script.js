// JavaScript code to fetch data from the API
fetch('http://127.0.0.1:5000/userdata')
  .then(response => response.json())
  .then(data => {
    // Call the function to create links from the API data
    createLinkList(data);
  })
  .catch(error => console.error('Error:', error));

// Function to create a list of links from the API data
function createLinkList(data) {
    const listContainer = document.getElementById('link-list'); // Assuming you have an element with id 'link-list' in your HTML
    const ul = document.createElement('ul');
  
    data.forEach(item => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#'; // Use '#' as a placeholder for now, you can replace it with the actual URL if needed
      link.textContent = item.title;
      
      // Add an event listener to each link to fetch and display user_data when clicked
      link.addEventListener('click', () => {
        fetchUserData(item.id);
      });
      
      li.appendChild(link);
      ul.appendChild(li);
    });
  
    listContainer.appendChild(ul);
}

// Function to fetch user_data based on chat title id
function fetchUserData(id) {
    fetch(`http://127.0.0.1:5000/userdata/${id}`)
      .then(response => response.json())
      .then(data => {
        // Call the function to display user_data
        displayUserData(data);
      })
      .catch(error => console.error('Error:', error));
}

// Function to display user_data
function displayUserData(data) {
  const userDataContainer = document.getElementById('user-data-container'); // Assuming you have an element with id 'user-data-container' in your HTML
  userDataContainer.innerHTML = ''; // Clear previous data
  
  data.forEach(item => {
      const paragraph = document.createElement('p');
      paragraph.textContent = item.user_data;
      userDataContainer.appendChild(paragraph);
  });
}

