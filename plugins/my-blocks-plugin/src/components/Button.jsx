export default function Button( { text, variant = 'primary', onClick } ) {
    return (
        <button
            className={ `hero-block__btn hero-block__btn--${ variant }` }
            onClick={ onClick }
        >
            { text }
            { variant === 'primary' && (
                <span className="btn-arrow">→</span>
            ) }
        </button>
    );
}