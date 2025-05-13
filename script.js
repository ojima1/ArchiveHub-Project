// Basic search functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item, .menu-simple div');

    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
