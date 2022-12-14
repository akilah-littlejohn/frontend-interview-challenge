import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ResultsviewComponent } from './resultsview/resultsview.component';
import { HttpClientModule } from '@angular/common/http';
import { PlatformLayoutService } from './platform-layout.service';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsviewComponent,
    NavigationComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PlatformLayoutService],
})
export class AppModule {}
