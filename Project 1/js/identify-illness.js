document.addEventListener("DOMContentLoaded", () => {
    // Get the current URL
    const currentPage = window.location.pathname;

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Loop through each link and highlight the current page
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Handle the form submission
    const form = document.getElementById("symptoms-form");
    const medicineRecommendationDiv = document.getElementById("medicine-recommendation");
    const medicineName = document.getElementById("medicine-name");
    const medicineDose = document.getElementById("medicine-dose");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect selected symptoms
        const selectedSymptoms = Array.from(form.elements["symptom"])
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        // Collect other symptoms
        const otherSymptoms = form.elements["other-symptoms"].value.trim();

        // Display a message
        alert(
            `Thank you for submitting your symptoms.\n\nSelected Symptoms: ${selectedSymptoms.join(
                ", "
            )}\n\nOther Symptoms: ${otherSymptoms || "None"}\n\nWe will contact you shortly.`
        );

        // Show medicine recommendation if only one symptom is selected
        if (selectedSymptoms.length === 1) {
            let recommendedMedicine = "";
            let medicineDoseText = "";

            switch (selectedSymptoms[0]) {
                case "Fever":
                    recommendedMedicine = "Paracetamol";
                    medicineDoseText = "500mg every 4-6 hours (consult a doctor for accurate dosage).";
                    break;
                case "Cough":
                    recommendedMedicine = "Cough Syrup";
                    medicineDoseText = "10ml three times a day.";
                    break;
                case "Headache":
                    recommendedMedicine = "Ibuprofen";
                    medicineDoseText = "200mg every 6-8 hours.";
                    break;
                case "Fatigue":
                    recommendedMedicine = "Energy Boosters";
                    medicineDoseText = "Take 1 tablet every morning.";
                    break;
                // Add more cases for other symptoms...
                default:
                    recommendedMedicine = "Consult a doctor for more information.";
                    medicineDoseText = "";
            }

            // Show the medicine recommendation
            medicineRecommendationDiv.style.display = "block";
            medicineName.textContent = `For ${selectedSymptoms[0]}, we recommend: ${recommendedMedicine}`;
            medicineDose.textContent = `Recommended Dose: ${medicineDoseText}`;
        } else {
            // Hide the medicine recommendation if more than one symptom is selected
            medicineRecommendationDiv.style.display = "none";
        }

        // Optionally, reset the form
        form.reset();
    });
});
