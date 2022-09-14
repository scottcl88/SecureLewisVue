<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Incident Response</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Incident Response</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="capitalize text-center" style="margin-top: 15px;">Incident Response</h1>
        <p style="margin: 15px;" class="text-center">These are recommended steps to take if you know or suspect you were
          part of an attack.
          <span style="font-size: 15px;"><a href="/legal">Disclaimer</a></span>
        </p>
        <ul style="margin: 15px;">
          <li><span>Read news and public announcement message</span>
            <ul>
              <li><span>There is often important information about steps to take and what was stolen</span>
              </li>
            </ul>
          </li>
          <li><span>Change password</span>
            <ul>
              <li><span>Use a password manager.<a href="/passwords" class="small">Read more here</a>.</span>
              </li>
            </ul>
          </li>
          <li><span>Check for browser, app or system updates</span>
          </li>
          <li><span>Check for antivirus updates and run a scan on all devices with the account</span>
          </li>
          <li><span>Review privacy and security settings on the account</span>
            <ul>
              <li><span>Settings and policies may have changed since you last looked, review them to understand how your
                  data is handled and what information is public</span>
              </li>
              <li><span>If available, make sure 2FA or Multifactor is enabled.<a href="/passwords" class="small">Read
                    more here</a>.</span>
              </li>
              <li><span>Default settings to private unless you clearly understand and confident in what it does.</span>
              </li>
            </ul>
          </li>
          <li><span>Review private and public information on the account</span>
            <ul>
              <li><span>Assume all information was stolen from your account and understand what could have been
                  leaked.</span>
              </li>
              <li><span>Take steps to protect that information such as changing your bank card, changing passwords to
                  connected accounts, etc.</span>
              </li>
            </ul>
          </li>
          <li><span>Alert friends and family who may have been connected to the account</span>
          </li>
          <li><span>Check bank accounts for fraudulent transactions for at least one week</span>
          </li>
          <li><span>Backup your data</span>
          </li>
          <li><span>Freeze your credit or verify its still frozen</span>
          </li>
          <li><span>If a severe attack:</span>
            <ul>
              <li><span>Use more advanced tools to scan your systems such as <a href="https://www.ccleaner.com/"
                    target="_blank">CCleaner</a> or <a href="https://www.superantispyware.com/"
                    target="_blank">SUPERAntiSpyware</a></span>
              </li>
              <li><span>Report the cyber crime.<a href="https://www.wikihow.com/Report-Cyber-Crime" target="_blank"
                    class="small">Read more here</a>.</span>
              </li>
              <li><span>Contact support such as Geek Squad, Staples, Apple, etc.</span>
              </li>
              <li><span>Use fraud and identity protection services such as <a href="https://lifelock.norton.com/">Norton
                    LifeLock</a> or <a href="https://www.avast.com/en-us/breachguard" target="_blank">Avast
                    BreachGuard</a></span>
              </li>
            </ul>
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
