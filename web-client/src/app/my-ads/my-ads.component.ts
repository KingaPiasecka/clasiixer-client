import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";
import {UserService} from "../services/user.service";
import {Ad} from "../interfaces/ad";
import {MyAdsService} from "./my-ads.service";

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {
  user: string = null;
  adList: Ad[];
  i: number;
  constructor(private tokenStorage: TokenStorage,
              private authorizationService: AuthorizationService,
              private userService: UserService,
              private myAdsService: MyAdsService) { }

  ngOnInit() {
    this.userService.getUsername().subscribe(
      data => {
        console.log(data);
        this.user = data.username;
      },
      error => {
        console.log(error);
      }
    );

    this.getMyAds();

  }

  getMyAds() {
    this.myAdsService.getMyAds().subscribe(
      data => {
        this.adList = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteAd(ad) {
    let adToDelete = this.adList[ad];
    this.myAdsService.deleteAd(adToDelete.id).subscribe(
      data => {
        console.log('deleted');
        this.getMyAds();
      },
      error => {
        console.log(error);
      }
    )
  }

  logOut() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

}
