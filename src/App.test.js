import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App, { Search, Button, Sort, Table, Loading } from './App';

describe('App', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Search', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Search>Search</Search>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Button</Button>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Button>Button</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Sort', () => {
  const props = {
    sortKey: 'NONE'
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sort {...props}>Sort</Sort>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Sort {...props}>Sort</Sort>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Loading', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Loading />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Table', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
    sortKey: 'NONE'
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(
      <Table { ...props } />
    );

    expect(element.find('.table-row').length).toBe(2);
  });
});
