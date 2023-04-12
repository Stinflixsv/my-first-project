import styled from './Text.module.css'

const Text = ({children, size, weight, lineH, isCenter}) => {
    const centerFont = isCenter ? 'center' : 'left';
    return (
        <p
            style={{fontSize: `${size}px`, fontWeight: `${weight}`, lineHeight: `${lineH}px`,textAlign: centerFont}}
            className={styled.text}>
            {children}
        </p>)
}

export default Text