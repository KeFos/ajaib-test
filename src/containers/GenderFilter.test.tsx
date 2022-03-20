import React from 'react';
import { render, screen } from '@testing-library/react';
import GenderFilter from './GenderFilter';

it('should have right option length', () => {
    render(<GenderFilter/>);

    expect(screen.getAllByRole('option').length).toBe(3);
});
