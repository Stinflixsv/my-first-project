import styled from './Reviews.module.scss'
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import {Text} from "../../Fonts/Text/Text";
import {MReviewCard} from "../../Cards/ReviewCard/ReviewCard";
import Avatar from '../../../assets/img/regina-miles.png';
import Avatar2 from '../../../assets/img/regina-miles-2.png';
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
export const Reviews = () => {
    return(
        <section className={styled.reviews}>
            <Container>
                <div className={styled.row}>
                    <WrapperInfoBlock>
                        <Caption>Testimonials</Caption>
                        <Title>Get Quality Education</Title>
                        <Text>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                    </WrapperInfoBlock>
                    <motion.div initial='hidden' whileInView='visible' className={styled.cards}>
                        <MReviewCard
                            variants={cardsAnimation}
                            custom={1}
                            avatar={Avatar}
                            text='Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
                            countRate={4}
                            name='Regina Miles'
                            jobTitle='Designer'
                        />
                        <MReviewCard
                            variants={cardsAnimation}
                            custom={2}
                            avatar={Avatar2}
                            text='Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
                            countRate={3}
                            name='Regina Miles'
                            jobTitle='Designer'
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}