import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.sass']
})
export class ImageViewerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { imageElement: HTMLImageElement }
  ) { }

  ngOnInit() {
  }

}
