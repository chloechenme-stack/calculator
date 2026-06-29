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

const extraDefs = [
  ["phase", "3 phase", 500],
  ["splits", "Extra solar splits", 200],
  ["optimizer", "Optimizer", 70],
  ["removal", "Panel removal / rewiring", 40],
  ["double", "Double storey", 2000],
  ["switch", "Switchboard / full-home backup", 1650],
  ["backup", "Essential backup / Gateway", 600],
  ["smart", "Smart meter", 0],
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

async function signInWithGoogle() {
  const clientId = $("googleClientId").value.trim();
  if (!clientId) {
    setSourceStatus("请先填写 Google OAuth Client ID。", "error");
    return;
  }

  localStorage.setItem("googleClientId", clientId);
  setSourceStatus("正在打开 Google 登录...", "");
  try {
    await waitForGoogleIdentity();
    googleTokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
      callback: (response) => {
        if (response.error) {
          setSourceStatus(`Google 登录失败：${response.error}`, "error");
          return;
        }
        googleAccessToken = response.access_token;
        setSourceStatus("Google 已登录，可以读取你有权限的 Sheet。", "ok");
      }
    });
    googleTokenClient.requestAccessToken({ prompt: "consent" });
  } catch (error) {
    setSourceStatus(`Google 登录失败：${error.message}`, "error");
  }
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

async function loadPrivateSheetRows(sheetUrl) {
  const { spreadsheetId, gid } = parseSheetTarget(sheetUrl);
  const meta = await fetchGoogleJson(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties`);
  const sheet = meta.sheets?.find((item) => Number(item.properties.sheetId) === gid) || meta.sheets?.[0];
  if (!sheet) throw new Error("找不到这个 spreadsheet 里的工作表。");

  const range = `${quoteSheetTitle(sheet.properties.title)}!A:AR`;
  const values = await fetchGoogleJson(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?majorDimension=ROWS`);
  return {
    title: sheet.properties.title,
    rows: values.values || []
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
  return num(String(value || "").replace(/[$,]/g, ""));
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

function csvRowsToProducts(rows) {
  const headerIndex = rows.findIndex((row) => row.some((cell) => cleanText(cell).toUpperCase() === "WHOLESALER"));
  if (headerIndex === -1) throw new Error("找不到 WHOLESALER 表头，请确认链接是 3-Product 这一页的 CSV。");

  const parsed = rows.slice(headerIndex + 1).map((row) => {
    const wholesaler = cleanText(row[0]);
    const inverter = cleanText(row[1]);
    const battery = cleanText(row[4]);
    const sellPrice = money(row[20]);
    if (!wholesaler || !inverter || !battery || !sellPrice) return null;

    const batteryQty = money(row[6]);
    const batterySize = money(row[7]);
    const productTotal = money(row[14]);
    const gstComm = money(row[15]);
    const extras = [
      money(row[21]) * money(row[22]),
      money(row[23]) * money(row[24]),
      money(row[25]) * money(row[26]),
      money(row[27]) * money(row[28]),
      money(row[29]) * money(row[30]),
      money(row[31]) * money(row[32]),
      money(row[33]) * money(row[34]),
      money(row[35]) * money(row[36]),
      money(row[37]) * money(row[38]),
      money(row[39]) * money(row[40]),
      money(row[41]) * money(row[42])
    ].reduce((sum, value) => sum + value, 0);
    const sellWithExtras = money(row[43]);
    const promoMin = sellWithExtras > sellPrice + extras + 1 ? sellWithExtras : 0;

    return {
      brand: inferBrand(inverter, wholesaler),
      wholesaler,
      inverter,
      battery,
      inv: money(row[2]),
      invQty: money(row[3]) || 1,
      bat: money(row[5]),
      batQty: batteryQty,
      batUnit: inferBatteryUnit(battery, batterySize, batteryQty),
      panels: money(row[10]),
      panelPrice: money(row[9]) || 125,
      margin: productTotal > 0 && gstComm > 0 ? gstComm / productTotal : 1.25,
      min: promoMin,
      acCoupled: /ac\s*couple/i.test(inverter),
      phaseQty: money(row[22]),
      baseRemoval: money(row[28]),
      baseDouble: money(row[30]),
      switchQty: money(row[32]),
      baseBackup: money(row[34]),
      teslaEvQty: money(row[38]),
      sigEvQty: money(row[40]),
      baseEnclosure: money(row[42]),
      doublePrice: money(row[29]) || undefined,
      backupPrice: money(row[33]) || undefined,
      teslaEvPrice: money(row[37]) || undefined,
      sigenergyEvPrice: money(row[39]) || undefined,
      enclosurePrice: money(row[41]) || undefined
    };
  }).filter(Boolean);

  if (!parsed.length) throw new Error("CSV 已读取，但没有找到可用产品行。");
  return parsed;
}

async function loadSheetData() {
  const button = $("loadSheetBtn");
  button.disabled = true;
  setSourceStatus("正在读取 Google Sheet...", "");
  try {
    let rows;
    let sourceName = "公开 CSV";
    if (googleAccessToken) {
      const result = await loadPrivateSheetRows($("sheetUrl").value);
      rows = result.rows;
      sourceName = `Google 登录数据：${result.title}`;
    } else {
      const csvUrl = toCsvUrl($("sheetUrl").value);
      const response = await fetch(csvUrl);
      const text = await response.text();
      if (!response.ok || /ServiceLogin|accounts\.google\.com|Sign in/i.test(text)) {
        throw new Error("这个 Sheet 需要登录。请先填写 OAuth Client ID 并点击 Google 登录。");
      }
      rows = parseCsv(text);
    }
    products = csvRowsToProducts(rows);
    current = 0;
    renderBrands();
    $("brandSelect").value = products[0].brand;
    renderProducts();
    setSourceStatus(`已从 ${sourceName} 加载 ${products.length} 个产品配置`, "ok");
  } catch (error) {
    products = [...defaultProducts];
    current = 0;
    renderBrands();
    renderProducts();
    setSourceStatus(`读取失败：${error.message} 当前仍使用内置数据。`, "error");
  } finally {
    button.disabled = false;
  }
}

function useBuiltInData() {
  products = [...defaultProducts];
  current = 0;
  renderBrands();
  renderProducts();
  setSourceStatus("当前使用内置数据", "");
}

function batteryStcs(kwh, factor) {
  const weighted = Math.min(kwh, 14) + Math.max(Math.min(kwh, 28) - 14, 0) * 0.6 + Math.max(Math.min(kwh, 50) - 28, 0) * 0.15;
  return Math.floor(weighted * factor);
}

function calculate(product) {
  const batQty = num($("batteryQty").value);
  const panelQty = num($("panelQty").value);
  const stcPrice = num($("stcPrice").value);
  const stcFactor = num($("stcFactor").value);
  const batterySize = batQty * product.batUnit;
  const solarSize = panelQty * 475 / 1000;
  const batteryCredit = batteryStcs(batterySize, stcFactor) * stcPrice;
  const solarCredit = solarSize * stcFactor * stcPrice;
  const waRebate = $("dcCoupled").checked && !product.acCoupled ? 1300 : 0;
  const kit = 67 * panelQty;
  const productTotal = product.inv * product.invQty + product.bat * batQty + product.panelPrice * panelQty + kit * 1.4;
  const gstComm = productTotal * product.margin;
  const install = 2000 + 300 * solarSize + 30 * batterySize;
  const totalRebates = batteryCredit + solarCredit + waRebate;
  const baseSell = gstComm + install - totalRebates;
  const extras = extraDefs.reduce((sum, [key]) => sum + num($(key + "Qty").value) * num($(key + "Price").value), 0);
  const beforeFloor = baseSell + extras;
  const promoFloor = product.min || 0;
  const final = $("useFloor").checked ? Math.max(promoFloor, beforeFloor) : beforeFloor;
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
    promoFloor,
    promoApplied: $("useFloor").checked && promoFloor > beforeFloor
  };
}

function setExtraDefaults(product) {
  const defaults = {
    phase: product.phaseQty || 0,
    splits: 0,
    optimizer: 0,
    removal: product.baseRemoval || 0,
    double: product.baseDouble || 0,
    switch: product.switchQty || 0,
    backup: product.baseBackup || 0,
    smart: 0,
    tesla: product.teslaEvQty || 0,
    sigEv: product.sigEvQty || 0,
    enclosure: product.baseEnclosure || 0
  };
  const prices = {
    double: product.doublePrice || 2000,
    backup: product.backupPrice || 600,
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
      <div class="extra-name">
        <strong>${label}</strong>
        <span><input id="${key}Price" type="number" min="0" step="1" value="${price}" aria-label="${label} price"></span>
      </div>
      <input id="${key}Qty" type="number" min="0" step="1" value="0" aria-label="${label} quantity">
    </div>
  `).join("");
  extraDefs.forEach(([key]) => {
    $(key + "Qty").addEventListener("input", update);
    $(key + "Price").addEventListener("input", update);
  });
}

function renderBrands() {
  const brands = [...new Set(products.map((p) => p.brand))];
  $("brandSelect").innerHTML = brands.map((brand) => `<option>${brand}</option>`).join("");
}

function renderProducts() {
  const brand = $("brandSelect").value;
  const list = products.map((p, index) => ({ ...p, index })).filter((p) => p.brand === brand);
  $("productSelect").innerHTML = list.map((p) => `<option value="${p.index}">${p.inverter}</option>`).join("");
  current = list[0]?.index || 0;
  $("productSelect").value = current;
  loadProduct();
}

function loadProduct() {
  current = Number($("productSelect").value);
  const product = products[current];
  $("batteryQty").value = product.batQty;
  $("panelQty").value = product.panels;
  $("dcCoupled").checked = !product.acCoupled;
  setExtraDefaults(product);
  update();
}

function update() {
  const product = products[current];
  const result = calculate(product);
  $("wholesaler").textContent = product.wholesaler;
  $("quoteTitle").textContent = product.inverter;
  $("batteryName").textContent = product.battery;
  $("finalPrice").textContent = fmt(result.final);
  $("batterySize").textContent = `${result.batterySize.toFixed(1)} kWh`;
  $("solarSize").textContent = `${result.solarSize.toFixed(2)} kW`;
  $("perKwh").textContent = result.batterySize ? fmt(result.final / result.batterySize) : "$0";
  $("extrasTotal").textContent = fmt(result.extras);
  $("productTotal").textContent = fmt(result.productTotal);
  $("gstComm").textContent = fmt(result.gstComm);
  $("install").textContent = fmt(result.install);
  $("solarRebate").textContent = `-${fmt(result.solarCredit)}`;
  $("batteryRebate").textContent = `-${fmt(result.batteryCredit)}`;
  $("waRebate").textContent = `-${fmt(result.waRebate)}`;
  $("totalRebates").textContent = `-${fmt(result.totalRebates)}`;
  $("baseSell").textContent = fmt(result.baseSell);
  $("promoFloor").textContent = result.promoApplied ? `${fmt(result.promoFloor)} 已套用` : fmt(result.promoFloor);
  $("priceNote").textContent = result.promoApplied
    ? `促销最低价 ${fmt(result.promoFloor)} 已套用`
    : "按系统基础价 + extras 计算，含 GST 并已扣除补贴";
  $("quoteText").value = buildQuoteText(product, result);
  renderCompare(product.brand);
}

function buildQuoteText(product, result) {
  const noteKey = product.brand === "Sigenergy" ? "Sigenergy" : product.brand;
  const notes = pylonNotes[noteKey] || generalPylonNotes.join("\n");
  const extraLines = extraDefs
    .map(([key, label]) => ({ label, qty: num($(key + "Qty").value), price: num($(key + "Price").value) }))
    .filter((item) => item.qty > 0 && item.price > 0)
    .map((item) => `- ${item.label}: ${item.qty} x ${fmt(item.price)} = ${fmt(item.qty * item.price)}`);
  const extrasText = extraLines.length ? extraLines.join("\n") : "- No selected extras";

  return `Hi,

Please see the quote details below:

System:
- ${result.solarSize.toFixed(2)}kW PV + ${product.inverter}
- Battery: ${product.battery} (${result.batterySize.toFixed(1)}kWh)
- Wholesaler: ${product.wholesaler}

Price:
- System price after eligible rebates: ${fmt(result.baseSell)}
- Promotional minimum price: ${fmt(result.promoFloor)}${result.promoApplied ? " (applied)" : ""}
- Selected extras: ${fmt(result.extras)}
- Total price inc. GST: ${fmt(result.final)}

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
    const calculatedLabel = estimate.promoApplied ? `<span>系统计算价 ${fmt(estimate.base)}</span>` : "";
    return `<button class="compare-card${active}" type="button" data-index="${p.index}">
      <strong>${fmt(estimate.final)}</strong>
      ${promoLabel}
      <span>${p.inverter}</span>
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
  const batteryCredit = batteryStcs(batterySize, num($("stcFactor").value)) * num($("stcPrice").value);
  const solarCredit = solarSize * num($("stcFactor").value) * num($("stcPrice").value);
  const productTotal = product.inv * product.invQty + product.bat * product.batQty + product.panelPrice * product.panels + 67 * product.panels * 1.4;
  const base = productTotal * product.margin + 2000 + 300 * solarSize + 30 * batterySize - batteryCredit - solarCredit - (product.acCoupled ? 0 : 1300);
  const promoApplied = $("useFloor").checked && product.min > base;
  return {
    base,
    final: promoApplied ? product.min : base,
    promoApplied
  };
}

renderExtras();
$("googleClientId").value = localStorage.getItem("googleClientId") || "";
renderBrands();
renderProducts();

$("googleLoginBtn").addEventListener("click", signInWithGoogle);
$("loadSheetBtn").addEventListener("click", loadSheetData);
$("useBuiltInBtn").addEventListener("click", useBuiltInData);
$("brandSelect").addEventListener("change", renderProducts);
$("productSelect").addEventListener("change", loadProduct);
["batteryQty", "panelQty", "stcPrice", "stcFactor", "dcCoupled", "useFloor"].forEach((id) => $(id).addEventListener("input", update));
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
