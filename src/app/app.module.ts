import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { DataFormComponent } from './pages/data-form/data-form.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AlefLiItemComponent } from './shared/components/sidebar/alef-li-item/alef-li-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataFormComponent,
    SidebarComponent,
    AlefLiItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
