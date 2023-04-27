import RepositoriesList from './RepositoriesList';
import { Provider } from 'react-redux';
import { store } from '../state';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
