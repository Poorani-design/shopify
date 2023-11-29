import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastService } from 'src/services/toast/toast.service';
import { BrandsService } from '../../service/brands.service';
import { BrandComponent } from '../../brand.component';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {
  editBrandForm: any;
  brandFile: any;
  imageName: string='';
  selectedId: any;
  getBrandData: any;
  constructor(
    private toast: ToastService,
    private formBuilder: FormBuilder,
    private brandservice: BrandsService,
    private brandComponent:BrandComponent
  ) {

    this.getSelectBrandId(this.selectedId);
    //edit form group
    this.editBrandForm = this.formBuilder.group({
      brand_id: [''],
      brand_name: [''],
      user_id: [''],
      image: [''],
      status_id:['']
    });
    console.log("selected id", this.brandservice.selectedId);
    this.brandservice.selectedId$.subscribe((res)=>{
      if(res){
        console.log("res",res);
        this.getSelectBrandId(res);
      }
    })
  }
  ngOnInit(){

  }
  updateImageName(newImageName: string) {
    this.imageName = newImageName;
    console.log(this.imageName,"image name");
  }
  onFileSelected(event: any) {
    const fileInput = event.target;
    
    console.log('img target', fileInput);
    console.log('img length', fileInput.files.length);
    console.log('fileInput.files', fileInput.files[0]);
    if (fileInput.files.length > 0) {
      this.brandFile = fileInput.files[0];
    }

  }
  getSelectBrandId(id: any) {
    // this.selectedId={"brand_id":id};
    this.selectedId = id;
    console.log(this.selectedId);
    this.brandservice.getSingleBrand(this.selectedId, (response: any) => {
      if (response.status) {
        this.getBrandData = response.data[0];
        this.editBrandForm.patchValue({
          brand_id: response.data[0].brand_id,
          brand_name: response.data[0].name,
          user_id: response.data[0].user_id,
          image: this.updateImageName(response.data[0].img),
          status_id:response.data[0].status_id
        });
      } else {
        this.toast.showWarning('something wrong');
      }
    });
  }

  updateBrand(){
      const editBrandForm = new FormData();
  
      editBrandForm.append('brand_name', this.editBrandForm.value.brand_name);
      console.log(this.editBrandForm.value, "value");
      editBrandForm.append('brand_name', this.editBrandForm.value.brand_id);
      editBrandForm.append('status_id', this.editBrandForm.value.status_id );
      editBrandForm.append('user_id', this.editBrandForm.value.user_id);
      if(this.brandFile){
        editBrandForm.append('image', this.brandFile);
      }
      else{
        editBrandForm.append('image',this.imageName);
      }
      
      console.log(this.editBrandForm);
      this.brandservice.update(editBrandForm, (response: any) => {
        if (response) {
          this.toast.showSuccess(response.message);
        } else {
          this.toast.showError(response.message);
        }
      });
      
     }
}
