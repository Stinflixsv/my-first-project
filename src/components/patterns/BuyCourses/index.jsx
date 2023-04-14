import styled from './BuyCourses.module.scss'
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import {Text} from "../../Fonts/Text/Text";
import {MBuyCard} from "../../Cards/BuyCard/BuyCard";
import Container from "../../Layouts/Container/Container";
import WrapperInfoBlock from "../../Layouts/WrapperInfoBlock/WrapperInfoBlock";
import {motion} from "framer-motion";

const cardsAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export const BuyCourses = ({cardData}) => {
    const cards = cardData.map((data, index) => <MBuyCard variants={cardsAnimation} custom={index+1} data={data}/>)
    return (
        <section className={styled.courses}>
            <Container>
                <div className={styled.row}>
                    <WrapperInfoBlock>
                        <Caption>Health Queries</Caption>
                        <Title>Our Experts Teacher</Title>
                        <Text>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                    </WrapperInfoBlock>
                    <motion.div initial='hidden' whileInView='visible' className={styled.cards}>{cards}</motion.div>
                </div>
            </Container>
        </section>
    )
}