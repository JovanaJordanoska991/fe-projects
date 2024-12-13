const loginForm = document.getElementById('loginForm');


const handleGoToHome = () => {
navigate("#inform");
window.location.reload();
};



document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const goToHomeButton = document.getElementById('goToHomeButton');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        try {
            const response = await fetch("http://localhost:5000/api/authentication", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Permission-Policy': 'ch-ua-form-factor',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            localStorage.setItem("username", username);
            showWelcomeMessage();
        } catch (error) {
            console.error("Login error:", error);
            alert("Invalid credentials. Please try again.");
        }
    });

    goToHomeButton.addEventListener('click', () => {
        window.location.href = "#inform";
    });

    function showWelcomeMessage() {
        alert("Welcome, " + username + "!");
        window.location.href = "#profile";
    }
});





