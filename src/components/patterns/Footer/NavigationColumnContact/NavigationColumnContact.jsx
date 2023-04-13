import styled from "./NavigationColumnContact.module.scss";
import {Title} from "../../../Fonts/Title/Title";
import {ReactComponent as MobileIcon} from "../../../../assets/icons/mobile.svg";
import {ReactComponent as LocalMapIcon} from "../../../../assets/icons/localMap.svg";
import {ReactComponent as MailIcon} from "../../../../assets/icons/mail.svg";

export const NavigationColumnContact = () => {
  return(
      <div className={styled.contact}>
          <Title size={16} lineH={24}>Get In Touch</Title>
          <div className={styled.contact__list}>
              <div className={styled.contact__item}>
                  <div className={styled.icon}><MobileIcon /></div>
                  <span>(480) 555-0103</span>
              </div>
              <div className={styled.contact__item}>
                  <div className={styled.icon}><LocalMapIcon /></div>
                  <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </div>
              <div className={styled.contact__item}>
                  <div className={styled.icon}><MailIcon /></div>
                  <span>debra.holt@example.com</span>
              </div>
          </div>
      </div>
  )
}