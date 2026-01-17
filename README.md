# UIComponentsAngular

UIComponentsAngular is an Angular application designed as an example and foundation for employee management, using a modular architecture and custom components. The project integrates a Stencil-based component library and leverages Angular Signals for reactive state management.

## Main Features

- **Employee Management:** Form and table for employee registration and visualization.
- **Custom Components:** Integration of Stencil components (buttons, inputs, tables, selectors, datepickers, etc.).
- **Customizable Themes:** Service to switch the application's visual theme.
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

The `ThemeService` allows switching between different visual themes defined in `theme.models.ts`.

## Contribution

Contributions are welcome. Please open an issue or pull request for suggestions or improvements.

## License

This project is private and intended for mentoring purposes.
