import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection:any =[];

  ngOnInit(): void {
    console.log(this.resto.getList().subscribe(
      (data)=>{
        this.collection = data;
    }));
  }
  deleteResto(item){
    this.collection.splice(item-1, 1);
    this.resto.deleteResto(item).subscribe((data)=>{
      console.log("Deletedata" + data)
    });
  }


}
