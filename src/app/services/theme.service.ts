import { Injectable, signal } from '@angular/core';
import { Theme, ThemeTokens } from '../models/theme.models';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_STORAGE_KEY = 'app-theme';

  public readonly themes: Theme[] = [
    {
      id: 'dark',
      name: 'Dark',
      primaryColor: '#4f4f4f',
      tokens: {
        // Interaction
        '--ui-interaction-primary': '#4f4f4f',
        '--ui-interaction-primary-hover': '#6b6b6b',
        '--ui-interaction-primary-selected': '#3a4655',
        '--ui-interaction-primary-selected-hover': '#4f4f4f',
        '--ui-interaction-primary-selected-active': '#6b6b6b',
        '--ui-interaction-success': '#6fbf8a',
        '--ui-interaction-success-hover': '#4e9e6d',

        // Text
        '--ui-text-on-primary': '#ffffff',
        '--ui-text-on-primary-selected': '#ffffff',
        '--ui-text-on-success': '#ffffff',
        '--ui-text-on-secondary': '#4f4f4f',
        '--ui-text-on-tertiary': '#4f4f4f',
        '--ui-text-secondary': '#4f4f4f',
        '--ui-text-tertiary': '#6b6b6b',
        '--ui-text-placeholder': '#a8a8a8',

        // Surface
        '--ui-surface-primary': '#ffffff',
        '--ui-surface-secondary': '#3a4655',
        '--ui-surface-hover': '#6b6b6b',

        // Border
        '--ui-border-default': '#d9d9d9',
        '--ui-border-subtle': '#eeeeee',
        '--ui-border-strong': '#a8a8a8',

        // Status
        '--ui-status-success': '#6fbf8a',
        '--ui-status-warning': '#f3a73f',
        '--ui-status-info': '#1f8fe6',
        '--ui-status-danger': '#c62828',

        // Table
        '--table-header-bg': '#3a4655',
        '--table-header-text': '#ffffff',
        '--table-header-border': '#3a4655',
        '--table-header-hover-bg': '#4f4f4f',
        '--table-body-bg': '#ffffff',
        '--table-row-bg': 'transparent',
        '--table-row-hover-bg': '#f6f6f6',
        '--table-row-selected-bg': '#3a4655',
        '--table-row-border': '#eeeeee',
        '--table-cell-text': '#4f4f4f',
        '--table-empty-text': '#4f4f4f',
        '--table-loading-text': '#4f4f4f'
      }
    },
    {
      id: 'green',
      name: 'Green',
      primaryColor: '#6fbf8a',
      tokens: {
        // Interaction
        '--ui-interaction-primary': '#6fbf8a',
        '--ui-interaction-primary-hover': '#a6dcb2',
        '--ui-interaction-primary-selected': '#4e9e6d',
        '--ui-interaction-primary-selected-hover': '#6fbf8a',
        '--ui-interaction-primary-selected-active': '#4e9e6d',
        '--ui-interaction-success': '#4e9e6d',
        '--ui-interaction-success-hover': '#6fbf8a',

        // Text
        '--ui-text-on-primary': '#ffffff',
        '--ui-text-on-primary-selected': '#ffffff',
        '--ui-text-on-success': '#ffffff',
        '--ui-text-on-secondary': '#6fbf8a',
        '--ui-text-on-tertiary': '#6fbf8a',
        '--ui-text-secondary': '#4f4f4f',
        '--ui-text-tertiary': '#6b6b6b',
        '--ui-text-placeholder': '#a8a8a8',

        // Surface
        '--ui-surface-primary': '#ffffff',
        '--ui-surface-secondary': '#4e9e6d',
        '--ui-surface-hover': '#a6dcb2',

        // Border
        '--ui-border-default': '#d9d9d9',
        '--ui-border-subtle': '#eeeeee',
        '--ui-border-strong': '#a8a8a8',

        // Status
        '--ui-status-success': '#6fbf8a',
        '--ui-status-warning': '#f3a73f',
        '--ui-status-info': '#1f8fe6',
        '--ui-status-danger': '#c62828',

        // Table
        '--table-header-bg': '#4e9e6d',
        '--table-header-text': '#ffffff',
        '--table-header-border': '#4e9e6d',
        '--table-header-hover-bg': '#a6dcb2',
        '--table-body-bg': '#ffffff',
        '--table-row-bg': 'transparent',
        '--table-row-hover-bg': '#f6f6f6',
        '--table-row-selected-bg': '#4e9e6d',
        '--table-row-border': '#eeeeee',
        '--table-cell-text': '#4f4f4f',
        '--table-empty-text': '#4f4f4f',
        '--table-loading-text': '#4f4f4f'
      }
    },
    {
      id: 'blue',
      name: 'Blue',
      primaryColor: '#1f8fe6',
      tokens: {
        // Interaction - original values from the Design System
        '--ui-interaction-primary': '#1f8fe6',
        '--ui-interaction-primary-hover': '#6cbcff',
        '--ui-interaction-primary-selected': '#197fd1',
        '--ui-interaction-primary-selected-hover': '#146ab3',
        '--ui-interaction-primary-selected-active': '#6cbcff',
        '--ui-interaction-success': '#6fbf8a',
        '--ui-interaction-success-hover': '#a6dcb2',

        // Text - original values from the Design System
        '--ui-text-on-primary': '#ffffff',
        '--ui-text-on-primary-selected': '#ffffff',
        '--ui-text-on-success': '#ffffff',
        '--ui-text-on-secondary': '#1f8fe6',
        '--ui-text-on-tertiary': '#1f8fe6',
        '--ui-text-secondary': '#6b6b6b',
        '--ui-text-tertiary': '#a8a8a8',
        '--ui-text-placeholder': '#a8a8a8',

        // Surface - original values from the Design System
        '--ui-surface-primary': '#ffffff',
        '--ui-surface-secondary': '#197fd1',
        '--ui-surface-hover': '#6cbcff',

        // Border - original values from the Design System
        '--ui-border-default': '#d9d9d9',
        '--ui-border-subtle': '#eeeeee',
        '--ui-border-strong': '#a8a8a8',

        // Status - original values from the Design System
        '--ui-status-success': '#6fbf8a',
        '--ui-status-warning': '#f3a73f',
        '--ui-status-info': '#1f8fe6',
        '--ui-status-danger': '#c62828',

        // Table - original values from the Design System
        '--table-header-bg': '#197fd1',
        '--table-header-text': '#ffffff',
        '--table-header-border': '#197fd1',
        '--table-header-hover-bg': '#6cbcff',
        '--table-body-bg': '#ffffff',
        '--table-row-bg': 'transparent',
        '--table-row-hover-bg': '#e9f5ff',
        '--table-row-selected-bg': '#197fd1',
        '--table-row-border': '#eeeeee',
        '--table-cell-text': '#4f4f4f',
        '--table-empty-text': '#6b6b6b',
        '--table-loading-text': '#6b6b6b'
      }
    },
    {
      id: 'purple',
      name: 'Purple',
      primaryColor: '#7b61ff',
      tokens: {
        // Interaction
        '--ui-interaction-primary': '#7b61ff',
        '--ui-interaction-primary-hover': '#6a4ff5',
        '--ui-interaction-primary-selected': '#5e44db',
        '--ui-interaction-primary-selected-hover': '#533cc4',
        '--ui-interaction-primary-selected-active': '#4934ad',
        '--ui-interaction-success': '#22c55e',
        '--ui-interaction-success-hover': '#16a34a',

        // Text
        '--ui-text-on-primary': '#ffffff',
        '--ui-text-on-primary-selected': '#ffffff',
        '--ui-text-on-success': '#ffffff',
        '--ui-text-on-secondary': '#7b61ff',
        '--ui-text-on-tertiary': '#7b61ff',
        //'--ui-text-primary': '#1a202c',
        '--ui-text-secondary': '#4a5568',
        '--ui-text-tertiary': '#718096',
        '--ui-text-placeholder': '#a0aec0',

        // Surface
        '--ui-surface-primary': '#ffffff',
        '--ui-surface-secondary': '#5e44db',
        '--ui-surface-hover': '#6a4ff5',

        // Border
        '--ui-border-default': '#e2e8f0',
        '--ui-border-subtle': '#eeeeee',
        '--ui-border-strong': '#cbd5e0',

        // Status
        '--ui-status-success': '#22c55e',
        '--ui-status-warning': '#f59e0b',
        '--ui-status-info': '#3b82f6',
        '--ui-status-danger': '#ef4444',

        // Table
        '--table-header-bg': '#5e44db',
        '--table-header-text': '#ffffff',
        '--table-header-border': '#5e44db',
        '--table-header-hover-bg': '#7b61ff',
        '--table-body-bg': '#ffffff',
        '--table-row-bg': 'transparent',
        '--table-row-hover-bg': '#f3f0ff',
        '--table-row-selected-bg': '#5e44db',
        '--table-row-border': '#eeeeee',
        '--table-cell-text': '#1a202c',
        '--table-empty-text': '#4a5568',
        '--table-loading-text': '#4a5568'
      }
    },
    {
      id: 'orange',
      name: 'Orange',
      primaryColor: '#ff9f1c',
      tokens: {
        // Interaction
        '--ui-interaction-primary': '#ff9f1c',
        '--ui-interaction-primary-hover': '#ed8f0f',
        '--ui-interaction-primary-selected': '#d98009',
        '--ui-interaction-primary-selected-hover': '#c57308',
        '--ui-interaction-primary-selected-active': '#b16607',
        '--ui-interaction-success': '#22c55e',
        '--ui-interaction-success-hover': '#16a34a',

        // Text
        '--ui-text-on-primary': '#ffffff',
        '--ui-text-on-primary-selected': '#ffffff',
        '--ui-text-on-success': '#ffffff',
        '--ui-text-on-secondary': '#ff9f1c',
        '--ui-text-on-tertiary': '#ff9f1c',
        //'--ui-text-primary': '#1a202c',
        '--ui-text-secondary': '#4a5568',
        '--ui-text-tertiary': '#718096',
        '--ui-text-placeholder': '#a0aec0',

        // Surface
        '--ui-surface-primary': '#ffffff',
        '--ui-surface-secondary': '#d98009',
        '--ui-surface-hover': '#ed8f0f',

        // Border
        '--ui-border-default': '#e2e8f0',
        '--ui-border-subtle': '#eeeeee',
        '--ui-border-strong': '#cbd5e0',

        // Status
        '--ui-status-success': '#22c55e',
        '--ui-status-warning': '#f59e0b',
        '--ui-status-info': '#3b82f6',
        '--ui-status-danger': '#ef4444',

        // Table
        '--table-header-bg': '#d98009',
        '--table-header-text': '#ffffff',
        '--table-header-border': '#d98009',
        '--table-header-hover-bg': '#ff9f1c',
        '--table-body-bg': '#ffffff',
        '--table-row-bg': 'transparent',
        '--table-row-hover-bg': '#fff5e6',
        '--table-row-selected-bg': '#d98009',
        '--table-row-border': '#eeeeee',
        '--table-cell-text': '#1a202c',
        '--table-empty-text': '#4a5568',
        '--table-loading-text': '#4a5568'
      }
    }
  ];

  public currentTheme = signal<Theme>(this.themes[0]);

  constructor() {
    this.loadSavedTheme();
  }

  public applyTheme(themeId: string): void {
    const theme = this.themes.find(t => t.id === themeId);
    if (!theme) {
      console.warn(`Theme with id "${themeId}" not found`);
      return;
    }

    this.setThemeTokens(theme.tokens);
    this.currentTheme.set(theme);
    this.saveTheme(themeId);
  }

  // Sets the theme tokens in the document :root
  private setThemeTokens(tokens: ThemeTokens): void {
    const root = document.documentElement;
    (Object.entries(tokens) as [string, string][]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  // Saves the selected theme in localStorage
  private saveTheme(themeId: string): void {
    try {
      localStorage.setItem(this.THEME_STORAGE_KEY, themeId);
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }

  // Loads the saved theme from localStorage
  private loadSavedTheme(): void {
    try {
      const savedThemeId = localStorage.getItem(this.THEME_STORAGE_KEY);
      if (savedThemeId) {
        this.applyTheme(savedThemeId);
      } else {
        // Apply default theme (blue)
        this.applyTheme('blue');
      }
    } catch (error) {
      console.error('Error loading theme from localStorage:', error);
      this.applyTheme('blue');
    }
  }

  // Gets the current theme
  public getCurrentTheme(): Theme {
    return this.currentTheme();
  }

  // Gets all available themes
  public getThemes(): Theme[] {
    return this.themes;
  }
}
