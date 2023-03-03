import {Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';

const configuration = new Configuration({
  apiKey: 'input your api key',
});

const openai = new OpenAIApi(configuration);

const prompt = 'TFT League of Legends Character' 


const result = await openai.createImage({
  prompt,
  n: 1,
  size: "1024x1024",
})

const url = result.data.data[0].url;
console.log(url);

// a way to save img to disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer() )
writeFileSync(`./img/${Date.now()}.png`, buffer);

// //google photo database api code (not needed)

// const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("3c3f4f77853a289e98457378258deb66926a3ea5bef20941e3cb50dccca77f2e");

// const params = {
//   engine: "google",
//   ijn: "0",
//   prompt,
//   google_domain: "google.com",
//   tbm: "isch"
// };

// const callback = function(data) {
//   console.log(data);
// };

// // Show result as JSON
// search.json(params, callback);
