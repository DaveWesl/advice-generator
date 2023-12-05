function getRandomAdvice() {
    // API-URL
    const apiUrl = "https://api.adviceslip.com/advice";

    // GET-Anfrage
    fetch(apiUrl)
        .then(response => {
            // Überprüfung ob erfolgreich (Statuscode 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Konvertiere Antwort in JSON
            return response.json();
        })
        .then(data => {
            // Ratschlag anzeigen
            const advice = data.slip.advice;
            const id = data.slip.id;

            const adviceElement = document.querySelector('.advice');
            adviceElement.innerText = `"${advice}"`;

            const adviceIdElement = document.querySelector('.id');
            adviceIdElement.innerText= `ADVICE #${id}`;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.button-next').addEventListener('click', getRandomAdvice);
});