import * as functions from "firebase-functions";
const admin = require("firebase-admin");
const { onRequest } = require("firebase-functions/v2/https");
admin.initializeApp();
var cors = require("cors");
const db = admin.firestore();
