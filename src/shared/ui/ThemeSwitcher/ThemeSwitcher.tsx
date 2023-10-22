import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import IconDark from 'shared/assets/icons/theme-dark.svg';
import IconLight from 'shared/assets/icons/theme-light.svg';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
    const {theme, handleTheme} = useTheme();

    return (
        <>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls.themeSwitcher, {}, [className])}
                onClick={handleTheme}
            >
                {theme === Theme.LIGHT ? <IconLight/> : <IconDark/>}
            </Button>
        </>
    )
}