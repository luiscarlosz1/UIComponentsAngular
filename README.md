# UIComponentsAngular

UIComponentsAngular is an Angular application designed as an example and foundation for employee management, using a modular architecture and custom components. The project integrates a Stencil-based component library and leverages Angular Signals for reactive state management.

## Main Features

- **Employee Management:** Form and table for employee registration and visualization.
- **Custom Components:** Integration of Stencil components (buttons, inputs, tables, selectors, datepickers, etc.).
- **Form-Associated Inputs:** All custom input components are fully form-associated, supporting native Angular forms and validation, and adapting their appearance and behavior to the form state.
- **Adaptive Inputs:** Inputs and controls automatically adapt to the selected theme and validation state, providing a seamless and accessible user experience.
- **Customizable Themes:** The application includes a `ThemeService` that allows switching between multiple visual themes. All UI components, including Stencil-based inputs, adapt their styles dynamically according to the active theme.
- **Modular Architecture:** Clear separation between components, services, models, and pages.
- **SCSS Styles:** Use of SCSS for styles and FontAwesome compatibility.

## Project Structure

```
src/
  app/
    components/
      employee-form/      # Employee form
      employee-table/     # Employee table
    layouts/
      header/             # Application header
    models/               # Data models (employee, theme)
    pages/
      dashboard/          # Main page with form and table
    services/
      theme.service.ts    # Theme service
  index.html              # Main entry point
  main.ts                 # Angular bootstrap
  styles.scss             # Global styles
```

## Installation

1. Clone the repository.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application:
   ```
   npm start
   ```
4. Open `http://localhost:4200` in your browser.

## Available Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm test`: Runs unit tests.

## Main Dependencies

- Angular 21+
- Stencil (component-library, stencil-library)
- FontAwesome

## Theme Customization

The `ThemeService` allows switching between different visual themes defined in `theme.models.ts`. All UI components, including Stencil-based inputs, automatically update their styles to match the selected theme, ensuring a consistent look and feel across the application.

## Form-Associated and Adaptive Inputs

All custom input components (such as `<ui-input>`, `<ui-select>`, `<ui-datepicker>`, etc.) are fully form-associated, supporting Angular's reactive and template-driven forms. They:
- Integrate natively with Angular form controls and validation.
- Adapt their appearance and feedback based on validation state (e.g., error, success).
- Dynamically update their styles to match the active theme, providing a seamless and accessible user experience.

## Contribution

Contributions are welcome. Please open an issue or pull request for suggestions or improvements.

## License

This project is private and intended for mentoring purposes.
