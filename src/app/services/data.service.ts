import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardWidget } from '../models/dashboard-widget';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getDashboardWidgets(): Observable<DashboardWidget[]> {
    return this.http.get<DashboardWidget[]>(`/`)
  }
}
