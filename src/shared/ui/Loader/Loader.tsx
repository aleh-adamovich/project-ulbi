import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface ILoaderProps {
    className?: string;
}

export const Loader = ({ className }: ILoaderProps) => (
    <div className={classNames('loadingio-spinner-spin-h6zg0cb6hn', {}, [className])}>
        <div className="ldio-n2t7sr1343s">
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
        </div>
    </div>
);
