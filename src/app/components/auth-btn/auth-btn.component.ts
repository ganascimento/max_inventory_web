import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RequestStatus } from 'src/app/constants/request.status.constant';

@Component({
  selector: 'mi-auth-btn',
  templateUrl: './auth-btn.component.html',
  styleUrls: ['./auth-btn.component.css'],
  animations: [
    trigger('loadingIndicator', [
      state('isLoading', style({
        width: '55px'
      })),
      state('none', style({
        width: '100%'
      })),
      transition('isLoading => none', animate('500ms ease-in')),
      transition('none => isLoading', animate('500ms ease-out'))
    ])
  ]
})
export class AuthBtnComponent implements OnInit {
  @Input() public text: string;
  @Input() public status: number;
  @Input() public disabled: boolean;
  @Output() public onTap = new EventEmitter();

  public btnStatus: string = 'none';

  ngDoCheck() {
    this.btnStatus = this.status == RequestStatus.isLoading ? 'isLoading' : 'none';
  }

  constructor() { }

  emmitClick() {
    this.onTap.emit();
  }

  ngOnInit(): void { }
}
