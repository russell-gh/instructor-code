import { fireEvent, render, screen } from "@testing-library/react";
import mockFetch from "./mockFetch";
import userEvent from "@testing-library/user-event";
import App from "./App";

let windowFetchSpy;

beforeEach(() => {
  windowFetchSpy = jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

test('renders initial heading and form with elements correctly', () => {
  render(<App />);
  const titleElement = screen.getByText(/Check Name/i);
  expect(titleElement).toBeInTheDocument();
  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Get Nationalities'})).toBeInTheDocument();
});


test('should get nationalities for a name', async() => {
  render(<App />);

  //simulate filling up the textbox
  const personNameInput = screen.getByRole('textbox');
  fireEvent.change(personNameInput, {target: {value: 'john'}})
  expect(personNameInput.value).toBe('john');

  //click the button
   const getNationalitiesBtn = screen.getByRole('button', { name: 'Get Nationalities' });
   expect(getNationalitiesBtn).not.toBeDisabled();
   userEvent.click(getNationalitiesBtn);

   //verify percent and flag images are displayed
   expect(await screen.findByText('3 guess(es) found')).toBeVisible();

   expect(windowFetchSpy).toHaveBeenCalled();
   expect(windowFetchSpy).toHaveBeenCalledWith('https://api.nationalize.io/?name=john');
   expect(screen.getByText('US - 4.84%')).toBeVisible();
   expect(screen.getByText('IM - 4.44%')).toBeVisible();
   expect(screen.getByText('IE - 4.21%')).toBeVisible();

   const flagImages = screen.getAllByRole('img');
   expect(flagImages).toHaveLength(3);
   expect(flagImages[0]).toHaveAccessibleName('US flag');
   expect(flagImages[1]).toHaveAccessibleName('IM flag');
   expect(flagImages[2]).toHaveAccessibleName('IE flag');
});


afterEach(() => {
  jest.restoreAllMocks();
});
