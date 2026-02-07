export interface Theme {
  id: string;
  name: string;
  primaryColor: string;
  tokens: ThemeTokens;
}

export interface ThemeTokens {
  // Interaction
  '--ui-interaction-primary': string;
  '--ui-interaction-primary-hover': string;
  '--ui-interaction-primary-selected': string;
  '--ui-interaction-primary-selected-hover': string;
  '--ui-interaction-primary-selected-active': string;
  '--ui-interaction-success': string;
  '--ui-interaction-success-hover': string;

  // Text
  '--ui-text-on-primary': string;
  '--ui-text-on-primary-selected': string;
  '--ui-text-on-success': string;
  '--ui-text-on-secondary': string;
  '--ui-text-on-tertiary': string;
  //'--ui-text-primary': string;
  '--ui-text-secondary': string;
  '--ui-text-tertiary': string;
  '--ui-text-placeholder': string;

  // Surface
  '--ui-surface-primary': string;
  '--ui-surface-secondary': string;
  '--ui-surface-hover': string;

  // Border
  '--ui-border-default': string;
  '--ui-border-subtle': string;
  '--ui-border-strong': string;

  // Status
  '--ui-status-success': string;
  '--ui-status-warning': string;
  '--ui-status-info': string;
  '--ui-status-danger': string;

  // Table
  '--ui-table-surface-header': string;
  '--ui-table-surface-header-interactive': string;
  '--ui-table-surface-body': string;
  '--ui-table-surface-row': string;
  '--ui-table-surface-row-hover': string;
  '--ui-table-surface-row-selected': string;
  '--ui-table-surface-footer': string;
}
