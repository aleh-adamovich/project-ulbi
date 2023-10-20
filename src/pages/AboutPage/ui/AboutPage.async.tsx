import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('pages/AboutPage/ui/AboutPage')), 1000);
}));