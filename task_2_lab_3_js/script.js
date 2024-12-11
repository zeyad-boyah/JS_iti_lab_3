// store all the data in an array for searching later 
let allData = [];



let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send("");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let results = JSON.parse(xhr.response);
    allData = results
    displayData(results);
  }
};


// Function to display data in the table with id / title and body
function displayData(data) {
    let tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    // clear the table so that we can reuse the function in filtering 
    tableBody.innerHTML = '';
    data.forEach(item => {
        let row = tableBody.insertRow();

        // Create cells for each piece of data and add the data as well
        let cell1 = row.insertCell(0); 
        cell1.innerText = item.id;
        let cell2 = row.insertCell(1); 
        cell2.innerText = item.title;
        let cell3 = row.insertCell(2); 
        cell3.innerText = item.body;

    });
}


// make a function that searches the already retrieved data without calling the api again 
function getDataById() {
    let postId = document.getElementById('postId').value;
    
    if (postId) {
        // Filter the data based on the ID entered
        let filteredData = allData.filter(item => item.id == postId);
        
        if (filteredData.length > 0) {
            // reusing the displayData function again while passing the filtered data this time
            displayData(filteredData); 
        } else {
            // incase the id is not there
            alert('No data found for this ID!');
            displayData([]); 
        }
    }
}

