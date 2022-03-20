import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('search bar component event', () => {
   render(<SearchBar change={() => {}}/>);

   userEvent.type(screen.getByRole('textbox'), 'John Doe');
   expect(screen.getByRole('textbox')).toHaveValue('John Doe');
});
