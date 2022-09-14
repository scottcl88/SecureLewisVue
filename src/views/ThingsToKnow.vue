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
        <p style="margin: 15px;" class="text-center">All of these suggestions about what you should know to help educate
          you and help keep you safe.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <p style="margin: 15px;"><button @click="(e: any) => downloadDoc(e, 1)">Download Presentation</button>
        </p>
        <ol style="margin: 15px;">
          <li><span>Security is a process, not a product</span>
          </li>
          <li><span>Security by obscurity does not work</span>
          </li>
          <li><span>Public Wi-Fi is not secure (even with a password)</span>
          </li>
          <li><span>Poor grammar, typos, and vague details are a bad sign</span><a href="/redflags">Learn more.</a>
          </li>
          <li><span>Legitimate businesses/people will never access your computer remotely</span>
          </li>
          <li><span>Any file or link can be dangerous, even photos, videos, word documents, games, advertisements, and
              popups</span>
          </li>
          <li><span>Scammers will be overly emotional and try to rush, scare, or threaten you to do something.
              Legitimate people will ask and give you time</span>
          </li>
          <li><span>Gift cards, Bitcoin, PayPal, and Western Union are not legitimate methods of payment to businesses
              or government</span>
          </li>
        </ol>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
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
  },

  methods: {
    downloadDoc: function (e: any, type: number) {
      e.preventDefault();
      console.log("downloadDoc called: ", e);
      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha.execute("6LetU_whAAAAAFuUvmAblKU0mrbEVPMWEvNoBkkd", { action: 'submit' }).then((token: any) => {
          axios({
            url: `https://foodapi20210616194736.azurewebsites.net/api/Document/DownloadCybersecurity?fileType=${type}`,
            method: 'GET',
            responseType: 'blob',
            headers: { RecaptchaToken: token }
          }).then((response) => {
            let filename = "";
            const contentDisposition = response.headers['content-disposition'];
            console.log("ContentDisposition", contentDisposition);
            if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
              var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
              var matches = filenameRegex.exec(contentDisposition);
              if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, '');
              }
            }
            console.log("filename", filename);
            const contentType = response.headers['content-type'];
            const blob = new Blob([response.data], { type: contentType });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            link.click();
          }).catch((err: any) => {
            console.error("Failed to download: ", err);
          });
        });
      });
    }
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

button {
  padding: 5px;
  border-radius: 4px;
}
</style>
