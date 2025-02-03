// SSR API endpoint template this is taken from https://daniel.es/blog/how-to-create-an-api-endpoint-in-astro/

// Tell Astro that this component should run on the server
export const prerender = false;

// Import the APIRoute type from Astro
import type { APIRoute } from "astro";

// This function will be called when the endpoint is hit with a GET request
export const GET: APIRoute = async () : Promise<any> => {

    const response = await fetch(`https://meowfacts.herokuapp.com/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Error submitting review');
      }

    const data = await response.json();
    // Return a 200 status and a response to the frontend
    return new Response(
      JSON.stringify({
        message: "GET request Hit",
        body: data
      }),
      {
        status: 200,
      }
    );
};
