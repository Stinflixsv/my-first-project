import styled from "./NavigationColumn.module.scss";
import {Title} from "../../../Fonts/Title/Title";

const NavigationColumn = ({title, links}) => {
    const navLinks = links.map(link => (
        <li>
            <a href="#">{link}</a>
        </li>
    ))

    return (
        <div>
            <Title size={16} lineH={24}>{title}</Title>
            <ul className={styled.column__list}>{navLinks}</ul>
        </div>
    )
}

export default NavigationColumn;