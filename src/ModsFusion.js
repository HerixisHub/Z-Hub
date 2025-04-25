        function searchMods() {
            let input = document.querySelector('.search-box').value.toLowerCase();
            document.querySelectorAll('.mod').forEach(mod => {
                let name = mod.getAttribute('data-name').toLowerCase();
                mod.style.opacity = name.includes(input) ? '1' : '0.5';
            });
        }

        function filterMods() {
            let selectedCategories = Array.from(document.querySelectorAll('.modern-checkbox:checked')).map(cb => cb.value);
            document.querySelectorAll('.mod').forEach(mod => {
                let categories = mod.getAttribute('data-category').split(', ').map(cat => cat.trim());
                let isVisible = selectedCategories.length === 0 || selectedCategories.some(cat => categories.includes(cat));
                mod.style.opacity = isVisible ? '1' : '0.5';
            });
        }