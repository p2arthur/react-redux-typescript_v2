import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { searchRepositories } from '../state/action_creators';

const RepositoriesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { isLoading, data, error } = useTypedSelector(
    (state) => state.repositories
  );
  const { searchRepositories } = useActions();

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm('');
    console.log(searchTerm);
    searchRepositories(searchTerm);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          onChange={handleInputChange}
          value={searchTerm}
          type="text"
          placeholder="enter a package name"
        />
        <button>Search</button>
      </form>
      <div>
        {isLoading && 'Loading data'}
        {data && (
          <ul>
            {data.map((repo: string) => (
              <li>{repo}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RepositoriesList;
