import styled from "../SubscribeCard.module.scss";
import {AiFillHeart} from "react-icons/ai";
import {Title} from "../../../Fonts/Title/Title";
import Text from "../../../Fonts/Text/Text";

const HeaderSubCard = ({subscribeType, title, price, description}) => {
  return(
      <div className={styled.header}>
          <div className={styled.iconCard}>
              <AiFillHeart size={50} />
          </div>
          <Title size={24} lineH={32}>{subscribeType}</Title>
          <Text weight={700}>{title}</Text>
          <div className={styled.priceInMonth}>{price}$</div>
          <Text>{description}</Text>
      </div>
  )
}

export default HeaderSubCard;