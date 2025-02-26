document.addEventListener('DOMContentLoaded', () => {
    const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children');

    menuItemsWithChildren.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('ul');

        // Toggle submenu on click
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = link.getAttribute('aria-expanded') === 'true';
            link.setAttribute('aria-expanded', !isExpanded);
            submenu.style.visibility = isExpanded ? 'hidden' : 'visible';
            submenu.style.opacity = isExpanded ? '0' : '1';
        });

        // Toggle submenu on Enter or Space key
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isExpanded = link.getAttribute('aria-expanded') === 'true';
                link.setAttribute('aria-expanded', !isExpanded);
                submenu.style.visibility = isExpanded ? 'hidden' : 'visible';
                submenu.style.opacity = isExpanded ? '0' : '1';
            }
        });
    });
});