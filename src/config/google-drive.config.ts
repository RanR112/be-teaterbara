import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!),
});

export const drive = google.drive({
    version: "v3",
    auth,
});
