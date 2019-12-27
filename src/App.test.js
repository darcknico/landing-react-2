import React from 'react';
import { render, fireEvent, waitForElement,queryByAttribute  } from '@testing-library/react';
import App from './App';

test('test navbar', () => {
  //const getByTo = queryByAttribute.bind(null, 'to');
  const { getByText, getByRole, container, asFragment  } = render(<App />);
  const logo = getByText(/Proy. Inf./i);
  expect(logo).toBeInTheDocument();
  const toHome = getByText(
    /Home/i,
    {
      selector:'a',
    })
  fireEvent.click(toHome);
  const toAbout = getByText(
    /About me/i,
    {
      selector:'a',
    })
  fireEvent.click(toAbout);
  const toFeatures = getByText(
    /Features/i,
    {
      selector:'a',
    })
  fireEvent.click(toFeatures);
  const toServices = getByText(
    /Services/i,
    {
      selector:'a',
    })
  fireEvent.click(toServices);
  const toTeam = getByText(
    /Team/i,
    {
      selector:'a',
    })
  fireEvent.click(toTeam);
  const toContact = getByText(
    /Contact/i,
    {
      selector:'a',
    })
  fireEvent.click(toContact);
});
