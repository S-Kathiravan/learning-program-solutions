import axios from "axios";
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyResponse = {
      data: [
        { name: 'Repo1' },
        { name: 'Repo2' }
      ]
    };
    axios.get.mockResolvedValue(dummyResponse);

    const result = await GitClient.getRepositories('techiesyed');

    expect(result).toEqual(dummyResponse);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});