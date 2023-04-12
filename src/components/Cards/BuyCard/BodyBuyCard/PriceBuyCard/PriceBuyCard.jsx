import styled from "../BodyBuyCard.module.scss";
import {BsDownload} from "react-icons/bs";

const PriceBuyCard = ({salesCount, price, discount}) => {
    return (
        <>
            <div className={styled.coursesSales}>
                <BsDownload/>
                <span>{salesCount} Sales</span>
            </div>
            <div className={styled.coursesPrice}>
                <span>${price}</span>
                <span>${discount}</span>
            </div>
        </>
    )
}

export default PriceBuyCard;