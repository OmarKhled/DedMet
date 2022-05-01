import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import Cors from "cors";
import initMiddleware from "../../lib/initMiddleware";

const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

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
  await cors(req, res);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  if (req.method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  console.log("req", req.method);
  if (req.method == "POST") {
    const date = new Date();
    const key: string = req.body.key;
    console.log("key ", key, " post");
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("licenseKey", "==", key));
      const response = await getDocs(q);
      // console.log(response.docs);
      if (response.size > 0) {
        const user = response.docs[0].data();
        console.log(user);
        if (user.expiresAt > date.getTime()) {
          res.send({ user: user });
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
  // res.send({ msg: "Take care" });
  res.end();
};

export default handler;
