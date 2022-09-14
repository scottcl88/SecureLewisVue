<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Passwords</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Passwords</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Passwords</h1>
        <p style="margin: 15px;" class="text-center">These are recommendations on how to use passwords.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <ul style="margin: 15px;">
          <li><span style="font-size: 20px; font-weight: bold;">Use a password manager!</span>
            <ul>
              <li>Password managers make your life easier and help keep strong, secure passwords. <a
                  href="https://www.microsoft.com/en-us/microsoft-365-life-hacks/privacy-and-safety/password-manager"
                  target="_blank" class="small">Read more here</a>.</li>
            </ul>
          </li>
          <li><span>Enable 2FA / 2 Factor Authentication / Multifactor <a
                href="https://us.norton.com/internetsecurity-privacy-what-is-2fa.html" target="_blank"
                class="small">Read more here</a>.</span>
          </li>
          <li><span>Check your password strength <a href="https://bitwarden.com/password-strength/"
                target="_blank">here</a>.</span>
            <ul>
              <li>Keep trying to make it strong enough for the estimated time to crack be "centuries"</li>
            </ul>
          </li>
          <li><span>Never share your password or security code.</span>
            <ul>
              <li>A legitimate business will never call, text or email asking you to respond with a password or code
              </li>
            </ul>
          </li>
          <li><span>Change your passwords often and use unique passwords for each account.</span>
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

#container li a.small {
  font-size: 15px;
  margin-left: 12px;
}

.text-center {
  text-align: center;
}
</style>
