import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgLoaderService } from 'src/app/custom-directives/ng-loader/ng-loader.service';

@Component({
  selector: 'app-dashboard-user-menu',
  templateUrl: './dashboard-user-menu.component.html',
  styleUrls: ['./dashboard-user-menu.component.scss']
})
export class DashboardUserMenuComponent implements OnInit {

  @Input() manager;

  public traineeView = [{
    label: "My Home",
    icon_name: "home",
    isSelected: false,
    isDisabled: false,
    router: "home"
  },
  {
    label: "My Trainings",
    icon_name: "calendar_today",
    isSelected: false,
    isDisabled: false,
    router: "trainings"
  }]

  public trainerView =[
    {
      label: "My Home",
      icon_name: "home",
      isSelected: false,
      isDisabled: false,
      router: "home"
    },
    {
      label: "My Trainings",
      icon_name: "calendar_today",
      isSelected: false,
      isDisabled: false,
      router: "trainings"
    },
    {
      label: "My Team",
      icon_name: "people",
      isSelected: false,
      isDisabled: false,
      router: "team"
    },
    {
      label: "Trainer View",
      icon_name: "bar_chart",
      isSelected: false,
      isDisabled: false,
      router: "trainer"
    }
  ]

  public managerMenu = [{
    label: "My Home",
    icon_name: "home",
    isSelected: false,
    isDisabled: false,
    router: "home"
  },
  {
    label: "My Trainings",
    icon_name: "calendar_today",
    isSelected: false,
    isDisabled: false,
    router: "trainings"
  },
  {
    label: "My Team",
    icon_name: "people",
    isSelected: false,
    isDisabled: false,
    router: "team"
  },
  ]

  menuList

  constructor(public router: Router,public loader : NgLoaderService) { }

  ngOnInit(): void {
    this.menuList = [{
      label: "My Home",
      icon_name: "home",
      isSelected: false,
      isDisabled: false,
      router: ""
    },{
      label: "My Trainings",
      icon_name: "home",
      isSelected: false,
      isDisabled: false,
      router: ""
    }]
    this.manager = "";

    this.router.events.subscribe(event =>{
      console.log("event",event)
      if(event['url']=="/dashboard/home" && this.manager == "") {
        this.manager = 'manager';
        this.menuList = this.managerMenu;
        this.menuSelected(this.menuList[0])
      }
    })
  }
  ngOnChanges(){
    if(this.manager == 'manager'){
      this.menuList = this.managerMenu
    }else if(this.manager == 'trainer'){
      this.menuList = this.trainerView
    }else if(this.manager =='trainee'){
      this.menuList = this.traineeView
    }else{
      this.menuList = [{
        label: "My Home",
        icon_name: "home",
        isSelected: false,
        isDisabled: false,
        router: ""
      }]
    }
    console.log("menulist",this.menuList)
    this.menuSelected(this.menuList[0])
  }
  menuSelected(selected) {
    console.log(selected)
    if(selected.router == "")return
    this.menuList.forEach(d => {
      if (selected.label === d.label)
        d.isSelected = true;
      else
        d.isSelected = false;
    })
    // if(this.manager == 'manager') {
    //   this.router.navigate(["manager/"+selected.router])
    // } else if('trainer') {
    //   this.router.navigate(["dashboard/"+selected.router])
    // }else{
    //   this.router.navigate(["dashboard/"+selected.router])
    // }
    this.loader.show()
    setTimeout(() => {
      this.loader.hide()
    }, 300);
    console.log("selected router",selected,this.manager)
    this.router.navigate(["dashboard/"+selected.router])
    
  }

}
