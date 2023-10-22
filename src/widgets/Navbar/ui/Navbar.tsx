import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className }: INavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                className={cls.mainLink}
                theme={AppLinkTheme.PRIMARY}
            >
                Main Page
            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkTheme.PRIMARY}
            >
                About Page
            </AppLink>
        </div>
    </div>
);
