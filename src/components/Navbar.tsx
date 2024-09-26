"use client"

// react
import * as React from "react"

// translation
import { useTranslations } from 'next-intl';

// routing
import { Link } from '@/i18n/routing';

// utils
import { cn } from "@/lib/utils"

// components ui
import { Input } from "@/components/shadcn/ui/input";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    transparentNavigationMenuTrigger,
    navigationMenuTriggerStyle,
    transparentNavigationMenuTriggerStyle
} from "@/components/shadcn/ui/navigation-menu"

// components
import { ThemeChangeButton } from "@/components/ThemeChangeButton"
import { LanguageChangeButton } from "@/components/LanguageChangeButton";


export function Navbar() {
    const t = useTranslations('Navbar');

    return (
        <>
            <div className='flex flex-row justify-between p-2 bg-white dark:bg-black'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className={transparentNavigationMenuTriggerStyle()}>
                                    {`${t('Link.home')}`}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/products" className={transparentNavigationMenuTriggerStyle()}>
                                    {`${t('Link.products')}`}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about" className={transparentNavigationMenuTriggerStyle()}>
                                    {`${t('Link.about')}`}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact" className={transparentNavigationMenuTriggerStyle()}>
                                    {`${t('Link.contact')}`}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <Input />
                        </NavigationMenuList>
                    </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <LanguageChangeButton />
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <ThemeChangeButton />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
