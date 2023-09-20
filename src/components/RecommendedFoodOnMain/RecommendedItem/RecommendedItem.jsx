import {
  Card,
  InfoWrap,
  Title,
  ValueWrap,
  Calories,
} from './RecommendedItem.styled';

export const RecommendedItem = ({ info }) => {
  const { name, amount, img: image, calories } = info;

  return (
    <Card>
      <img src={image} alt="name" />
      <InfoWrap>
        <Title>{name}</Title>
        <ValueWrap>
          <p>{amount}</p>
          <Calories>{calories} calories</Calories>
        </ValueWrap>
      </InfoWrap>
    </Card>
  );
};
