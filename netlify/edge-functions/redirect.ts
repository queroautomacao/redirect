import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

  const url = new URL(request.url);

  if(url.pathname!="/") {
	const response = await fetch(
		'https://sys.vinibot.io/webhook/f2d588b0-133b-4493-a43b-84c9adb6d885?redirect=' + url.pathname,
		{
			method: 'GET'
		}
	);
	return response;
  }
};