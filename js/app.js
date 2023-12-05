// Funktion, um einen zufälligen Ratschlag abzurufen
function getRandomAdvice() {
    // API-URL
    const apiUrl = "https://api.adviceslip.com/advice";

    // Führe die GET-Anfrage durch
    fetch(apiUrl)
        .then(response => {
            // Überprüfe, ob die Anfrage erfolgreich war (Statuscode 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Konvertiere die Antwort in JSON
            return response.json();
        })
        .then(data => {
            // Zeige den zufälligen Ratschlag an
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