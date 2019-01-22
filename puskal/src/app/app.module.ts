import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkService } from './work.service';
import { WorkListComponent } from './work-list/work-list.component';
import { OwlModule } from 'ngx-owl-carousel';
import { TagCloudModule } from 'angular-tag-cloud-module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WorkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlModule,
    TagCloudModule
  ],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
