import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { v1 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDCarRqgo2HNHPWHza6Vp33-OeyLH9G4vQ",
  authDomain: "dedmet-26c91.firebaseapp.com",
  projectId: "dedmet-26c91",
  storageBucket: "dedmet-26c91.appspot.com",
  messagingSenderId: "1000978163574",
  appId: "1:1000978163574:web:2dc943f96690368160fc57",
  measurementId: "G-ET1J7B1BS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const handler: (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => void = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method == "POST") {
    const body = req.body;
    // const body = req.data;
    console.log(body);
    try {
      console.log(req.body.passthrough);
      const licenseKey = v1();
      const docRef = await addDoc(collection(db, "users"), {
        ...JSON.parse(body.passthrough as string),
        licenseKey,
      });
      console.log("Document written with ID: ", docRef.id);
      res.status(200).send({ msg: "Transaction Hooked" });
    } catch (e) {
      console.error("Error adding document: ", e);
      res.status(500).send({ msg: "Server Error" });
    }
    return;
  }
};

export default handler;
