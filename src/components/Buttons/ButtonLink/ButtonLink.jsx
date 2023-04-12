import styled from './ButtonLink.module.scss';
import IconArrowRight from '../../../assets/icons/btnLink-arrow-right.svg';

export const ButtonLink = ({children}) => {
    return (
        <button className={styled.button}>
            {children}
          <img src={IconArrowRight} alt="Icon arrow link right"/>
        </button>
    )
}