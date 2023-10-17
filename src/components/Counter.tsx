import {useState} from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [state, setState] = useState(1);

    const handlePlus = () => setState(prevState => prevState + 1);

    return (
        <>
            <h3>{state}</h3>
            <button className={`${classes.btn} ${classes.colors}`} onClick={handlePlus}>Plus</button>
        </>
    )
}