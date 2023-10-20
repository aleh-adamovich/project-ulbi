import {Link} from "react-router-dom";
import 'app/styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

export const App = () => {
    const {theme, handleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, theme)}>
            <div style={{
                border: '1px solid #ccc',
                padding: '10px'
            }}>
                <button onClick={handleTheme}>Toggle theme</button>
            </div>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <AppRouter/>
        </div>
    )
}