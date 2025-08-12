import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: '4upass',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: "ionic" as any
    }

}
};

export default config;
