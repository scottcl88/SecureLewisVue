<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Feature Coming Soon!</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Feature Coming Soon!</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Feature Coming Soon!</h1>
        <p style="margin: 15px;" class="text-center">Sorry, this feature is not yet ready. Please check later.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FurturePage',
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
