import React from 'react';
import { render, screen } from '@testing-library/react';
import GenderFilter from './GenderFilter';

test('gender filter component initial state', () => {
    render(<GenderFilter/>);

    expect(screen.getAllByRole('option').length).toBe(3);
    expect(screen.getByRole('button')).toBeDisabled();
});
