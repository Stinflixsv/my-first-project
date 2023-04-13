import styled from './ButtonLink.module.scss';
import {ReactComponent as IconArrowRight} from '../../../assets/icons/btnLink-arrow-right.svg';

export const ButtonLink = ({children}) => {
    return (
        <button className={styled.button}>
            {children}
          <IconArrowRight />
        </button>
    )
}