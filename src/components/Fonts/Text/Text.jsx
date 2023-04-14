import styled from './Text.module.css'
import {forwardRef} from "react";
import {motion} from "framer-motion";

export const Text = forwardRef(({children, size, weight, lineH, isCenter}, ref) => {
    const centerFont = isCenter ? 'center' : 'left';
    return (
        <p
            ref={ref}
            style={{fontSize: `${size}px`, fontWeight: `${weight}`, lineHeight: `${lineH}px`,textAlign: centerFont}}
            className={styled.text}>
            {children}
        </p>)
})

export const MText = motion(Text)
