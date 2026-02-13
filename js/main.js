(function() {
    'use strict';

    function revealAffection() {
        const modal = document.getElementById('affectionModal');
        const backdrop = document.getElementById('modalBackdrop');
        
        if (modal && backdrop) {
            modal.classList.remove('is-hidden');
            backdrop.classList.remove('is-hidden');
        }
    }

    function hideAffection() {
        const modal = document.getElementById('affectionModal');
        const backdrop = document.getElementById('modalBackdrop');
        
        if (modal && backdrop) {
            modal.classList.add('is-hidden');
            backdrop.classList.add('is-hidden');
        }
    }

    window.revealAffection = revealAffection;
    window.hideAffection = hideAffection;
})();
