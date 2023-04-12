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
                  <MobileIcon />
                  <a href="#">(480) 555-0103</a>
              </div>
              <div className={styled.contact__item}>
                  <LocalMapIcon />
                  <a href="#">4517 Washington Ave. Manchester, Kentucky 39495</a>
              </div>
              <div className={styled.contact__item}>
                  <MailIcon />
                  <a href="#">debra.holt@example.com</a>
              </div>
          </div>
      </div>
  )
}