import admin, { auth } from "firebase-admin";

// to prevent the creation of multiple apps
if (!admin.apps.length) {
  const adminSdkKey = JSON.parse(process.env.FIREBASE_ADMIN_SDK_KEY!);
  admin.initializeApp({
    credential: admin.credential.cert(adminSdkKey),
  });
}

// generate custom token to authorize firestore requests on behalf of the User
export const generateCustomToken = async (uid: string) => {
  const customToken = await auth().createCustomToken(uid);
  return customToken;
};
