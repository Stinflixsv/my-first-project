import styled from './Caption.module.scss';

const Caption = ({children, size}) => {
    return (
        <span
            style={{fontSize: `${size}px`}}
            className={styled.caption}>
            {children}
        </span>
    )
}

export default Caption;