import OpenAI from "openai";
import {HttpsProxyAgent} from 'https-proxy-agent'

export function getOpenAIClient(): OpenAI {
  const apiKey = process.env["OPENAI_API_KEY"];
  const proxyUrl = 'http://127.0.0.1:7890';

  const openai = new OpenAI({
    apiKey: apiKey,
    httpAgent: proxyUrl ? new HttpsProxyAgent(proxyUrl) : undefined
  });

  return openai;
}

// import OpenAI from 'openai';
// import {HttpsProxyAgent} from 'https-proxy-agent';

//   // console.log('apiKey',process.env["OPENAI_API_KEY"]);
 
// export function getOpenAIClient(): OpenAI{
//     // const proxyUrl = process.env["PROXY_URL"];
//     const proxyUrl = 'http://127.0.0.1:7890';
//     const openai = new OpenAI({
//         apiKey: process.env['OPENAI_API_KEY'],
//         httpAgent: proxyUrl ? new HttpsProxyAgent(proxyUrl) : undefined
//     });
//     // console.log('apiKey',process.env["OPENAI_API_KEY"]);

// return openai;
// }



// const openai = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
// });

// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();