import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Theme } from '../../models/theme.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  private themeService = inject(ThemeService);

  public themes: Theme[] = this.themeService.getThemes();
  public currentTheme = this.themeService.currentTheme;

  public onThemeChange(themeId: string): void {
    this.themeService.applyTheme(themeId);
  }
}
