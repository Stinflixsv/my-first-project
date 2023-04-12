import styled from './Welcome.module.scss';
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import Text from "../../Fonts/Text/Text";
import {Button} from "../../Buttons/Button/Button";
import Container from "../../Layouts/Container/Container";
export const Welcome = () => {
    return(
        <section className={styled.welcome}>
            <Container>
                <div className={styled.content}>
                    <Caption size={16}>For Better Future</Caption>
                    <Title size={58} lineH={80} isCenter>HIGH QUALITY COURSES</Title>
                    <Text size={20} lineH={30} isCenter>Find the right instructor for you from over 10,000 teachers</Text>
                    <div className={styled.buttons}>
                        <Button padding={40}>Get Quote Now</Button>
                        <Button padding={40} transparent>Learn More</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}