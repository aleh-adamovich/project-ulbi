import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './Error.module.scss';

interface IErrorProps {
    className?: string;
}

export const Error = ({ className }: IErrorProps) => {
    const { t } = useTranslation();

    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.error, {}, [className])}>
            <h3>{t('errorText')}</h3>
            <Button onClick={handleClick}>{t('errorBtnText')}</Button>
        </div>
    );
};
