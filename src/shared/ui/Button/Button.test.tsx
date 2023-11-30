import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

// установили react testing library. однако, чтобы появились методы у объекта screen, необходимо установить библиотеку jest-dom.
// следующая проблема - не понимаем импорт css modules. для этого их нужно замокать используя 'identity-obj-proxy' из доки в jest.config.ts

describe('button ui component', () => {
    test('render basic component', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByRole('button')).toHaveTextContent(/test button/i);
    });

    test('render with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Clear Button</Button>);
        expect(screen.getByText('Clear Button')).toHaveClass('clear');
        screen.debug();
    });
});
