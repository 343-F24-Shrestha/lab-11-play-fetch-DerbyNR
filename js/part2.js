const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // API endpoint for fetching users
    const url = "https://reqres.in/api/users?page=1";

    try {
        // Fetch the user data from reqres.in
        const response = await fetch(url);

        // Parse the response body as JSON
        const data = await response.json();

        // Loop through each user in the response
        data.data.forEach(user => {
            // Create a new div element with the class "card"
            const userCard = document.createElement("div");
            userCard.classList.add("card");

            // Create an h2 element for the user's name
            const userName = document.createElement("h2");
            userName.textContent = `${user.first_name} ${user.last_name}`;

            // Create an img element for the user's profile picture
            const userImage = document.createElement("img");
            userImage.src = user.avatar;
            userImage.alt = `${user.first_name} ${user.last_name}`;

            // Append the name and image to the card
            userCard.appendChild(userName);
            userCard.appendChild(userImage);

            // Append the card to the user-list container
            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        userList.textContent = "Failed to load users. Please try again later.";
    }
});
