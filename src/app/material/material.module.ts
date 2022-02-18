import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [MatSidenavModule,
														MatToolbarModule,
														MatIconModule,
														MatButtonModule];


@NgModule({
  imports: [MaterialComponents],
	exports:[MaterialComponents]
})
export class MaterialModule { }
