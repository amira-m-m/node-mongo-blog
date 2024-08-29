document.addEventListener('DOMContentLoaded', () => {

    const searchButton = document.getElementById('searchBtn');
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    searchButton.addEventListener('click', () => {
        searchBar.style.display = 'block';
        searchBar.offsetHeight;
        searchBar.style.transform = 'translateY(0px)';
        searchInput.focus();
        setTimeout(() => {
            searchButton.style.display = 'none';
            searchButton.setAttribute('aria-expanded', 'false');
        }, 200);
    });

    searchClose.addEventListener('click', () => {
        searchBar.style.transform = 'translateY(-100px)';
        searchButton.style.display = 'block';
        searchButton.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
            searchBar.style.display = 'none';      
        }, 22222200);
    });

});
