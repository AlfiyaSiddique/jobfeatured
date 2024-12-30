declare module 'react-native-config' {
    interface Env {
      BACKENDURL: string;
    }
  
    const Config: Env;
    export default Config;
  }
