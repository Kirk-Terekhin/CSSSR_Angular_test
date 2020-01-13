import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RowComponent} from './item-detail.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RowComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
