import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const {
        kicker, title, lead,
        minArea, maxArea, stepArea, defaultArea,
        roughFinish, turnkey, designBuild,
        multEconomy, multStandard, multPremium
    } = attributes;

    const blockProps = useBlockProps( { className: 'calculator-block' } );

    // Превью розрахунку в редакторі
    const previewTotal = defaultArea * turnkey * multStandard;

    return (
        <>
            <InspectorControls>
                <PanelBody title="Area Settings">
                    <RangeControl
                        label="Min Area (m²)"
                        value={ minArea }
                        onChange={ ( val ) => setAttributes( { minArea: val } ) }
                        min={ 10 }
                        max={ 100 }
                    />
                    <RangeControl
                        label="Max Area (m²)"
                        value={ maxArea }
                        onChange={ ( val ) => setAttributes( { maxArea: val } ) }
                        min={ 100 }
                        max={ 1000 }
                    />
                    <RangeControl
                        label="Step (m²)"
                        value={ stepArea }
                        onChange={ ( val ) => setAttributes( { stepArea: val } ) }
                        min={ 1 }
                        max={ 20 }
                    />
                    <RangeControl
                        label="Default Area (m²)"
                        value={ defaultArea }
                        onChange={ ( val ) => setAttributes( { defaultArea: val } ) }
                        min={ minArea }
                        max={ maxArea }
                    />
                </PanelBody>
                <PanelBody title="Scope of Work ($/m²)">
                    <RangeControl
                        label="Rough Finish"
                        value={ roughFinish }
                        onChange={ ( val ) => setAttributes( { roughFinish: val } ) }
                        min={ 50 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Turnkey"
                        value={ turnkey }
                        onChange={ ( val ) => setAttributes( { turnkey: val } ) }
                        min={ 100 }
                        max={ 1000 }
                    />
                    <RangeControl
                        label="Design & Build"
                        value={ designBuild }
                        onChange={ ( val ) => setAttributes( { designBuild: val } ) }
                        min={ 200 }
                        max={ 2000 }
                    />
                </PanelBody>
                <PanelBody title="Material Grade (multiplier)">
                    <RangeControl
                        label="Economy"
                        value={ multEconomy }
                        onChange={ ( val ) => setAttributes( { multEconomy: val } ) }
                        min={ 0.5 }
                        max={ 2 }
                        step={ 0.05 }
                    />
                    <RangeControl
                        label="Standard"
                        value={ multStandard }
                        onChange={ ( val ) => setAttributes( { multStandard: val } ) }
                        min={ 0.5 }
                        max={ 3 }
                        step={ 0.05 }
                    />
                    <RangeControl
                        label="Premium"
                        value={ multPremium }
                        onChange={ ( val ) => setAttributes( { multPremium: val } ) }
                        min={ 1 }
                        max={ 5 }
                        step={ 0.05 }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                <div className="calculator-block__container">

                    {/* Заголовок */}
                    <div className="calculator-block__head">
                        <div className="calculator-block__kicker">
                            <span className="kicker">{ kicker }</span>
                        </div>
                        <div className="calculator-block__head-text">
                            <RichText
                                tagName="h2"
                                className="calculator-block__title"
                                value={ title }
                                onChange={ ( val ) => setAttributes( { title: val } ) }
                                placeholder="Title..."
                            />
                            <RichText
                                tagName="p"
                                className="calculator-block__lead"
                                value={ lead }
                                onChange={ ( val ) => setAttributes( { lead: val } ) }
                                placeholder="Lead..."
                            />
                        </div>
                    </div>

                    {/* Превью калькулятора */}
                    <div className="calc__wrap">

                        {/* Ліва частина — форма */}
                        <div className="calc__form">

                            {/* Слайдер */}
                            <div className="calc__field">
                                <div className="calc__label">
                                    <span className="t">Area</span>
                                    <span className="v"><em>{ defaultArea }</em> m²</span>
                                </div>
                                <input
                                    type="range"
                                    className="calc__slider"
                                    min={ minArea }
                                    max={ maxArea }
                                    step={ stepArea }
                                    defaultValue={ defaultArea }
                                    readOnly
                                />
                                <div className="calc__scale">
                                    <span>{ minArea } m²</span>
                                    <span>{ maxArea } m²</span>
                                </div>
                            </div>

                            {/* Scope of work */}
                            <div className="calc__field">
                                <div className="calc__label">
                                    <span className="t">Scope of work</span>
                                </div>
                                <div className="calc__opts">
                                    <button className="calc__opt">
                                        <b>Rough finish</b>
                                        <span>${ roughFinish } / m²</span>
                                    </button>
                                    <button className="calc__opt calc__opt--active">
                                        <b>Turnkey</b>
                                        <span>${ turnkey } / m²</span>
                                    </button>
                                    <button className="calc__opt">
                                        <b>Design + build</b>
                                        <span>${ designBuild } / m²</span>
                                    </button>
                                </div>
                            </div>

                            {/* Material grade */}
                            <div className="calc__field">
                                <div className="calc__label">
                                    <span className="t">Material grade</span>
                                </div>
                                <div className="calc__opts">
                                    <button className="calc__opt">
                                        <b>Economy</b>
                                        <span>Base</span>
                                    </button>
                                    <button className="calc__opt calc__opt--active">
                                        <b>Standard</b>
                                        <span>×{ multStandard }</span>
                                    </button>
                                    <button className="calc__opt">
                                        <b>Premium</b>
                                        <span>×{ multPremium }</span>
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Права частина — результат */}
                        <div className="calc__result">
                            <span className="kicker">Your estimate</span>
                            <div className="calc__total-label">Estimated total</div>
                            <div className="calc__total">
                                ${ previewTotal.toLocaleString() }
                            </div>
                            <div className="calc__rate">
                                Based on ${ turnkey }/m² × Standard materials
                            </div>
                            <a className="btn btn--primary btn--block" href="#contact">
                                Send request <span className="btn-arrow">→</span>
                            </a>
                            <p className="calc__note">
                                This is a preliminary estimate. Final pricing is confirmed after a free on-site visit.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}