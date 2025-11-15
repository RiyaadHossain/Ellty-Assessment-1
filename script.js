  // Select All functionality
        const selectAllCheckbox = document.getElementById('selectAll');
        const pageCheckboxes = document.querySelectorAll('.page-checkbox');

        // When "All pages" is clicked, check/uncheck all page checkboxes
        selectAllCheckbox.addEventListener('change', () => {
            pageCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });

        // When individual page checkboxes change, update "All pages" checkbox
        pageCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const allChecked = Array.from(pageCheckboxes).every(cb => cb.checked);
                const noneChecked = Array.from(pageCheckboxes).every(cb => !cb.checked);
                
                if (allChecked) {
                    selectAllCheckbox.checked = true;
                    selectAllCheckbox.indeterminate = false;
                } else if (noneChecked) {
                    selectAllCheckbox.checked = false;
                    selectAllCheckbox.indeterminate = false;
                } else {
                    selectAllCheckbox.indeterminate = true;
                }
            });
        });