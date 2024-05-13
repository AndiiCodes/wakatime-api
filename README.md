# Custom WakaTime API ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwakatime-api-production.up.railway.app%2F&query=%24.data.categories%5B%3A1%5D.text&style=plastic&label=%F0%9F%98%A2JS%20time%20Invested%2C%20Patience%20Tested%20%F0%9F%98%A2&color=orange)

## Why?
- Why not?

- wakaTime already provides you with badges, but i wanted to add custom text to the badge. and access my other data for the future. that;s why i have made this custom api:) , feel free to use it to make your own badges:))

  ### usage

  - all you need is your API TOKEN. download and host this code on railway.app or any other hosting platform. add ENV VAR (ACCESS_TOKEN).

  - head to shields.io, look for Dynamic JSON Badge, insert you api link into url -query, add label name, and use JSONpath to extract the data you want from the api!
 
### example:

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwakatime-api-production.up.railway.app%2F&query=%24.data.categories%5B%3A1%5D.text&style=plastic&label=%F0%9F%98%A2JS%20time%20Invested%2C%20Patience%20Tested%20%F0%9F%98%A2&color=orange)
