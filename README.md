# UIComponentsAngular

**🔴 You can view the application live here:** [https://luiscarlosz1.github.io/UIComponentsAngular/](https://luiscarlosz1.github.io/UIComponentsAngular/)

UIComponentsAngular is an Angular 21 example project that demonstrates the real implementation of my own Design System through custom UIComponents. Several of these UIControls implement advanced features such as Angular Signals for state management and Form-Associated Custom Elements for native form compatibility. This app showcases how to integrate a full Design System—built with Stencil and extended with unique, reusable UIComponents—into a modern Angular application. It serves as a practical reference for building accessible, framework-agnostic components with native form and theming support in Angular, using your own design tokens, patterns, and atomic components.

## Why this project matters

This repository showcases real-world patterns that are rarely documented together:

- **Native Angular forms working seamlessly with Form-Associated Web Components**
- **A Design System consumed as a framework-agnostic UI layer**
- **Theme switching without re-rendering or framework-specific styling hacks**

## Key Capabilities

### Employee Management Flow
- Fully functional employee creation form.
- Data visualization through a configurable table.
- Realistic fields, validations, and UI states.

### Design System Integration (Stencil)
- Consumption of custom Web Components (`ui-input`, `ui-select`, `ui-datepicker`, `ui-table`, `ui-button`, etc.).
- Components are framework-agnostic and reusable across Angular, React, or plain HTML.
- Angular bindings generated via `@stencil/angular-output-target`.

### Form-Associated Custom Elements
All input components are:
- Form-associated via `ElementInternals`
- Compatible with Angular Reactive Forms and Template-driven Forms
- Fully synchronized with:
  - touched
  - dirty
  - disabled
  - valid / invalid
- Capable of triggering native form submission and validation flows.

### Adaptive & Accessible Inputs
Inputs react automatically to:
- Validation state (error, success, default)
- Disabled and readonly modes
- Accessibility is preserved using native form semantics.

### Signal-Driven State Management
Angular Signals are used for:
- Form state introspection
- UI updates without unnecessary re-rendering
- No external state libraries required.

### Dynamic Theming
- Centralized `ThemeService`
- Theme tokens applied via CSS variables
- Instant theme switching without component reinitialization
- Stencil components adapt automatically to theme changes.


## Project Structure
```
src/
  app/
    components/
      employee-form/        # Form with form-associated WC
      employee-table/       # Data visualization
    layouts/
      header/               # Application shell
    models/
      employee.model.ts
      theme.model.ts
    pages/
      dashboard/            # Main composition page
    services/
      theme.service.ts      # Theme orchestration
  styles.scss               # Global styles and tokens
  main.ts                   # Angular bootstrap
```


## Tech Stack
- Angular 21
- StencilJS (Design System)
- Form-Associated Custom Elements
- Angular Signals
- SCSS + CSS Variables
- FontAwesome

## What this project is (and is not)

**This project is:**
- A reference for integrating Web Components into Angular properly
- A mentoring and learning tool
- A base for future enterprise-grade applications

**This project is not:**
- A UI template
- A CRUD-only demo
- A framework-locked solution

## Installation & Usage
```bash
npm install
npm start
```
Open: http://localhost:4200

---
**Live Demo:** [https://luiscarlosz1.github.io/UIComponentsAngular/](https://luiscarlosz1.github.io/UIComponentsAngular/)
---

## License & Purpose

This repository is private and intended for:
- Technical mentoring
- Architectural exploration
- Design System validation
- Professional portfolio and knowledge sharing
