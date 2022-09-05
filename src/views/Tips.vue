<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Top Cybersecurity Tips</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Top Cybersecurity Tips</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Top Cybersecurity Tips</h1>
        <p style="margin: 15px;" class="text-center">All of these tips are recommendations and do not guarantee security
          but may help educate you and help keep you safe.</p>
        <ol style="margin: 15px;">
          <li><span>Think before you click</span><!-- <a href="/future">Learn more.</a> -->
          </li>
          <li><span>Always use an antivirus</span>
          </li>
          <li><span>Update antivirus, apps, and systems regularly</span>
          </li>
          <li><span>Never leave your computer or phone alone in public</span>
          </li>
          <li><span>Use strong passwords for everything</span>
          </li>
          <li><span>Use 2FA/Multifactor options when possible</span>
          </li>
          <li><span>Never share your password or security code</span>
          </li>
          <li><span>Always check the URL</span>
          </li>
          <li><span>Verify who is calling, texting, or emailing before clicking or replying</span>
          </li>
          <li><span>Freeze your credit</span>
          </li>
          <li><span>Check for card skimmers</span>
          </li>
          <li><span>Never plug in directly to public USB chargers</span>
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
  name: 'TipsPage',
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
