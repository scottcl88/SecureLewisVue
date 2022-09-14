<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Common Red Flags</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Common Red Flags</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Common Red Flags</h1>
        <p style="margin: 15px;" class="text-center">These are common red flags to look out for in emails and messages.
          Always check the sender/caller, subject and message.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <ul style="margin: 15px;">
          <li><span>Poor grammar and typos</span>
          </li>
          <li><span>Urgency</span>
          </li>
          <li><span>Vague information</span>
            <ul>
              <li>Vague salutation or general information that's not clear they know you</li>
            </ul>
          </li>
          <li><span>Unsolicited</span>
            <ul>
              <li>e.g.: If you didn't request a password reset or a security code, then its not legitimate</li>
            </ul>
          </li>
          <li><span>Strange time</span>
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
