import { FC } from 'react';

import { AdaptiveImage, AdaptiveImageProps } from '../AdaptivImage/AdaptivImage';
import * as Styled from './NoDataFound.styled';

interface NoDataFoundProps extends AdaptiveImageProps {
    title?: string;
}

export const NoDataFound: FC<NoDataFoundProps> = ({
    title = 'No Data Found',
    ...imageProps
}) =>
    <Styled.Wrapper>
        <AdaptiveImage
            {...imageProps}
        />
        <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
