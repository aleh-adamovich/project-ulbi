import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('sidebar component', () => {
    test('basic render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should toggle sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        const btn = screen.getByTestId('sidebar-button');
        fireEvent.click(btn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
