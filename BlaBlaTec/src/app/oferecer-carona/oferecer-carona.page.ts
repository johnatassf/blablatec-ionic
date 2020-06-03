import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
declare var google: any;

@Component({
  selector: 'app-oferecer-carona',
  templateUrl: './oferecer-carona.page.html',
  styleUrls: ['./oferecer-carona.page.scss'],
})
export class OferecerCaronaPage implements OnInit {

  private form: FormGroup;
  private autoCompleteService = new google.maps.places.AutocompleteService();
  public resultasBuscaEndereco = new Array<any>();
  origens = [];
  destinos = [];

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }
  origem = new FormControl('', Validators.compose([Validators.required]));
  destino = new FormControl('', Validators.compose([Validators.required]));
  data = new FormControl('', Validators.compose([Validators.required]));
  qtdLugares = new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern(/[0-9]/),
    Validators.maxLength(3)]));

  ngOnInit() {
    this.form = this.formBuilder.group({
      origem: this.origem,
      destino: this.destino,
      data: this.data,
      qtdLugares: this.qtdLugares
    });
    console.log(google);


    this.form.controls.origem.valueChanges.pipe().subscribe(input => {
      if (input == null) { return }
      this.autoCompleteService.getPlacePredictions({input}, prediction => {
        this.origens = prediction;
      });
    });
  }

  mapas(): void {
    this.navCtrl.navigateRoot('mapas');
  }

  oferecerCarona() {

  }


}
