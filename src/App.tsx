import {lazy, Suspense} from "react";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const AboutPage = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./pages/AboutPage/AboutPage')), 1000);
}));

export const App = () => {
    const {theme, handleTheme} = useTheme();
// `app ${theme}`
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