import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'purchaseTrack-search.html'
})

export class PurchaseSearchComponent {

    private filters;
    constructor(private navCtrl: NavController, private navParams : NavParams) {
        this.filters = navParams.data;
        //:- init
        //this.filters.approveDate = '0000-00-00';
        this.filters.approveDateStart = '';
        this.filters.approveDateEnd = '';
        //-:
    }

    adSearch() {
        this.navCtrl.pop(this.filters);
    }
    
}