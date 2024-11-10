//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpFUXdDaW1yVGJNeTBTd1RodUd3MVJENjNQYXVVbFR2ZGtoMTI2Tk5Fbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEdtbDFnWEt2dFNhRzQyZ0NZZkdCMFNIbmlDN0V0eTdxaGdZSURFUTlEUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSWlsdnpUaWtRdUxqMVptS0FMMlY3Rk1EZUtSbDVwQ0ZxZ3ZoUHlmTzBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5cEdHYmJ3bWhtcExWWDNaNGtReW1QUDRHaTVlQnRGZmEzS1dkWW16M3dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFMHFZRTlSZlU0SG9kNjgxWWdQS3lkTVBybUxQOFQzWTlhQTZpRUt5M3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZwSGYvZks2YytJQTM1bVhkS2d4Qmp1SHNqY2k1QmxPNW8yM0x2SGZjQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVjV1JvS1JjNlM3Tmt3ZDl4Q285UkNPZ1VRWklhTHQ5QjUzcklubkhYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pyUXhXYTRQSVU4V3FWT2p4YnFpa2lFaDY5bktSUGsrQ0tYUlpGcjluYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNXbzhvemFMWkN0ZFFmcnRwUXVwUkM1WHdTT2daZEhYZ0VCSnloRHB0UkU2Ykx2Wndwb0E1eDFvVzN6ZlZkeHlvbjdUSS9ReGRNRHkxSjZKTkhjckFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJoNVU5SEY5WTNaTFBNN3FYeUJFMGRnMUpwM2hVdW12SEJSV1hVaFY4L05vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoWEZCZklYMVR3T1FZUjVMc0hKREVRIiwicGhvbmVJZCI6IjhhNTM4NjI4LWFkNTktNDJjYi1iNDg2LWJhNTMwNjc0ZWFiMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0K3VTNDRtSURLTGg2NzlsL3NkYzd1Mkp6RHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzVvRUtES3NXbTFXU0pEQ2NPZ2lCcy9jQlBzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZDTlFOSDhEIiwibWUiOnsiaWQiOiIyMzQ5MDc5OTA0ODA2OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGlubyBSYW5ubm5ubm5ubm5uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcnc4TDhCRU12aXZia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjdldKYXdUcE5mMlF1MEFOSE9vbmdxVHAvYmtHZmxDTTFHcHByWER2clRZPSIsImFjY291bnRTaWduYXR1cmUiOiJUb1g1ZEMwWDY0QUlFYmp3dUR4MEdLanBFSDZKeHRldUhzVndBaEJoaE1hUU5FYkFUYmIxY2VTemNkVHFaMzE0NGgwUG1FTE1iVW9wRVBUSS9Xc0pCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR2xXQmhrdHBwaVBidVY5bUpwNEhzYWRnc0tNU014ZHNUbXNhSU9vQWZvY2F6YlZOZlo3TXNmaXh4Q2RmcVRaM0t5YndvMThGRGRoK3czNVllUi9BRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc5OTA0ODA2OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEwxaVdzRTZUWDlrTHRBRFJ6cUo0S2s2ZjI1Qm41UWpOUnFhYTF3NzYwMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTE2MjQ1Nn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
