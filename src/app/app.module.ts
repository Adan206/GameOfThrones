import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    // BrowserAnimationsModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
