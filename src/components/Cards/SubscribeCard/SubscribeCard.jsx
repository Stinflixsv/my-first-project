import styled from './SubscribeCard.module.scss';
import {Button} from "../../Buttons/Button/Button";
import Benefits from "./Benefits/Benefits";
import HeaderSubCard from "./HeaderSubCard/HeaderSubCard";

const SubscribeCard = ({data}) => {
    return (
        <div className={styled.card}>
            <HeaderSubCard
                subscribeType={data.subscribeType}
                title={data.title}
                price={data.price}
                description={data.description}
            />
            <div className={styled.body}>
                <Button padding={40}>Try for free</Button>
                <Benefits />
            </div>
        </div>
    )
}

export default SubscribeCard;