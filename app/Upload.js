import { Livepeer } from "livepeer";

const apiKey = '0040a420-fd26-47fa-95a4-710ecb9d46d8';
const fileName = 'BuidlathonTrial.mp4';

const livepeer = new Livepeer(apiKey);

const assetData = {
  name: fileName
};

// Define the URL
const url = 'https://livepeer.studio/api/asset/upload/url';

// Define any necessary body data
const bodyData = {
    "name": fileName,
    "url": "https://eu-central.storage.cloudconvert.com/tasks/edefcdb8-26d6-4660-a58f-4e082bd627c4/Insane%20Zoom%20Meeting.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240302%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240302T014857Z&X-Amz-Expires=86400&X-Amz-Signature=beb427e43cfa0649aa37232c14ebc6e4818246cb5f342cd412878674803146d2&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22Insane%20Zoom%20Meeting.mp4%22&response-content-type=video%2Fmp4&x-id=GetObject"

};

// Make the POST request
fetch(url, {
  method: 'POST', // Specify the method
  headers: {
    'Content-Type': 'application/json', // Set the content type
    'Authorization': `Bearer ${apiKey}`, // Include your API key for authorization
  },
  body: JSON.stringify(bodyData), // Convert the JavaScript object to a JSON string
})
.then(response => response.json()) // Parse the JSON response
.then(data => {
  console.log(data); // Log the response data
})
.catch(error => {
  console.error('Error:', error); // Log any errors
});
