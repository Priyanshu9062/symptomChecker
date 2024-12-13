// Simple form validation
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const specialization = document.getElementById('specialization').value;

    // Simulating form submission
    alert(`Appointment booked for: 
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Date: ${date}
    Time: ${time}
    Specialization: ${specialization}`);
    
    // Optionally, you could add code to actually send the data to a server here.
});
