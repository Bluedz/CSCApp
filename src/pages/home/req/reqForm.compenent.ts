/**
 * 查看RFQ详细信息组件
 */
import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import {CommonService} from '../../../assets/common/common.service'
// ->
import { MatFormComponent } from  '../mat/matForm.component';
// <-

//import {UrlConfig} from '../../../assets/config/config.url'
@Component({
  templateUrl: 'req-form.html'
})
export class ReqFormComponent {
  // ->
  public matList = [];
  public infiniteScroll = null;
  public refresher = null;
  public matDetail = [];
  // <-

  public reqInfo;
  constructor( public commonService: CommonService, public navParams : NavParams, public navCtrl: NavController) {
    this.commonService = commonService;
    this.navParams = navParams;
    this.getReqInfo();
  }
    // ->
    ionViewWillEnter() {
      this.commonService.searchMat(this.reqInfo.REQ_MATERIALNO);
      //console.log(this.commonService.TmatDetail);
    }
      
    go2MatDetail (){
        //alert(parm_sdsCode);
        //this.searchMat (parm_sdsCode);
      this.matDetail = this.commonService.TmatDetail;
      this.navCtrl.push(MatFormComponent, this.matDetail);
    }
    // <-

  /**
   * 根据当前登录的用户的ID获取菜单
   */
  getReqInfo () {
    this.reqInfo = this.navParams.data;
  }
}
