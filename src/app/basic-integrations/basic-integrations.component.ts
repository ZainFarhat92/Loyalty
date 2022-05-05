import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-basic-integrations',
  templateUrl: './basic-integrations.component.html',
  styleUrls: ['./basic-integrations.component.css']
})
export class BasicIntegrationsComponent implements OnInit {
  editor!: Editor;
  html!: '';

  imageSrc = 'assets/images/myimage.png'  
  imageAlt = 'myimage'

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
