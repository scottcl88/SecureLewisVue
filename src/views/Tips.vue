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
          but may help educate you and help keep you safe.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <p style="margin: 15px;"><button @click="(e: any) => downloadDoc(e, 3)">Download Document</button>
        </p>
        <ol style="margin: 15px;">
          <li><span>Think before you click</span><a href="/websites">Learn more.</a>
          </li>
          <li><span>Always use an antivirus</span><a href="/incidentresponse">Learn more.</a>
          </li>
          <li><span>Update antivirus, apps, and systems regularly</span><a href="/weekly">Learn more.</a>
          </li>
          <li><span>Never leave your computer or phone alone in public</span><a href="/physical">Learn more.</a>
          </li>
          <li><span>Use strong passwords for everything</span><a href="/passwords">Learn more.</a>
          </li>
          <li><span>Use 2FA/Multifactor options when possible</span><a href="/passwords">Learn more.</a>
          </li>
          <li><span>Never share your password or security code</span><a href="/passwords">Learn more.</a>
          </li>
          <li><span>Always check the URL</span><a href="/websites">Learn more.</a>
          </li>
          <li><span>Verify who is calling, texting, or emailing before clicking or replying</span><a
              href="/websites">Learn more.</a>
          </li>
          <li><span>Freeze your credit. <a href="https://www.creditkarma.com/id-theft/i/how-to-freeze-credit"
                target="_blank">Learn more</a>.</span>
          </li>
          <li><span>Check for card skimmers</span><a href="/physical">Learn more.</a>
          </li>
          <li><span>Never plug in directly to public USB chargers</span><a href="/physical">Learn more.</a>
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
  name: 'TipsPage',
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
