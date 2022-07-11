import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { SecondaryButton } from '../atoms/buttom/SecondaryButton';

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () => history.push({ pathname: '/users', state: { isAdmin: true } });
  const onClickGeneral = () => history.push({ pathname: '/users', state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>This is a smashing top page.</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
