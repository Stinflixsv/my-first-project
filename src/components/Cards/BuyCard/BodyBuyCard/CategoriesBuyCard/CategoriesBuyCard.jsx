import styled from "../BodyBuyCard.module.scss";
import {BsGraphUp, BsStopwatch} from "react-icons/bs";

const CategoriesBuyCard = () => {
    return(
        <div className={styled.coursesCategories}>
            <div className={styled.category}>
                <BsStopwatch />
                <span>Pro...</span>
            </div>
            <div className={styled.category}>
                <BsGraphUp />
                <span>64 Les...</span>
            </div>
            <div className={styled.category}>
                <BsStopwatch />
                <span>22hr..</span>
            </div>
        </div>
    )
}

export default CategoriesBuyCard;