const defaultProducts = [
  { brand: "Alpha", wholesaler: "MYLEC / ENERGY SPURT", inverter: "Alpha 5kW / SMILE-G3-S5-INV", battery: "9.3kWh / SMILE-G3-BAT-9.3S", inv: 2100, invQty: 1, bat: 2750, batQty: 2, batUnit: 9.3, panels: 0, panelPrice: 125, margin: 1.3, min: 6995, phaseQty: 1, baseBackup: 1, baseRemoval: 10, baseEnclosure: 1 },
  { brand: "Alpha", wholesaler: "MYLEC / ENERGY SPURT", inverter: "Alpha 5kW AC couple / SMILE-G3-B5-INV", battery: "9.3kWh / SMILE-G3-BAT-9.3S", inv: 2100, invQty: 1, bat: 2750, batQty: 2, batUnit: 9.3, panels: 0, panelPrice: 125, margin: 1.3, min: 6595, acCoupled: true },
  { brand: "Growatt", wholesaler: "Growatt", inverter: "Growatt 5kW / SPH 5000TL-HUB", battery: "5kWh / ALP 5.0L-E1", inv: 1450, invQty: 1, bat: 1450, batQty: 3, batUnit: 5, panels: 14, panelPrice: 125, margin: 1.3, min: 6595, baseBackup: 1, baseEnclosure: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 5kW 1P / GW5K-EHA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 1550, invQty: 1, bat: 2684, batQty: 4, batUnit: 8, panels: 20, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseDouble: 1, enclosurePrice: 638, baseEnclosure: 1, teslaEvPrice: 800 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 10kW 1P / GW9.999K-EHA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2350, invQty: 1, bat: 2684, batQty: 3, batUnit: 8, panels: 0, panelPrice: 125, margin: 1.25, min: 6595, baseBackup: 1, teslaEvPrice: 800, teslaEvQty: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 5kW 3P / GW5K-ETA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2150, invQty: 1, bat: 2684, batQty: 3, batUnit: 8, panels: 0, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseRemoval: 15, baseEnclosure: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 10kW 3P / GW9.999K-ETA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2500, invQty: 1, bat: 2684, batQty: 4, batUnit: 8, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseDouble: 1, baseEnclosure: 1 },
  { brand: "GoodWe", wholesaler: "GoodWe", inverter: "GoodWe 15kW 3P / GW15K-ETA-G20", battery: "8.0kWh / GW8.3-BAT-D-G20", inv: 2800, invQty: 1, bat: 2684, batQty: 5, batUnit: 8, panels: 0, panelPrice: 125, margin: 1.25, min: 6595, phaseQty: 1, baseBackup: 1, baseRemoval: 20, switchQty: 1, teslaEvPrice: 800, sigEvQty: 1, enclosurePrice: 640 },
  { brand: "Sigenergy", wholesaler: "ENERGY SPURT", inverter: "Sigenergy 5kW single phase / SigenStor-5S", battery: "8kWh Sigenergy", inv: 1750, invQty: 1, bat: 3700, batQty: 2, batUnit: 8, panels: 21, panelPrice: 125, margin: 1.25, min: 6595, backupPrice: 2000, baseEnclosure: 1 },
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
const TEMP_DISABLED_BRANDS = new Set(["Growatt", "Sungrow"]);

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
let compareSyncTimer = null;
let compareSyncVersion = 0;
let compareResultsReady = false;

function isProductAvailable(product) {
  return product && !TEMP_DISABLED_BRANDS.has(product.brand);
}

function configBatteryQty(product) {
  return product?.baseBatQty ?? product?.batQty ?? 0;
}

function configPanelQty(product) {
  return product?.basePanels ?? product?.panels ?? 0;
}

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
  ["enclosure8", "External Enclosure Box 8 poles", 440],
  ["enclosure12", "External Enclosure Box 12 POLE", 636],
  ["custom", "Custom", 0]
];

const sheetWritableExtraPriceKeys = new Set(["switch", "tesla", "sigEv"]);
const editableExtraPriceKeys = new Set([...sheetWritableExtraPriceKeys, "custom"]);

const evChargerExtras = [
  ["ev3p", "3p", 200],
  ["evDouble", "Double Storey", 500],
  ["evEnclosure", "External Enclosure", 440],
  ["evCallOut", "Call out fee", 300],
  ["evInstallOnly", "Install Only", 800]
];

const fixedDropdownExtraOptions = {
  switch: [2050, 2550],
  sigEv: [3900, 4900]
};

const teslaEvBaseOptions = [1995, 800];
const teslaEvAddonOptions = [
  ["teslaAddon200", 200],
  ["teslaAddon300", 300],
  ["teslaAddon440", 440],
  ["teslaAddon500", 500]
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
const controlQty = (id) => {
  const element = $(id);
  if (!element) return 0;
  return element.type === "checkbox" ? (element.checked ? 1 : 0) : num(element.value);
};
const controlNum = (id) => {
  const element = $(id);
  return element ? num(element.value) : 0;
};
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

async function batchGetGoogleValues(spreadsheetId, ranges) {
  const params = new URLSearchParams({ valueRenderOption: "UNFORMATTED_VALUE" });
  ranges.forEach((range) => params.append("ranges", range));
  const payload = await fetchGoogleJson(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?${params.toString()}`);
  return payload.valueRanges || [];
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
  const hasColumn = (letters) => columnLettersToIndex(letters) < normalized.length;
  const isQtyHeader = (header) => header === "QTY" || header === "QUANTITY" || header.includes("QTY");
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
      if (isQtyHeader(normalized[index])) {
        return columnIndexToLetters(index);
      }
    }
    return "";
  };
  const findPriceNear = (...patterns) => {
    const labelColumn = find(...patterns);
    if (!labelColumn) return "";
    const labelIndex = columnLettersToIndex(labelColumn);
    return isQtyHeader(normalized[labelIndex]) && labelIndex > 0
      ? columnIndexToLetters(labelIndex - 1)
      : labelColumn;
  };
  const extraColumns = (...patterns) => ({
    price: findPriceNear(...patterns),
    qty: findQtyNear(...patterns)
  });

  const switchboard = extraColumns(["SWITCHBOARD"]);
  const backup = extraColumns(["ESSENTIAL", "LOADS", "BACKUP"]);

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
    switchPrice: switchboard.price,
    switch: switchboard.qty,
    backupPrice: backup.price,
    backup: backup.qty,
    wholeHome: findQtyNear(["WHOLE", "HOUSE", "BACKUP"], ["FULL", "HOME", "BACKUP"]),
    teslaPrice: hasColumn("AO") ? "AO" : findPriceNear(["TESLA", "EV", "CHARGER"]),
    tesla: hasColumn("AP") ? "AP" : findQtyNear(["TESLA", "EV", "CHARGER"]),
    sigEvPrice: hasColumn("AQ") ? "AQ" : findPriceNear(["SIGENERGY", "AC", "EV"], ["SIGENERGY", "EV"]),
    sigEv: hasColumn("AR") ? "AR" : findQtyNear(["SIGENERGY", "AC", "EV"], ["SIGENERGY", "EV"]),
    enclosure8: hasColumn("AT") ? "AT" : findQtyNear(["EXTERNAL", "ENCLOSURE", "BOX", "8"], ["EXTERNAL", "ENCLOSURE", "8", "POLES"]),
    enclosure12: hasColumn("AV") ? "AV" : findQtyNear(["EXTERNAL", "ENCLOSURE", "BOX", "12"], ["EXTERNAL", "ENCLOSURE", "12", "POLE"])
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

function activeExtraDefs(product = products[current]) {
  return product?.isEvCharger ? evChargerExtras : extraDefs;
}

function fixedDropdownValue(key, qty, price) {
  const options = fixedDropdownExtraOptions[key] || [];
  if (!Number(qty)) return "";
  const value = Number(price || 0);
  return options.includes(value) ? String(value) : String(options[0] || "");
}

function setFixedDropdownExtra(key, qty, price) {
  const select = $(`${key}Select`);
  const hiddenQty = $(`${key}Qty`);
  const hiddenPrice = $(`${key}Price`);
  const value = fixedDropdownValue(key, qty, price);
  if (select) select.value = value;
  if (hiddenQty) hiddenQty.value = value ? 1 : 0;
  if (hiddenPrice) hiddenPrice.value = value || 0;
}

function selectedTeslaAddonIds(total) {
  const target = Number(total || 0);
  if (target === 0) return new Set();

  function findCombo(index, remaining) {
    if (remaining === 0) return [];
    if (remaining < 0 || index >= teslaEvAddonOptions.length) return null;

    const [id, amount] = teslaEvAddonOptions[index];
    const withCurrent = findCombo(index + 1, remaining - amount);
    if (withCurrent) return [id, ...withCurrent];
    return findCombo(index + 1, remaining);
  }

  const combo = findCombo(0, target);
  return combo ? new Set(combo) : null;
}

function setTeslaEvSelection(qty, price) {
  const selected = Number(qty) ? Number(price || 0) : 0;
  let base = "";
  let selectedAddons = new Set();

  if (selected > 0) {
    const baseMatch = [...teslaEvBaseOptions, 0].find((option) => selected >= option && selectedTeslaAddonIds(selected - option));
    base = baseMatch ? String(baseMatch) : "";
    selectedAddons = selectedTeslaAddonIds(selected - Number(base || 0)) || new Set();
  }

  if ($("teslaBaseSelect")) $("teslaBaseSelect").value = base ? String(base) : "";

  teslaEvAddonOptions.forEach(([id]) => {
    const checkbox = $(id);
    if (!checkbox) return;
    checkbox.checked = selectedAddons.has(id);
  });

  syncTeslaEvHiddenFields();
}

function syncTeslaEvHiddenFields() {
  const base = Number($("teslaBaseSelect")?.value || 0);
  const addons = teslaEvAddonOptions.reduce((sum, [id, amount]) => sum + ($(id)?.checked ? amount : 0), 0);
  const price = base ? base + addons : 0;
  const qty = price ? 1 : 0;
  if ($("teslaPrice")) $("teslaPrice").value = price;
  if ($("teslaQty")) $("teslaQty").value = qty;
}

function backupPriceForProduct(product) {
  return product?.brand === "Sigenergy" ? 2000 : product?.backupPrice || product?.extraPrices?.backup || 600;
}

function addProductSheetValueOverrides(values, product) {
  if (product?.brand === "Sigenergy") {
    values.backupPrice = 2000;
  }
  return values;
}

function getLeonSheetValuesByField(product = products[current]) {
  const values = {
    batteryQty: controlQty("batteryQty"),
    panelQty: controlQty("panelQty"),
    splits: controlQty("splitsQty"),
    optimizer: controlQty("optimizerQty"),
    removal: controlQty("removalQty"),
    rewiring: controlQty("rewiringQty"),
    double: controlQty("doubleQty"),
    switch: controlQty("switchQty"),
    backup: controlQty("backupQty"),
    wholeHome: controlQty("wholeHomeQty"),
    tesla: controlQty("teslaQty"),
    sigEv: controlQty("sigEvQty"),
    enclosure8: controlQty("enclosure8Qty"),
    enclosure12: controlQty("enclosure12Qty")
  };
  sheetWritableExtraPriceKeys.forEach((key) => {
    values[`${key}Price`] = controlNum(`${key}Price`);
  });
  return addProductSheetValueOverrides(values, product);
}

function getLeonValuesByField(product = products[current]) {
  return {
    ...getLeonSheetValuesByField(product),
    custom: controlQty("customQty"),
    customPrice: controlNum("customPrice")
  };
}

function leonInputKey() {
  return JSON.stringify(getLeonSheetValuesByField(products[current]));
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

function leonRowInputData(rowNumber, valuesByField) {
  if (!activeSheetContext) throw new Error("还没有加载 Leon Sales sheet。");
  const editableColumns = activeSheetContext.editableColumns || {};
  const formulaRow = activeSheetContext.formulas?.[rowNumber - 1] || [];
  return Object.entries(valuesByField)
    .map(([field, value]) => {
      const column = editableColumns[field];
      const columnIndex = column ? columnLettersToIndex(column) : -1;
      if (columnIndex >= 0 && formulaRow[columnIndex]) return null;
      return column
        ? { range: quotedA1Range(LEON_SHEET_PROFILE.title, column, rowNumber), values: [[value]] }
        : null;
    })
    .filter(Boolean);
}

async function writeLeonRowInputs(rowNumber, valuesByField) {
  if (!activeSheetContext) throw new Error("还没有加载 Leon Sales sheet。");
  const data = leonRowInputData(rowNumber, valuesByField);

  if (!data.length) {
    throw new Error("没有从第 3 行表头识别到可写入的价格/数量列。");
  }

  return writeGoogleValues(activeSheetContext.spreadsheetId, data);
}

async function writeLeonRowsInputs(rowNumbers, valuesByField) {
  if (!activeSheetContext) throw new Error("还没有加载 Leon Sales sheet。");
  const data = rowNumbers.flatMap((rowNumber) => leonRowInputData(rowNumber, valuesByField));
  if (!data.length) {
    throw new Error("没有从第 3 行表头识别到可写入的价格/数量列。");
  }
  return writeGoogleValues(activeSheetContext.spreadsheetId, data);
}

async function writeLeonRowsInputEntries(entries) {
  if (!activeSheetContext) throw new Error("还没有加载 Leon Sales sheet。");
  const data = entries.flatMap((entry) => leonRowInputData(entry.rowNumber, entry.valuesByField));
  if (!data.length) {
    throw new Error("没有从第 3 行表头识别到可写入的价格/数量列。");
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

async function readLeonRowsOutputs(rowNumbers) {
  if (!activeSheetContext) throw new Error("还没有加载 Leon Sales sheet。");
  const ranges = rowNumbers.map((rowNumber) => quotedA1Range(LEON_SHEET_PROFILE.title, LEON_SHEET_PROFILE.finalPriceColumn, rowNumber));
  const valueRanges = await batchGetGoogleValues(activeSheetContext.spreadsheetId, ranges);
  return valueRanges.map((item, index) => ({
    rowNumber: rowNumbers[index],
    finalPrice: money(item.values?.[0]?.[0]),
    finalPriceRange: ranges[index]
  }));
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

function isEvChargerTitle(value) {
  return /ev\s*charger/i.test(value) && /tesla|sigenergy|sigenenergy|sigen/i.test(value);
}

function isLeonProductRow(inverter, battery, finalPrice) {
  const combined = `${inverter} ${battery}`;
  const normalizedInverter = normalizeHeader(inverter);
  const sectionOnly = ["GOODWE", "SIGENERGY", "FOXESS", "FOX ESS", "GROWATT", "SUNGROW", "TESLA", "ANKER", "ALPHA"];
  const notePattern = /W\s*[*X×]\s*D\s*[*X×]\s*H|DIMENSIONS?|CLEARANCE|GARAGE INSTALL|INSTALL-ONLY|SPARE TILES|CUSTOMER TO|FINANCE|METER UPGRADE|WESTERN POWER|YOUTUBE|REVIEWS?|INV:\s*\d|BAT:\s*\d|DO NOT SELL|NOT CEC/i;

  if (isEvChargerTitle(inverter)) return false;

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
  const productNoteIdx = profile ? columnLettersToIndex("AX") : col("NOTE", "NOTES", "COMMENT", "COMMENTS");
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
  let skipNotToUseRows = false;
  const productStartIndex = profile ? profile.productStartRow - 1 : headerIndex + 1;
  const parsed = rows.slice(productStartIndex).map((row, rowOffset) => {
    if (skipNotToUseRows) return null;
    if (row.some((cell) => /not\s*to\s*use/i.test(cleanText(cell)))) {
      skipNotToUseRows = true;
      return null;
    }

    const rowIndex = productStartIndex + rowOffset;
    const sheetRowNumber = rowIndex + 1;
    const wholesaler = cleanText(row[wholesalerIdx >= 0 ? wholesalerIdx : 0]);
    const inverter = cleanText(row[inverterIdx >= 0 ? inverterIdx : 1]);
    const battery = cleanText(row[batteryModelIdx >= 0 ? batteryModelIdx : 4]);
    const isEvCharger = isEvChargerTitle(inverter);
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
    const productNote = cleanText(row[productNoteIdx]);
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
    const panels = money(row[panelQtyIdx >= 0 ? panelQtyIdx : 10]);
    const sheetTotals = profile ? { extras: 0, final: 0 } : masterSalesTotals(row);
    const sheetHiddenX = 0;
    const sheetBase = 0;
    const formulaRow = formulas[rowIndex] || [];
    const sheetFinalFormula = directFinalIdx >= 0 ? formulaRow[directFinalIdx] || "" : "";

    return {
      dynamic: true,
      isEvCharger,
      sheetProfile: profile?.title || "",
      sheetRowNumber,
      basePrice: 0,
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
        enclosure8: enclosure8.qty,
        enclosure12: enclosure12.qty
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
        enclosure8: enclosure8.price || undefined,
        enclosure12: enclosure12.price || undefined
      },
      brand,
      productNote,
      wholesaler: wholesaler || sectionBrand || brand,
      inverter,
      battery,
      inv,
      invQty: money(row[inverterQtyIdx >= 0 ? inverterQtyIdx : 3]) || 1,
      bat,
      batQty: batteryQty,
      baseBatQty: batteryQty,
      batUnit: inferBatteryUnit(`${battery} ${batterySize || ""}`, batterySize, batteryQty),
      panels,
      basePanels: panels,
      panelPrice: money(row[panelPriceIdx >= 0 ? panelPriceIdx : 9]) || 125,
      margin: margin >= 1 && margin <= 1.5 ? margin : 1.25,
      min: 0,
      acCoupled: /ac\s*couple/i.test(inverter),
      doublePrice: doubleStorey.price || undefined,
      backupPrice: backup.price || undefined,
      teslaEvPrice: tesla.price || undefined,
      sigenergyEvPrice: sigEv.price || undefined,
      enclosure8Price: enclosure8.price || undefined,
      enclosure12Price: enclosure12.price || undefined
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
    $("brandSelect").value = (products.find(isProductAvailable) || products[0]).brand;
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

function extraAmount(key, valuesByField = null) {
  const qty = valuesByField ? Number(valuesByField[key] || 0) : controlQty(`${key}Qty`);
  const price = valuesByField ? Number(valuesByField[`${key}Price`] || 0) : controlNum(`${key}Price`);
  return qty * price;
}

function customExtraTotal(valuesByField = null) {
  return extraAmount("custom", valuesByField);
}

function activeExtrasTotal(product, valuesByField = null) {
  return activeExtraDefs(product).reduce((sum, [key]) => sum + extraAmount(key, valuesByField), 0);
}

function calculate(product) {
  const batQty = controlQty("batteryQty");
  const panelQty = controlQty("panelQty");
  const stcPrice = DEFAULT_STC_PRICE;
  const stcFactor = DEFAULT_STC_FACTOR;
  const batterySize = batQty * product.batUnit;
  const solarSize = panelQty * 475 / 1000;
  const extras = activeExtrasTotal(product);
  const customExtras = customExtraTotal();
  const sheetExtras = extras - customExtras;

  if (product.isEvCharger) {
    const baseSell = (product.basePrice || 1995) * batQty;
    const final = baseSell + extras;
    return {
      batterySize: 0,
      solarSize: 0,
      batteryCredit: null,
      solarCredit: null,
      waRebate: null,
      productTotal: null,
      gstComm: null,
      install: null,
      totalRebates: null,
      baseSell,
      extras,
      final,
      formulaFinal: final,
      sheetBase: 0,
      sheetHiddenX: 0,
      sheetXFormula: "",
      sheetFinalFormula: "",
      sheetFinal: 0,
      sheetYellowFinal: 0,
      sheetImportedExtras: 0,
      sheetDelta: 0,
      sheetPriceNote: "EV charger base price + selected options",
      promoFloor: 0,
      promoApplied: false
    };
  }

  if (product.dynamic && product.sheetFinal && !product.sheetCalculationPending) {
    const sheetFinal = product.sheetFinal;
    const dcAdjustment = applyDcCoupledAdjustment(sheetFinal);
    const final = dcAdjustment.final + customExtras;
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
      final,
      formulaFinal: final,
      sheetBase: 0,
      sheetHiddenX: product.sheetHiddenX || 0,
      sheetXFormula: product.sheetXFormula || "",
      sheetFinalFormula: product.sheetFinalFormula || "",
      sheetFinal,
      sheetYellowFinal: product.sheetYellowFinal || 0,
      sheetImportedExtras: product.sheetImportedExtras || 0,
      sheetDelta: final - sheetFinal,
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
  const beforeFloor = baseSell + sheetExtras;
  const promoFloor = product.min || 0;
  const formulaFinal = (USE_PROMO_FLOOR ? Math.max(promoFloor, beforeFloor) : beforeFloor) + customExtras;
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
  if (product.isEvCharger || !activeSheetContext || product.sheetProfile !== LEON_SHEET_PROFILE.title || !product.sheetRowNumber || !googleAccessToken) {
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
      await writeLeonRowInputs(product.sheetRowNumber, getLeonSheetValuesByField(product));
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

function compareInputKeyForValues(baseProduct = products[current], values = getLeonValuesByField()) {
  return JSON.stringify({
    values,
    targetBatterySize: values.batteryQty * (baseProduct?.batUnit || 0)
  });
}

function compareInputKey(baseProduct = products[current]) {
  return compareInputKeyForValues(baseProduct, getLeonValuesByField());
}

function compareFinalForProduct(product, inputKey, valuesByField = null) {
  if (product.compareResults?.[inputKey]) {
    return applyDcCoupledAdjustment(product.compareResults[inputKey].finalPrice).final + customExtraTotal(valuesByField);
  }
  if (product.compareInputKey !== inputKey || !product.compareSheetFinal) return null;
  return applyDcCoupledAdjustment(product.compareSheetFinal).final + customExtraTotal(valuesByField);
}

function sheetFinalForProduct(product, valuesByField = null) {
  if (!product?.sheetFinal || product.sheetCalculationPending) return null;
  return applyDcCoupledAdjustment(product.sheetFinal).final + customExtraTotal(valuesByField);
}

function getLowestPrice(sheetPrice) {
  const numericPrice = Number(sheetPrice);
  if (!Number.isFinite(numericPrice)) return sheetPrice;

  const base = Math.floor(numericPrice / 100) * 100 + 95;

  // Do not allow the lowest price to be lower than the original sheet price.
  if (base < numericPrice) {
    return Math.floor(numericPrice / 100) * 100 + 195;
  }

  return base;
}

function comparePriceMode() {
  return document.querySelector('input[name="comparePriceMode"]:checked')?.value || "lowest";
}

function displayPriceForMode(sheetPrice) {
  return comparePriceMode() === "lowest" ? getLowestPrice(sheetPrice) : sheetPrice;
}

function comparePriceModeLabel() {
  return comparePriceMode() === "lowest" ? "Lowest price" : "Sheet price";
}

function selectedCompareBrands() {
  const picker = $("compareBrand");
  if (!picker) return ["All"];
  const selected = [...picker.querySelectorAll(".compare-brand-option[aria-pressed='true']")]
    .map((option) => option.dataset.brand || option.textContent);
  return selected.length ? selected : ["All"];
}

function setCompareBrands(values = ["All"]) {
  const picker = $("compareBrand");
  if (!picker) return;
  [...picker.querySelectorAll(".compare-brand-option")].forEach((option) => {
    option.setAttribute("aria-pressed", values.includes(option.dataset.brand || option.textContent) ? "true" : "false");
  });
  updateCompareBrandTrigger();
}

function normalizeCompareBrandSelection() {
  const selected = selectedCompareBrands();
  const hasAll = selected.includes("All");
  if (hasAll && selected.length > 1) {
    setCompareBrands(selected.filter((brand) => brand !== "All"));
  }
  if (!selectedCompareBrands().length) setCompareBrands(["All"]);
}

function toggleCompareBrand(brand) {
  if (brand === "All") {
    setCompareBrands(["All"]);
    return;
  }
  const selected = new Set(selectedCompareBrands().filter((value) => value !== "All"));
  if (selected.has(brand)) {
    selected.delete(brand);
  } else {
    selected.add(brand);
  }
  setCompareBrands(selected.size ? [...selected] : ["All"]);
}

function compareBrandLabel(values = selectedCompareBrands()) {
  if (values.includes("All")) return "All";
  if (values.length <= 2) return values.join(", ");
  return `${values[0]}, ${values[1]} +${values.length - 2}`;
}

function updateCompareBrandTrigger() {
  const trigger = $("compareBrandTrigger");
  if (trigger) trigger.textContent = compareBrandLabel();
}

function renderCompareBrands() {
  const picker = $("compareBrand");
  if (!picker) return;
  const selected = selectedCompareBrands();
  const brands = ["All", ...new Set(products.filter(isProductAvailable).map((p) => p.brand))];
  picker.innerHTML = `
    <button id="compareBrandTrigger" class="compare-brand-trigger" type="button" aria-haspopup="true" aria-expanded="false">
      ${escapeHtml(compareBrandLabel(selected))}
    </button>
    <div class="compare-brand-menu" role="menu">
      ${brands.map((brand) => `
        <button class="compare-brand-option" type="button" data-brand="${escapeHtml(brand)}" aria-pressed="${selected.includes(brand) ? "true" : "false"}" role="menuitemcheckbox">
          ${escapeHtml(brand)}
        </button>
      `).join("")}
    </div>
  `;
  normalizeCompareBrandSelection();
}

function inverterSizeKw(product) {
  const match = String(product?.inverter || "").match(/(\d+(?:\.\d+)?)\s*kW/i);
  return match ? Math.round(Number(match[1]) / 5) * 5 : 0;
}

function inverterModelLabel(product) {
  const value = cleanText(product?.inverter);
  if (!value) return "";

  const parts = value.split("/").map(cleanText).filter(Boolean);
  if (parts.length > 1) return parts[parts.length - 1];
  if (/\d+(?:\.\d+)?\s*kW/i.test(value)) return "";

  const brand = cleanText(product?.brand);
  return brand && value.toLowerCase().startsWith(brand.toLowerCase())
    ? cleanText(value.slice(brand.length))
    : value;
}

function inverterPhase(product) {
  const value = String(product?.inverter || "").toLowerCase();
  if (/\b3\s*p\b|\b3\s*phase\b|three\s*phase/.test(value)) return "3P";
  if (/\b1\s*p\b|\b1\s*phase\b|single\s*phase/.test(value)) return "1P";
  return "1P";
}

function smartCompareFilters() {
  return {
    priceMode: comparePriceMode(),
    brands: selectedCompareBrands(),
    inverter: $("compareInverter")?.value || "same",
    battery: $("compareBattery")?.value || "same",
    price: $("comparePrice")?.value || "any",
    sort: $("compareSort")?.value || "closest",
    minPrice: num($("compareMinPrice")?.value),
    maxPrice: num($("compareMaxPrice")?.value)
  };
}

function resetSmartCompareFilters() {
  const lowestMode = document.querySelector('input[name="comparePriceMode"][value="lowest"]');
  if (lowestMode) lowestMode.checked = true;
  setCompareBrands(["All"]);
  if ($("compareInverter")) $("compareInverter").value = "same";
  if ($("compareBattery")) $("compareBattery").value = "same";
  if ($("comparePrice")) $("comparePrice").value = "any";
  if ($("compareSort")) $("compareSort").value = "closest";
  if ($("compareMinPrice")) $("compareMinPrice").value = "";
  if ($("compareMaxPrice")) $("compareMaxPrice").value = "";
  toggleCustomPriceFields();
}

function toggleCustomPriceFields() {
  const custom = $("comparePrice")?.value === "custom";
  $("compareMinField")?.classList.toggle("hidden", !custom);
  $("compareMaxField")?.classList.toggle("hidden", !custom);
}

function comparableValuesForProduct(baseProduct, product, overrides = {}) {
  const values = getLeonValuesByField();
  const disabled = disabledExtrasForProduct(product);
  const comparableValues = addProductSheetValueOverrides({
    ...values,
    ...overrides
  }, product);
  disabled.forEach((key) => {
    if (key in comparableValues) comparableValues[key] = 0;
  });
  return comparableValues;
}

function originalValuesForProduct(product) {
  const values = {};
  values.batteryQty = configBatteryQty(product);
  values.panelQty = configPanelQty(product);
  Object.entries(product?.extraDefaults || {}).forEach(([key, value]) => {
    values[key] = value || 0;
  });
  return values;
}

function batteryQuantitiesForCompare(anchorQty, filterValue) {
  const spread = { same: 0, plus1: 1, plus2: 2, plus3: 3 }[filterValue] ?? 0;
  const values = [anchorQty];
  for (let offset = 1; offset <= spread; offset += 1) {
    values.push(anchorQty - offset, anchorQty + offset);
  }
  return [...new Set(values.filter((qty) => qty >= 1 && qty <= 6))];
}

function compareCandidateForProduct(baseProduct, product, index, anchor, batteryQtyOverride = anchor.batteryQty) {
  const active = index === current && batteryQtyOverride === anchor.batteryQty;
  const compareValues = active
    ? getLeonValuesByField()
    : comparableValuesForProduct(baseProduct, product, { batteryQty: batteryQtyOverride });
  const estimate = active ? calculate(product) : estimateBase(product, { useCurrentInputs: false, valuesByField: compareValues });
  const inputKey = compareInputKeyForValues(baseProduct, compareValues);
  const compareFinal = compareFinalForProduct(product, inputKey, compareValues);
  const sheetFinal = sheetFinalForProduct(product, compareValues);
  const usesSheetCompare = Boolean(activeSheetContext && product.sheetProfile === LEON_SHEET_PROFILE.title && product.sheetRowNumber && !product.isEvCharger);
  const sheetPrice = active ? anchor.sheetPrice : compareFinal ?? sheetFinal ?? estimate.final;
  const displayPrice = displayPriceForMode(sheetPrice);
  const batteryQty = batteryQtyOverride;
  const panelQty = product.isEvCharger
    ? 0
    : active
    ? controlQty("panelQty")
    : compareValues.panelQty ?? configPanelQty(product);
  const batteryCapacity = product.isEvCharger ? 0 : batteryQty * (product.batUnit || 0);
  const solar = product.isEvCharger ? 0 : panelQty * 475 / 1000;
  const inverterSize = inverterSizeKw(product);
  const priceDiff = displayPrice - anchor.price;
  const score = smartMatchScore({
    anchor,
    inverterSize,
    batteryQty,
    batteryCapacity,
    final: displayPrice
  });
  return {
    product,
    index,
    active,
    compareValues,
    inputKey,
    estimate,
    sheetPrice,
    displayPrice,
    batteryQty,
    batteryCapacity,
    solar,
    inverterSize,
    phase: inverterPhase(product),
    priceDiff,
    score,
    usesSheetCompare,
    hasSheetCompare: Boolean(compareFinal ?? sheetFinal)
  };
}

function smartMatchScore({ anchor, inverterSize, batteryQty, batteryCapacity, final }) {
  const inverterDiff = Math.abs(inverterSize - anchor.inverterSize);
  const batteryDiff = Math.abs(batteryQty - anchor.batteryQty);
  const capacityDiff = Math.abs(batteryCapacity - anchor.batteryCapacity);
  const priceDiff = Math.abs(final - anchor.price);
  const inverterScore = inverterDiff === 0 ? 25 : Math.max(0, 25 - inverterDiff * 3);
  const batteryScore = batteryDiff === 0 ? 25 : Math.max(0, 25 - batteryDiff * 7);
  const capacityScore = Math.max(0, 25 * (1 - capacityDiff / Math.max(anchor.batteryCapacity, batteryCapacity, 1)));
  const priceScore = Math.max(0, 25 * (1 - priceDiff / Math.max(anchor.price, 1)));
  return Math.round(inverterScore + batteryScore + capacityScore + priceScore);
}

function smartCompareAnchor(baseProduct) {
  const result = calculate(baseProduct);
  const batteryQty = controlQty("batteryQty");
  const sheetPrice = result.final;
  return {
    product: baseProduct,
    sheetPrice,
    price: displayPriceForMode(sheetPrice),
    phase: inverterPhase(baseProduct),
    inverterSize: inverterSizeKw(baseProduct),
    batteryQty,
    batteryCapacity: batteryQty * (baseProduct?.batUnit || 0)
  };
}

function smartCompareProducts(baseProduct) {
  const anchor = smartCompareAnchor(baseProduct);
  const filters = smartCompareFilters();
  if (!anchor.inverterSize || baseProduct?.isEvCharger) return [];
  const batteryQtyOptions = batteryQuantitiesForCompare(anchor.batteryQty, filters.battery);

  const candidates = products
    .flatMap((product, index) => batteryQtyOptions.map((batteryQty) => compareCandidateForProduct(baseProduct, product, index, anchor, batteryQty)))
    .filter((candidate) => {
      if (!isProductAvailable(candidate.product)) return false;
      if (candidate.product.isEvCharger) return false;
      if (candidate.phase !== anchor.phase) return false;
      if (!filters.brands.includes("All") && !filters.brands.includes(candidate.product.brand)) return false;
      if (filters.inverter === "same" && candidate.inverterSize !== anchor.inverterSize) return false;
      if (filters.inverter === "plus5" && Math.abs(candidate.inverterSize - anchor.inverterSize) > 5) return false;
      if (filters.inverter === "plus10" && Math.abs(candidate.inverterSize - anchor.inverterSize) > 10) return false;
      if (filters.price !== "any") {
        const minPrice = filters.price === "custom" ? filters.minPrice : anchor.price - Number(filters.price);
        const maxPrice = filters.price === "custom" ? filters.maxPrice : anchor.price + Number(filters.price);
        if (minPrice && candidate.displayPrice < minPrice) return false;
        if (maxPrice && candidate.displayPrice > maxPrice) return false;
      }
      return true;
    });

  candidates.sort((a, b) => {
    if (filters.sort === "lowest") return a.displayPrice - b.displayPrice;
    if (filters.sort === "capacity") return b.batteryCapacity - a.batteryCapacity;
    return b.score - a.score || Math.abs(a.priceDiff) - Math.abs(b.priceDiff);
  });
  return candidates;
}

function priceDiffLabel(diff) {
  if (Math.abs(diff) < 1) return "Same price";
  return diff < 0 ? `${fmt(Math.abs(diff))} cheaper` : `+${fmt(diff)} more`;
}

function compareExtrasSummary(valuesByField, product) {
  return excelDescriptionLines(product, valuesByField).join("\n") || "No selected extras";
}

function compareQuoteTitle(candidate) {
  return quoteSystemDescription(candidate.product, {
    solarSize: candidate.solar,
    batterySize: candidate.batteryCapacity
  }, candidate.compareValues);
}

function scheduleCompareSheetCalculations(baseProduct, options = {}) {
  clearTimeout(compareSyncTimer);
  if (!activeSheetContext || !googleAccessToken) return false;

  const visibleEntries = smartCompareProducts(baseProduct).filter((entry) => {
    const product = entry.product;
    return product.sheetProfile === LEON_SHEET_PROFILE.title
      && product.sheetRowNumber
      && !product.isEvCharger
      && !product.compareResults?.[entry.inputKey];
  });
  if (!visibleEntries.length) return false;

  const version = ++compareSyncVersion;
  const button = $("calculateCompareBtn");
  if (options.manual && button) {
    button.disabled = true;
    button.textContent = "Comparing...";
  }
  compareSyncTimer = setTimeout(async () => {
    const touchedProducts = [];
    try {
      for (const entry of visibleEntries) {
        const product = entry.product;
        if (!touchedProducts.includes(product)) touchedProducts.push(product);
        await writeLeonRowsInputEntries([{
          rowNumber: product.sheetRowNumber,
          valuesByField: entry.compareValues
        }]);
        const output = await readLeonRowOutputs(product.sheetRowNumber);
        if (version !== compareSyncVersion || products[current] !== baseProduct) return;
        product.compareResults = product.compareResults || {};
        product.compareResults[entry.inputKey] = {
          finalPrice: output.finalPrice,
          finalPriceRange: output.finalPriceRange
        };
      }
      await writeLeonRowsInputEntries(touchedProducts.map((product) => ({
        rowNumber: product.sheetRowNumber,
        valuesByField: comparableValuesForProduct(baseProduct, product, { batteryQty: smartCompareAnchor(baseProduct).batteryQty })
      })));
      setSourceStatus(`已同步 ${visibleEntries.length} 个 Smart Compare 相似配置方案`, "ok");
      compareResultsReady = true;
      renderCompare(baseProduct, { force: true, skipCompareSync: true });
      if (products[current] === baseProduct) update({ skipSheetSync: true, keepCompareResults: true });
    } catch (error) {
      if (version !== compareSyncVersion || products[current] !== baseProduct) return;
      if (touchedProducts.length) {
        try {
          await writeLeonRowsInputEntries(touchedProducts.map((product) => ({
            rowNumber: product.sheetRowNumber,
            valuesByField: comparableValuesForProduct(baseProduct, product, { batteryQty: smartCompareAnchor(baseProduct).batteryQty })
          })));
        } catch {}
      }
      setSourceStatus(`Smart Compare 计算失败：${error.message}`, "error");
      compareResultsReady = true;
      renderCompare(baseProduct, { force: true, skipCompareSync: true });
    } finally {
      if (options.manual && version === compareSyncVersion && button) {
        button.disabled = false;
        button.textContent = "Compare";
      }
    }
  }, options.manual ? 0 : 450);
  return true;
}

function setExtraDefaults(product) {
  if (product.isEvCharger) {
    evChargerExtras.forEach(([key]) => {
      $(key + "Qty").checked = false;
    });
    return;
  }

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
    enclosure8: product.dynamic ? importedDefaults.enclosure8 || 0 : product.baseEnclosure || 0,
    enclosure12: product.dynamic ? importedDefaults.enclosure12 || 0 : 0
  };
  const importedPrices = product.extraPrices || {};
  const prices = {
    splits: importedPrices.splits || 200,
    optimizer: importedPrices.optimizer || 70,
    removal: importedPrices.removal || 40,
    rewiring: importedPrices.rewiring || 40,
    double: product.doublePrice || 2000,
    switch: importedPrices.switch || 1650,
    backup: backupPriceForProduct(product),
    wholeHome: importedPrices.wholeHome || 2000,
    tesla: product.teslaEvPrice || 1995,
    sigEv: product.sigenergyEvPrice || 1995,
    enclosure8: product.enclosure8Price || product.enclosurePrice || 440,
    enclosure12: product.enclosure12Price || 636
  };
  extraDefs.forEach(([key, , defaultPrice]) => {
    if (fixedDropdownExtraOptions[key]) {
      setFixedDropdownExtra(key, defaults[key], prices[key] || defaultPrice);
    } else if (key === "tesla") {
      setTeslaEvSelection(defaults[key], prices[key] || defaultPrice);
    } else {
      $(key + "Qty").value = defaults[key] || 0;
      $(key + "Price").value = prices[key] || defaultPrice;
    }
  });
}

function disabledExtrasForProduct(product) {
  const note = cleanText(product?.productNote).toLowerCase();
  const disabled = new Set();

  if (/can\s*not|cannot|can't|no/.test(note) && /full\s*house|whole\s*house|whole\s*home/.test(note)) {
    disabled.add("wholeHome");
  }
  if (/essential\s*backup\s*only|essential\s*loads?\s*backup\s*only/.test(note)) {
    disabled.add("wholeHome");
  }
  if (/(can\s*not|cannot|can't)\s*(do\s*)?(essential\s*loads?\s*)?backup/.test(note)
    || /no\s*essential\s*loads?\s*backup|no\s*essential\s*backup/.test(note)
    || /essential\s*loads?\s*backup\s*(not\s*available|unavailable|disabled)/.test(note)) {
    disabled.add("backup");
  }
  if (/no\s*backup|backup\s*not\s*available/.test(note)) {
    disabled.add("backup");
    disabled.add("wholeHome");
  }

  return disabled;
}

function setProductNote(product) {
  const noteElement = $("productNote");
  if (!noteElement) return;
  const note = cleanText(product?.productNote);
  noteElement.textContent = note;
  noteElement.classList.toggle("hidden", !note);
}

function applyProductRestrictions(product) {
  const disabled = disabledExtrasForProduct(product);
  activeExtraDefs(product).forEach(([key]) => {
    const qty = $(key + "Qty");
    const price = $(key + "Price");
    const item = document.querySelector(`[data-extra-key="${key}"]`);
    const isDisabled = disabled.has(key);

    if (isDisabled && qty) {
      if (qty.type === "checkbox") qty.checked = false;
      else qty.value = 0;
    }
    const controls = [
      qty,
      price,
      $(`${key}Select`),
      key === "tesla" ? $("teslaBaseSelect") : null,
      ...($("teslaOptions") && key === "tesla" ? [...$("teslaOptions").querySelectorAll("input")] : [])
    ];
    controls.forEach((element) => {
      if (!element) return;
      element.disabled = isDisabled;
      element.title = isDisabled
        ? "Disabled by product note"
        : element.readOnly
          ? "Only Switchboard, Tesla EV Charger, and Sigenergy AC EV Charger prices can be edited"
          : "";
    });
    item?.classList.toggle("extra-item-disabled", isDisabled);
  });
}

function fixedDropdownExtraHtml(key, label) {
  const options = fixedDropdownExtraOptions[key] || [];
  return `
    <div class="extra-item extra-item-select" data-extra-key="${key}">
      <strong class="extra-label">${escapeHtml(extraLabel(key, label))}</strong>
      <select id="${key}Select" class="extra-select" aria-label="${escapeHtml(extraLabel(key, label))}">
        <option value="">0</option>
        ${options.map((value) => `<option value="${value}">${value}</option>`).join("")}
      </select>
      <input id="${key}Price" type="hidden" value="0">
      <input class="extra-qty" id="${key}Qty" type="hidden" value="0">
    </div>
  `;
}

function teslaExtraHtml(label) {
  return `
    <div class="extra-item extra-item-tesla" data-extra-key="tesla">
      <strong class="extra-label">${escapeHtml(extraLabel("tesla", label))}</strong>
      <div id="teslaOptions" class="tesla-options" aria-label="${escapeHtml(extraLabel("tesla", label))}">
        <select id="teslaBaseSelect" class="extra-select" aria-label="Tesla EV charger base">
          <option value="">0</option>
          ${teslaEvBaseOptions.map((value) => `<option value="${value}">${value}</option>`).join("")}
        </select>
        <div class="tesla-option-group tesla-option-addons" aria-label="Tesla EV charger extras">
          ${teslaEvAddonOptions.map(([id, value]) => `
            <label>
              <input id="${id}" type="checkbox" value="${value}">
              <span>${value}</span>
            </label>
          `).join("")}
        </div>
      </div>
      <input id="teslaPrice" type="hidden" value="0">
      <input class="extra-qty" id="teslaQty" type="hidden" value="0">
    </div>
  `;
}

function standardExtraHtml(key, label, price) {
  return `
    <div class="extra-item" data-extra-key="${key}">
      <label class="extra-price-field">
        <strong class="extra-label">${escapeHtml(extraLabel(key, label))}</strong>
        <input id="${key}Price" type="number" min="0" step="1" value="${price}" ${editableExtraPriceKeys.has(key) ? "" : "readonly"} aria-label="${escapeHtml(extraLabel(key, label))} price">
      </label>
      <input class="extra-qty" id="${key}Qty" type="number" min="0" step="1" value="0" aria-label="${escapeHtml(extraLabel(key, label))} quantity">
    </div>
  `;
}

function renderExtras() {
  const product = products[current];
  $("extrasList").innerHTML = activeExtraDefs(product).map(([key, label, price]) => product?.isEvCharger ? `
    <label class="extra-item ev-extra-item" data-extra-key="${key}">
      <strong class="extra-label">${escapeHtml(label)}</strong>
      <span class="extra-price-static">+${fmt(price)}</span>
      <input id="${key}Price" type="hidden" value="${price}">
      <input class="extra-qty" id="${key}Qty" type="checkbox" value="1" aria-label="${escapeHtml(label)}">
    </label>
  ` : fixedDropdownExtraOptions[key] ? fixedDropdownExtraHtml(key, label)
    : key === "tesla" ? teslaExtraHtml(label)
      : standardExtraHtml(key, label, price)).join("");
  activeExtraDefs(product).forEach(([key]) => {
    const qty = $(key + "Qty");
    const price = $(key + "Price");
    const select = $(`${key}Select`);
    if (select) {
      select.addEventListener("change", () => {
        setFixedDropdownExtra(key, select.value ? 1 : 0, select.value);
        update();
      });
      return;
    }
    if (key === "tesla") {
      $("teslaOptions").querySelectorAll("select, input").forEach((input) => {
        input.addEventListener("change", () => {
          syncTeslaEvHiddenFields();
          update();
        });
      });
      return;
    }
    qty.addEventListener(qty.type === "checkbox" ? "change" : "input", update);
    price.addEventListener("input", update);
  });
}

function renderBrands() {
  const brands = [...new Set(products.filter(isProductAvailable).map((p) => p.brand))];
  $("brandSelect").innerHTML = brands.map((brand) => `<option>${escapeHtml(brand)}</option>`).join("");
  renderCompareBrands();
}

function productOptionLabel(product) {
  const rowPrefix = product.sheetRowNumber ? `Row ${product.sheetRowNumber} - ` : "";
  return `${rowPrefix}${product.inverter} / ${product.battery}`;
}

function renderProducts(selectedIndex = null) {
  const brand = $("brandSelect").value;
  const list = products.map((p, index) => ({ ...p, index })).filter((p) => p.brand === brand && isProductAvailable(p));
  $("productSelect").innerHTML = list.map((p) => `<option value="${p.index}">${escapeHtml(productOptionLabel(p))}</option>`).join("");
  const selectedInBrand = list.some((product) => product.index === selectedIndex);
  current = selectedInBrand ? selectedIndex : list[0]?.index || 0;
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
  $("batteryQtyLabel").textContent = product.isEvCharger ? "数量" : "电池数量";
  $("panelQtyField").classList.toggle("hidden", Boolean(product.isEvCharger));
  $("batteryQty").value = product.isEvCharger ? product.batQty ?? 1 : product.batQty;
  $("panelQty").value = product.isEvCharger ? 0 : product.panels;
  $("dcCoupled").checked = !product.acCoupled;
  setProductNote(product);
  renderExtras();
  setExtraDefaults(product);
  applyProductRestrictions(product);
  if (product.sheetProfile === LEON_SHEET_PROFILE.title && product.sheetFinal) {
    product.lastLeonInputKey = leonInputKey();
  }
  update();
}

function update(options = {}) {
  const product = products[current];
  if (!options.keepCompareResults) {
    compareResultsReady = false;
  }
  const shouldSyncSheet = !options.skipSheetSync
    && activeSheetContext
    && product.sheetProfile === LEON_SHEET_PROFILE.title
    && product.sheetRowNumber
    && !product.isEvCharger
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
  $("wholesaler").classList.add("hidden");
  $("quoteTitle").textContent = quoteSystemDescription(product, result);
  $("batteryName").textContent = [product.inverter, product.battery].filter(Boolean).join("\n");
  $("finalPrice").textContent = fmt(result.final);
  $("batterySize").textContent = `${result.batterySize.toFixed(1)} kWh`;
  $("solarSize").textContent = `${result.solarSize.toFixed(2)} kW`;
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
  renderCompare(product);
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

function quoteExtraQty(key, valuesByField = null) {
  return valuesByField ? Number(valuesByField[key] || 0) : controlQty(`${key}Qty`);
}

function quoteExtraPrice(key, valuesByField = null) {
  return valuesByField ? Number(valuesByField[`${key}Price`] || 0) : controlNum(`${key}Price`);
}

function quoteSolarLabel(solarSize) {
  return quoteSizeLabel(solarSize);
}

function quoteBatteryLabel(batterySize) {
  const value = Number(batterySize || 0);
  return value ? String(Math.round(value)) : "";
}

function quoteSizeLabel(size) {
  const value = Number(size || 0);
  if (!value) return "";
  const nearestInteger = Math.round(value);
  if (Math.abs(value - nearestInteger) <= 0.15) return String(nearestInteger);
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function quoteInverterLabel(product) {
  const size = inverterSizeKw(product);
  const brand = product.brand === "Sigenergy" ? "SigEn" : product.brand;
  return `${brand} ${size || ""}kW Inverter`.replace(/\s+/g, " ").trim();
}

function quoteSystemDescription(product, result, valuesByField = null) {
  if (product.isEvCharger) return `${product.inverter} Installation`;

  const solar = quoteSolarLabel(result.solarSize);
  const battery = quoteBatteryLabel(result.batterySize);
  const system = `${quoteInverterLabel(product)}+${battery}kWh`;
  const backup = quoteExtraQty("backup", valuesByField) > 0 || quoteExtraQty("wholeHome", valuesByField) > 0 ? "+Backup" : "";

  if (solar) return `${solar}kW PV+${system} Battery${backup}`;
  return `${$("dcCoupled")?.checked ? "DC Coupled" : "AC Coupled"}: ${system}${backup}`;
}

function quoteInverterTariffNote(product) {
  const size = inverterSizeKw(product);
  if (!size) return "";
  if (size <= 5) return "* 5kW Inverter: eligible for Synergy Feed-in tariffs";
  return `* Over 5kW Inverter:
 - Export limit 1.5kw rule apply
 - Not eligible for Synergy Feed-in tariffs
 - Subject to Western Power approval`;
}

function applyInverterTariffNote(product, notes) {
  const tariffNote = quoteInverterTariffNote(product);
  let cleaned = notes
    .replace(/\n\* Over 5kW Inverter:\n(?: ?- .+\n?)+/g, "\n")
    .replace(/\n\* 5kW Inverter: eligible for Synergy Feed-in tariffs\n?/g, "\n")
    .replace(/\n{3,}/g, "\n\n");

  if (!tariffNote) return cleaned;
  if (cleaned.includes("* Off Peak Charging feature available")) {
    return cleaned.replace(
      "* Off Peak Charging feature available",
      `* Off Peak Charging feature available\n${tariffNote}`
    );
  }
  return `${cleaned}\n\n${tariffNote}`;
}

function alignBrandFooterNotes(notes) {
  let aligned = notes
    .replace(/\n\* DMG recent installation projects:\nhttps:\/\/dmgsolar\.com\.au\/installations\/\n?/g, "\n")
    .replace(/\n{3,}/g, "\n\n");

  if (!aligned.includes("* 10-Year Workmanship Warranty Included with Local DMG After-Sales Support")) {
    aligned = aligned.replace(
      "\n* DMG in-house installation team:",
      "\n* 10-Year Workmanship Warranty Included with Local DMG After-Sales Support\n* DMG in-house installation team:"
    );
  }

  return aligned;
}

function evChargerDetailsFromPrice(price) {
  let remaining = Math.round(Number(price || 0));
  const details = [];

  if (remaining >= 1995) {
    details.push("Charger+Install: $1,995");
    remaining -= 1995;
  } else if (remaining >= 800) {
    details.push("Install-only: $800");
    remaining -= 800;
  } else if (remaining >= 300) {
    details.push("Call-out if seperate install: $300");
    remaining -= 300;
  }

  [
    [500, "Double Storey: $500"],
    [440, "External Enclosure: $440"],
    [300, "Call-out if seperate install: $300"],
    [200, "3P: $200"]
  ].forEach(([amount, label]) => {
    if (remaining >= amount) {
      details.push(label);
      remaining -= amount;
    }
  });

  return details;
}

function quoteEvPrice(product, key) {
  if (!product || products[current] === product) return controlNum(`${key}Price`);
  if (key === "tesla") return product.teslaEvPrice || product.extraPrices?.tesla || 1995;
  if (key === "sigEv") return product.sigenergyEvPrice || product.extraPrices?.sigEv || 1995;
  return product.extraPrices?.[key] || 0;
}

function selectedEvChargerDescription(product, valuesByField = null) {
  if (product.isEvCharger) {
    const details = evChargerDetailsFromPrice(product.basePrice || 1995);
    if (quoteExtraQty("ev3p", valuesByField) > 0) details.push("3P: $200");
    if (quoteExtraQty("evDouble", valuesByField) > 0) details.push("Double Storey: $500");
    if (quoteExtraQty("evEnclosure", valuesByField) > 0) details.push("External Enclosure: $440");
    if (quoteExtraQty("evCallOut", valuesByField) > 0) details.push("Call-out if seperate install: $300");
    if (quoteExtraQty("evInstallOnly", valuesByField) > 0) details.push("Install-only: $800");
    return details.length ? `* EV Charger Installation\n(${[...new Set(details)].join("; ")})` : "";
  }

  const selected = [];
  [
    ["tesla", "Tesla EV Charger"],
    ["sigEv", product.brand === "Sigenergy" ? "Sigenergy DC EV 12.5kW Charger" : "Sigenergy AC EV Charger"]
  ].forEach(([key, label]) => {
    if (quoteExtraQty(key, valuesByField) <= 0) return;
    const details = evChargerDetailsFromPrice(quoteEvPrice(product, key));
    selected.push(`* ${label} Installation Included\n(${details.length ? details.join("; ") : "EV charger selected"})`);
  });
  return selected.join("\n");
}

function excelBrandNotes(product, result, valuesByField = null) {
  const noteKey = product.brand === "Sigenergy" ? "Sigenergy" : product.brand;
  const baseNotes = pylonNotes[noteKey] || generalPylonNotes.join("\n");
  let notes = notesWithConfiguredDimensions(product, result, baseNotes);
  const hasSelectedEvCharger = quoteExtraQty("tesla", valuesByField) > 0 || quoteExtraQty("sigEv", valuesByField) > 0;
  if (hasSelectedEvCharger) {
    notes = notes.replace(
      /\n\* EV Charger Installation Optional\n\([^)]+\)\n?/,
      "\n"
    );
  }
  notes = applyInverterTariffNote(product, notes);
  notes = alignBrandFooterNotes(notes);
  return notes;
}

function excelDescriptionLines(product, valuesByField = null) {
  const lines = [];
  const customQty = quoteExtraQty("custom", valuesByField);
  const customPrice = quoteExtraPrice("custom", valuesByField);

  if (quoteExtraQty("removal", valuesByField) > 0) lines.push("* Panel Removal & Disposal");
  if (quoteExtraQty("rewiring", valuesByField) > 0) lines.push("* Panel Rewiring to New Hybrid Inverter");
  if (quoteExtraQty("enclosure8", valuesByField) > 0 || quoteExtraQty("enclosure12", valuesByField) > 0) {
    lines.push("* External Enclosure Box (if needed)");
  }

  if (quoteExtraQty("switch", valuesByField) > 0) {
    lines.push("* Switchboard upgrade required due to asbestos compliance");
  }

  const hasEssentialBackup = quoteExtraQty("backup", valuesByField) > 0;
  const hasWholeHomeBackup = quoteExtraQty("wholeHome", valuesByField) > 0;

  if (hasEssentialBackup) {
    lines.push("* Blackout Protection for Essential Loads Included\n(Backup for 2 selected circuits, usually the fridge and lights)");
  }

  if (hasWholeHomeBackup) {
    lines.push("* Blackout Protection for Full-house Backup Included for $2,000 with\n(Backup for 2 selected circuits, usually the fridge and lights)");
  }

  const evDescription = selectedEvChargerDescription(product, valuesByField);
  if (evDescription) lines.push(evDescription);
  if (customQty > 0 && customPrice > 0) {
    lines.push(`* Custom extra: ${fmt(customPrice)} x ${customQty}`);
  }

  const productNote = cleanText(product.productNote);
  if (/hws|hot water/i.test(productNote)) {
    lines.push("* Customer to ensure solar HWS is removed prior to install");
    lines.push("* Removal & disposal of gas hot water system;\nInstallation of electric hot water system");
  }

  return lines;
}

function buildQuoteText(product, result) {
  const extraDescription = excelDescriptionLines(product).join("\n");
  return [
    quoteSystemDescription(product, result),
    extraDescription,
    excelBrandNotes(product, result)
  ].filter(Boolean).join("\n\n");
}

function selectProduct(index) {
  const product = products[index];
  if (!product) return;
  $("brandSelect").value = product.brand;
  renderProducts(index);
}

function clearCompareResults(baseProduct = products[current]) {
  toggleCustomPriceFields();
  $("compareList").innerHTML = "";
}

function renderCompare(baseProduct, options = {}) {
  toggleCustomPriceFields();
  const anchor = smartCompareAnchor(baseProduct);
  const button = $("calculateCompareBtn");
  if (button) button.textContent = "Compare";
  if (!compareResultsReady && !options.force) {
    $("compareList").innerHTML = "";
    return;
  }
  const cards = smartCompareProducts(baseProduct);

  if (!cards.length) {
    $("compareList").innerHTML = `<p class="compare-empty">No similar options found. Try changing inverter, battery or price filters.</p>`;
    return;
  }

  $("compareList").innerHTML = cards.map((candidate) => {
    const { product: p, index, displayPrice, batteryQty, batteryCapacity, inverterSize, score, priceDiff, compareValues, estimate } = candidate;
    const active = index === current ? " active" : "";
    const promoLabel = estimate.promoApplied ? `<span class="promo-label">促销最低价</span>` : "";
    const priceModeLabel = `<span class="promo-label">${escapeHtml(comparePriceModeLabel())}</span>`;
    const rowLabel = comparePriceMode() === "sheet" && p.sheetRowNumber ? ` (Row ${p.sheetRowNumber})` : "";
    const inverterLabel = [`${inverterSize || 0}kW`, inverterModelLabel(p)].filter(Boolean).join(" ");
    const extrasLabel = compareExtrasSummary(compareValues, p);
    const quoteTitle = `${compareQuoteTitle(candidate)}${rowLabel}`;
    return `<button class="compare-card${active}" type="button" data-index="${index}">
      <div class="compare-card-top">
        <span class="compare-brand">${escapeHtml(p.brand)}</span>
        <strong class="compare-price">${displayPrice ? fmt(displayPrice) : "计算中"}</strong>
      </div>
      <div class="compare-badges">
        ${promoLabel}
        ${priceModeLabel}
        <span class="promo-label">Match score: ${score}%</span>
      </div>
      <strong class="compare-product">${escapeHtml(quoteTitle)}</strong>
      <span>Inverter size: ${escapeHtml(inverterLabel)}</span>
      <span>Battery: ${escapeHtml(p.battery)}</span>
      <span>Battery count: ${escapeHtml(batteryQty)}</span>
      <span>Battery capacity: ${escapeHtml(batteryCapacity.toFixed(1))} kWh</span>
      <span>Price difference: ${escapeHtml(priceDiffLabel(priceDiff))}</span>
      <span class="compare-extras">${escapeHtml(extrasLabel)}</span>
    </button>`;
  }).join("");
  document.querySelectorAll(".compare-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectProduct(Number(card.dataset.index));
    });
  });
}

function estimateBase(product, options = {}) {
  const useCurrentInputs = options.useCurrentInputs ?? true;
  const valuesByField = options.valuesByField || {};
  if (product.isEvCharger) {
    const quantity = useCurrentInputs ? controlQty("batteryQty") : valuesByField.batteryQty ?? product.batQty ?? 1;
    const base = (product.basePrice || 1995) * quantity;
    const extras = useCurrentInputs
      ? activeExtrasTotal(product)
      : customExtraTotal(valuesByField);
    return {
      base,
      final: base + extras,
      promoApplied: false
    };
  }

  const batteryQty = useCurrentInputs ? num($("batteryQty").value) : valuesByField.batteryQty ?? product.batQty;
  const panelQty = useCurrentInputs ? num($("panelQty").value) : valuesByField.panelQty ?? product.panels;
  const batterySize = batteryQty * product.batUnit;
  const solarSize = panelQty * 475 / 1000;
  const batteryCredit = batteryStcs(batterySize, DEFAULT_STC_FACTOR) * DEFAULT_STC_PRICE;
  const solarCredit = solarSize * DEFAULT_STC_FACTOR * DEFAULT_STC_PRICE;
  const productTotal = product.inv * product.invQty + product.bat * batteryQty + product.panelPrice * panelQty + 67 * panelQty * 1.4;
  const base = productTotal * product.margin + 2000 + 300 * solarSize + 30 * batterySize - batteryCredit - solarCredit - (product.acCoupled ? 0 : WA_BATTERY_REBATE);
  const promoApplied = USE_PROMO_FLOOR && product.min > base;
  const customExtras = useCurrentInputs ? customExtraTotal() : customExtraTotal(valuesByField);
  return {
    base,
    final: (promoApplied ? product.min : base) + customExtras,
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
$("resetExtras").addEventListener("click", () => {
  const product = products[current];
  setExtraDefaults(product);
  applyProductRestrictions(product);
  update();
});
$("printBtn").addEventListener("click", () => window.print());
$("calculateCompareBtn").addEventListener("click", () => {
  compareResultsReady = true;
  const scheduled = scheduleCompareSheetCalculations(products[current], { manual: true });
  if (scheduled) {
    $("compareList").innerHTML = `<p class="compare-empty">Comparing similar options...</p>`;
  } else {
    renderCompare(products[current], { force: true });
  }
});
$("resetCompareBtn").addEventListener("click", () => {
  resetSmartCompareFilters();
  compareResultsReady = false;
  clearCompareResults(products[current]);
});
$("compareBrand")?.addEventListener("click", (event) => {
  const picker = $("compareBrand");
  const trigger = event.target.closest(".compare-brand-trigger");
  if (trigger) {
    const open = !picker.classList.contains("open");
    picker.classList.toggle("open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    return;
  }
  const option = event.target.closest(".compare-brand-option");
  if (!option) return;
  toggleCompareBrand(option.dataset.brand || option.textContent);
  compareResultsReady = false;
  clearCompareResults(products[current]);
});
document.addEventListener("click", (event) => {
  const picker = $("compareBrand");
  if (!picker || picker.contains(event.target)) return;
  picker.classList.remove("open");
  $("compareBrandTrigger")?.setAttribute("aria-expanded", "false");
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  $("compareBrand")?.classList.remove("open");
  $("compareBrandTrigger")?.setAttribute("aria-expanded", "false");
});
["compareInverter", "compareBattery", "comparePrice", "compareSort", "compareMinPrice", "compareMaxPrice"].forEach((id) => {
  $(id)?.addEventListener("change", () => {
    toggleCustomPriceFields();
    compareResultsReady = false;
    clearCompareResults(products[current]);
  });
  $(id)?.addEventListener("input", () => {
    toggleCustomPriceFields();
    compareResultsReady = false;
    clearCompareResults(products[current]);
  });
});
document.querySelectorAll('input[name="comparePriceMode"]').forEach((input) => {
  input.addEventListener("change", () => {
    compareResultsReady = false;
    clearCompareResults(products[current]);
  });
});
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
