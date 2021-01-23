import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations"
import { switchMap, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'mi-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snackVisibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '100px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  public message: string;
  public snackVisibility: string = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifier
      .pipe(
        tap(message => {
          this.message = message;
          this.snackVisibility = 'visible';
        }),
        switchMap(message => timer(4000))
      )
      .subscribe(timer => this.snackVisibility = 'hidden')
      
  }
}
