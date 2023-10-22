import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResults {
    theme: Theme;
    handleTheme: () => void;
}

export const useTheme = (): IUseThemeResults => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, handleTheme };
};
