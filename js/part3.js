const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

// Dog CEO's Dog API - Get a random dog image
document.getElementById('api-1-btn').addEventListener('click', async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            output1.innerHTML = `
                <p><strong>Random Dog Image:</strong></p>
                <img src="${data.message}" alt="Random Dog" style="max-width: 100%; height: auto;">
            `;
        } else {
            output1.textContent = `Error ${response.status}: Could not fetch dog image`;
        }
    } catch (error) {
        output1.textContent = `Error: ${error.message}`;
    }
});

// Cat Facts API - Get a random cat fact
document.getElementById('api-2-btn').addEventListener('click', async () => {
    const url = 'https://catfact.ninja/fact';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            output2.innerHTML = `
                <p><strong>Random Cat Fact:</strong> ${data.fact}</p>
            `;
        } else {
            output2.textContent = `Error ${response.status}: Could not fetch cat fact`;
        }
    } catch (error) {
        output2.textContent = `Error: ${error.message}`;
    }
});
