import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<IButtonProps> = ({
    className, children, theme, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
