// react
import React from 'react';

// styles
import styles from '@/components/ui/button/ButtonNav.module.css';

interface ButtonNavProps {
    onClick?: () => void;
    checked?: boolean;
}

export const ButtonNav: React.FC<ButtonNavProps> = ({ onClick, checked }) => {
    return (
        <label className={styles.ButtonNav} htmlFor="ButtonNav">
            <input type="checkbox" id="ButtonNav" onClick={onClick} checked={checked} readOnly />
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
};


export default ButtonNav;
