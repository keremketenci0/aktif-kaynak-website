// translations
import { useTranslations } from 'next-intl';

import React from 'react';

// styles
import styles from '@/components/ui/button/ButtonSocials.module.css';

// components ui
import { toast } from 'sonner';

// components
import { Icon } from '@/components/Icon';


interface ButtonSocialsProps {
    link: string;
    logoClass?: string;
    icon: string;
    iconClass?: string;
    isActive: boolean;
    onClick?: () => void;
}

export const ButtonSocials: React.FC<ButtonSocialsProps> = ({ link, icon, iconClass, isActive, onClick }) => {
    const t2 = useTranslations("Toast");

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            event.preventDefault();
            navigator.clipboard.writeText(link);
            if (link.includes('@')) {
                toast(`${t2('CardTeam.Email.Copy.success')}`);
            }
            else if (link.includes('#')) {
                toast(`${t2('CardTeam.Email.Copy.nolink')}`);
            }
            else {
                toast(`${t2('CardTeam.Email.Copy.noemail')}`);
            }
            onClick();
        }
    };

    const buttonClassName = `${isActive ? styles["ButtonSocials"] : ''} ${styles[`ButtonSocials-${icon}`]}`;

    return (
        <button onClick={handleClick} className={buttonClassName} title={link}>
            <a href={link}>
                <Icon name={icon} className={`${iconClass} ${styles["ButtonSocials-icon"]}`} />
            </a>
        </button>
    );
};
