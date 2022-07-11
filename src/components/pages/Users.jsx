import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../orgamisms/user/UserCard';
import { SecondaryButton } from '../atoms/buttom/SecondaryButton';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

const users = [...Array(10).keys()].map((val) => ({
  id: val,
  name: `jakee${val}`,
  image: 'https://source.unsplash.com/cZAj2txBFO8',
  email: `$(photo.user.name}@test.com`,
  phone: Math.random().toString(),
  company: {
    name: 'test co.',
  },
  website: 'https://unsplash.com/photos/cZAj2txBFO8',
}));

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>Incredible users list.</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Switch</SecondaryButton>
      <SUserArea>
        {users.map((user) => (<UserCard key={user.id} user={user} />))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
