// SSR API endpoint template this is taken from https://daniel.es/blog/how-to-create-an-api-endpoint-in-astro/

// Tell Astro that this component should run on the server - we'll talk more about this!
export const prerender = false;

// Import the APIRoute type from Astro
import type { APIRoute } from "astro";

// This function will be called when the endpoint is hit with a GET request
export const GET: APIRoute = async () : Promise<any> => {

    // Here we are calling the API route that will give us a Cat Fact
    const response = await fetch(`https://meowfacts.herokuapp.com/`, {
        method: 'GET',  // this defines it as a GET request which means I want to 'get something from this resource'
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Error fetching cat fact'); // If there was any error in fetching the data
      }
    
    // This gives us the fact as a JSON object
    const data = await response.json();
    // Return a 200 status and a response to the frontend
    return new Response(
      JSON.stringify({
        message: "GET request Hit",
        body: data['data'][0]  // this is our cat fact returned!
      }),
      {
        status: 200,          // status 200 means a success !
      }
    );
};
