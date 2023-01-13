import { render } from '@testing-library/react';
import * as React from 'react';
import Loading from '../components/Loading';

describe('loading', () => {
    it('check have the image of loading', () => {
        var component = render(<Loading />);

        var image = component.getByRole('img')
        expect(image).toBeInTheDocument();
    });
})