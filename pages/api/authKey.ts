import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  DocumentData,
} from "firebase/firestore";

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
    const date = new Date();
    const key: string = req.body.key;
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("licenseKey", "==", key));
      const response = await getDocs(q);
      if (response.size > 0) {
        const user = response.docs[0].data();
        console.log(user);
        if (user.expiresAt > date.getTime()) {
          res.status(200).send({ user: user });
        } else {
          res.status(200).send({ msg: "Expired License" });
        }
      } else {
        res.status(200).send({ msg: "Invalid License" });
      }
    } catch (error) {
      res.status(200).send({ msg: "Server Error" });
    }
  }
};

export default handler;
