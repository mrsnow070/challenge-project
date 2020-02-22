import {isNull, isEmptyString, getObjectKeys} from '../src/util/';
import {mock_object} from '../src/util/testHelper';
import axios from 'axios';

test('funtion should return true only if object is null', () => {
  expect(isNull({})).toBe(false);
});

test('expect to be empty string', () => {
  expect(isEmptyString('')).toBe(true);
});

describe('testing api response', () => {
  test('Api returns Array ', async () => {
    const response = await axios.get('https://api.github.com/gists/public');
    expect(true).toBe(Array.isArray(response.data));
  });
  test('response status code = 200 ', async () => {
    const response = await axios.get('https://api.github.com/gists/public');
    expect(response.status).toBe(200);
  });

  test('api returns array of 30 objects', async () => {
    const {data} = await axios.get('https://api.github.com/gists/public');
    expect(data.length).toBe(30);
  });

  test('api response object have all fields like in mock object', async () => {
    const {data} = await axios.get('https://api.github.com/gists/public');
    const mockKeys = getObjectKeys(mock_object);

    expect(mockKeys).toEqual(getObjectKeys(data[0]));
  });
});
