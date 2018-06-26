import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UrlConfig } from '../../../assets/config/config.url';

@Injectable()
export class PurchaseServiceSq {

    public headers: Headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    constructor(public http: Http) {

    }

    list(filter: string): any {
        let baseUrl: string = UrlConfig.getBaseUrl();
        let url = baseUrl + '/purchaseServiceSq/list?authKey=' + UrlConfig.authKey;
        return this.http.post(url, filter, {
            headers: this.headers
        }).toPromise();
    }

    attention(filter: string) {
        let baseUrl: string = UrlConfig.getBaseUrl();
        let url = baseUrl + '/purchaseServiceSq/attention?authKey=' + UrlConfig.authKey;
        return this.http.post(url, filter, {
            headers: this.headers
        }).toPromise();
    }

    deAttention(filter: string) {
        let baseUrl: string = UrlConfig.getBaseUrl();
        let url = baseUrl + '/purchaseServiceSq/deAttention?authKey=' + UrlConfig.authKey;
        return this.http.post(url, filter, {
            headers: this.headers
        }).toPromise();
    }

}