export default function Button( { text, variant = 'primary', onClick, url } ) {
    const className = `btn btn--${ variant }`;

    if ( url ) {
        return (
            <a href={ url } className={ className }>
                { text }
                { variant === 'primary' && <span className="btn-arrow">→</span> }
            </a>
        );
    }

    return (
        <button className={ className } onClick={ onClick }>
            { text }
            { variant === 'primary' && <span className="btn-arrow">→</span> }
        </button>
    );
}