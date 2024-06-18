import {
  Component,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { navItems } from '../../vertical/sidebar/sidebar-data';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { BrandingComponent } from '../../vertical/sidebar/branding.component';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { MaterialModule } from '../../../../shared/material.module';
import { CoreService } from '../../../../service/core.service';


interface notifications {
  id: number;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-horizontal-header',
  standalone: true,
  imports: [RouterModule, TablerIconsModule, MaterialModule, BrandingComponent, FeatherModule],
  templateUrl: './header.component.html',
})
export class AppHorizontalHeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(
    private vsidenav: CoreService,
    public dialog: MatDialog,
  ) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppHorizontalSearchDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  notifications: notifications[] = [
    {
      id: 1,
      title: 'Avive',
      subtitle: 'Welcome to Avive',
    },
  ];
}

@Component({
  selector: 'app-search-dialog',
  standalone: true,
  imports: [RouterModule, MaterialModule, TablerIconsModule, FormsModule],
  templateUrl: 'search-dialog.component.html',
})
export class AppHorizontalSearchDialogComponent {
  searchText: string = '';
  navItems = navItems;

  navItemsData = navItems.filter((navitem) => navitem.displayName);
}