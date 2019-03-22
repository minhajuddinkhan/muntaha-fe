import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dua, Emotion } from './dashboard'

@Injectable()
export class DashboardService {
  constructor(private http:HttpClient) { }

  GetDuaByEmotion(emotion: string) {
    return this.http.get<Dua[]>(`dua/${emotion}`)
  }
  GetEmotions() {
    return this.http.get<Emotion[]>(`emotion`)
  }
}
