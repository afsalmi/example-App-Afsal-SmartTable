import { Component, Input, OnInit } from '@angular/core';
@Component({
 selector: 'image-thumbnail-column',
 template: `
   <div>
     <img [src]="value" />
   </div>
`,
})
export class ImageThumbnailColumn implements OnInit {
  @Input() value: string;
  @Input() rowData: any;
  ngOnInit(): void {
    console.log(this.value);
    console.log(this.rowData);
}
}