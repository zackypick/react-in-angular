import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentWrapperComponent } from 'src/components/my-react-component/MyReactComponentWrapper';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentWrapperComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
