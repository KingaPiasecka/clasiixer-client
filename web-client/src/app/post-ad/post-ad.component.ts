import {Component, OnInit} from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";
import {BehaviorSubject, Observable} from "rxjs";
import {take} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostAdService} from "./post-ad.service";
import {Router} from "@angular/router";
import {AlertService} from "../services/alert.service";


@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})
export class PostAdComponent implements OnInit {
  files: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  array$: Observable<any> = this.files.asObservable();
  postAdForm: FormGroup;
  submitted = false;
  selectedFile: File;

  constructor(private tokenStorage: TokenStorage,
              private authorizationService: AuthorizationService,
              private formBuilder: FormBuilder,
              private postAdService: PostAdService,
              private router: Router,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.postAdForm = this.formBuilder.group({
      title: ['',],
      category: ['',],
      price: ['',],
      condition: ['',],
      description: ['',],
      firstname: ['',],
      lastname: ['',],
      state: ['',],
      city: ['',],
      phone: ['',],
      agree: ['',],
      file: [null,]
    });
  }

  get f() {
    return this.postAdForm.controls;
  }

  logOut() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = event => {
        // @ts-ignore
        this.addElementToObservableArray(event.target.result);
      }
    }
  }

  addElementToObservableArray(item) {
    this.array$.pipe(take(1)).subscribe(val => {
      const newArr = [...val, item];
      this.files.next(newArr);
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.postAdForm.invalid) {
      return;
    }
    this.postAdService.postAd(this.selectedFile, this.postAdForm.value).subscribe(
      data => {
        this.alertService.success(data.message, true);
        this.router.navigate(['/home']);
      },
      error => {
        this.alertService.error(error);
      }
    )
  }

}
