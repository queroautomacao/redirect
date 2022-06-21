import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

	const url = new URL(request.url);
	const path = url.pathname.replace(/^\/|\/$/g, '');
	const result = /[\/\.]/gm.test(path);
  
	if(result === false && path !== "") {

		const API_ENDPOINT = 'https://sys.vinibot.io/webhook/f2d588b0-133b-4493-a43b-84c9adb6d885?redirect=' + path;
		const response = await fetch(API_ENDPOINT);
        const data = await response.json();
		const link = data.link;
		const redir = Response.redirect(link, 303);
		return redir;
	
	};
}