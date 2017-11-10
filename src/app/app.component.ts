import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search House';
  private apiUrl = 'https://www.anapioficeandfire.com/api/houses? page=214&pageSize=50';
  data: any = {};
  filteredName = 'House';


  constructor(private http: Http) {
    console.log('hello fellow user');
    this.getCharacters();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
  getCharacters() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

}
