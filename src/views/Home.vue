<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container-top">
        <h1>Welcome To Scott's Cybersecurity Help Site</h1>
        <p>This website is to provide helpful information, tutorials, tips, tricks and suggestions for all things
          cybersecurity.</p>
        <p style="margin-top: 55px; margin-bottom: 35px; font-size: 20px"><span><a href="/weekly">Weekly
              Tasks</a></span><span style="margin-left: 10px; margin-right: 10px;"> | </span><span><a href="/tips">Top
              12 Tips</a></span><span style="margin-left: 10px; margin-right: 10px;"> | </span><span><a
              href="/thingstoknow">8 Things To Know</a></span></p>
        <p style="font-size: 15px; margin-top: 15px;"><a href="/legal">Disclaimer</a></p>
        <p style="font-size: 15px;">Check out more of my work <a href="https://www.scottcl.com"
            target="_blank">here.</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
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
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container-top {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
