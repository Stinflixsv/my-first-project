import styled from "../SubscribeCard.module.scss";
import ItemBenefit from "./ItemBenefit/ItemBenefit";

const Benefits = () => {
  return(
      <div className={styled.benefits}>
          <ItemBenefit service='Unlimited product updates' />
          <ItemBenefit service='Unlimited product updates' />
          <ItemBenefit service='Unlimited product updates' />
          <ItemBenefit service='1GB  Cloud storage' disabled />
          <ItemBenefit service='Email and community support' disabled />
      </div>
  )
}

export default Benefits;