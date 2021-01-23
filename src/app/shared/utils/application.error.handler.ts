import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { NotificationService } from "../services/notification.service";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private notificationService: NotificationService, private zone: NgZone) {
        super();
    }

    handleError(error: HttpErrorResponse | any) {
        this.zone.run(() => {
            if (error && error.message)
                this.notificationService.notify(error.error.data);
            else
                this.notificationService.notify("Ocorreu um erro");
                
            super.handleError(error);
        });
    }
}