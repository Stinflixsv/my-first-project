import styled from './BuyCard.module.scss'
import HeaderBuyCard from "./HeaderBuyCard/HeaderBuyCard";
import BodyBuyCard from "./BodyBuyCard/BodyBuyCard";
import {forwardRef} from "react";
import {motion} from "framer-motion";


export const BuyCard = forwardRef(({data}, ref) => {
  return(
      <motion.div className={styled.card} ref={ref}>
          <HeaderBuyCard image={data.image} />
          <BodyBuyCard data={data.bodyData} />
      </motion.div>
  )
})

export const MBuyCard = motion(BuyCard);