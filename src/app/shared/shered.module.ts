import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { CardHeaderComponent } from "./components/card-header/card-header.component";

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent
  ],
  exports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
  ]
})
export class SharedModule {}
