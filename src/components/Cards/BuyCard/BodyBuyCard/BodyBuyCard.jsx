import styled from './BodyBuyCard.module.scss'
import {ButtonLink} from "../../../Buttons/ButtonLink/ButtonLink";
import CategoriesBuyCard from "./CategoriesBuyCard/CategoriesBuyCard";
import PriceBuyCard from "./PriceBuyCard/PriceBuyCard";
import DescriptionBuyCard from "./DescriptionBuyCard/DescriptionBuyCard";

const BodyBuyCard = ({data}) => {
    return (
        <div className={styled.body}>
            <DescriptionBuyCard nameCourses={data.nameCourses} rate={data.rate} title={data.title} text={data.text}/>
            <PriceBuyCard salesCount={data.salesCount} price={data.price} discount={data.discount}/>
            <CategoriesBuyCard/>
            <ButtonLink>Learn More</ButtonLink>
        </div>
    )
}

export default BodyBuyCard