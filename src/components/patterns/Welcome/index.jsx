import styled from './Welcome.module.scss';
import Caption from "../../Fonts/Caption/Caption";
import {MTitle} from "../../Fonts/Title/Title";
import {MText} from "../../Fonts/Text/Text";
import {Button} from "../../Buttons/Button/Button";
import Container from "../../Layouts/Container/Container";
import {motion} from "framer-motion";
export const Welcome = () => {
    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }

    return(
        <motion.section className={styled.welcome} initial='hidden' whileInView='visible'>
            <Container>
                <div className={styled.content}>
                    <Caption size={16}>For Better Future</Caption>
                    <MTitle variants={textAnimation} custom={1} size={58} lineH={80} isCenter>HIGH QUALITY COURSES</MTitle>
                    <MText variants={textAnimation} custom={2} size={20} lineH={30} isCenter>Find the right instructor for you from over 10,000 teachers</MText>
                    <motion.div variants={textAnimation} custom={3} className={styled.buttons}>
                        <Button padding={40}>Get Quote Now</Button>
                        <Button padding={40} transparent>Learn More</Button>
                    </motion.div>
                </div>
            </Container>
        </motion.section>
    )
}