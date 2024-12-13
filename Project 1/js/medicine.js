function showMedicine() {
    const illness = document.getElementById('illnessSelector').value;
    const medicineInfo = document.getElementById('medicineInfo');

    if (illness === "cold") {
        medicineInfo.innerHTML = "Recommended: Paracetamol, Cough Syrup. <a href='#'>Buy here</a>";
    } else if (illness === "flu") {
        medicineInfo.innerHTML = "Recommended: Ibuprofen, Vitamin C. <a href='#'>Buy here</a>";
    } else if (illness === "headache") {
        medicineInfo.innerHTML = "Recommended: Aspirin, Acetaminophen. <a href='#'>Buy here</a>";
    } else {
        medicineInfo.innerHTML = "Please select an illness to see recommendations.";
    }
}
