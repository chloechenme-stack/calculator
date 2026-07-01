const defaultProducts = [
  { brand: "Alpha", wholesaler: "MYLEC / ENERGY SPURT", inverter: "Alpha 5kW / SMILE-G3-S5-INV", battery: "9.3kWh / SMILE-G3-BAT-9.3S", inv: 2100, invQty: 1, bat: 2750, batQty: 2, batUnit: 9.3, panels: 0, panelPrice: 125, margin: 1.3, min: 6995, phaseQty: 1, baseBackup: 1, baseRemoval: 10, baseEnclosure: 1 },
  { brand: "Alpha", wholesaler: "MYLEC / ENERGY SPURT", inverter: "Alpha 5kW AC couple / SMILE-G3-B5-INV", battery: "9.3kWh / SMILE-G3-BAT-9.3S", inv: 2100, invQty: 1, bat: 2750, batQty: 2, batUnit: 9.3, panels: 0, panelPrice: 125, margin: 1.3, min: 6595, acCoupled: true },
  { brand: "Growatt", wholesaler: "Growatt", inverter: "Growatt 5kW / SPH 5000TL-HUB", battery: "5kWh / ALP 5.0L-E1", inv: 1450, invQty: 1, bat: 1450, batQty: 3, batUnit: 5, panels: 14, panelPrice: 125, margin: 1.3, min: 6595, baseBackup: 1, baseEnclosure: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 5kW 1P / GW5K-EHA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 1550, invQty: 1, bat: 2684, batQty: 4, batUnit: 8, panels: 20, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseDouble: 1, enclosurePrice: 638, baseEnclosure: 1, teslaEvPrice: 800 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 10kW 1P / GW9.999K-EHA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2350, invQty: 1, bat: 2684, batQty: 3, batUnit: 8, panels: 0, panelPrice: 125, margin: 1.25, min: 6595, baseBackup: 1, teslaEvPrice: 800, teslaEvQty: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 5kW 3P / GW5K-ETA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2150, invQty: 1, bat: 2684, batQty: 3, batUnit: 8, panels: 0, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseRemoval: 15, baseEnclosure: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 10kW 3P / GW9.999K-ETA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2500, invQty: 1, bat: 2684, batQty: 4, batUnit: 8, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseDouble: 1, baseEnclosure: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 15kW 3P / GW15K-ETA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2800, invQty: 1, bat: 2684, batQty: 5, batUnit: 8, panels: 0, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseRemoval: 20, switchQty: 1, teslaEvPrice: 800, sigEvQty: 1, enclosurePrice: 640 },
  { brand: "Sigenergy", wholesaler: "ENERGY SPURT", inverter: "Sigenergy 5kW single phase / SigenStor-5S", battery: "8kWh Sigenergy", inv: 1750, invQty: 1, bat: 3700, batQty: 2, batUnit: 8, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, backupPrice: 1500, baseEnclosure: 1 },
  { brand: "Sigenergy", wholesaler: "ENERGY SPURT", inverter: "Sigenergy 5kW 3 phase / SigenStor-5T", battery: "8kWh Sigenergy", inv: 2650, invQty: 1, bat: 3700, batQty: 0, batUnit: 8, panels: 14, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, backupPrice: 2000 },
  { brand: "Sigenergy", wholesaler: "ENERGY SPURT", inverter: "Sigenergy 10kW single phase / SigenStor-10S", battery: "8kWh Sigenergy", inv: 2700, invQty: 1, bat: 3700, batQty: 4, batUnit: 8, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, backupPrice: 2000, enclosurePrice: 638, baseEnclosure: 1 },
  { brand: "Sigenergy", wholesaler: "ENERGY SPURT", inverter: "Sigenergy 10kW 3 phase / SigenStor-10T", battery: "8kWh Sigenergy", inv: 2900, invQty: 1, bat: 3700, batQty: 4, batUnit: 8, panels: 0, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, backupPrice: 2000, baseRemoval: 21, baseEnclosure: 1 },
  { brand: "Sigenergy", wholesaler: "ENERGY SPURT", inverter: "Sigenergy 15kW 3 phase / SigenStor-15T", battery: "8kWh Sigenergy", inv: 3900, invQty: 1, bat: 3700, batQty: 4, batUnit: 8, panels: 33, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, backupPrice: 2000, baseBackup: 1, baseRemoval: 30, baseDouble: 1 },
  { brand: "FoxESS", wholesaler: "ONE STOP WAREHOUSE", inverter: "FOXESS 5kW single phase / H1-5.0-E-G2", battery: "5.99kWh / FoxESS CQ6", inv: 1550, invQty: 1, bat: 1970, batQty: 7, batUnit: 5.99, panels: 0, panelPrice: 125, margin: 1.25, min: 6595 },
  { brand: "FoxESS", wholesaler: "ONE STOP WAREHOUSE", inverter: "FOXESS 5kW 3 phase / H3-5.0-Smart", battery: "5.99kWh / FoxESS CQ6", inv: 2350, invQty: 1, bat: 1970, batQty: 5, batUnit: 5.99, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseRemoval: 12, baseEnclosure: 1 },
  { brand: "FoxESS", wholesaler: "ONE STOP WAREHOUSE", inverter: "FOXESS 10kW single phase / KH10", battery: "5.99kWh / FoxESS CQ6", inv: 2550, invQty: 1, bat: 1970, batQty: 7, batUnit: 5.99, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, baseBackup: 1, baseRemoval: 22 },
  { brand: "FoxESS", wholesaler: "ONE STOP WAREHOUSE", inverter: "FOXESS 10kW 3 phase / H3-10.0-Smart", battery: "5.99kWh / FoxESS CQ6", inv: 2750, invQty: 1, bat: 1970, batQty: 4, batUnit: 5.99, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseRemoval: 12, baseEnclosure: 1 },
  { brand: "FoxESS", wholesaler: "ONE STOP WAREHOUSE", inverter: "FOXESS 15kW 3 phase / H3-15.0-Smart", battery: "5.99kWh / FoxESS CQ6", inv: 3350, invQty: 1, bat: 1970, batQty: 6, batUnit: 5.99, panels: 7, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseEnclosure: 1 },
  { brand: "Tesla", wholesaler: "Tesla", inverter: "Tesla PW3", battery: "PW3 13.5kWh", inv: 10620, invQty: 0, bat: 10620, batQty: 1, batUnit: 13.5, panels: 8, panelPrice: 125, margin: 1.25, min: 6595, baseBackup: 1, switchQty: 1 },
  { brand: "Anker", wholesaler: "OSW", inverter: "Anker 5kW / X1-H5K-S", battery: "5kWh / X1-B5-H", inv: 1650, invQty: 1, bat: 2410, batQty: 5, batUnit: 5, panels: 0, panelPrice: 125, margin: 1.3, min: 6595 },
  { brand: "Sungrow", wholesaler: "ONE STOP WAREHOUSE", inverter: "Sungrow Hybrid 5kW 1 phase", battery: "5kWh Sungrow", inv: 2925, invQty: 1, bat: 2840, batQty: 4, batUnit: 5, panels: 0, panelPrice: 108, margin: 1.25, min: 6595 },
  { brand: "Sungrow", wholesaler: "ONE STOP WAREHOUSE", inverter: "Sungrow Hybrid 5kW 3 phase", battery: "5kWh Sungrow", inv: 3975, invQty: 1, bat: 2840, batQty: 5, batUnit: 5, panels: 19, panelPrice: 108, margin: 1.25, min: 6595, phaseQty: 1 },
  { brand: "Sungrow", wholesaler: "ONE STOP WAREHOUSE", inverter: "Sungrow Hybrid 10kW 1 phase", battery: "5kWh Sungrow", inv: 3925, invQty: 1, bat: 2840, batQty: 6, batUnit: 5, panels: 28, panelPrice: 108, margin: 1.25, min: 6595, baseRemoval: 18 },
  { brand: "Sungrow", wholesaler: "ONE STOP WAREHOUSE", inverter: "Sungrow Hybrid 10kW 3 phase", battery: "5kWh Sungrow", inv: 4575, invQty: 1, bat: 2840, batQty: 5, batUnit: 5, panels: 0, panelPrice: 108, margin: 1.25, min: 6595, phaseQty: 1 },
  { brand: "Sungrow", wholesaler: "ONE STOP WAREHOUSE", inverter: "Sungrow Hybrid 15kW 3 phase", battery: "5kWh Sungrow", inv: 5170, invQty: 1, bat: 2840, batQty: 5, batUnit: 5, panels: 0, panelPrice: 108, margin: 1.25, min: 6595, phaseQty: 1 },
  { brand: "Sungrow", wholesaler: "ONE STOP WAREHOUSE", inverter: "Sungrow Hybrid 25kW 3 phase", battery: "5kWh Sungrow", inv: 7200, invQty: 1, bat: 2840, batQty: 7, batUnit: 5, panels: 0, panelPrice: 108, margin: 1.25, min: 6595, phaseQty: 1 },
  { brand: "Alpha New", wholesaler: "DMG / MYLEC", inverter: "Alpha Smile 5 inverter / DC / AC coupled", battery: "SMILE-13.3kWh / DO NOT SELL YET", inv: 2100, invQty: 1, bat: 3600, batQty: 2, batUnit: 13.3, panels: 0, panelPrice: 125, margin: 1.3, min: 6595 },
  { brand: "Alpha New", wholesaler: "DMG / MYLEC", inverter: "Alpha Smile 5 inverter / PV max 7.5kW", battery: "SMILE-15kWh / NOT CEC LISTED", inv: 2100, invQty: 1, bat: 3300, batQty: 1, batUnit: 15, panels: 14, panelPrice: 125, margin: 1.3, min: 6595 }
];

let products = [...defaultProducts];

const LEON_SHEET_PROFILE = {
  title: "Leon Sales sheet",
  headerRow: 3,
  productStartRow: 5,
  finalPriceColumn: "AW",
  identityHeaders: ["INVERTER MODEL", "BATTERY MODEL"]
};

const WA_BATTERY_REBATE = 1300;
const DEFAULT_STC_PRICE = 38;
const DEFAULT_STC_FACTOR = 6.8;
const USE_PROMO_FLOOR = true;

let activeSheetContext = null;
let sheetSyncTimer = null;
let sheetSyncVersion = 0;

const extraDefs = [
  ["splits", "Extra solar splits", 200],
  ["optimizer", "Optimizer", 70],
  ["removal", "Panel removal", 40],
  ["rewiring", "Panel rewiring", 40],
  ["double", "Double storey", 2000],
  ["switch", "Switchboard upgrade", 1650],
  ["backup", "Essential loads backup", 600],
  ["wholeHome", "Whole-house backup", 2000],
  ["tesla", "Tesla EV charger", 1995],
  ["sigEv", "Sigenergy AC EV charger", 1995],
  ["enclosure", "External enclosure", 440]
];

const pylonNotes = {
  Sigenergy: `* DC coupled
(Replace Existing Inverter if there is any)
* Estimated installation: July 2026
 (upon all approvals granted)

* SigEnergy SigenStor Dimensions (All-in-One, Single Stack, 18/27/36kWh):
850W x 260D x 910/1180/1450H mm.
Garage install: Add 100mm depth for bollard;
Height needs at least 300 mm clearance to ceiling;
Width needs at least 300 mm extra each side;
Exit path needs at least 1 m clear width after battery installation;
Exact safety clearances case-by-case.

* EV Charger Installation Optional
(Install-only: $800 or Charger+Install: $1,995; Call-out if seperate install: $300)

* Off Peak Charging feature available
* Over 5kW Inverter:
 - Export limit 1.5kw rule apply
 - Not eligible for Synergy Feed-in tariffs
 - Subject to Western Power approval

* Spare Tiles Required for Tile Roof installations
(prepare 10-15 tiles for replacing existing damage or minor breakage)
* Customer to ensure ground is levelled prior to install,
and a shade cover is fitted within 2 days post installation.

* Finance: $10k Govt interest-free loan via Plenti (Income <$210k, ~20% approval rate);
Alternative Green Loans: Brighte (from 7.99%, up to $55k) or Plenti (from 9.99%, up to $45k).
Terms up to 10 years. (Subject to approval).

* Meter Upgrade/reprogram Fee not included (charged by Retailer).
Western Power will swap analog meters for smart meters within 12 business days post installation.
The system must remain OFF until "Approval to Operate" is received.

* DMG in-house installation team:
https://www.youtube.com/watch?v=rHWbnM1OBy8/
* DMG recent installation projects:
https://dmgsolar.com.au/installations/
* DMG reviews on Google Maps:
https://maps.app.goo.gl/6M1xGfUHEaWAs252A?g_st=ic/`,
  GoodWe: `* DC coupled,
(Replace Existing Inverter if there is any)
* Estimated installation: July 2026
 (upon all approvals granted)

* GoodWe ESA Dimensions (All-in-One, Single Stack, 16/24/32kWh):
800W x 270D x 966/1259/1552H mm.
Garage install: Add 100mm depth for bollard;
Height needs at least 300 mm clearance to ceiling;
Width needs at least 300 mm extra each side;
Exit path needs at least 1 m clear width after battery installation;
Exact safety clearances case-by-case.

* EV Charger Installation Optional
(Install-only: $800 or Charger+Install: $1,995; Call-out if seperate install: $300)

* Off Peak Charging feature available
* Over 5kW Inverter:
 - Export limit 1.5kw rule apply
 - Not eligible for Synergy Feed-in tariffs
 - Subject to Western Power approval
* 5kW Inverter: eligible for Synergy Feed-in tariffs

* Spare Tiles Required for Tile Roof installations
(prepare 10-15 tiles for replacing existing damage or minor breakage)
* Customer to ensure ground is levelled prior to install, and a shade cover is fitted within 2 days post installation.

* Finance: $10k Govt interest-free loan via Plenti (Income <$210k, ~20% approval rate);
Alternative Green Loans: Brighte (from 7.99%, up to $55k) or Plenti (from 9.99%, up to $45k).
Terms up to 10 years. (Subject to approval).

* Meter Upgrade/reprogram Fee not included (charged by Retailer).
Western Power will swap analog meters for smart meters within 12 business days post installation.
The system must remain OFF until "Approval to Operate" is received.

* DMG in-house installation team:
https://www.youtube.com/watch?v=rHWbnM1OBy8/
* DMG recent installation projects:
https://dmgsolar.com.au/installations/
* DMG reviews on Google Maps:
https://maps.app.goo.gl/6M1xGfUHEaWAs252A?g_st=ic/`,
  FoxESS: `* DC coupled,
(Replace Existing Inverter if there is any)
* Estimated installation: July 2026
 (upon all approvals granted)

* FoxESS CQ7 Dimensions (Split, Single Stack, 28/42kWh):
660W x 360D x 730/1040H mm.
Garage install: Add 100mm depth for bollard;
Height needs at least 300 mm clearance to ceiling;
Width needs at least 300 mm extra each side;
Exit path needs at least 1 m clear width after battery installation;
Exact safety clearances case-by-case.

* EV Charger Installation Optional
(Install-only: $800 or Charger+Install: $1,995; Call-out if seperate install: $300)

* Off Peak Charging feature available
* Over 5kW Inverter:
 - Export limit 1.5kw rule apply
 - Not eligible for Synergy Feed-in tariffs
 - Subject to Western Power approval

* Spare Tiles Required for Tile Roof installations
(prepare 10-15 tiles for replacing existing damage or minor breakage)
* Customer to ensure ground is levelled prior to install, and a shade cover is fitted within 2 days post installation.

* Finance: $10k Govt interest-free loan via Plenti (Income <$210k, ~20% approval rate);
Alternative Green Loans: Brighte (from 7.99%, up to $55k) or Plenti (from 9.99%, up to $45k).
Terms up to 10 years. (Subject to approval).

* Meter Upgrade/reprogram Fee not included (charged by Retailer).
Western Power will swap analog meters for smart meters within 12 business days post installation.
The system must remain OFF until "Approval to Operate" is received.

* DMG in-house installation team:
https://www.youtube.com/watch?v=rHWbnM1OBy8/
* DMG recent installation projects:
https://dmgsolar.com.au/installations/
* DMG reviews on Google Maps:
https://maps.app.goo.gl/6M1xGfUHEaWAs252A?g_st=ic/`,
  Growatt: `* DC coupled
(Replace Existing Inverter if there is any)
* Estimated installation: July 2026
 (upon all approvals granted)

* Growatt Dimensions (All-in-One, Single Stack, 15kWh):
690W x 186D x 1692H mm.
Garage install: Add 100mm depth for bollard;
Height needs at least 300 mm clearance to ceiling;
Width needs at least 300 mm extra each side;
Exit path needs at least 1 m clear width after battery installation;
Exact safety clearances case-by-case.

* EV Charger Installation Optional
(Install-only: $800 or Charger+Install: $1,995; Call-out if seperate install: $300)

* Off Peak Charging feature available
* 5kW Inverter: eligible for Synergy Feed-in tariffs

* Spare Tiles Required for Tile Roof installations
(prepare 10-15 tiles for replacing existing damage or minor breakage)
* Customer to ensure ground is levelled prior to install,
and a shade cover is fitted within 2 days post installation.

* Finance: $10k Govt interest-free loan via Plenti (Income <$210k, ~20% approval rate);
Alternative Green Loans: Brighte (from 7.99%, up to $55k) or Plenti (from 9.99%, up to $45k).
Terms up to 10 years. (Subject to approval).

* Meter Upgrade/reprogram Fee not included (charged by Retailer).
Western Power will swap analog meters for smart meters within 12 business days post installation.
The system must remain OFF until "Approval to Operate" is received.

* DMG in-house installation team:
https://www.youtube.com/watch?v=rHWbnM1OBy8/
* DMG recent installation projects:
https://dmgsolar.com.au/installations/
* DMG reviews on Google Maps:
https://maps.app.goo.gl/6M1xGfUHEaWAs252A?g_st=ic/`
};

const generalPylonNotes = [
  "* Tile/Tin roof, Single/Double storey, 1/3 phase",
  "* Panel Removal & Disposal",
  "* Panel Rewiring to New Hybrid Inverter",
  "* External Enclosure Box (if needed)",
  "* $10k Govt interest-free loan via Plenti (Income <$210k, ~20% approval rate), proceed if declined",
  "* Switchboard upgrade required due to asbestos compliance",
  "* Blackout Protection NOT Included (Optional essential-load backup: $600 for 2 circuits, usually fridge and lights)",
  "* WA REBATE -- Only Eligible for Australian Citizens/PR & Synergy VPP Participants & DC Coupling"
];

const $ = (id) => document.getElementById(id);
const setText = (id, value) => {
  const element = $(id);
  if (element) element.textContent = value;
};
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[char]);
const fmt = (n) => new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);
const num = (value) => Number.parseFloat(value) || 0;
let current = 0;
let googleAccessToken = "";
let googleTokenClient = null;

function setSourceStatus(message, type = "") {
  $("sourceStatus").textContent = message;
  $("sourceStatus").className = `source-status ${type}`.trim();
}

function parseSheetTarget(input) {
  const url = new URL(input.trim());
  const match = url.pathname.match(/\/spreadsheets\/d\/([^/]+)/);
  if (!match) throw new Error("Google Sheet 链接格式不正确。");
  return {
    spreadsheetId: match[1],
    gid: Number(url.searchParams.get("gid") || new URLSearchParams(url.hash.replace(/^#/, "")).get("gid") || 0)
  };
}

function toCsvUrl(input) {
  const trimmed = input.trim();
  if (!trimmed) return "";
  const url = new URL(trimmed);
  if (url.searchParams.get("output") === "csv" || url.searchParams.get("format") === "csv") return url.toString();
  const match = url.pathname.match(/\/spreadsheets\/d\/([^/]+)/);
  if (!match) return url.toString();
  const gid = url.searchParams.get("gid") || new URLSearchParams(url.hash.replace(/^#/, "")).get("gid") || "0";
  return `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv&gid=${gid}`;
}

function waitForGoogleIdentity() {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const timer = setInterval(() => {
      if (window.google?.accounts?.oauth2) {
        clearInterval(timer);
        resolve();
      } else if (Date.now() - started > 8000) {
        clearInterval(timer);
        reject(new Error("Google 登录脚本还没加载成功，请刷新页面再试。"));
      }
    }, 100);
  });
}

async function requestGoogleAccessToken() {
  const clientId = $("googleClientId").value.trim();
  if (!clientId) {
    throw new Error("请先填写 Google OAuth Client ID。");
  }

  localStorage.setItem("googleClientId", clientId);
  await waitForGoogleIdentity();
  return new Promise((resolve, reject) => {
    googleTokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      callback: (response) => {
        if (response.error) {
          reject(new Error(response.error));
          return;
        }
        googleAccessToken = response.access_token;
        resolve(googleAccessToken);
      }
    });
    googleTokenClient.requestAccessToken({ prompt: "consent" });
  });
}

async function fetchGoogleJson(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${googleAccessToken}`
    }
  });
  const data = await response.json();
  if (!response.ok) {
    const message = data.error?.message || "Google Sheets API 请求失败。";
    throw new Error(message);
  }
  return data;
}

function quoteSheetTitle(title) {
  return `'${String(title).replace(/'/g, "''")}'`;
}

function columnLettersToIndex(letters) {
  return String(letters || "").toUpperCase().split("").reduce((total, letter) => {
    if (letter < "A" || letter > "Z") return total;
    return total * 26 + letter.charCodeAt(0) - 64;
  }, 0) - 1;
}

function quotedA1Range(sheetTitle, columnLetters, rowNumber) {
  return `${quoteSheetTitle(sheetTitle)}!${String(columnLetters).toUpperCase()}${rowNumber}`;
}

async function writeGoogleValues(spreadsheetId, data) {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchUpdate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${googleAccessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      valueInputOption: "USER_ENTERED",
      data
    })
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error?.message || "Google Sheets API 写入失败。");
  }
  return payload;
}

async function loadPrivateSheetRows(sheetUrl) {
  const { spreadsheetId, gid } = parseSheetTarget(sheetUrl);
  const meta = await fetchGoogleJson(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties`);
  const sheet = meta.sheets?.find((item) => item.properties.title === LEON_SHEET_PROFILE.title)
    || meta.sheets?.find((item) => Number(item.properties.sheetId) === gid)
    || meta.sheets?.[0];
  if (!sheet) throw new Error("找不到这个 spreadsheet 里的工作表。");

  const range = `${quoteSheetTitle(sheet.properties.title)}!A:ZZ`;
  const values = await fetchGoogleJson(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?majorDimension=ROWS`);
  const formulas = await fetchGoogleJson(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?ranges=${encodeURIComponent(range)}&includeGridData=true&fields=sheets(data(rowData(values(userEnteredValue))))`);
  const formulaRows = formulas.sheets?.[0]?.data?.[0]?.rowData || [];
  return {
    spreadsheetId,
    title: sheet.properties.title,
    rows: values.values || [],
    formulas: formulaRows.map((row) => (row.values || []).map((cell) => cell.userEnteredValue?.formulaValue || ""))
  };
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted && char === '"' && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (!quoted && char === ",") {
      row.push(cell);
      cell = "";
    } else if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function money(value) {
  const cleaned = String(value || "").trim().replace(/[$,\s]/g, "");
  return /^-?\d+(\.\d+)?$/.test(cleaned) ? Number(cleaned) : 0;
}

function normalizeHeader(value) {
  return cleanText(value).toUpperCase();
}

function columnIndexToLetters(index) {
  let value = index + 1;
  let letters = "";
  while (value > 0) {
    const remainder = (value - 1) % 26;
    letters = String.fromCharCode(65 + remainder) + letters;
    value = Math.floor((value - 1) / 26);
  }
  return letters;
}

function buildHeaderMap(headers) {
  const normalized = headers.map(normalizeHeader);
  const find = (...patterns) => {
    const wanted = patterns.map((pattern) => pattern.map((word) => word.toUpperCase()));
    const index = normalized.findIndex((header) => wanted.some((words) => words.every((word) => header.includes(word))));
    return index >= 0 ? columnIndexToLetters(index) : "";
  };
  const findQtyNear = (...patterns) => {
    const labelColumn = find(...patterns);
    if (!labelColumn) return "";
    const labelIndex = columnLettersToIndex(labelColumn);
    if (normalized[labelIndex]?.includes("QTY") || normalized[labelIndex]?.includes("QUANTITY")) {
      return labelColumn;
    }
    for (let index = labelIndex + 1; index < Math.min(normalized.length, labelIndex + 5); index += 1) {
      if (normalized[index] === "QTY" || normalized[index] === "QUANTITY" || normalized[index].includes("QTY")) {
        return columnIndexToLetters(index);
      }
    }
    return "";
  };

  return {
    inverterModel: find(["INVERTER", "MODEL"]),
    batteryModel: find(["BATTERY", "MODEL"]),
    batteryQty: findQtyNear(["BATTERY", "PRICE"], ["BATTERY", "MODEL"]),
    panelQty: find(["SOLAR", "PANELS"], ["PANEL", "QUANTITY"], ["PANEL", "QTY"]),
    splits: findQtyNear(["EXTRA", "SPLITS"], ["SPLITS"]),
    optimizer: findQtyNear(["OPTIMIZER"]),
    removal: findQtyNear(["PANEL", "REMOVAL"], ["REMOVAL"]),
    rewiring: findQtyNear(["PANEL", "REWIRING"], ["REWIRING"]),
    double: findQtyNear(["DOUBLE", "STOREY"], ["EXTRAS", "DOUBLE"]),
    switch: findQtyNear(["SWITCHBOARD"]),
    backup: findQtyNear(["ESSENTIAL", "LOADS", "BACKUP"]),
    wholeHome: findQtyNear(["WHOLE", "HOUSE", "BACKUP"], ["FULL", "HOME", "BACKUP"]),
    tesla: findQtyNear(["TESLA", "EV", "CHARGER"]),
    sigEv: findQtyNear(["SIGENERGY", "AC", "EV"], ["SIGENERGY", "EV"]),
    enclosure: findQtyNear(["EXTERNAL", "ENCLOSURE"])
  };
}

function labelForEditableColumn(headers, columnLetters) {
  const columnIndex = columnLetters ? columnLettersToIndex(columnLetters) : -1;
  if (columnIndex < 0) return "";

  const current = cleanText(headers[columnIndex]);
  if (current && !/^QTY|QUANTITY$/i.test(current)) return current;

  for (let index = columnIndex - 1; index >= Math.max(0, columnIndex - 4); index -= 1) {
    const label = cleanText(headers[index]);
    if (label && !/^QTY|QUANTITY$/i.test(label)) return label;
  }
  return current;
}

function buildEditableLabels(headers, headerMap) {
  return Object.fromEntries(extraDefs.map(([key, fallbackLabel]) => {
    return [key, labelForEditableColumn(headers, headerMap[key]) || fallbackLabel];
  }));
}

function extraLabel(key, fallbackLabel) {
  return activeSheetContext?.editableLabels?.[key] || fallbackLabel;
}

function getLeonValuesByField() {
  return {
    batteryQty: num($("batteryQty").value),
    panelQty: num($("panelQty").value),
    splits: num($("splitsQty").value),
    optimizer: num($("optimizerQty").value),
    removal: num($("removalQty").value),
    rewiring: num($("rewiringQty").value),
    double: num($("doubleQty").value),
    switch: num($("switchQty").value),
    backup: num($("backupQty").value),
    wholeHome: num($("wholeHomeQty").value),
    tesla: num($("teslaQty").value),
    sigEv: num($("sigEvQty").value),
    enclosure: num($("enclosureQty").value)
  };
}

function leonInputKey() {
  return JSON.stringify(getLeonValuesByField());
}

function applyDcCoupledAdjustment(sheetFinalPrice) {
  const dcCoupled = $("dcCoupled").checked;
  return {
    final: dcCoupled ? sheetFinalPrice : sheetFinalPrice + WA_BATTERY_REBATE,
    waRebate: dcCoupled ? WA_BATTERY_REBATE : 0,
    note: dcCoupled
      ? "DC Coupled / WA rebate applied"
      : `AC Coupled / no WA rebate, +${fmt(WA_BATTERY_REBATE)} added`
  };
}

async function writeLeonRowInputs(rowNumber, valuesByField) {
  if (!activeSheetContext) throw new Error("还没有加载 Leon Sales sheet。");
  const editableColumns = activeSheetContext.editableColumns || {};
  const formulaRow = activeSheetContext.formulas?.[rowNumber - 1] || [];
  const data = Object.entries(valuesByField)
    .map(([field, value]) => {
      const column = editableColumns[field];
      const columnIndex = column ? columnLettersToIndex(column) : -1;
      if (columnIndex >= 0 && formulaRow[columnIndex]) return null;
      return column
        ? { range: quotedA1Range(LEON_SHEET_PROFILE.title, column, rowNumber), values: [[value]] }
        : null;
    })
    .filter(Boolean);

  if (!data.length) {
    throw new Error("没有从第 3 行表头识别到可写入的数量列。");
  }

  return writeGoogleValues(activeSheetContext.spreadsheetId, data);
}

async function readLeonRowOutputs(rowNumber) {
  if (!activeSheetContext) throw new Error("还没有加载 Leon Sales sheet。");
  const finalPriceRange = quotedA1Range(LEON_SHEET_PROFILE.title, LEON_SHEET_PROFILE.finalPriceColumn, rowNumber);
  const payload = await fetchGoogleJson(`https://sheets.googleapis.com/v4/spreadsheets/${activeSheetContext.spreadsheetId}/values/${encodeURIComponent(finalPriceRange)}?valueRenderOption=UNFORMATTED_VALUE`);
  return {
    finalPrice: money(payload.values?.[0]?.[0]),
    finalPriceRange
  };
}

function inferBrand(inverter, wholesaler) {
  const haystack = `${inverter} ${wholesaler}`.toLowerCase();
  if (haystack.includes("sigenergy") || haystack.includes("sigen")) return "Sigenergy";
  if (haystack.includes("goodwe")) return "GoodWe";
  if (haystack.includes("fox")) return "FoxESS";
  if (haystack.includes("growatt")) return "Growatt";
  if (haystack.includes("sungrow")) return "Sungrow";
  if (haystack.includes("tesla") || haystack.includes("telsa")) return "Tesla";
  if (haystack.includes("anker")) return "Anker";
  if (haystack.includes("alpha")) return "Alpha";
  return cleanText(wholesaler).split("/")[0].trim() || "Other";
}

function inferBatteryUnit(battery, size, qty) {
  if (qty > 0 && size > 0) return size / qty;
  const match = String(battery || "").match(/(\d+(?:\.\d+)?)\s*kwh/i);
  return match ? Number(match[1]) : 0;
}

function isLeonProductRow(inverter, battery, finalPrice) {
  const combined = `${inverter} ${battery}`;
  const normalizedInverter = normalizeHeader(inverter);
  const sectionOnly = ["GOODWE", "SIGENERGY", "FOXESS", "FOX ESS", "GROWATT", "SUNGROW", "TESLA", "ANKER", "ALPHA"];
  const notePattern = /W\s*[*X×]\s*D\s*[*X×]\s*H|DIMENSIONS?|CLEARANCE|GARAGE INSTALL|INSTALL-ONLY|SPARE TILES|CUSTOMER TO|FINANCE|METER UPGRADE|WESTERN POWER|YOUTUBE|REVIEWS?|INV:\s*\d|BAT:\s*\d|DO NOT SELL|NOT CEC/i;

  return finalPrice > 0
    && !sectionOnly.includes(normalizedInverter)
    && !notePattern.test(combined);
}

function csvRowsToProducts(rows, formulas = [], profile = null) {
  const headerIndex = profile
    ? profile.headerRow - 1
    : rows.findIndex((row) => {
      const labels = row.map((cell) => cleanText(cell).toUpperCase());
      return labels.some((cell) => cell.includes("INVERTER MODEL")) && labels.some((cell) => cell.includes("BATTERY MODEL"));
    });
  if (headerIndex === -1) throw new Error("找不到 INVERTER MODEL / BATTERY MODEL 表头，请确认链接是产品价格页。");

  const headers = rows[headerIndex].map(normalizeHeader);
  const col = (...names) => {
    const wanted = names.map((name) => name.toUpperCase());
    return headers.findIndex((header) => wanted.some((name) => header === name || header.includes(name)));
  };
  const colWithWords = (...words) => {
    const wanted = words.map((word) => word.toUpperCase());
    return headers.findIndex((header) => wanted.every((word) => header.includes(word)));
  };
  const findQtyAfter = (startIndex) => {
    if (startIndex < 0) return -1;
    for (let index = startIndex + 1; index < Math.min(headers.length, startIndex + 5); index += 1) {
      if (headers[index] === "QTY" || headers[index] === "QUANTITY") return index;
    }
    return -1;
  };
  const masterSalesTotals = (row) => {
    const pairs = [
      ["Y", "Z"],
      ["AA", "AB"],
      ["AC", "AD"],
      ["AE", "AF"],
      ["AG", "AH"],
      ["AI", "AJ"],
      ["AK", "AL"],
      ["AM", "AN"],
      ["AO", "AP"],
      ["AQ", "AR"],
      ["AS", "AT"],
      ["AU", "AV"]
    ];

    const extrasTotal = pairs.reduce((total, [priceCol, qtyCol]) => {
      return total + money(row[columnLettersToIndex(priceCol)]) * money(row[columnLettersToIndex(qtyCol)]);
    }, 0);

    return {
      extras: extrasTotal,
      final: extrasTotal
    };
  };
  const get = (row, fallbackIndex, ...names) => {
    const index = col(...names);
    return row[index >= 0 ? index : fallbackIndex];
  };

  const wholesalerIdx = col("WHOLESALER");
  const inverterIdx = col("INVERTER MODEL");
  const inverterPriceIdx = col("INVERTER PRICE");
  const inverterQtyIdx = findQtyAfter(inverterPriceIdx);
  const batteryModelIdx = col("BATTERY MODEL");
  const batteryPriceIdx = col("BATTERY PRICE");
  const batteryQtyIdx = findQtyAfter(batteryPriceIdx);
  const batterySizeIdx = col("BATTERY SYSTEM SIZE");
  const panelPriceIdx = col("PANEL TRINA", "PANEL");
  const panelQtyIdx = col("SOLAR PANELS", "PANEL QUANTITY");
  const productTotalIdx = col("PRODUCT TOTAL");
  const gstCommIdx = col("GST +COMM", "GST");
  const sheetFinalIdx = col("SELL PRICE WITH EXTRAS") >= 0
    ? col("SELL PRICE WITH EXTRAS")
    : colWithWords("SELL", "PRICE", "EXTRA");
  const directFinalIdx = profile ? columnLettersToIndex(profile.finalPriceColumn) : sheetFinalIdx;
  const extraPair = (row, key, ...names) => {
    const priceIdx = col(...names);
    const qtyIdx = findQtyAfter(priceIdx);
    return {
      price: money(row[priceIdx]),
      qty: money(row[qtyIdx])
    };
  };

  let sectionBrand = "";
  const productStartIndex = profile ? profile.productStartRow - 1 : headerIndex + 1;
  const parsed = rows.slice(productStartIndex).map((row, rowOffset) => {
    const rowIndex = productStartIndex + rowOffset;
    const sheetRowNumber = rowIndex + 1;
    const wholesaler = cleanText(row[wholesalerIdx >= 0 ? wholesalerIdx : 0]);
    const inverter = cleanText(row[inverterIdx >= 0 ? inverterIdx : 1]);
    const battery = cleanText(row[batteryModelIdx >= 0 ? batteryModelIdx : 4]);
    const inv = money(row[inverterPriceIdx >= 0 ? inverterPriceIdx : 2]);
    const bat = money(row[batteryPriceIdx >= 0 ? batteryPriceIdx : 5]);

    if (!profile && inverter && !inv && !bat) {
      sectionBrand = inverter;
      return null;
    }
    if (!inverter || !battery || (!profile && !inv && !bat)) return null;

    const sheetYellowFinal = money(row[directFinalIdx]);
    if (profile && !isLeonProductRow(inverter, battery, sheetYellowFinal)) return null;

    const batteryQty = money(row[batteryQtyIdx >= 0 ? batteryQtyIdx : 6]);
    const batterySize = money(row[batterySizeIdx >= 0 ? batterySizeIdx : 7]);
    const productTotal = money(row[productTotalIdx >= 0 ? productTotalIdx : 14]);
    const gstComm = money(row[gstCommIdx >= 0 ? gstCommIdx : 15]);
    const margin = productTotal > 0 && gstComm > 0 ? gstComm / productTotal : 1.25;
    const brand = inferBrand(inverter, wholesaler || sectionBrand);
    const splits = extraPair(row, "splits", "EXTRA SPLITS");
    const optimizer = extraPair(row, "optimizer", "OPTIMIZER");
    const removal = extraPair(row, "removal", "PANEL REMOVAL");
    const rewiring = extraPair(row, "rewiring", "PANEL REWIRING");
    const doubleStorey = extraPair(row, "double", "EXTRAS DOUBLE", "DOUBLE STOREY");
    const switchboard = extraPair(row, "switch", "SWITCHBOARD");
    const backup = extraPair(row, "backup", "ESSENTIAL LOADS BACKUP");
    const wholeHome = extraPair(row, "wholeHome", "WHOLE HOUSE BACKUP");
    const tesla = extraPair(row, "tesla", "TESLA EV CHARGER");
    const sigEv = extraPair(row, "sigEv", "SIGENERGY AC EV");
    const enclosure8 = extraPair(row, "enclosure", "EXTERNAL ENCLOSURE BOX 8");
    const enclosure12 = extraPair(row, "enclosure", "EXTERNAL ENCLOSURE BOX 12");
    const enclosure = enclosure12.qty ? enclosure12 : enclosure8;
    const sheetTotals = profile ? { extras: 0, final: 0 } : masterSalesTotals(row);
    const sheetHiddenX = 0;
    const sheetBase = 0;
    const formulaRow = formulas[rowIndex] || [];
    const sheetFinalFormula = directFinalIdx >= 0 ? formulaRow[directFinalIdx] || "" : "";

    return {
      dynamic: true,
      sheetProfile: profile?.title || "",
      sheetRowNumber,
      sheetBase,
      sheetFinal: sheetYellowFinal,
      sheetYellowFinal,
      sheetHiddenX,
      sheetXFormula: "",
      sheetFinalFormula,
      sheetImportedExtras: sheetTotals.extras,
      extraDefaults: {
        splits: splits.qty,
        optimizer: optimizer.qty,
        removal: removal.qty,
        rewiring: rewiring.qty,
        double: doubleStorey.qty,
        switch: switchboard.qty,
        backup: backup.qty,
        wholeHome: wholeHome.qty,
        tesla: tesla.qty,
        sigEv: sigEv.qty,
        enclosure: enclosure.qty
      },
      extraPrices: {
        splits: splits.price || undefined,
        optimizer: optimizer.price || undefined,
        removal: removal.price || undefined,
        rewiring: rewiring.price || undefined,
        double: doubleStorey.price || undefined,
        switch: switchboard.price || undefined,
        backup: backup.price || undefined,
        wholeHome: wholeHome.price || undefined,
        tesla: tesla.price || undefined,
        sigEv: sigEv.price || undefined,
        enclosure: enclosure.price || undefined
      },
      brand,
      wholesaler: wholesaler || sectionBrand || brand,
      inverter,
      battery,
      inv,
      invQty: money(row[inverterQtyIdx >= 0 ? inverterQtyIdx : 3]) || 1,
      bat,
      batQty: batteryQty,
      batUnit: inferBatteryUnit(`${battery} ${batterySize || ""}`, batterySize, batteryQty),
      panels: money(row[panelQtyIdx >= 0 ? panelQtyIdx : 10]),
      panelPrice: money(row[panelPriceIdx >= 0 ? panelPriceIdx : 9]) || 125,
      margin: margin >= 1 && margin <= 1.5 ? margin : 1.25,
      min: 0,
      acCoupled: /ac\s*couple/i.test(inverter),
      doublePrice: doubleStorey.price || undefined,
      backupPrice: backup.price || undefined,
      teslaEvPrice: tesla.price || undefined,
      sigenergyEvPrice: sigEv.price || undefined,
      enclosurePrice: enclosure.price || undefined
    };
  }).filter(Boolean);

  if (!parsed.length) throw new Error("CSV 已读取，但没有找到可用产品行。");
  return parsed;
}

async function loadSheetData() {
  $("googlePrompt")?.classList.add("hidden");
  const button = $("loadSheetBtn");
  button.disabled = true;
  setSourceStatus(googleAccessToken ? "正在读取 Google Sheet..." : "正在授权并读取 Google Sheet...", "");
  try {
    let rows;
    let sourceName = "Google 登录数据";
    if (!googleAccessToken) {
      await requestGoogleAccessToken();
    }
    const result = await loadPrivateSheetRows($("sheetUrl").value);
    rows = result.rows;
    sourceName = `Google 登录数据：${result.title}`;
    const profile = result.title === LEON_SHEET_PROFILE.title ? LEON_SHEET_PROFILE : null;
    const headers = rows[(profile || LEON_SHEET_PROFILE).headerRow - 1] || [];
    const headerMap = buildHeaderMap(headers);
    if (profile && (!headerMap.inverterModel || !headerMap.batteryModel)) {
      throw new Error("Leon Sales sheet 第 3 行找不到 INVERTER MODEL / BATTERY MODEL 表头。");
    }
    activeSheetContext = profile
      ? {
        spreadsheetId: result.spreadsheetId,
        title: result.title,
        editableColumns: headerMap,
        editableLabels: buildEditableLabels(headers, headerMap),
        formulas: result.formulas
      }
      : null;
    products = csvRowsToProducts(rows, result.formulas, profile);
    current = 0;
    renderExtras();
    renderBrands();
    $("brandSelect").value = products[0].brand;
    renderProducts();
    const sheetFinalCount = products.filter((product) => product.sheetFinal).length;
    const sheetFinalStatus = sheetFinalCount
      ? `，其中 ${sheetFinalCount} 个读取到 AW 最终价`
      : "，但还没有读取到 AW 最终价";
    setSourceStatus(`已从 ${sourceName} 加载 ${products.length} 个产品配置${sheetFinalStatus}`, sheetFinalCount ? "ok" : "error");
  } catch (error) {
    activeSheetContext = null;
    products = [...defaultProducts];
    current = 0;
    renderExtras();
    renderBrands();
    renderProducts();
    setSourceStatus(`读取失败：${error.message} 当前仍使用内置数据。`, "error");
  } finally {
    button.disabled = false;
  }
}

function batteryStcs(kwh, factor) {
  const weighted = Math.min(kwh, 14) + Math.max(Math.min(kwh, 28) - 14, 0) * 0.6 + Math.max(Math.min(kwh, 50) - 28, 0) * 0.15;
  return Math.floor(weighted * factor);
}

function calculate(product) {
  const batQty = num($("batteryQty").value);
  const panelQty = num($("panelQty").value);
  const stcPrice = DEFAULT_STC_PRICE;
  const stcFactor = DEFAULT_STC_FACTOR;
  const batterySize = batQty * product.batUnit;
  const solarSize = panelQty * 475 / 1000;
  const extras = extraDefs.reduce((sum, [key]) => sum + num($(key + "Qty").value) * num($(key + "Price").value), 0);

  if (product.dynamic && product.sheetFinal && !product.sheetCalculationPending) {
    const sheetFinal = product.sheetFinal;
    const dcAdjustment = applyDcCoupledAdjustment(sheetFinal);
    return {
      batterySize,
      solarSize,
      batteryCredit: null,
      solarCredit: null,
      waRebate: dcAdjustment.waRebate,
      productTotal: null,
      gstComm: null,
      install: null,
      totalRebates: dcAdjustment.waRebate,
      baseSell: sheetFinal,
      extras,
      final: dcAdjustment.final,
      formulaFinal: dcAdjustment.final,
      sheetBase: 0,
      sheetHiddenX: product.sheetHiddenX || 0,
      sheetXFormula: product.sheetXFormula || "",
      sheetFinalFormula: product.sheetFinalFormula || "",
      sheetFinal,
      sheetYellowFinal: product.sheetYellowFinal || 0,
      sheetImportedExtras: product.sheetImportedExtras || 0,
      sheetDelta: dcAdjustment.final - sheetFinal,
      sheetPriceNote: dcAdjustment.note,
      promoFloor: 0,
      promoApplied: false
    };
  }

  const batteryCredit = batteryStcs(batterySize, stcFactor) * stcPrice;
  const solarCredit = solarSize * stcFactor * stcPrice;
  const waRebate = $("dcCoupled").checked && !product.acCoupled ? WA_BATTERY_REBATE : 0;
  const kit = 67 * panelQty;
  const productTotal = product.inv * product.invQty + product.bat * batQty + product.panelPrice * panelQty + kit * 1.4;
  const gstComm = productTotal * product.margin;
  const install = 2000 + 300 * solarSize + 30 * batterySize;
  const totalRebates = batteryCredit + solarCredit + waRebate;
  const baseSell = gstComm + install - totalRebates;
  const beforeFloor = baseSell + extras;
  const promoFloor = product.min || 0;
  const formulaFinal = USE_PROMO_FLOOR ? Math.max(promoFloor, beforeFloor) : beforeFloor;
  const sheetFinal = product.sheetCalculationPending ? 0 : product.sheetBase ? product.sheetBase + extras : product.sheetFinal || 0;
  const final = sheetFinal || formulaFinal;
  return {
    batterySize,
    solarSize,
    batteryCredit,
    solarCredit,
    waRebate,
    productTotal,
    gstComm,
    install,
    totalRebates,
    baseSell,
    extras,
    final,
    formulaFinal,
    sheetBase: product.sheetBase || 0,
    sheetHiddenX: product.sheetHiddenX || 0,
    sheetXFormula: product.sheetXFormula || "",
    sheetFinalFormula: product.sheetFinalFormula || "",
    sheetFinal,
    sheetYellowFinal: product.sheetCalculationPending ? 0 : product.sheetYellowFinal || 0,
    sheetImportedExtras: product.sheetImportedExtras || 0,
    sheetDelta: sheetFinal ? sheetFinal - formulaFinal : 0,
    promoFloor,
    promoApplied: USE_PROMO_FLOOR && promoFloor > beforeFloor
  };
}

function scheduleLeonSheetCalculation(product) {
  clearTimeout(sheetSyncTimer);
  if (!activeSheetContext || product.sheetProfile !== LEON_SHEET_PROFILE.title || !product.sheetRowNumber || !googleAccessToken) {
    return;
  }
  const inputKey = leonInputKey();
  if (product.sheetFinal && product.lastLeonInputKey === inputKey) {
    product.sheetCalculationPending = false;
    return;
  }

  const version = ++sheetSyncVersion;
  sheetSyncTimer = setTimeout(async () => {
    try {
      // Web input -> write editable quantities to the selected Leon Sales sheet row.
      // Google Sheet formulas calculate in that same row.
      // Then read AW{rowNumber} from the same row as the final customer price.
      await writeLeonRowInputs(product.sheetRowNumber, getLeonValuesByField());
      const outputs = await readLeonRowOutputs(product.sheetRowNumber);
      if (version !== sheetSyncVersion || products[current] !== product) return;
      product.lastLeonInputKey = inputKey;
      product.sheetFinal = outputs.finalPrice;
      product.sheetYellowFinal = outputs.finalPrice;
      product.sheetFinalRange = outputs.finalPriceRange;
      product.sheetCalculationPending = false;
      setSourceStatus(`已同步 Row ${product.sheetRowNumber}，读取 ${outputs.finalPriceRange}`, "ok");
      update({ skipSheetSync: true });
    } catch (error) {
      if (version !== sheetSyncVersion || products[current] !== product) return;
      product.sheetCalculationPending = false;
      setSourceStatus(`表格计算失败：${error.message} 当前使用本地 JavaScript fallback。`, "error");
      update({ skipSheetSync: true });
    }
  }, 350);
}

function setExtraDefaults(product) {
  const importedDefaults = product.extraDefaults || {};
  const defaults = {
    splits: importedDefaults.splits || 0,
    optimizer: importedDefaults.optimizer || 0,
    removal: product.dynamic ? importedDefaults.removal || 0 : product.baseRemoval || 0,
    rewiring: importedDefaults.rewiring || 0,
    double: product.dynamic ? importedDefaults.double || 0 : product.baseDouble || 0,
    switch: product.dynamic ? importedDefaults.switch || 0 : product.switchQty || 0,
    backup: product.dynamic ? importedDefaults.backup || 0 : product.baseBackup || 0,
    wholeHome: product.dynamic ? importedDefaults.wholeHome || 0 : 0,
    tesla: product.dynamic ? importedDefaults.tesla || 0 : product.teslaEvQty || 0,
    sigEv: product.dynamic ? importedDefaults.sigEv || 0 : product.sigEvQty || 0,
    enclosure: product.dynamic ? importedDefaults.enclosure || 0 : product.baseEnclosure || 0
  };
  const importedPrices = product.extraPrices || {};
  const prices = {
    splits: importedPrices.splits || 200,
    optimizer: importedPrices.optimizer || 70,
    removal: importedPrices.removal || 40,
    rewiring: importedPrices.rewiring || 40,
    double: product.doublePrice || 2000,
    switch: importedPrices.switch || 1650,
    backup: product.backupPrice || 600,
    wholeHome: importedPrices.wholeHome || 2000,
    tesla: product.teslaEvPrice || 1995,
    sigEv: product.sigenergyEvPrice || 1995,
    enclosure: product.enclosurePrice || 440
  };
  extraDefs.forEach(([key, , defaultPrice]) => {
    $(key + "Qty").value = defaults[key] || 0;
    $(key + "Price").value = prices[key] || defaultPrice;
  });
}

function renderExtras() {
  $("extrasList").innerHTML = extraDefs.map(([key, label, price]) => `
    <div class="extra-item">
      <label class="extra-price-field">
        <strong class="extra-label">${escapeHtml(extraLabel(key, label))}</strong>
        <input id="${key}Price" type="number" min="0" step="1" value="${price}" aria-label="${escapeHtml(extraLabel(key, label))} price">
      </label>
      <input class="extra-qty" id="${key}Qty" type="number" min="0" step="1" value="0" aria-label="${escapeHtml(extraLabel(key, label))} quantity">
    </div>
  `).join("");
  extraDefs.forEach(([key]) => {
    $(key + "Qty").addEventListener("input", update);
    $(key + "Price").addEventListener("input", update);
  });
}

function renderBrands() {
  const brands = [...new Set(products.map((p) => p.brand))];
  $("brandSelect").innerHTML = brands.map((brand) => `<option>${escapeHtml(brand)}</option>`).join("");
}

function productOptionLabel(product) {
  const rowPrefix = product.sheetRowNumber ? `Row ${product.sheetRowNumber} - ` : "";
  return `${rowPrefix}${product.inverter} / ${product.battery}`;
}

function renderProducts() {
  const brand = $("brandSelect").value;
  const list = products.map((p, index) => ({ ...p, index })).filter((p) => p.brand === brand);
  $("productSelect").innerHTML = list.map((p) => `<option value="${p.index}">${escapeHtml(productOptionLabel(p))}</option>`).join("");
  current = list[0]?.index || 0;
  $("productSelect").value = current;
  loadProduct();
}

function loadProduct() {
  clearTimeout(sheetSyncTimer);
  sheetSyncVersion += 1;
  products.forEach((item) => {
    item.sheetCalculationPending = false;
  });
  current = Number($("productSelect").value);
  const product = products[current];
  $("batteryQty").value = product.batQty;
  $("panelQty").value = product.panels;
  $("dcCoupled").checked = !product.acCoupled;
  setExtraDefaults(product);
  if (product.sheetProfile === LEON_SHEET_PROFILE.title && product.sheetFinal) {
    product.lastLeonInputKey = leonInputKey();
  }
  update();
}

function update(options = {}) {
  const product = products[current];
  const shouldSyncSheet = !options.skipSheetSync
    && activeSheetContext
    && product.sheetProfile === LEON_SHEET_PROFILE.title
    && product.sheetRowNumber
    && googleAccessToken;
  const currentLeonInputKey = shouldSyncSheet ? leonInputKey() : "";
  const needsSheetSync = shouldSyncSheet && (!product.sheetFinal || product.lastLeonInputKey !== currentLeonInputKey);
  if (needsSheetSync) {
    product.sheetCalculationPending = true;
  } else if (shouldSyncSheet) {
    product.sheetCalculationPending = false;
  }
  const result = calculate(product);
  const detailValue = (value) => value === null ? "不使用" : fmt(value);
  $("wholesaler").textContent = product.wholesaler;
  $("quoteTitle").textContent = product.inverter;
  $("batteryName").textContent = product.battery;
  $("finalPrice").textContent = fmt(result.final);
  $("batterySize").textContent = `${result.batterySize.toFixed(1)} kWh`;
  $("solarSize").textContent = `${result.solarSize.toFixed(2)} kW`;
  $("perKwh").textContent = result.batterySize ? fmt(result.final / result.batterySize) : "$0";
  $("extrasTotal").textContent = fmt(result.extras);
  setText("productTotal", detailValue(result.productTotal));
  setText("gstComm", detailValue(result.gstComm));
  setText("install", detailValue(result.install));
  setText("solarRebate", result.solarCredit === null ? "不使用" : `-${fmt(result.solarCredit)}`);
  setText("batteryRebate", result.batteryCredit === null ? "不使用" : `-${fmt(result.batteryCredit)}`);
  setText("waRebate", result.waRebate === null ? "不使用" : result.waRebate ? `-${fmt(result.waRebate)}` : fmt(0));
  setText("totalRebates", result.totalRebates === null ? "不使用" : result.totalRebates ? `-${fmt(result.totalRebates)}` : fmt(0));
  setText("baseSell", fmt(result.baseSell));
  setText("promoFloor", result.promoApplied ? `${fmt(result.promoFloor)} 已套用` : fmt(result.promoFloor));
  setText("sheetYellowFinal", result.sheetYellowFinal ? fmt(result.sheetYellowFinal) : "未读取");
  setText("sheetImportedExtras", result.sheetYellowFinal ? fmt(result.sheetImportedExtras) : "未读取");
  setText("sheetHiddenX", result.sheetHiddenX ? fmt(result.sheetHiddenX) : "未读取");
  setText("sheetXFormula", result.sheetXFormula || "未读取");
  setText("sheetFinalFormula", result.sheetFinalFormula || "未读取");
  setText("sheetBase", result.sheetBase ? fmt(result.sheetBase) : "未读取");
  setText("sheetFinal", result.sheetFinal ? fmt(result.sheetFinal) : "未读取");
  setText("sheetDelta", result.sheetFinal ? fmt(result.sheetDelta) : "未读取");
  $("priceNote").textContent = result.sheetFinal
    ? `${product.sheetFinalRange || "Google Sheet AW 行"} 黄价；${result.sheetPriceNote}`
    : product.sheetCalculationPending
    ? "正在写入 Leon Sales sheet 并读取 AW 最终价，本地价格暂作 fallback"
    : result.promoApplied
    ? `促销最低价 ${fmt(result.promoFloor)} 已套用`
    : "按系统基础价 + extras 计算，含 GST 并已扣除补贴";
  $("quoteText").value = buildQuoteText(product, result);
  renderCompare(product.brand);
  if (!options.skipSheetSync) {
    scheduleLeonSheetCalculation(product);
  }
}

const dimensionProfiles = {
  Sigenergy: {
    name: "SigEnergy SigenStor",
    type: "All-in-One, Single Stack",
    width: 850,
    depth: 260,
    options: [
      { kwh: 18, height: 910 },
      { kwh: 27, height: 1180 },
      { kwh: 36, height: 1450 }
    ]
  },
  GoodWe: {
    name: "GoodWe ESA",
    type: "All-in-One, Single Stack",
    width: 800,
    depth: 270,
    options: [
      { kwh: 16, height: 966 },
      { kwh: 24, height: 1259 },
      { kwh: 32, height: 1552 }
    ]
  },
  FoxESS: {
    name: "FoxESS CQ7",
    type: "Split, Single Stack",
    width: 660,
    depth: 360,
    options: [
      { kwh: 28, height: 730 },
      { kwh: 42, height: 1040 }
    ]
  },
  Growatt: {
    name: "Growatt",
    type: "All-in-One, Single Stack",
    width: 690,
    depth: 186,
    options: [
      { kwh: 15, height: 1692 }
    ]
  }
};

function nearestDimensionOption(profile, batterySize) {
  return profile.options.reduce((best, option) => {
    return Math.abs(option.kwh - batterySize) < Math.abs(best.kwh - batterySize) ? option : best;
  }, profile.options[0]);
}

function notesWithConfiguredDimensions(product, result, notes) {
  const profile = dimensionProfiles[product.brand];
  if (!profile || !result.batterySize) return notes;

  const option = nearestDimensionOption(profile, result.batterySize);
  const dimensionText = `* ${profile.name} Dimensions (${profile.type}, ${option.kwh}kWh):
${profile.width}W x ${profile.depth}D x ${option.height}H mm.`;

  return notes.replace(
    /\* .+? Dimensions \([^)]+\):\n\d+W x \d+D x [\d/]+H mm\./,
    dimensionText
  );
}

function buildQuoteText(product, result) {
  const noteKey = product.brand === "Sigenergy" ? "Sigenergy" : product.brand;
  const baseNotes = pylonNotes[noteKey] || generalPylonNotes.join("\n");
  const notes = notesWithConfiguredDimensions(product, result, baseNotes);
  const extraLines = extraDefs
    .map(([key, label]) => ({ label: extraLabel(key, label), qty: num($(key + "Qty").value), price: num($(key + "Price").value) }))
    .filter((item) => item.qty > 0 && item.price > 0)
    .map((item) => `- ${item.label}: ${item.qty} x ${fmt(item.price)} = ${fmt(item.qty * item.price)}`);
  const extrasText = extraLines.length ? extraLines.join("\n") : "- No selected extras";
  const sheetPriceLines = result.sheetFinal
    ? [
      `- Total price inc. GST: ${fmt(result.final)}`,
      `- ${result.sheetPriceNote}`
    ]
    : [
      `- System price after eligible rebates: ${fmt(result.baseSell)}`,
      `- Promotional minimum price: ${fmt(result.promoFloor)}${result.promoApplied ? " (applied)" : ""}`,
      `- Selected extras: ${fmt(result.extras)}`,
      `- Total price inc. GST: ${fmt(result.final)}`
    ];

  return `Hi,

Please see the quote details below:

System:
- ${result.solarSize.toFixed(2)}kW PV + ${product.inverter}
- Battery: ${product.battery} (${result.batterySize.toFixed(1)}kWh)
- Wholesaler: ${product.wholesaler}

Price:
${sheetPriceLines.join("\n")}

Extras:
${extrasText}

Important notes:
${notes}`;
}

function renderCompare(brand) {
  const cards = products.map((p, index) => ({ ...p, index })).filter((p) => p.brand === brand);
  $("compareList").innerHTML = cards.map((p) => {
    const active = p.index === current ? " active" : "";
    const size = p.batQty * p.batUnit;
    const solar = p.panels * 475 / 1000;
    const estimate = estimateBase(p);
    const promoLabel = estimate.promoApplied ? `<span class="promo-label">促销最低价</span>` : "";
    const sheetLabel = p.sheetFinal ? `<span class="promo-label">Google Sheet价</span>` : "";
    const rowLabel = p.sheetRowNumber ? `<span>Row ${p.sheetRowNumber}</span>` : "";
    const calculatedLabel = estimate.promoApplied ? `<span>系统计算价 ${fmt(estimate.base)}</span>` : "";
    return `<button class="compare-card${active}" type="button" data-index="${p.index}">
      <strong>${fmt(estimate.final)}</strong>
      ${promoLabel}
      ${sheetLabel}
      ${rowLabel}
      <span>${escapeHtml(p.inverter)}</span>
      <span>${size.toFixed(1)} kWh battery / ${solar.toFixed(2)} kW solar</span>
      ${calculatedLabel}
    </button>`;
  }).join("");
  document.querySelectorAll(".compare-card").forEach((card) => {
    card.addEventListener("click", () => {
      $("productSelect").value = card.dataset.index;
      loadProduct();
    });
  });
}

function estimateBase(product) {
  const batterySize = product.batQty * product.batUnit;
  const solarSize = product.panels * 475 / 1000;
  const batteryCredit = batteryStcs(batterySize, DEFAULT_STC_FACTOR) * DEFAULT_STC_PRICE;
  const solarCredit = solarSize * DEFAULT_STC_FACTOR * DEFAULT_STC_PRICE;
  const productTotal = product.inv * product.invQty + product.bat * product.batQty + product.panelPrice * product.panels + 67 * product.panels * 1.4;
  const base = productTotal * product.margin + 2000 + 300 * solarSize + 30 * batterySize - batteryCredit - solarCredit - (product.acCoupled ? 0 : WA_BATTERY_REBATE);
  const promoApplied = USE_PROMO_FLOOR && product.min > base;
  return {
    base,
    final: product.sheetFinal || (promoApplied ? product.min : base),
    promoApplied
  };
}

renderExtras();
$("googleClientId").value = localStorage.getItem("googleClientId") || "";
renderBrands();
renderProducts();

$("loadSheetBtn").addEventListener("click", loadSheetData);
$("promptLoadSheetBtn").addEventListener("click", loadSheetData);
$("promptLaterBtn").addEventListener("click", () => $("googlePrompt").classList.add("hidden"));
$("brandSelect").addEventListener("change", renderProducts);
$("productSelect").addEventListener("change", loadProduct);
["batteryQty", "panelQty"].forEach((id) => $(id).addEventListener("input", update));
$("dcCoupled").addEventListener("change", update);
$("resetExtras").addEventListener("click", () => setExtraDefaults(products[current]) || update());
$("printBtn").addEventListener("click", () => window.print());
$("copyQuoteBtn").addEventListener("click", async () => {
  const text = $("quoteText").value;
  try {
    await navigator.clipboard.writeText(text);
    $("copyQuoteBtn").textContent = "已复制";
    setTimeout(() => $("copyQuoteBtn").textContent = "复制", 1200);
  } catch {
    $("quoteText").select();
    document.execCommand("copy");
  }
});
