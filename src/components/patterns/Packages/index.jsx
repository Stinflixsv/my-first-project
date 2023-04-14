import styled from './Packages.module.scss';
import Caption from "../../Fonts/Caption/Caption";
import {MTitle} from "../../Fonts/Title/Title";
import {MText} from "../../Fonts/Text/Text";
import {MSimpleCard, SimpleCard} from "../../Cards/SimpleCard/SimpleCard";
import {ReactComponent as SchoolIcon} from "../../../assets/icons/school.svg";
import {ReactComponent as BookIcon} from "../../../assets/icons/book.svg";
import {ReactComponent as EducationIcon} from "../../../assets/icons/education.svg";
import {ReactComponent as KnowledgeIcon} from "../../../assets/icons/knowledge.svg";
import Container from "../../Layouts/Container/Container";
import WrapperInfoBlock from "../../Layouts/WrapperInfoBlock/WrapperInfoBlock";
import {motion} from "framer-motion";

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const cardsAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

export const Packages = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            className={styled.packages}
        >
            <Container>
                <div className={styled.row}>
                    <WrapperInfoBlock>
                        <Caption>Quick examination</Caption>
                        <MTitle variants={textAnimation} custom={1}>Approdable Packages</MTitle>
                        <MText variants={textAnimation} custom={2}>Problems trying to resolve the conflict between the
                            two major realms of Classical physics: Newtonian mechanics</MText>
                    </WrapperInfoBlock>
                    <motion.div initial='hidden' whileInView='visible' className={styled.cards}>
                        <SimpleCard icon={<SchoolIcon/>} title='Training Courses'
                            text='The gradual accumulation of information about'/>
                        <SimpleCard icon={<BookIcon/>} title='Training Courses'
                                    text='The gradual accumulation of information about'/>
                        <SimpleCard icon={<EducationIcon/>} title='Training Courses'
                                    text='The gradual accumulation of information about'/>
                        <SimpleCard icon={<KnowledgeIcon/>} title='Training Courses'
                                    text='The gradual accumulation of information about'/>
                    </motion.div>
                </div>
            </Container>
        </motion.section>
    )
}