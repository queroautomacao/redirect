import type { Context } from "netlify:edge";

const fetch = require("node-fetch");

const API_ENDPOINT = 'https://sys.vinibot.io/webhook/f2d588b0-133b-4493-a43b-84c9adb6d885';

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};


//export default async (request: Request, context: Context) => {
//  return context.rewrite("https://www.uol.com.br/");
//};