import styled from './Title.module.css';

export const Title = ({size, lineH, isCenter, children}) => {
    const centerFont = isCenter ? 'center' : 'left';
    return (
        <h2
            style={{fontSize: `${size}px`, lineHeight: `${lineH}px`, textAlign: centerFont}}
            className={styled.title}>
            {children}
        </h2>
    )
}
