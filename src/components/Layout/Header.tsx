import React from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import MobileNav from './MobileNav';

interface HeaderProps {
    title: string;
    breadcrumbs?: string[];
}

const Header: React.FC<HeaderProps> = ({ title, breadcrumbs = [] }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Left side */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-start justify-start space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/svg/extraFile.svg`}
                                alt="User Profile"
                                className="w-6 h-6"
                                style={{
                                    filter: theme.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)'
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex items-start justify-start space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/svg/star.svg`}
                                alt="User Profile"
                                className="w-6 h-6"
                                style={{
                                    filter: theme.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)'
                                }}
                            />
                        </div>
                    </div>
                    <MobileNav>
                        <div className="text-white">Mobile Menu</div>
                    </MobileNav>
                    <h1 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                        {theme.mode === 'dark' ? title.replace('Light', 'Dark') : title}
                    </h1>
                    {breadcrumbs.length > 0 && (
                        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    <span>{crumb}</span>
                                    {index < breadcrumbs.length - 1 && <span>/</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-4">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                />
                            </div>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {theme.mode === 'light' ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </button>
                        <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200">
                            <img
                                src={`${process.env.PUBLIC_URL}/svg/clockwise.svg`}
                                alt="User Profile"
                                className="w-6 h-6"
                                style={{
                                    filter: theme.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)'
                                }}
                            />
                        </button>
                        <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200">
                            <img
                                src={`${process.env.PUBLIC_URL}/svg/bell.svg`}
                                alt="User Profile"
                                className="w-6 h-6"
                                style={{
                                    filter: theme.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)'
                                }}
                            />
                        </button>
                    </div>

                    {/* User profile */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/svg/extraFile.svg`}
                                alt="User Profile"
                                className="w-6 h-6"
                                style={{
                                    filter: theme.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
