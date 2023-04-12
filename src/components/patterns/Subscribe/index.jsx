import styled from './Subscribe.module.scss'
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import Text from "../../Fonts/Text/Text";
import SubscribeCard from "../../Cards/SubscribeCard/SubscribeCard";
import Container from "../../Layouts/Container/Container";
import WrapperInfoBlock from "../../Layouts/WrapperInfoBlock/WrapperInfoBlock";

export const Subscribe = ({cardData}) => {
    const cards = cardData.map(data => <SubscribeCard data={data}/>)

    return (
        <section className={styled.subscribe}>
            <Container>
                <div className={styled.row}>
                    <WrapperInfoBlock>
                        <Caption>Practice Advice</Caption>
                        <Title>Get Quality Education</Title>
                        <Text>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                    </WrapperInfoBlock>
                    <div className={styled.cards}>{cards}</div>
                </div>
            </Container>
        </section>
    )
}