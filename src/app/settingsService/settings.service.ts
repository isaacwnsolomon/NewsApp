import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private storage: Storage) {
    //Initialise storage when service created 
    this.storage.create();
  }
//save value using key 
  async setSetting(key: string, value: any) {
    await this.storage.set(key, value);
  }
//Retrieves value by key 
  async getSetting(key: string) {
    return await this.storage.get(key);
  }
}
