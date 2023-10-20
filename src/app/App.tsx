import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const App = () => {
    const {theme, handleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, theme)}>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>

            <div style={{
                border: '1px solid #ccc',
                padding: '10px'
            }}>
                <button onClick={handleTheme}>Toggle theme</button>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}