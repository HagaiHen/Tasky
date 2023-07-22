// import {initializeApp} from "firebase/app"
// import {getAuth} from "firebase/auth"
// /**
//  * Singleton connector class to hold firebase app throughout the project.
//  */
// class FireBaseConnector {
//     constructor() {
//       this.app = null;
//       this.Auth = null;
//     };
//     App (firebaseConfig = null){
//       if (this.app != null || firebaseConfig == null) {
//         return this.app;
//       }
//       this.app = initializeApp(firebaseConfig);
//       return this.app;
//     };
//     getAuth (){
//       if (this.Auth != null) {
//         return this.Auth;
//       }
//       if (this.app == null) {
//         return null;
//       }
//       this.Auth = getAuth(this.app);
//       return this.Auth;
//     };
// };
  
// const instance = new FireBaseConnector();
// export default instance;

