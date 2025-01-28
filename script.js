
document.getElementById("registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        college: document.getElementById('college').value,
        department: document.getElementById('department').value,
        competition: document.getElementById('competition').value,
        competition1: document.getElementById('competition1').value
      };
      

try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxQ0i2hmmMDpx0iwNh6u7gRZHPIaQT-ii3dmyyEix0jWlbU_vmUcbBc7c2ZcJvsWq1AYg/exec', {
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

