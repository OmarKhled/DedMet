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
    console.log(body);
    const passthrough: string = body.passthrough as string;
    const data = JSON.parse(passthrough);
    try {
      const isStringified = (str: string) => {
        try {
          return JSON.parse(str);
        } catch (err) {
          return false;
        }
      };
      if (isStringified(passthrough)) {
        const licenseKey = v1().split("-")[0];
        const docRef = await addDoc(collection(db, "users"), {
          ...data,
          licenseKey,
          p_currency: body.p_currency,
          p_price: body.p_price,
          p_order_id: body.p_order_id,
          p_coupon_savings: body.p_coupon_savings,
          p_coupon: body.p_coupon,
        });
        console.log(
          body.p_price,
          data.email,
          data,
          body.passthrough,
          typeof data
        );
        // sendEmail(data, licenseKey);
        console.log(
          "Document written with ID: ",
          docRef.id,
          "License Key of ",
          licenseKey
        );
        res.status(200).send(licenseKey);
      } else {
        res.status(500).send({ msg: "Passthrough data don't exist" });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      res.status(500).send({ msg: "Server Error", error: e });
    }
    return;
  } else {
    res.status(500).send({ msg: "Invalid request method" });
  }
};

export default handler;
