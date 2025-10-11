document.addEventListener('DOMContentLoaded', () => {
    const allDetails = document.querySelectorAll('details');

    allDetails.forEach((details) => {
        details.addEventListener('toggle', (event) => {
            // Only proceed if the element was opened
            if (!details.open) {
                return;
            }

            // Get the parent node of the clicked 'details' element
            const parent = details.parentNode;

            // Get all 'details' elements that are direct children of the same parent
            const siblings = Array.from(parent.children).filter(
                (el) => el.tagName === 'DETAILS'
            );

            // Close all sibling 'details' elements
            siblings.forEach((sibling) => {
                if (sibling !== details) {
                    sibling.open = false;
                }
            });
        });
    });
});
