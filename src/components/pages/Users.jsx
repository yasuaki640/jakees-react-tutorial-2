import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../orgamisms/user/UserCard';
import { useLocation } from 'react-router-dom';

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
  const { state } = useLocation();
  console.log(state);
  return (
    <SContainer>
      <h2>Incredible users list.</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
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
