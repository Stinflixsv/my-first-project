import styled from './Title.module.css';
import {forwardRef} from "react";
import {motion} from "framer-motion";

export const Title = forwardRef(({size, lineH, isCenter, children}, ref) => {
    const centerFont = isCenter ? 'center' : 'left';
    return (
        <h2
            ref={ref}
            style={{fontSize: `${size}px`, lineHeight: `${lineH}px`, textAlign: centerFont}}
            className={styled.title}>
            {children}
        </h2>
    )
})

export const MTitle = motion(Title);
