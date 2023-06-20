export async function getSimilarArtists(artistName) {
    try {
      const apiUrl = window.location.origin;
      const response = await fetch(`${apiUrl}/similar-artists?artist=${encodeURIComponent(artistName)}`);
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }  