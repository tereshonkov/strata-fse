<?php
$kicker      = $attributes['kicker'] ?? '05 — Calculator';
$title       = $attributes['title'] ?? 'Estimate your project';
$lead        = $attributes['lead'] ?? '';
$min_area    = $attributes['minArea'] ?? 20;
$max_area    = $attributes['maxArea'] ?? 500;
$step_area   = $attributes['stepArea'] ?? 5;
$default_area = $attributes['defaultArea'] ?? 90;
$rough       = $attributes['roughFinish'] ?? 180;
$turnkey     = $attributes['turnkey'] ?? 420;
$design      = $attributes['designBuild'] ?? 680;
$mult_eco    = $attributes['multEconomy'] ?? 1;
$mult_std    = $attributes['multStandard'] ?? 1.35;
$mult_prem   = $attributes['multPremium'] ?? 1.9;
?>

<section class="calculator-block">
    <div class="calculator-block__container">

        <div class="calculator-block__head">
            <div class="calculator-block__kicker">
                <span class="kicker"><?php echo esc_html( $kicker ); ?></span>
            </div>
            <div class="calculator-block__head-text">
                <h2 class="calculator-block__title"><?php echo esc_html( $title ); ?></h2>
                <p class="calculator-block__lead"><?php echo esc_html( $lead ); ?></p>
            </div>
        </div>

        <div class="calc__wrap" 
            id="strata-calculator"
            data-min="<?php echo esc_attr( $min_area ); ?>"
            data-max="<?php echo esc_attr( $max_area ); ?>"
            data-step="<?php echo esc_attr( $step_area ); ?>"
            data-default="<?php echo esc_attr( $default_area ); ?>"
            data-rough="<?php echo esc_attr( $rough ); ?>"
            data-turnkey="<?php echo esc_attr( $turnkey ); ?>"
            data-design="<?php echo esc_attr( $design ); ?>"
            data-mult-eco="<?php echo esc_attr( $mult_eco ); ?>"
            data-mult-std="<?php echo esc_attr( $mult_std ); ?>"
            data-mult-prem="<?php echo esc_attr( $mult_prem ); ?>"
        >
            <!-- React монтується сюди через frontend.jsx -->
        </div>

    </div>
</section>