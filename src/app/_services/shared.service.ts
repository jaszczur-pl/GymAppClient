import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'https://localhost:44397/api';

  constructor(private http:HttpClient) { }

  getClientProfile():Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Account/GetClientData');
  }

  updateClientProfile(val:any){
    return this.http.put(this.APIUrl+'/Account/SetClientData', val)
  }

  getExtendedScheduleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ExtendedSchedule');
  }

  //Classes
  getClassesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Classes');
  }

  getClass(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Classes/',val);
  }

  addClass(val:any){
    return this.http.post(this.APIUrl+'/Classes',val)
  }

  updateClass(id:number,val:any){
    return this.http.put(this.APIUrl+'/Classes/'+id, val)
  }

  deleteClass(id:number){
    return this.http.delete(this.APIUrl+'/Classes/'+id)
  }

  //Trainers
  getTrainersList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Trainers');
  }

  getTrainer(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Trainers/',val);
  }

  addTrainer(val:any){
    return this.http.post(this.APIUrl+'/Trainers',val)
  }

  updateTrainer(id:number, val:any){
    return this.http.put(this.APIUrl+'/Trainers/'+id, val)
  }

  deleteTrainer(id:number){
    return this.http.delete(this.APIUrl+'/Trainers/' + id)
  }

  //Customers
  getCustomersList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Customers');
  }

  getCustomer(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Customers/',val);
  }

  updateCustomer(id:number, val:any){
    return this.http.put(this.APIUrl+'/Customers/'+id, val)
  }

  deleteCustomer(id:number){
    return this.http.delete(this.APIUrl+'/Customers/' + id)
  }

  //Schedules
  getSchedulesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Schedules');
  }

  getSchedule(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Schedules/',val);
  }

  addSchedule(val:any){
    return this.http.post(this.APIUrl+'/Schedules',val)
  }

  updateSchedule(id:number, val:any){
    return this.http.put(this.APIUrl+'/Schedules/'+id, val)
  }

  deleteSchedule(id:number){
    return this.http.delete(this.APIUrl+'/Schedules/' + id)
  }
  
}
