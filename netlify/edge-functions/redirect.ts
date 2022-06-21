import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/|\/$/g, '');
  const result = /[\/\.]/gm.test(path);

  if(result === false && path !== "") {
	const response = await fetch(
		'https://sys.vinibot.io/webhook/f2d588b0-133b-4493-a43b-84c9adb6d885?redirect=' + path,
		{
			method: 'GET'
		}
	);
	return response;
  }
};