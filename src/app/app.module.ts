import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { DataFormComponent } from './pages/data-form/data-form.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AlefLiItemComponent } from './shared/components/sidebar/alef-li-item/alef-li-item.component';
import { AlefNavMenuSectionComponent } from './shared/components/sidebar/alef-nav-menu-section/alef-nav-menu-section.component';
import { CodeTemplateAlefComponent } from './shared/components/code-template-alef/code-template-alef.component';
import { AlefTextControllerComponent } from './shared/components/alef-text-controller/alef-text-controller.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AlefAddDocumentationComponent } from './pages/alef-add-documentation/alef-add-documentation.component';
import { ModalAddCodeComponent } from './shared/components/modal-add-code/modal-add-code.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataFormComponent,
    SidebarComponent,
    AlefLiItemComponent,
    AlefNavMenuSectionComponent,
    CodeTemplateAlefComponent,
    AlefTextControllerComponent,
    AlefAddDocumentationComponent,
    ModalAddCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    FormsModule,
    HighlightModule,
    TabsModule,
    HttpClientModule, 
    AngularEditorModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        themePath: 'assets/code-theme.css'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
