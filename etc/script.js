// Selecting all filter buttons, filterable cards, and search elements
const filterButtons = document.querySelectorAll('.filter_buttons button');
const filterableCards = document.querySelectorAll('.filterable_cards .card');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Function to filter cards based on search query and active filter
const filterAndSearchCards = () => {
    const searchQuery = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter_buttons .active').dataset.name;

    filterableCards.forEach(card => {
        const cardTitle = card.querySelector('.card_title').textContent.toLowerCase();
        const cardText = card.querySelector('.card_text').textContent.toLowerCase();
        const matchesSearch = cardTitle.includes(searchQuery) || cardText.includes(searchQuery);
        const matchesFilter = card.dataset.name === activeFilter || activeFilter === 'all';

        if (matchesSearch && matchesFilter) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });
};

// Function to handle filter button clicks
const filterCards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    filterAndSearchCards();
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener('click', filterCards));

// Add event listeners for search
searchButton.addEventListener('click', filterAndSearchCards);

// Also search when Enter key is pressed in the search input
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterAndSearchCards();
    }
});

// Initial filter to show all cards (in case of page refresh)
filterAndSearchCards();