import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({className}: ISidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapse = () => setIsCollapsed((prevState) => !prevState);

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: isCollapsed}, [className])}>
            <button onClick={handleCollapse}>sidebar</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
