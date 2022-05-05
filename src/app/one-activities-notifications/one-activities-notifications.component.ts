import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-one-activities-notifications',
  templateUrl: './one-activities-notifications.component.html',
  styleUrls: ['./one-activities-notifications.component.css']
})
export class OneActivitiesNotificationsComponent implements OnInit {

  editor!: Editor;
  html!: '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
  

  


