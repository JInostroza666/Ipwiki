import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesI } from './interface/wiki';
import { SearchWikiService } from './service/search-wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles$! : Observable<ArticlesI[]>;
  title = 'apiWiki';

  constructor(
    private searchSvc: SearchWikiService
  ){}

  onSearch(search: string){
    this.articles$ = this.searchSvc.getSearch(search);
    console.log(this.articles$);
  }
}
