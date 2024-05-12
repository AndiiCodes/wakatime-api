import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
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
    // Send the fetched data as JSON response to the client
    res.json(data);
  })
  .catch(error => {
    // Send error response to the client
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
