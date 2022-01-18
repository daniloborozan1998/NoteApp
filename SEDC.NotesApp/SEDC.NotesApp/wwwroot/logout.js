document.getElementById('logOut').onclick = () => {
    localStorage.clear();
    window.location.href = "http://localhost:64006/login.html";
}

