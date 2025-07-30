// Simulate navigation
function navigateTo(page) {
    switch (page) {
        case 'signup':
            alert("Redirecting to Sign Up page...");
            break;
        case 'login':
            alert("Redirecting to Login page...");
            break;
        case 'upload':
            alert("Redirecting to Upload Notes...");
            break;
        default:
            alert("Page not found.");
    }
}
