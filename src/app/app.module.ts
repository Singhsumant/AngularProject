import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FormComponent } from './form/form.component';


import {MatToolbarModule} from '@angular/material/toolbar';

import {MatFormFieldModule} from '@angular/material/form-field';


import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import {MatRadioModule} from '@angular/material/radio';


import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { CodetemplateComponent } from './codetemplate/codetemplate.component';

// import { FormGroup } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FormgenerateComponent } from './formgenerate/formgenerate.component';
 




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CodetemplateComponent,
    FormgenerateComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    RouterModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})



export class AppModule { 
 
 
  
}
