const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const { default: fetch } = await import('node-fetch');
    const accessToken = process.env.ACCESS_TOKEN;
    const user = 'Andiicodes';
    const url = `https://wakatime.com/api/v1/users/${user}/stats`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      const humanReadableTotal = data.data.human_readable_total_including_other_language;

     
      res.json({
        data: {
          Api_by: 'Andiicodes',
          label: "coding time",
          message: humanReadableTotal
        }
      });
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
