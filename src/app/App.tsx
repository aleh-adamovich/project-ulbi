import 'app/styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme, handleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div style={{
                border: '1px solid #ccc',
                padding: '10px'
            }}>
                <button onClick={handleTheme}>Toggle theme</button>
            </div>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}