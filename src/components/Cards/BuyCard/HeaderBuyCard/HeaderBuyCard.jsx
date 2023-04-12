import styled from "./HeaderBuyCard.module.scss";
import {IoMdHeartEmpty} from "react-icons/io";
import {BsCart, BsEyeFill} from "react-icons/bs";


const HeaderBuyCard = ({image}) => {
    return(
        <div className={styled.header}>
            <img src={image} alt=""/>
            <div className={styled.badges}>
                <button className={styled.badgeRounded}>
                    <IoMdHeartEmpty size={20} />
                </button>
                <button className={styled.badgeRounded}>
                    <BsCart size={20} />
                </button>
                <button className={styled.badgeRounded}>
                    <BsEyeFill size={20} />
                </button>
            </div>
        </div>
    )
}

export default HeaderBuyCard;