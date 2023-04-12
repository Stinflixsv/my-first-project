import styled from './PopularCourses.module.scss';
import CoursesImg from '../../../assets/img/popular-courses-background.png';
import {Title} from "../../Fonts/Title/Title";
import Text from "../../Fonts/Text/Text";
import {ReactComponent as ArrowRightIcon} from "../../../assets/icons/btnLink-arrow-right.svg";
import Container from "../../Layouts/Container/Container";
export const PopularCourses = () => {
  return(
      <section className={styled.courses}>
          <Container>
              <div className={styled.content}>
                  <div className={styled.illustration}>
                      <img src={CoursesImg} alt=""/>
                  </div>
                  <div className={styled.description}>
                      <span className={styled.line}></span>
                      <Title>Most Popular Courses</Title>
                      <Text>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                      <div className={styled.btnLink}>
                          <a href="/learn-more">Learn More</a>
                          <ArrowRightIcon />
                      </div>
                  </div>
              </div>
          </Container>
      </section>
  )
}