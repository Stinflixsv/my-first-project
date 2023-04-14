import styled from './PopularCourses.module.scss';
import CoursesImg from '../../../assets/img/popular-courses-background.png';
import {MTitle} from "../../Fonts/Title/Title";
import {MText} from "../../Fonts/Text/Text";
import {ReactComponent as ArrowRightIcon} from "../../../assets/icons/btnLink-arrow-right.svg";
import Container from "../../Layouts/Container/Container";
import {motion} from "framer-motion";

const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const imageAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {delay: custom * 0.5}
    })
}
export const PopularCourses = () => {
  return(
      <motion.section initial='hidden' whileInView='visible' className={styled.courses}>
          <Container>
              <div className={styled.content}>
                  <div className={styled.illustration}>
                      <motion.img variants={imageAnimation} custom={1} src={CoursesImg} alt=""/>
                  </div>
                  <div className={styled.description}>
                      <span className={styled.line}></span>
                      <MTitle variants={textAnimation} custom={1}>Most Popular Courses</MTitle>
                      <MText variants={textAnimation} custom={2}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</MText>
                      <div className={styled.btnLink}>
                          <a href="/learn-more">Learn More</a>
                          <ArrowRightIcon />
                      </div>
                  </div>
              </div>
          </Container>
      </motion.section>
  )
}