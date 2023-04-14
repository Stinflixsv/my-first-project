import styled from './Subscribe.module.scss'
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import {Text} from "../../Fonts/Text/Text";
import {MSubscribeCard} from "../../Cards/SubscribeCard/SubscribeCard";
import Container from "../../Layouts/Container/Container";
import WrapperInfoBlock from "../../Layouts/WrapperInfoBlock/WrapperInfoBlock";
import {motion} from "framer-motion";

const cardsAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}
export const Subscribe = ({cardData}) => {
    const cards = cardData.map((data, index) => <MSubscribeCard variants={cardsAnimation} custom={index+1} data={data}/>)

    return (
        <section className={styled.subscribe}>
            <Container>
                <div className={styled.row}>
                    <WrapperInfoBlock>
                        <Caption>Practice Advice</Caption>
                        <Title>Get Quality Education</Title>
                        <Text>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                    </WrapperInfoBlock>
                    <motion.div initial='hidden' whileInView='visible' className={styled.cards}>{cards}</motion.div>
                </div>
            </Container>
        </section>
    )
}