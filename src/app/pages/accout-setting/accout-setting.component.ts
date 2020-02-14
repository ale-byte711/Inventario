import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/setting/settings.service';

@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styles: []
})
export class AccoutSettingComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document,
  public _ajustes:SettingsService) { }

  ngOnInit() {
    this.colocarChek();
  }

  cambiarColor(tema: string, link: any){
    this.apliclarCheck(link);
    this._ajustes.aplicarTema(tema);


  }
  apliclarCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }  
  colocarChek(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema=this._ajustes.ajustes.tema;
    for(let ref of selectores){
      if(ref.getAttribute('data-theme')==tema){
        ref.classList.add('working');
        break;
      }
    }
  }

}
