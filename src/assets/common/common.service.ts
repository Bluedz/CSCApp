import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {UrlConfig} from '../../assets/config/config.url'
@Injectable()

export class CommonService {
    // ->
    public TmatDetail = [];
    // <-

    constructor (private http: Http) {
        
    }

    public post (url: string, body: any, options?: RequestOptionsArgs):any {
        let promis = this.http.post(url,body,options).toPromise();
        
        promis.catch(function (error) {

        })
        return promis;
    }

    public callMethod (_method: string, _param: any) {
        var url = UrlConfig.getCallMethod();
        let param = {};
        param["_method"] = _method;
        param["_param"] =  _param;
        let p = this.post(url, JSON.stringify(param));
        return p;
    }

    // ->
    public searchMat (sdsCode) {
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
        
        //let _this = this;
        let _this = this;
        
        
        this.callMethod(_method, _param).then(function (data) {
          /*
          if (_this.infiniteScroll != null) {
            _this.infiniteScroll.complete();
            _this.infiniteScroll = null;
          }
          if (_this.refresher != null) {
            _this.refresher.complete();
            _this.refresher = null;
          }*/
          var result = JSON.parse(data._body);
          //console.log(result.datas[0]);   
         //_this.matDetail = result.datas[0];
          _this.TmatDetail = result.datas[0];
          console.log(_this.TmatDetail);
          
        }).then;
        
    
    }
    // <-
}