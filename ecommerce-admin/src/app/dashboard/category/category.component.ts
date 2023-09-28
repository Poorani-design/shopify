import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/services/toast/toast.service';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryFile:any;
  form: any;
  allCategory: any;
  constructor(private toast: ToastService,private formBuilder:FormBuilder, private categoryservice:CategoryService ){
    this.getCategory();
  }

  onFileSelected(event:any){
    const fileInput = event.target;
    console.log("img target", fileInput);
    console.log("img length", fileInput.files.length);
    console.log("fileInput.files", fileInput.files[0]);

    if (fileInput.files.length > 0) {
      this.categoryFile = fileInput.files[0];
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      category_name: ['', Validators.required],
      status_id: ['', Validators.required],
      user_id: ['', Validators.required],
    });
  }

  addCategory(){
  
    const formData = new FormData();
    console.log('category_name', this.form.value.category_name);
    console.log('status_id', this.form.value.status_id);
    console.log('img', this.categoryFile);
    formData.append('category_name', this.form.value.category_name);
    formData.append('status_id', this.form.value.status_id);
    formData.append('status_id', this.form.value.user_id);
    formData.append('img', this.categoryFile);
    this.categoryservice.create(formData,(response:Boolean)=>{
      console.log(response);
    });
    this.getCategory();
  this.toast.showSuccess("added successfully");


  }

  getCategory(){
    this.categoryservice.getCategory().subscribe((res)=>{
      console.log(res);
      this.allCategory=res.data;
    })  
  }
}
