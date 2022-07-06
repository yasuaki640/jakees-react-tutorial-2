import { PrimaryButton } from './components/atoms/buttom/PrimaryButton';
import './styles.css';
import { SecondaryButton } from './components/atoms/buttom/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/orgamisms/user/UserCard';

const user = {
  name: 'じゃけえ',
  image: 'https://source.unsplash.com/s4vdHcJf_m0',
  email: 'asdf@asdf.com',
  phone: '090-1111-1111',
  company: {
    name: 'くそ会社',
  },
  website: 'https://google.com',
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
