import { Component,ViewChild} from '@angular/core';
import { ToastService } from './typescripts/pro/alerts';
import { IMyOptions } from './typescripts/pro/date-picker/index';
import { HeaderComponent } from './modules/Header/Header.component';
import { FooterComponent } from './modules/Footer/Footer.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' 

})
export class AppComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(FooterComponent) footer: FooterComponent;
}
