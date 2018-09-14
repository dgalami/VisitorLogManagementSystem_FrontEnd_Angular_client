import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LogComponent } from './components/log/log.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ExistingVisitorComponent } from './components/existing-visitor/existing-visitor.component';
import { MessageComponent } from './components/message/message.component';
import { NewVisitorComponent } from './components/new-visitor/new-visitor.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VisitorService } from './services/visitor.service';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    ExistingVisitorComponent,
    MessageComponent,
    NewVisitorComponent,
    SignInComponent,
    SignOutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
