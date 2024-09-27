// react
import React from 'react';

// styles
import styles from '@/components/ui/button/ButtonSlideX.module.css';

interface ButtonSlideXProps {
    text: string;
}

export const ButtonSlideX: React.FC<ButtonSlideXProps> = ({ text }) => {
    return (
        <button className={styles.ButtonSlideX}>
            {text}
        </button>
    );
};
