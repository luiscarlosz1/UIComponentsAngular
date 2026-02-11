import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { defineCustomElement as defineUiButton } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-button.js';
import { defineCustomElement as defineUiNotification } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-notification.js';
import { defineCustomElement as defineUiTable } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-table.js';
import { defineCustomElement as defineUiPaginator } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-paginator.js';
import { defineCustomElement as defineUiPopup } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-popup.js';
import { defineCustomElement as defineUiInput } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-input.js';

import { defineCustomElement as defineUiSelect } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-select.js';
import { defineCustomElement as defineUiDatepicker } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-datepicker.js';
import { defineCustomElement as defineUiCheckbox } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-checkbox.js';
import { defineCustomElement as defineUiRadiobutton } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-radiobutton.js';
import { defineCustomElement as defineUiTextarea } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-textarea.js';
import { defineCustomElement as defineUiAutocomplete } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-autocomplete.js';
import { defineCustomElement as defineUiTableManager } from '@luiscarlosz1/stencil-library/dist-custom-elements/ui-table-manager.js';

// Register components
defineUiNotification();
defineUiButton();
defineUiInput();
defineUiTable();
defineUiPaginator();
defineUiPopup();

defineUiSelect();
defineUiDatepicker();
defineUiCheckbox();
defineUiRadiobutton();
defineUiTextarea();
defineUiAutocomplete();
defineUiTableManager();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('UIComponentsAngular');
}
