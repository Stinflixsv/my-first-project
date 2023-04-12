import styled from './WrapperInfoBlock.module.scss'

const WrapperInfoBlock = ({children}) => {
    return(
        <div className={styled.infoBlock}>{children}</div>
    )
}

export default WrapperInfoBlock