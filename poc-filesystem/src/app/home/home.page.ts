import { Component } from '@angular/core';
import { FyleSystemService } from '../shared/services/file-system/fyle-system.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fileSystemService: FyleSystemService) {}


}
