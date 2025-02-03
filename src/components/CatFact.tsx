import { useState, useEffect } from "react";

export default function CatFact() {
  const [catfact, setCatfact] = useState<string>("")
  
  // Function that calls our Astro API Endpoint
  const getFact = async () => {
    // Ping out API endpoint
    try {
      // This calls our our own Astro Endpoint
      const response = await fetch("/api/catfact");
  
      // If successful, set our cat fact
      if (response.ok) {
          console.log('ok response!')
          const data = await response.json()
          console.log("hit!")
          setCatfact(data.body)
      } else {
        // If failed, show error message
        console.error("Failed to get cat fact");
        return 'Error'
      }

    } catch (error) {
      console.log(error)
    }
    
  }

    useEffect(() => {
        getFact()
    }, [])
    
    return (
      <div>
        <h1 className="m-5">Cat Fact : {catfact}</h1>
      </div>
    );
  }