import {
  Container,
  HeaderMainPage,
  TitlePage,
  LinkToDashboard,
  TrackerList,
  Tarker,
  Wrapper,
} from './MainPage.styled';

import DailyGoal from 'components/DailyGoal';
import Water from 'components/Water';
import Food from 'components/Food';

import { DiaryOnMain } from 'components/DiaryOnMain';
import { RecommendedFoodOnMain } from 'components/RecommendedFoodOnMain';

import img1 from '../../images/arrow-right.png';
import img2 from '../../images/arrow-right@2x.png';

const MainPage = () => {
  return (
    <Container>
      {/* Заговолок */}
      <HeaderMainPage>
        <TitlePage>Today</TitlePage>
        <LinkToDashboard to="/dashboard">
          <p>On the way to the goal</p>
          <img
            srcSet={`${img1} 1x, ${img2} 2x`}
            width={16}
            height={16}
            src={img1}
            alt="Arrow right"
          />
        </LinkToDashboard>
      </HeaderMainPage>
      {/* Блоки, що показують трекери прийому їжі та води (Daily Goal, Water, Food)  */}
      <TrackerList>
        <Tarker>
          {/* блок Щоденна мета DailyGoal */}
          <DailyGoal />
        </Tarker>
        <Tarker>
          {/* блок Вода Water */}
          <Water />
        </Tarker>
        <Tarker>
          {/* блок Їжа Food */}
          <Food />
        </Tarker>
      </TrackerList>

      <Wrapper>
        {/* блок щоденник */}
        <DiaryOnMain />
        {/* болк рекомендована їжа */}
        <RecommendedFoodOnMain />
      </Wrapper>
    </Container>
  );
};

export default MainPage;
