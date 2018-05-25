import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'third-lib';
import { MyComponentComponent } from './my-component/my-component.component';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { NumberControlComponent } from './number-control/number-control.component';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { FormRowComponent } from './form-row/form-row.component';
import { ErrorMessageFormatter } from './errorMessages/errorMessageFormatter';
import { IntegerControlComponent } from './integer-control/integer-control.component';
import { DecimalControlComponent } from './decimal-control/decimal-control.component';
import { StringControlComponent } from './string-component/string-control.component';
import { EditorFormRowComponent } from './editor-form-row/editor-form-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    AnotherComponentComponent,
    NumberControlComponent,
    ValidationErrorsComponent,
    FormRowComponent,
    IntegerControlComponent,
    DecimalControlComponent,
    StringControlComponent,
    EditorFormRowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
     // Specify your library as an import
     SampleModule.forRoot()

  ],
  entryComponents: [AnotherComponentComponent],
  providers: [ ErrorMessageFormatter ],
  bootstrap: [AppComponent]
})
export class AppModule { }
