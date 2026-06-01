<?php
$kicker         = $attributes['kicker'] ?? '— Get started';
$title          = $attributes['title'] ?? 'Ready to start building?';
$lead           = $attributes['lead'] ?? 'Leave your details and a project manager will call you back within one business day.';
$button_text    = $attributes['buttonText'] ?? 'Request a callback';
$recipient_email = $attributes['recipientEmail'] ?? get_option( 'admin_email' );
?>

<section class="cta-block" id="contact">
    <div class="cta-block__container">

        <div class="cta-block__head">
            <div class="cta-block__kicker">
                <span class="kicker"><?php echo esc_html( $kicker ); ?></span>
            </div>
            <div class="cta-block__head-text">
                <h2 class="cta-block__title"><?php echo esc_html( $title ); ?></h2>
                <p class="cta-block__lead"><?php echo esc_html( $lead ); ?></p>
            </div>
        </div>

        <div class="cta-block__form">
            <form 
                class="cta-block__form-wrap" 
                id="strata-contact-form"
                data-email="<?php echo esc_attr( $recipient_email ); ?>"
            >
                <?php wp_nonce_field( 'strata_contact', 'strata_nonce' ); ?>

                <div class="cta-block__form-fields">
                    <input 
                        class="cta-block__form-field"
                        type="text" 
                        name="strata_name" 
                        placeholder="Your name" 
                        required 
                    />
                    <input 
                        class="cta-block__form-field"
                        type="tel" 
                        name="strata_phone" 
                        placeholder="Phone number" 
                        required 
                    />
                </div>

                <button type="submit" class="btn btn--primary">
                    <?php echo esc_html( $button_text ); ?>
                    <span class="btn-arrow">→</span>
                </button>

                <div class="cta-block__form-response" id="strata-form-response"></div>

                <p class="cta-block__form-note">
                    By submitting you agree to our <a href="/privacy-policy">Privacy Policy</a>.
                </p>
            </form>
        </div>

    </div>
</section>