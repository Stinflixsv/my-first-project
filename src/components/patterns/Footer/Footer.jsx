import styled from './Footer.module.scss'
import NavigationColumn from "./NavigationColumn/NavigationColumn";
import {ReactComponent as Facebook} from "../../../assets/icons/facebook.svg";
import {ReactComponent as Instagram} from "../../../assets/icons/instagram.svg";
import {ReactComponent as Twitter} from "../../../assets/icons/twitter.svg";
import Text from "../../Fonts/Text/Text";
import Container from "../../Layouts/Container/Container";
import {NavigationColumnContact} from "./NavigationColumnContact/NavigationColumnContact";

export const Footer = () => {

    const columnsLinkData = {
        column1: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
        column2: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
        column3: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
        column4: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
        column5: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
    }

    return (
        <footer className={styled.footer}>
            <div className={styled.navigation}>
                <Container>
                    <div className={styled.columns}>
                        <NavigationColumn title='Company Info' links={columnsLinkData.column1} />
                        <NavigationColumn title='Legal' links={columnsLinkData.column2} />
                        <NavigationColumn title='Features' links={columnsLinkData.column3} />
                        <NavigationColumn title='Resources' links={columnsLinkData.column4} />
                        <NavigationColumnContact />
                    </div>
                </Container>
            </div>
            <div className={styled.license}>
                <Container>
                    <div className={styled.row}>
                        <Text>Made With Love By Figmaland All Right Reserved</Text>
                        <div className={styled.socials}>
                            <Facebook />
                            <Instagram />
                            <Twitter />
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}