// translations
import { useTranslations } from 'next-intl';

// components
import { Icon } from '@/components/Icon';

// components ui
import { ButtonSocials } from "@/components/ui/button/ButtonSocials";

export function Home() {
    const t = useTranslations('Home');

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen">
            {/* Text Section */}
            <div className="flex flex-col w-full lg:w-2/3 lg:pr-8 items-center lg:items-start text-center lg:text-left">
                <p className="text-4xl font-bold text-accent pb-6">{`${t('title')}!`}</p>
                <p className="text-lg text-gray-300 pb-6">{`${t('about')}.`}</p>
                <p className="text-highlight font-bold whitespace-nowrap">{`${t('Donate.title')}`}</p>
                <p className='text-gray-300'>{`${t('Donate.text')}.`}</p>

                <div className='flex justify-center lg:justify-start py-4 gap-2'>
                    <ButtonSocials
                        link='https://www.patreon.com/dawnwave'
                        icon='patreon'
                        iconClass='w-8'
                        isActive={true}
                    />
                    <ButtonSocials
                        link='https://dawnwave.itch.io/wishes-of-dawn'
                        icon='itchio'
                        iconClass='w-8'
                        isActive={true}
                    />
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center w-full lg:w-1/3 lg:mb-12">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <Icon className="w-full" name="logo" />
                    <div
                        className="absolute inset-0 bg-transparent rounded-full blur-xl opacity-10 z-0"
                        style={{
                            background: "radial-gradient(circle at center, #00ffff, #ff00ff, #ff6600)"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};