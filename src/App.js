import { PrimaryButton } from './components/atoms/buttom/PrimaryButton';
import './styles.css';
import { SecondaryButton } from './components/atoms/buttom/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
