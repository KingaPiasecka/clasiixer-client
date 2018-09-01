import {Component, OnInit} from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "./category.service";
import {Ad} from "../interfaces/ad";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  searchForm: FormGroup;
  adCount: number;
  submitted = false;
  adList: Ad[];

  constructor(private tokenStorage: TokenStorage,
              private authorizationService: AuthorizationService,
              private formBuilder: FormBuilder,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      customWord: ['',],
      location: ['',],
      category: ['',]
    });
    this.categoryService.getAllAds().subscribe(
      data => {
        this.adList = data;
        console.log(data)
        this.adCount = this.adList.length;
      },
      error => {
        console.log(error);
      }
    );
  }

  get f() {
    return this.searchForm.controls;
  }

  logOut() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

  onSubmit() {
    console.log(this.searchForm.value);
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }

    this.categoryService.getFilterAds(this.searchForm.value).subscribe(
      data => {
        this.adList = data;
        this.adCount = this.adList.length;
      },
      error => {
        console.log(error);
      }
    );

  }

}
