    const definitions = document.querySelectorAll('.definition');

    definitions.forEach(def => {
      def.addEventListener('click', function(event) {
        event.stopPropagation();
        const popupId = this.getAttribute('data-popup-id');
        const popup = document.getElementById(popupId);

        // Close all other popups first
        document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');

        // Get position of clicked word
        const rect = this.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        popup.style.top = (rect.bottom + scrollTop + 5) + "px"; // below the word
        popup.style.left = (rect.left + scrollLeft) + "px";
        popup.style.display = 'block';
      });
    });

    function closePopup() {
      document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
    }

    // Close popups if clicked outside
    document.addEventListener('click', function () {
      closePopup();
    });