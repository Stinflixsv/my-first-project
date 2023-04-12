import styled from './Header.module.scss';
import {Title} from "../../Fonts/Title/Title";
import {Button} from "../../Buttons/Button/Button";
import {ReactComponent as ArrowRight} from "../../../assets/icons/btn-arrow-right.svg";
import {Link} from "../../Fonts/Link/Link";
import Container from "../../Layouts/Container/Container";
import Menu from "./Menu/Menu";
import {useState} from "react";

export const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className={styled.header}>
            <Container>
               <div className={styled.row}>
                   <Title size={24} lineH={32}>BrandName</Title>
                   <nav className={styled.menu}>
                       <ul className={styled.menu__list}>
                           <Link path='/' title='Home'/>
                           <Link path='/product' title='Product'/>
                           <Link path='/pricing' title='Pricing'/>
                           <Link path='/contact' title='Contact'/>
                       </ul>
                       <div className={styled.login}>
                           <a href="/login" className={styled.login__link}>Login</a>
                           <Button padding={25}>
                               JOIN US
                               <ArrowRight/>
                           </Button>
                       </div>
                   </nav>
                   <div className={styled.burger}>
                       <button
                           className={menuActive ? `${styled.burgerButton} ${styled.active}` : `${styled.burgerButton}`}
                           onClick={() => setMenuActive(!menuActive)}>
                           <span/>
                       </button>
                   </div>
               </div>
            </Container>
            <Menu active={menuActive} setActive={setMenuActive} />
        </header>
    )
}