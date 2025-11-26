function initModal() {
    const modal = document.getElementById('trailerModal');
    const modalClose = document.querySelector('.modal__close');
    const trailerFrame = document.getElementById('trailerFrame');
    

    const trailers = {
        'avatar': 'https://www.youtube.com/embed/d9MyW72ELq0',
        'john-wick': 'https://www.youtube.com/embed/qEVUtrk8_B4'
    };
    

    function openModal(trailerId) {
        if (trailers[trailerId]) {
            trailerFrame.src = trailers[trailerId] + '?autoplay=1';
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    

    function closeModal() {
        modal.classList.remove('active');
        trailerFrame.src = '';
        document.body.style.overflow = '';
    }
    

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    document.querySelectorAll('[data-trailer]').forEach(button => {
        button.addEventListener('click', function() {
            const trailerId = this.getAttribute('data-trailer');
            openModal(trailerId);
        });
    });
}