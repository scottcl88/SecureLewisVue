<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Top Things To Know About Cybersecurity</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Top Things To Know About Cybersecurity</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Top Things To Know About Cybersecurity</h1>
        <p style="margin: 15px;" class="text-center">All of these suggestions about what you should know to help educate you and help keep you safe.</p>
        <ol style="margin: 15px;">
          <li><span>Security is a process, not a product</span><!-- <a href="/future">Learn more.</a> -->
          </li>
          <li><span>Security by obscurity does not work</span>
          </li>
          <li><span>Public Wi-Fi is not secure (even with a password)</span>
          </li>
          <li><span>Poor grammar, typos, and vague details are a bad sign</span>
          </li>
          <li><span>Legitimate businesses/people will never access your computer remotely</span>
          </li>
          <li><span>Any file or link can be dangerous, even photos, videos, word documents, games, advertisements, and popups</span>
          </li>
          <li><span>Scammers will be overly emotional and try to rush, scare, or threaten you to do something. Legitimate people will ask and give you time</span>
          </li>
          <li><span>Gift cards, Bitcoin, PayPal, and Western Union are not legitimate methods of payment to businesses or government</span>
          </li>
        </ol>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'ThingsToKnowPage',
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

#container li a {
  font-size: 15px;
  margin-left: 12px;
}

.text-center {
  text-align: center;
}
</style>
