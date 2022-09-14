<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Physical</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Physical</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Physical</h1>
        <p style="margin: 15px;" class="text-center">These are a few things you can do physically to protect yourself.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <ul style="margin: 15px;">
          <li><span>Keep your keys, phone, and laptop close to you in public; it only takes seconds for someone to
              attack
            </span>
          </li>
          <li><span>Log out and lock your computer and phone when unattended in public
            </span>
          </li>
          <li><span>Be aware of who can see your screen
            </span>
          </li>
          <li><span>Cover your webcam
            </span>
          </li>
          <li><span>Never plug-in directly to a public USB charger and don't trust a used or found USB device.<a
                href="https://www.pcmag.com/how-to/dont-plug-it-in-how-to-prevent-a-usb-attack" target="_blank">Read
                more
                here</a>.
            </span>
          </li>
          <li><span>Never trust a public computer, always assume the person before you knowingly or unknowingly injected
              malware
            </span>
          </li>
          <li><span>Check for card skimmers.<a
                href="https://www.pcmag.com/how-to/how-to-spot-and-avoid-credit-card-skimmers" target="_blank">Read more
                here</a>.
            </span>
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
