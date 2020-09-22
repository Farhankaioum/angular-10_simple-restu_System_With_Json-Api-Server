import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url="http://localhost:3000/restaurant";
  constructor(private http:HttpClient) { }
  // For feaching api [GET, POST, PUT, DELETE]
  getList()
  {
    return this.http.get(this.url);
  }
  saveResto(data){
    return this.http.post(this.url,data);
  }
  deleteResto(id){
    console.log("service delete");
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id){
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
