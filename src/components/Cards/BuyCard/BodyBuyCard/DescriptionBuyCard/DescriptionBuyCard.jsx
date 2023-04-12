import styled from "../BodyBuyCard.module.scss";
import Caption from "../../../../Fonts/Caption/Caption";
import {AiFillStar} from "react-icons/ai";
import {Title} from "../../../../Fonts/Title/Title";
import Text from "../../../../Fonts/Text/Text";

const DescriptionBuyCard = ({nameCourses, rate, title, text}) => {
  return(
      <>
          <div className={styled.coursesInfo}>
              <Caption>{nameCourses}</Caption>
              <div className={styled.coursesRate}>
                  <AiFillStar size={15} />
                  <span>{rate}</span>
              </div>
          </div>
          <Title size={16} lineH={24}>{title}</Title>
          <Text>{text}</Text>
      </>
  )
}

export default DescriptionBuyCard;