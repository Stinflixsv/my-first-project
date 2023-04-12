import styled from './BuyCard.module.scss'
import HeaderBuyCard from "./HeaderBuyCard/HeaderBuyCard";
import BodyBuyCard from "./BodyBuyCard/BodyBuyCard";


const BuyCard = ({data}) => {
  return(
      <div className={styled.card}>
          <HeaderBuyCard image={data.image} />
          <BodyBuyCard data={data.bodyData} />
      </div>
  )
}

export default BuyCard;