document.addEventListener( 'DOMContentLoaded', function () {
    const form = document.getElementById( 'strata-contact-form' );
    if ( ! form ) return;

    const response = document.getElementById( 'strata-form-response' );
    const button   = form.querySelector( 'button[type="submit"]' );

    form.addEventListener( 'submit', async function ( e ) {
        e.preventDefault();

        // Блокуємо кнопку
        button.disabled = true;
        button.textContent = 'Sending...';

        // Збираємо дані форми
        const formData = new FormData( form );
        formData.append( 'action', 'strata_contact' );
        formData.append( 'recipient_email', form.dataset.email );

        try {
            const res = await fetch( window.strataAjax?.url || '/wp-admin/admin-ajax.php',  {
                method: 'POST',
                body:   formData,
            });

            const data = await res.json();

            if ( data.success ) {
                response.innerHTML = `<p class="cta-block__form-success">${ data.data.message }</p>`;
                form.reset();
            } else {
                response.innerHTML = `<p class="cta-block__form-error">${ data.data.message }</p>`;
            }

        } catch ( err ) {
            response.innerHTML = `<p class="cta-block__form-error">Connection error. Please try again.</p>`;
        } finally {
            // Розблоковуємо кнопку
            button.disabled = false;
            button.textContent = button.dataset.text || 'Request a callback';
        }
    });
});