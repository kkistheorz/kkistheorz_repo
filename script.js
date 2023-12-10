document.addEventListener('DOMContentLoaded', function () {
    const cardGrid = document.getElementById('card-grid');

    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch('YOUR_API_ENDPOINT')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h2');
                title.textContent = item.title;

                const description = document.createElement('p');
                description.textContent = item.description;

                card.appendChild(title);
                card.appendChild(description);

                cardGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
