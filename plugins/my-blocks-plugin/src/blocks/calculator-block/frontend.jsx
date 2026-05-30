import { createRoot } from '@wordpress/element';
import { useState } from '@wordpress/element';

function Calculator( { config } ) {
    const { min, max, step, defaultArea, rough, turnkey, design, multEco, multStd, multPrem } = config;

    const [area, setArea]   = useState( defaultArea );
    const [scope, setScope] = useState( 'turnkey' );
    const [grade, setGrade] = useState( 'standard' );

    // Ціни по типу роботи
    const rates = {
        rough:   rough,
        turnkey: turnkey,
        design:  design,
    };

    // Множники матеріалів
    const multipliers = {
        economy:  multEco,
        standard: multStd,
        premium:  multPrem,
    };

    // Розрахунок
    const total = Math.round( area * rates[scope] * multipliers[grade] );

    // Назви для рядка розрахунку
    const scopeNames = { rough: 'Rough finish', turnkey: 'Turnkey', design: 'Design + build' };
    const gradeNames = { economy: 'Economy', standard: 'Standard', premium: 'Premium' };

    return (
        <>
            {/* Ліва частина — форма */}
            <div className="calc__form">

                {/* Слайдер */}
                <div className="calc__field">
                    <div className="calc__label">
                        <span className="t">Area</span>
                        <span className="v"><em>{ area }</em> m²</span>
                    </div>
                    <input
                        type="range"
                        className="calc__slider"
                        min={ min }
                        max={ max }
                        step={ step }
                        value={ area }
                        onChange={ ( e ) => setArea( Number( e.target.value ) ) }
                    />
                    <div className="calc__scale">
                        <span>{ min } m²</span>
                        <span>{ max } m²</span>
                    </div>
                </div>

                {/* Scope of work */}
                <div className="calc__field">
                    <div className="calc__label">
                        <span className="t">Scope of work</span>
                    </div>
                    <div className="calc__opts">
                        { [
                            { key: 'rough',   label: 'Rough finish',  price: rough },
                            { key: 'turnkey', label: 'Turnkey',       price: turnkey },
                            { key: 'design',  label: 'Design + build', price: design },
                        ].map( ( item ) => (
                            <button
                                key={ item.key }
                                className={ `calc__opt${ scope === item.key ? ' calc__opt--active' : '' }` }
                                onClick={ () => setScope( item.key ) }
                            >
                                <b>{ item.label }</b>
                                <span>${ item.price } / m²</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Material grade */}
                <div className="calc__field">
                    <div className="calc__label">
                        <span className="t">Material grade</span>
                    </div>
                    <div className="calc__opts">
                        { [
                            { key: 'economy',  label: 'Economy',  sub: 'Base' },
                            { key: 'standard', label: 'Standard', sub: `×${ multStd }` },
                            { key: 'premium',  label: 'Premium',  sub: `×${ multPrem }` },
                        ].map( ( item ) => (
                            <button
                                key={ item.key }
                                className={ `calc__opt${ grade === item.key ? ' calc__opt--active' : '' }` }
                                onClick={ () => setGrade( item.key ) }
                            >
                                <b>{ item.label }</b>
                                <span>{ item.sub }</span>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* Права частина — результат */}
            <div className="calc__result">
                <span className="kicker">Your estimate</span>
                <div className="calc__total-label">Estimated total</div>
                <div className="calc__total">
                    ${ total.toLocaleString() }
                </div>
                <div className="calc__rate">
                    Based on ${ rates[scope] }/m² × { gradeNames[grade] } materials
                </div>
                <a className="btn btn--primary btn--block" href="#contact">
                    Send request <span className="btn-arrow">→</span>
                </a>
                <p className="calc__note">
                    This is a preliminary estimate. Final pricing is confirmed after a free on-site visit.
                </p>
            </div>
        </>
    );
}

// Монтуємо React в div
const container = document.getElementById( 'strata-calculator' );

if ( container ) {
    const config = {
        min:         Number( container.dataset.min ),
        max:         Number( container.dataset.max ),
        step:        Number( container.dataset.step ),
        defaultArea: Number( container.dataset.default ),
        rough:       Number( container.dataset.rough ),
        turnkey:     Number( container.dataset.turnkey ),
        design:      Number( container.dataset.design ),
        multEco:     Number( container.dataset.multEco ),
        multStd:     Number( container.dataset.multStd ),
        multPrem:    Number( container.dataset.multPrem ),
    };

    createRoot( container ).render( <Calculator config={ config } /> );
}