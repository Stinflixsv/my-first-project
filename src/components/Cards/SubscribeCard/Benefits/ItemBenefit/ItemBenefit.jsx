import styled from "../../SubscribeCard.module.scss";
import {IoCheckmarkCircle} from "react-icons/io5";

const ItemBenefit = ({service, disabled}) => {
    return (
        <div className={styled.benefit}>
            <IoCheckmarkCircle
                size={32}
                className={disabled ? styled.disabled : ''}
            />
            <span>{service}</span>
        </div>
    )
}

export default ItemBenefit;