import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild("MainSection") mainSection: ElementRef;

  private signaturePadOptions = {
    'minWidth': 3,
    'canvasWidth': 500,
    'canvasHeight': 300,
    'dotSize': 3,
    'backgroundColor': 'rgb(255,255,255)'
  };

  ngAfterViewInit() {
    this.signaturePad.clear();
    const width = this.mainSection.nativeElement.offsetWidth;
    const height = this.mainSection.nativeElement.offsetHeight - 170;
    this.signaturePad.set('canvasWidth',width);
    this.signaturePad.set('canvasHeight',height);
    this.signaturePad.set('backgroundColor','rgb(255,255,255)');
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clear() {
    this.signaturePad.clear();
  }

  constructor(public navCtrl: NavController) {
  }

}
