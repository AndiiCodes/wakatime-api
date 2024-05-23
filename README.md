# Custom WakaTime API ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwakatime-api-production.up.railway.app%2F&query=%24.data.categories%5B%3A1%5D.text&style=plastic&label=%F0%9F%98%A2JS%20time%20Invested%2C%20Patience%20Tested%20%F0%9F%98%A2&color=orange)

## Why?
WakaTime already provides you with badges, but I wanted to add custom text to the badge and access my other data for future use. That's why I created this custom API. Feel free to use it to make your own badges!

## Usage
1. **Get Your API Token**: Obtain your API token from WakaTime.
2. **Host the Code**: Download and host this code on [Railway](https://railway.app) or any other hosting platform. 
3. **Set Environment Variable**: Add an environment variable `ACCESS_TOKEN` with your WakaTime API token.

## Creating Custom Badges
1. **Go to shields.io**: Navigate to [shields.io](https://shields.io).
2. **Dynamic JSON Badge**: Select "Dynamic JSON Badge".
3. **Insert API Link**: Use your API link in the URL query.
4. **Label and JSONPath**: Add a label name and use JSONPath to extract the data you want from the API.

## Examples
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwakatime-api-production.up.railway.app%2F&query=%24.data.categories%5B%3A1%5D.text&style=plastic&label=%F0%9F%98%A2JS%20time%20Invested%2C%20Patience%20Tested%20%F0%9F%98%A2&color=orange)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwakatime-api-production.up.railway.app%2F&query=%24.data.message&style=plastic&logo=javascript&label=JS%20grind%20time%20%3AD&color=yellow)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwakatime-api-production.up.railway.app%2F&query=%24.data.message&style=plastic&logo=react&label=Look%20you%20can%20add%20anything%20%3AP&color=crimson)

Now you can create customized badges with personalized text and data directly from your WakaTime API!
