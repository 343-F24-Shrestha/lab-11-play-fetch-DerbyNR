const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**

    // Get input data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Get URLSearchParams
    const params = new URLSearchParams({name, age});
    const url = `https://echo.zuplo.io/api?${params.toString()}`;

    try {
        // Send request
        const response = await fetch(url);
        const data = await response.json();

        // Display formatted json
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = 'Error';
    }
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function sends a POST request to the echo endpoint with the input data as JSON

    // Get input data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    try {
        // Send POST request with JSON body
        const response = await fetch("https://echo.zuplo.io/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, age }), // Convert data to JSON string
        });
        const data = await response.json();

        // Display formatted JSON
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function sends a POST request to the echo endpoint with the input data as form data

    // Get input data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    try {
        // Send POST request with form data
        const response = await fetch("https://echo.zuplo.io/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ name, age }).toString(), // Convert data to URL-encoded format
        });
        const data = await response.json();

        // Display formatted JSON
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});
