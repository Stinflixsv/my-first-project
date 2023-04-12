import styled from './Link.module.scss'

export const Link = ({title, path}) => {
    return(
        <li>
            <a href={path} className={styled.link}>{title}</a>
        </li>
    )
}