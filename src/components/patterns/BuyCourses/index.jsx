import styled from './BuyCourses.module.scss'
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import Text from "../../Fonts/Text/Text";
import BuyCard from "../../Cards/BuyCard/BuyCard";
import Container from "../../Layouts/Container/Container";
import WrapperInfoBlock from "../../Layouts/WrapperInfoBlock/WrapperInfoBlock";

export const BuyCourses = ({cardData}) => {
    const cards = cardData.map(data => <BuyCard data={data}/>)
    return (
        <section className={styled.courses}>
            <Container>
                <div className={styled.row}>
                    <WrapperInfoBlock>
                        <Caption>Health Queries</Caption>
                        <Title>Our Experts Teacher</Title>
                        <Text>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                    </WrapperInfoBlock>
                    <div className={styled.cards}>{cards}</div>
                </div>
            </Container>
        </section>
    )
}