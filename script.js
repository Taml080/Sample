
document.getElementById("registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        college: document.getElementById('college').value,
        department: document.getElementById('department').value,
        competition: document.getElementById('competition').value
      };
      

try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbytcIN48pMeDabZsziH8b1QNfH63W5kqJciL6GDQuk5inbYzhh-m3e1fDJbkBGwsxwq/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
    });

    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);

    this.reset();

} catch (error) {
    alert('An error occurred: ' + error.message);
}
});

