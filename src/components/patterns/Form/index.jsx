import styled from './Form.module.scss'
import Caption from "../../Fonts/Caption/Caption";
import {Title} from "../../Fonts/Title/Title";
import Text from "../../Fonts/Text/Text";
import Container from "../../Layouts/Container/Container";

export const Form = () => {
  return(
      <section className={styled.form}>
          <Container>
              <div className={styled.content}>
                 <div className={styled.description}>
                     <Caption>Newsletter</Caption>
                     <Title>Our Experts Teacher</Title>
                     <Text isCenter>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Text>
                 </div>
                  <div className={styled.submit}>
                      <input type="text" placeholder='Your Email'/>
                      <button>Subscribe</button>
                  </div>
              </div>
          </Container>
      </section>
  )
}
