import { AdaptiveImage } from '../../components/UI/AdaptivImage/AdaptivImage';
import womanImage from '../../assets/woman.jpg';
import womanThumbImage from '../../assets/womanThumb.jpg';
import manImage from '../../assets/man.jpg';
import manThumbImage from '../../assets/manThumb.jpg';
import { useAppDispatch } from '../../hooks/redux';
import { GenderSearchQuery, setGenderCategory } from '../../store/filtersSlice';
import * as Styled from './HomePage.styled';
import { Path } from '../../navigation/routeNames';
import { createPath } from '../../navigation/Utils/createPath';

export const HomePage = () => {
  const dispatch = useAppDispatch()

  const setWomensCategory = () => {
    dispatch(setGenderCategory(GenderSearchQuery.womens))
  }

  const setMensCategory = () => {
    dispatch(setGenderCategory(GenderSearchQuery.mens))
  }

  return (
    <Styled.Container>
      <Styled.Col>
        <AdaptiveImage
          src={womanImage}
          thumbImage={womanThumbImage}
          imageStyles={Styled.womanImageStyle}
          width='50vw'
          height='100vh'
          blur
        />
        <Styled.Title>
          <Styled.LinkStyled
            to={createPath({
              path: Path.GenderCategory,
              params: { gender: GenderSearchQuery.womens }
            })}
            onClick={setWomensCategory}
          >
            woman
          </Styled.LinkStyled>
        </Styled.Title>
      </Styled.Col>
      <Styled.Col>
        <AdaptiveImage
          src={manImage}
          imageStyles={Styled.manImageStyle}
          thumbImage={manThumbImage}
          width='50vw'
          height='100vh'
          blur
        />
        <Styled.Title>
          <Styled.LinkStyled
            to={createPath({
              path: Path.GenderCategory,
              params: { gender: GenderSearchQuery.mens }
            })}
            onClick={setMensCategory}
          >
            man
          </Styled.LinkStyled>
        </Styled.Title>
      </Styled.Col>
    </Styled.Container>
  )
}
