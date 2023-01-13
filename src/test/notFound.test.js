import * as React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';


describe('NotFound', () => {
    it('matches the snapshot', () => {
        var component = render(
            <NotFound />
        );
        expect(component).toMatchSnapshot();
    });

	it('check have the h1', () => {
        var component = render(<NotFound />);

        var headTitle = component.getByRole('heading', { level: 1 })
        expect(headTitle).toBeInTheDocument();
    });
});