import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

/**
 * @function
 * @param {object} props
 * @returns {ShallowWrapper}
 */


const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords { ...setupProps } />);
}

describe('if there are no words guessed', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords:[]});
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guessed-instructions');
    expect(instructions.text().length).not.toBe(0);
  });

});

describe('if there are words guessed', () => {

});