import { Routes } from '@angular/router';

import { LogComponent } from "./components/log/log.component";
import { ExistingVisitorComponent } from './components/existing-visitor/existing-visitor.component';
import { MessageComponent } from './components/message/message.component';
import { NewVisitorComponent } from './components/new-visitor/new-visitor.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';


export const routes:Routes = [
    {path: '', redirectTo: 'log', pathMatch:'full'},
    {path: 'log', component:LogComponent},
    {path: 'existingVisitor/:vId', component:ExistingVisitorComponent},
    {path: 'message', component: MessageComponent},
    {path: 'newVisitor', component: NewVisitorComponent},
    {path: 'signIn', component: SignInComponent},
    {path: 'signOut', component: SignOutComponent}
]