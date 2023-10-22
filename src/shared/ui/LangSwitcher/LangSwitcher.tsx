import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleClick = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={handleClick}
        >
            {t('langSwitcherBtn')}
        </Button>
    );
};
