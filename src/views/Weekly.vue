<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Weekly Tasks</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Weekly Tasks</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Weekly Tasks</h1>
        <p style="margin: 15px;" class="text-center">These are the suggested tasks to complete each week.</p>
        <p style="margin: 15px;" class="text-center">All of these tasks <i>should</i> be done automatically, however
          manually checking them will go far in keeping you secure.</p>
        <ul style="margin: 15px;">
          <li>Update Computer
            <ul>
              <li><a href="https://tinyurl.com/2np59cxz" target="_blank">Windows</a></li>
              <li><a href="https://tinyurl.com/2s4466zu" target="_blank">Mac</a></li>
            </ul>
          </li>
          <li>Update Browser
            <ul>
              <li><a href="https://tinyurl.com/38ybvhyv" target="_blank">Chrome</a></li>
            </ul>
          </li>
          <li>Update Antivirus
            <ul>
              <li><a href="https://tinyurl.com/zw39kvtu" target="_blank">Avast</a></li>
              <li><a href="https://tinyurl.com/5cwvmxv3" target="_blank">Norton</a></li>
            </ul>
          </li>
          <li>Update Phone Apps
            <ul>
              <li><a href="https://tinyurl.com/478v5ctt" target="_blank">Android</a></li>
              <li><a href="https://tinyurl.com/2fp2dux8" target="_blank">iOS</a></li>
            </ul>
          </li>
          <li>Scan Computer
            <ul>
              <li><a href="https://tinyurl.com/ye6e779x" target="_blank">Avast</a></li>
              <li><a href="https://tinyurl.com/3at34kt3" target="_blank">Norton</a></li>
            </ul>
          </li>
          <li>Scan Phone
            <ul>
              <li><a href="https://tinyurl.com/ye6e779x" target="_blank">Avast</a></li>
              <li><a href="https://tinyurl.com/3at34kt3" target="_blank">Norton</a></li>
            </ul>
          </li>
          <li>Backup Computer
            <ul>
              <li><a href="https://tinyurl.com/ms4x3ahe" target="_blank">Backblaze</a></li>
            </ul>
          </li>
          <li>Backup Phone (Photos)
            <ul>
              <li><a href="https://tinyurl.com/mt7ksutf" target="_blank">Google Photos</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </ion-content>


  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'WeeklyPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>
#container {
  position: absolute;
  left: 0;
  right: 0;
}

#container p {
  font-size: 16px;
}

#container li {
  font-size: 18px;
  margin-top: 12px;
}

.text-center {
  text-align: center;
}
</style>
