/*
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchWikiService } from 'src/app/service/search-wiki.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch= new EventEmitter;

  constructor(
    private fb: FormBuilder,
    private searchSvc: SearchWikiService
  ) { }

  frmSearch = this.fb.group({
    search: ['']
  });


  ngOnInit(): void {
    this.OnChange();
    this.searchSvc.getSearch('react').subscribe(res=>{
    })
  }

  OnChange(){
    this.frmSearch.valueChanges.subscribe(res=>{
      this.onSearch.emit(res.search)
    })
  }
}

*/

