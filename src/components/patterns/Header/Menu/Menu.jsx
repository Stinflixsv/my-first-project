import styled from './Menu.module.scss'
import {Title} from "../../../Fonts/Title/Title";
import {Link} from "../../../Fonts/Link/Link";
import {Button} from "../../../Buttons/Button/Button";
import {ReactComponent as ArrowRight} from "../../../../assets/icons/btn-arrow-right.svg";


const Menu = ({active, setActive}) => {
    return (
        <div className={active ? `${styled.menu} ${styled.active}` : `${styled.menu}` } onClick={() => setActive(false)}>
            <div className={styled.blur} />
            <div className={styled.content} onClick={e => e.stopPropagation()}>
                <Title size={28} lineH={32}>BrandName</Title>
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
            </div>
        </div>
    );
};

export default Menu;