<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Secure Setup</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Secure Setup</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Secure Setup</h1>
        <p style="margin: 15px;" class="text-center">This is a suggested setup for securing information.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <ul style="margin: 15px;">
          <li>Use a password manager for everything except the following:
            <ul>
              <li>Backup Codes for 2FA/MFA</li>
              <li>Driver License</li>
              <li>Social Security Number</li>
              <li>Passport</li>
              <li>Bank Account Numbers and Routing Numbers</li>
            </ul>
          </li>
          <li>Backup codes can be stored in a password-protected excel sheet. You can then store that sheet in a number
            of ways:
            <ul>
              <li>Somewhere on your computer which is automatically backed up (such as with Backblaze)</li>
              <li>USB or external hard drive, stored in a secure location</li>
              <li>Uploaded to a secure cloud account</li>
            </ul>
          </li>
        </ul>
        <p style="margin: 15px; margin-top: 30px;">It's okay to store all passwords (including bank passwords), credit cards, emails,
          notes in a password manager. Use 2FA on your password manager, and always use their generated password for any
          account.</p>
          <p style="margin: 15px; margin-top: 30px;">Recommend password manager: <a href="https://1password.com" target="_blank">1Password</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'secure-setup',
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

.text-center {
  text-align: center;
}

button {
  padding: 5px;
  border-radius: 4px;
}
</style>
