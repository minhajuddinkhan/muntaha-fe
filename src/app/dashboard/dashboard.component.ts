import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Dua, Emotion } from './dashboard'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private ds: DashboardService) { }
  showFiller = false;
  title = 'dua';
  emotions: Emotion[];
  selectedEmotion: string = 'None';
  filteredDuas: Dua[];

  ngOnInit() {
    this.ds.GetEmotions().subscribe(
      emotions => {
        this.emotions = emotions
      },
      err => {
        alert(err)
      })

  }

  onEmotionSelect(): void {
    this.ds.GetDuaByEmotion(this.selectedEmotion).subscribe(
      duas => this.filteredDuas = duas,
      err => alert(err)
    )
  }
}

