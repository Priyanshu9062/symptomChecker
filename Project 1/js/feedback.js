// JavaScript to handle review submission
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload on form submission

    // Get the review text and rating
    const feedback = document.getElementById('feedback').value;
    const rating = document.querySelector('input[name="rating"]:checked');

    if (rating) {
        const ratingValue = rating.value;

        // Create a new review element
        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `
            <p><strong>Your Name</strong> <span class="stars">${'★'.repeat(ratingValue)}${'☆'.repeat(5 - ratingValue)}</span></p>
            <p>${feedback}</p>
        `;

        // Insert the new review at the top
        const reviewsContainer = document.querySelector('.reviews');
        reviewsContainer.insertBefore(review, reviewsContainer.firstChild);

        // Clear the form
        document.getElementById('review-form').reset();
    } else {
        alert('Please select a rating.');
    }
});
