import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

const TestBugButton = () => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            throw new Error('Test bug button error');
        }
    }, [isError]);

    const handleClick = () => setIsError(true);

    return (
        <Button onClick={handleClick}>
            Throw error
        </Button>
    );
};

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>{t('title')}</h1>
            <TestBugButton />
        </div>
    );
};

export default MainPage;
