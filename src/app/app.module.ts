import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { AttachModule } from "@olop/ng-attach";
import { ScrollModule } from "@olop/ng-scroll";
import { WithModule } from "@olop/ng-with";
import { of } from "rxjs";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AttachModule, ScrollModule, WithModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return () => of(true).toPromise();
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
