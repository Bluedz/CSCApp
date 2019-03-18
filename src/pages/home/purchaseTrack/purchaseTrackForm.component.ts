import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {CommonService} from '../../../assets/common/common.service';
import { MatFormComponent } from  '../mat/matForm.component';

@Component({
  templateUrl: 'purchaseTrack-form.html'
})

export class PurchaseTrackFromComponent {

    private purchaseTrack;
    // ->
    public matList = [];
    public infiniteScroll = null;
    public refresher = null;
    public matDetail = [];
    // <-

    constructor(public navCtrl: NavController, private navParams : NavParams, public commonService: CommonService) {
      this.purchaseTrack = navParams.data;     
    }

    // ->
    ionViewWillEnter() {
      this.commonService.searchMat(this.purchaseTrack.sdsCode);
    }
    
    go2MatDetail (parm_sdsCode){
      this.matDetail = this.commonService.TmatDetail;
      this.navCtrl.push(MatFormComponent, this.matDetail);
      
    }

    /*
    searchMat (sdsCode) {
      var _method = "component.getListData";
      let filter:string = "1=1";   

      if (sdsCode != '' && sdsCode != undefined) {
        filter += " and MAT_MATERIALNO like '%" + sdsCode + "%'";
      }  

      var _param = {
        "bizObj": "CSC_MATERIAL",
        "service": "selectMore",
        "fields": "*",
        "filter": filter,
        //"currentPageIndex": this.pageInfo.currentPageIndex,
        //"pageSize": this.pageInfo.pageSize,
        //"orderList": []
      };
      let _this = this;
      this.commonService.callMethod(_method, _param).then(function (data) {
        
        if (_this.infiniteScroll != null) {
          _this.infiniteScroll.complete();
          _this.infiniteScroll = null;
        }
        if (_this.refresher != null) {
          _this.refresher.complete();
          _this.refresher = null;
        }
        var result = JSON.parse(data._body);
        //alert(result.datas[0]);   
        _this.matDetail = result.datas[0];        

      }); */

    // <-

    
}