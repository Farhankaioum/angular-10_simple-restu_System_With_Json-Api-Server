import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import{RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private router:ActivatedRoute, private resto:RestoService) { }
  alert:boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });
  ngOnInit(): void {
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe(
      (data) => {
        this.editResto = new FormGroup({
          name: new FormControl(data['name']),
          address: new FormControl(data['address']),
          email: new FormControl(data['email'])
        });
        
    })
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id, this.editResto.value).subscribe(
      (data)=>{
        this.alert = true;
    });
  }

  closeAlert()
  {
    this.alert = false;
  }

}
