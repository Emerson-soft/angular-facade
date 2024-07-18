import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
