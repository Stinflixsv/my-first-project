import styled from './ReviewCard.module.scss';
import {Text} from "../../Fonts/Text/Text";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {Title} from "../../Fonts/Title/Title";
import {motion} from "framer-motion";
import {forwardRef} from "react";

export const ReviewCard = forwardRef(({avatar, text, name, jobTitle, countRate}, ref) => {

    const arr = Array(5).fill(0).fill(1, 0, countRate);
    const stars = arr.map(number => number === 1 ? <AiFillStar /> : <AiOutlineStar />)

    return (
        <div className={styled.card} ref={ref}>
            <div className={styled.avatar}>
                <img src={avatar} alt=""/>
            </div>
            <div className={styled.description}>
                <Text isCenter>{text}</Text>
                <div className={styled.stars}>{stars}</div>
                <div className={styled.avatarName}>
                    <Title isCenter size={16} lineH={24}>{name}</Title>
                    <Text isCenter>{jobTitle}</Text>
                </div>
            </div>
        </div>
    )
})

export const MReviewCard = motion(ReviewCard);