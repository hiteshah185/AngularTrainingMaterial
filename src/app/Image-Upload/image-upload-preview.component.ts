import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector:'app-image-upload-preview',
    templateUrl:'./image-upload-preview.component.html',
    styleUrls:['./image-upload-preview.component.scss'],
    standalone:true,
    imports: [CommonModule]
})
export class ImageUploadComponent implements OnInit{

    @ViewChild('imagePreview', { static: true })
    protected imagePreview!: ElementRef<HTMLCanvasElement>;

    private imagePreviewCtx!: CanvasRenderingContext2D | null;
    loadImage(e:Event){
        const image = (e.target as HTMLInputElement).files![0];
        createImageBitmap(image).then((bitmap) => {
            this.imagePreview.nativeElement.width = bitmap.width;
            this.imagePreview.nativeElement.height = bitmap.height;
            this.imagePreviewCtx?.drawImage(bitmap, 0, 0);
          });
    }
    
    applyFilter(){
        //to be implemented
    }


}