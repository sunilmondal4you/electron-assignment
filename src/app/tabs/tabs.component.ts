import { Component, OnInit } from '@angular/core';
import _lodash from 'lodash';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  remainingTabs = [{
    id:3,
    content:'This is a view 3'
  },{
    id:4,
    content:'This is a view 4'
  },{
    id:5,
    content:'This is a view 5'
  }];

  addedTabs = [];
  counter = 0;
  selectedTab = 0;
  lastTab = 5;
  showSubMenuFlag = false;

  constructor() { }

  ngOnInit() {
    this.addedTabs = [{
      id:1,
      content:'This is a view 1'
    },{
      id:2,
      content:'This is a view 2'
    },{
      id:3,
      content:'This is a view 3'
    }];

    this.remainingTabs.splice(0,1);
    this.counter = 1;
    this.selectedTab = 0;
  }

  /** Function to add a new tab **/
  addTab = function(index:number){
    const confTxt = confirm('Do you want to add Tab '+index+1);
    if(confTxt){
      this.counter++;
      this.addedTabs.push(this.remainingTabs[index]);
      this.remainingTabs.splice(index,1);
      this.showSubMenuFlag = false;
      this.lastTab = this.lastTab+1
      this.remainingTabs.push({id:this.lastTab,content:'This is a view '+this.lastTab})
    }else {
      this.showSubMenuFlag=false
      return;
    };

  }

  /** Function to delete a tab **/
  deleteTab = function(index:number){
    this.remainingTabs.push(this.addedTabs[index]);
    this.addedTabs.splice(index,1);
    this.counter--;
    this.selectedTab = this.addedTabs.length - 1;
  }

  showSubMenu = function(){
    this.remainingTabs = _lodash.orderBy(this.remainingTabs, ['id'], ['asc']);
    this.showSubMenuFlag = !this.showSubMenuFlag;
  }

  /** Function to set selectedTab **/
  selectTab = function(index:number){
    this.selectedTab = index;
    this.showSubMenuFlag = false;
  }

}
