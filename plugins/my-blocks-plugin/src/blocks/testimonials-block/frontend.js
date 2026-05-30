document.addEventListener( 'DOMContentLoaded', function () {
    const stage = document.getElementById( 'testi-stage' );
    if ( ! stage ) return;

    const slides = stage.querySelectorAll( '.testi__slide' );
    const dotsEl = document.getElementById( 'testi-dots' );
    const prevBtn = document.getElementById( 'testi-prev' );
    const nextBtn = document.getElementById( 'testi-next' );

    if ( slides.length === 0 ) return;

    let current = 0;

    // Генеруємо dots
    slides.forEach( ( _, i ) => {
        const dot = document.createElement( 'button' );
        dot.className = i === 0 ? 'testi__dot is-active' : 'testi__dot';
        dot.addEventListener( 'click', () => goTo( i ) );
        dotsEl.appendChild( dot );
    });

    function goTo( index ) {
        // Знімаємо активний клас з поточного
        slides[ current ].classList.remove( 'is-active' );
        dotsEl.querySelectorAll( '.testi__dot' )[ current ].classList.remove( 'is-active' );

        // Встановлюємо новий
        current = ( index + slides.length ) % slides.length;
        slides[ current ].classList.add( 'is-active' );
        dotsEl.querySelectorAll( '.testi__dot' )[ current ].classList.add( 'is-active' );
    }

    prevBtn.addEventListener( 'click', () => goTo( current - 1 ) );
    nextBtn.addEventListener( 'click', () => goTo( current + 1 ) );

    // Автоплей кожні 6 секунд
    setInterval( () => goTo( current + 1 ), 6000 );
} );