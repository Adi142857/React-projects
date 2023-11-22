import React from 'react';
import expect from 'expect';
import * as ReactDOM from 'react-dom';
import App from './App';
import test from './test';
import jest from 'jest';
import './index';
import require from 'require';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createRoot: jest.fn(),
}));

test('renders the App component', () => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'root');
  document.body.appendChild(rootElement);

  const appMock = {
    render: jest.fn(),
  };
  ReactDOM.createRoot.mockReturnValue(appMock);

  require('./main');

  expect(ReactDOM.createRoot).toHaveBeenCalledWith(rootElement);
  expect(appMock.render).toHaveBeenCalledWith(
    React.createElement(React.StrictMode, null, React.createElement(App, null))
  );

  document.body.removeChild(rootElement);
});
