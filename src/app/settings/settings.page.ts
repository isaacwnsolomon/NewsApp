import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settingsService/settings.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  //variables to hold current selected font size and colour
  selectedColour: string = 'default';
selectedFontSize: string = 'medium';
//Constructor to inject service 
  constructor(private settingsService: SettingsService,private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    //Loads settings when initialised 
    this.loadSettings();
  }
//Loads settings from settingsService
  async loadSettings() {
    //Retrieves settings from storage or if not found sets to default
    this.selectedColour = await this.settingsService.getSetting('backgroundColor') || 'default';
    this.selectedFontSize = await this.settingsService.getSetting('fontSize') || 'medium';
  }
//Updates settings based on user choice 
  changeSetting(settingKey: string, value: any) {
    this.settingsService.setSetting(settingKey, value);
    this.applyStyles();
  }

  applyStyles() {
    // Apply styles dynamically based on settings
    document.body.style.backgroundColor = this.selectedColour === 'light' ? '#f4f4f8' : this.selectedColour === 'dark' ? '#333' : '';
    document.body.style.fontSize = this.selectedFontSize === 'small' ? '14px' : this.selectedFontSize === 'medium' ? '16px' : '18px';
  }
  //Function to go back to home page
  goHome(){
    this.router.navigate(['/home']);
  }
}
