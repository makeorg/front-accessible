import React from 'react';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Pagination } from './index';

const history = createMemoryHistory();
history.push = jest.fn();

describe('Pagination', () => {
  it('snapshot by default', () => {
    const component = renderer
      .create(
        <Router history={history}>
          <Pagination itemsPerPage={8} itemsTotal={40} />
        </Router>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
