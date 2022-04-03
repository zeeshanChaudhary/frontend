import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  NbAuthModule,
  NbAuthService,
  NbPasswordAuthStrategy,
} from '@nebular/auth';
import { AuthComponent } from './auth.component';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule.forRoot({
      strategies: [NbPasswordAuthStrategy.setup({ name: 'email' })],
      forms: {
        login: {
          endpoint: '/auth/sign-in',
          method: 'post',
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
          
        },
        register: {
          endpoint: '/auth/sign-up',
          method: 'post',
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        requestPassword: {
          endpoint: '/auth/request-pass',
          method: 'post',
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        resetPassword: {
          endpoint: '/auth/reset-pass',
          method: 'post',
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        logout: {
          endpoint: '/auth/sign-out',
          method: 'post',
          redirectDelay: 0,
        },
      },
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
  ],
  providers: [NbAuthService],
})
export class AuthModule {}
