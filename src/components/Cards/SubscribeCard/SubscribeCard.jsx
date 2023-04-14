import styled from './SubscribeCard.module.scss';
import {Button} from "../../Buttons/Button/Button";
import Benefits from "./Benefits/Benefits";
import HeaderSubCard from "./HeaderSubCard/HeaderSubCard";
import {motion} from "framer-motion";
import {forwardRef} from "react";

export const SubscribeCard = forwardRef(({data}, ref) => {
    return (
        <div className={styled.card} ref={ref}>
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
})

export const MSubscribeCard = motion(SubscribeCard)