window.onload = () => {
    let form = document.getElementById('subscribe-form');
    form.addEventListener('submit', display_email);
}

const display_email = () => {
    let val = document.getElementById('email').value;
    alert(val);
    console.log("val")
}