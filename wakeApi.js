// Dynamic import for Node.js
import('node-fetch').then(({ default: fetch }) => {

  // Your WakaTime access token
  const accessToken = process.env.ACCESS_TOKEN;

  // User ID or username for whom you want to fetch statistics
  const user = 'Andiicodes';

  // API endpoint for fetching user's stats
  const url = `https://wakatime.com/api/v1/users/${user}/stats`;

  // Make a GET request with your access token as a header
  fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
    // Check if the request was successful
    if (response.ok) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  })
  .then(data => {
    // Log the data for debugging
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}).catch(error => {
  console.error('Error importing node-fetch:', error);
});
