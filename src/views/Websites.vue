<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Websites</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Websites</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Websites</h1>
        <p style="margin: 15px;" class="text-center">These are suggestions on how to identify a fraudulent website and
          stay safe with online purchases.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <ol style="margin: 15px;">
          <li><span>Pause And Think</span>
            <ul>
              <li>Were you sent this link? Was it from a reliable source?</li>
              <li>Did you get here from another site, ad or popup? Was it from a reliable source?</li>
              <li>If yes to either, think about how you know its a reliable source? Maybe you should double check.</li>
            </ul>
          </li>
          <li><span>Check the URL carefully</span>
            <ul>
              <li>Does it start with HTTPS or HTTP?
                <ul>
                  <li>(HTTPS does not mean it’s trustworthy, private or secure, but HTTP
                    means it cannot be trusted)</li>
                </ul>
              </li>
              <li>Are there typos or extra words?</li>
              <li>Does it end with .com, .gov, .org, .net? (Others can be okay, but be very careful)</li>
              <li>Examples of fraudulent websites:
                <ul>
                  <li>gogle.com</li>
                  <li>real-google.com</li>
                  <li>googlecom.net</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><span>Is your browser updated? Is your antivirus updated and running?</span>
            <ul>
              <li>Update your browser before doing anything online.</li>
              <li>Antivirus will not protect you from everything online, but without it you are more vulnerable.</li>
            </ul>
          </li>
          <li><span>Choose selectively what information you save to websites</span>
            <ul>
              <li>Never blindly save profile, billing, shipping or other information to websites. Default to not saving.
              </li>
              <li>A couple of trusted websites such as Google, Amazon, Apple, Netflix are okay. However its still best
                practice to not save everything.</li>
            </ul>
          </li>
          <li><span>Be careful what you click</span>
            <ul>
              <li>Malicious ads can be very tricky and easy to click, go slow and think before you click.</li>
            </ul>
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
