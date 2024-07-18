import { NgModule } from "@angular/core";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Notification } from "./notification";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: Notification,
      useClass: ToastrService,
    }
  ],
})
export class NotificationModule {}
