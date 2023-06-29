import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent implements OnInit {
  contents$ = this.apiService.getContents()
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
