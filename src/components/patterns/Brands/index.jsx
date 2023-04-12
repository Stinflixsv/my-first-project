import styled from './Brands.module.scss';
import {ReactComponent as Hooli} from '../../../assets/icons/company-hooli.svg';
import {ReactComponent as Lyft} from '../../../assets/icons/company-lyft.svg';
import {ReactComponent as Leaf} from '../../../assets/icons/company-leafe.svg';
import {ReactComponent as Stripe} from '../../../assets/icons/company-stripe.svg';
import {ReactComponent as Aws} from '../../../assets/icons/company-aws.svg';
import {ReactComponent as Reddit} from '../../../assets/icons/company-reddit.svg';
import Container from "../../Layouts/Container/Container";

export const Brands = () => {
  return(
      <section className={styled.brands}>
          <Container>
              <div className={styled.row}>
                  <Hooli />
                  <Lyft />
                  <Leaf />
                  <Stripe />
                  <Aws />
                  <Reddit />
              </div>
          </Container>
      </section>
  )
}