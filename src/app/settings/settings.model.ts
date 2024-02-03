export interface SettingsState {
    language: Languages;
    theme: string;
    autoNightMode: boolean;
    nightTheme: string;
    pageAnimations: boolean;
    elementsAnimations: boolean;
    hour: number;
    accessibility: AccessibilitySettings;
    keyboardShortcut: KeyboardShortcut[];
    clearUserData: boolean
}
export type Languages = 'en' | 'fr' | 'hi' | 'mal';
export const NIGHT_MODE_THEME = 'BLACK-THEME';

interface AccessibilitySettings {
    fontSize: number;
    lineHeight: number;
    colorContrast: 'high' | 'medium' | 'low';
    focusIndicator: 'outline' | 'underline' | 'custom';
    skipLinks: boolean;
    assistiveTechnologies: string[];
}

interface KeyboardShortcut {
    action: string;
    keys: string[];
    description: string;
}

export const defaultAccessibilitySettings: AccessibilitySettings = {
    fontSize: 18,
    lineHeight: 1.6,
    colorContrast: 'high',
    focusIndicator: 'outline',
    skipLinks: true,
    assistiveTechnologies: [],
};

export const defaultKeyboardShortcuts: KeyboardShortcut[] = [
    { action: 'toggleNav', keys: ['Ctrl+N'], description: 'Open navigation menu' },
    { action: 'openSearch', keys: ['Alt+S'], description: 'Open search bar' },
];

export const initialState: SettingsState = {
    language: 'en',
    theme: 'DEFAULT-THEME',
    autoNightMode: false,
    nightTheme: NIGHT_MODE_THEME,
    pageAnimations: true,
    elementsAnimations: true,
    hour: 0,
    accessibility: defaultAccessibilitySettings,
    keyboardShortcut: defaultKeyboardShortcuts,
    clearUserData: false,
};

