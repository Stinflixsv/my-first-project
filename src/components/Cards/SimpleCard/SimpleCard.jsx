import styled from './SimpleCard.module.scss';
import {Title} from "../../Fonts/Title/Title";
import {Text} from "../../Fonts/Text/Text";
import {useState} from "react";

export const SimpleCard = ({icon, title, text}) => {
    const [isHover, setIsHover] = useState(false);
    const hoverCardClasses = isHover ? styled.cardHover : '';

    return (
        <article
            className={`${styled.card} ${hoverCardClasses}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={styled.icon}>{icon}</div>
            <Title size={16} lineH={24}>{title}</Title>
            <span className={styled.line}></span>
            <Text>{text}</Text>
        </article>)
}