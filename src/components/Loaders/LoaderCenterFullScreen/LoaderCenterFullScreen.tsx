import { Loader } from '../Loader/Loader';
import * as Styled from './LoaderCenterFullScreen.styled'

export const LoaderCenterFullScreen = () => {
    return (
        <Styled.LoaderWrapper>
            <Loader />
        </Styled.LoaderWrapper>
    )
}
