import {lazy, Suspense, useEffect} from "react";
import './index.scss';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const AboutPage = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./pages/AboutPage/AboutPage')), 1000);
}));

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Link to='/'>Main Page</Link>
                <Link to='/about'>About Page</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}