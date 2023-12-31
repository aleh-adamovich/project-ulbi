import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = ({
    className, to, children, theme, ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(cls.appLink, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
);
