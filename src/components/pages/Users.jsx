import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../orgamisms/user/UserCard';
import { SecondaryButton } from '../atoms/buttom/SecondaryButton';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/userState';
import { faker } from '@faker-js/faker';

const users = [...Array(10).keys()].map((val) => ({
  id: val,
  name: faker.name.findName(),
  image: faker.image.avatar(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  company: {
    name: faker.company.companyName(),
  },
  website: faker.internet.url(),
}));

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

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
