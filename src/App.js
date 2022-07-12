import './styles.css';
import axios from 'axios';

export default function App() {
  const onClickUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((r) => {
        console.log(r.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const onClickUser1 = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then((r) => {
        console.log(r.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className='App'>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id 1 users</button>
    </div>
  );
}
