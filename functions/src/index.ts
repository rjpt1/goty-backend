import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firestore-grafica-73b21-default-rtdb.firebaseio.com"
  });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({
    mensaje: "Hola mundo desde funciones Firebase!"});
});

const db = admin.firestore();
export const getgoty = functions.https.onRequest(async(request, response) => {

  // const nombre = request.query.nombre || 'Sin nombre';
  // response.json({
  //   nombre  
  // });

  const gotyRef = db.collection('goty');
  const docsSnap = await gotyRef.get();
  const juegos = docsSnap.docs.map( doc => doc.data() );
  response.json(juegos);


});
