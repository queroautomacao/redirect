import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

	const url = new URL(request.url);
	const path = url.pathname.replace(/^\/|\/$/g, '');
	const result = /[\/\.]/gm.test(path);
  
	if(result === false && path !== "") {

		const API_ENDPOINT = Deno.env.get("WEBHOOK_URL") + '/?redirect=' + path;
		const response = await fetch(API_ENDPOINT);
        const data = await response.json();
		const link = data.link;
		const redir = Response.redirect(link, 303);
		return redir;
	
	};
}