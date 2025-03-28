import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class HomePage {
  constructor() {}
  currentTime: string = '';
   public async showNotification(): Promise<void> {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Thông báo',
            body: `Thời gian hiện tại là : $this.currentTime `,
            id: 1,
            schedule: { at: new Date(Date.now() + 1000) },
            sound: undefined,
            attachments: undefined,
            actionTypeId: '',
            extra: {}
          }
        ]
      });
    }

   public async shareCurrentTime(): Promise<void> {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      await Share.share({
        title: 'Thời gian hiện tại',
        text: `Thời gian hiện tại: ${this.currentTime}`,
        dialogTitle: 'Chia sẻ thời gian hiện tại'
      });
    }
}
