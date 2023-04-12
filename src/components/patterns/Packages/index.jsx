import styled from './Packages.module.scss';
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import Text from "../../Fonts/Text/Text";
import SimpleCard from "../../Cards/SimpleCard/SimpleCard";
import {ReactComponent as SchoolIcon} from "../../../assets/icons/school.svg";
import {ReactComponent as BookIcon} from "../../../assets/icons/book.svg";
import {ReactComponent as EducationIcon} from "../../../assets/icons/education.svg";
import {ReactComponent as KnowledgeIcon} from "../../../assets/icons/knowledge.svg";
import Container from "../../Layouts/Container/Container";
import WrapperInfoBlock from "../../Layouts/WrapperInfoBlock/WrapperInfoBlock";
export const Packages = () => {
  return(
      <section className={styled.packages}>
          <Container>
              <div className={styled.row}>
                  <WrapperInfoBlock>
                      <Caption>Quick examination</Caption>
                      <Title>Approdable Packages</Title>
                      <Text>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                  </WrapperInfoBlock>
                  <div className={styled.cards}>
                      <SimpleCard icon={<SchoolIcon />} title='Training Courses' text='The gradual accumulation of information about' />
                      <SimpleCard icon={<BookIcon />} title='Training Courses' text='The gradual accumulation of information about' />
                      <SimpleCard icon={<EducationIcon />} title='Training Courses' text='The gradual accumulation of information about' />
                      <SimpleCard icon={<KnowledgeIcon />} title='Training Courses' text='The gradual accumulation of information about' />
                  </div>
              </div>
          </Container>
      </section>
  )
}