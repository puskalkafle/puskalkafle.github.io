import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkService } from './work.service';
import { WorkListComponent } from './work-list/work-list.component';
import { OwlModule } from 'ngx-owl-carousel';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OverlayComponent } from './overlay/overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WorkListComponent,
    FooterComponent,
    HeaderComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlModule,
    TagCloudModule,
    ChartsModule
  ],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
