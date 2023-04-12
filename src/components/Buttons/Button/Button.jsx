import styled from './Button.module.scss'

export const Button = ({children, padding, transparent}) => {
    let paddingSide = `${padding}px`;
    let isTransparent = transparent ? styled.transparent : '';

    return (
        <button
            style={{paddingLeft: paddingSide, paddingRight: paddingSide}}
            className={`${styled.button} ${isTransparent}`}>
            {children}
        </button>)
}




