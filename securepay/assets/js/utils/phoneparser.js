/* eslint-disable */
//MODIFIED BY ANTON POLYAKIN (https://github.com/AntonPolyakin)

export default function parsePhone(e) {
    e = e.replace(/\D/g, "");
    try {
        var t = i18n.phonenumbers.PhoneNumberUtil.getInstance()
          , n = findCountryISO2(e)
          , o = t.getRegionCodeForCountryCode(n)
          , r = t.parseAndKeepRawInput("+" + e, o)
          , d = o = null
          , i = t.getNationalSignificantNumber(r)
          , N = t.getLengthOfNationalDestinationCode(r);
        N > 0 && (o = i.substring(0, N));
        var d = e.substr(0, e.indexOf(i))
          , a = i.substr((o || "").length)
          , u = {
            countryCode: d,
            areaCode: o,
            number: a,
            countryISOCode: n
        };
        return 973 == d && (o + "").length > 0 && (u.areaCode = "",
        u.number = o + a),
        (974 == d || 968 == d) && (o + "").length > 2 && (u.areaCode = o.substr(0, 2),
        u.number = o.substr(2) + a),
        965 == d && (o + "").length > 3 && (u.areaCode = o.substr(0, 3),
        u.number = o.substr(3) + a),
        u
    } catch (s) {
        return {error: s}
    }
    return null
}
function replaceAll(e, t, n) {
    return n.replace(new RegExp(e,"g"), t)
}
function findCountryISO2(e) {
    let prefixes = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap
    for (var t = Math.min(e.length, 7); t > 0; t--) {
        var n = e.substr(0, t);
        if (prefixes[n])
            return prefixes[n]
    }
    return "nothing"
}
var prefixes = {
    20: "EG",
    27: "ZA",
    30: "GR",
    31: "NL",
    32: "BE",
    33: "FR",
    34: "ES",
    36: "HU",
    39: "IT",
    40: "RO",
    41: "CH",
    43: "AT",
    44: "GB",
    45: "DK",
    46: "SE",
    47: "NO",
    48: "PL",
    49: "DE",
    51: "PE",
    52: "MX",
    53: "CU",
    54: "AR",
    55: "BR",
    56: "CL",
    57: "CO",
    60: "MY",
    61: "AU",
    62: "ID",
    63: "PH",
    65: "SG",
    66: "TH",
    76: "KZ",
    77: "KZ",
    81: "JP",
    86: "CN",
    90: "TR",
    91: "IN",
    92: "PK",
    93: "AF",
    94: "LK",
    211: "SS",
    212: "MA",
    213: "DZ",
    216: "TN",
    218: "LY",
    220: "GM",
    221: "SN",
    222: "MR",
    223: "ML",
    224: "GN",
    225: "CI",
    226: "BF",
    227: "NE",
    228: "TG",
    229: "BJ",
    230: "MU",
    231: "LR",
    232: "SL",
    233: "GH",
    234: "NG",
    235: "TD",
    236: "CF",
    237: "CM",
    238: "CV",
    240: "GQ",
    241: "GA",
    244: "AO",
    246: "DG",
    248: "SC",
    249: "SD",
    250: "RW",
    251: "ET",
    252: "SO",
    253: "DJ",
    254: "KE",
    256: "UG",
    257: "BI",
    258: "MZ",
    260: "ZM",
    261: "MG",
    262: "RE",
    263: "ZW",
    264: "NA",
    265: "MW",
    266: "LS",
    267: "BW",
    268: "SZ",
    269: "KM",
    291: "ER",
    298: "FO",
    299: "GL",
    350: "GI",
    351: "PT",
    352: "LU",
    353: "IE",
    354: "IS",
    355: "AL",
    356: "MT",
    357: "CY",
    358: "FI",
    359: "BG",
    370: "LT",
    371: "LV",
    372: "EE",
    373: "MD",
    374: "AM",
    375: "BY",
    376: "AD",
    377: "MC",
    378: "SM",
    380: "UA",
    381: "RS",
    382: "ME",
    385: "HR",
    386: "SI",
    420: "CZ",
    421: "SK",
    423: "LI",
    501: "BZ",
    502: "GT",
    503: "SV",
    504: "HN",
    505: "NI",
    506: "CR",
    507: "PA",
    509: "HT",
    590: "GP",
    592: "GY",
    593: "EC",
    594: "GF",
    595: "PY",
    596: "MQ",
    597: "SR",
    598: "UY",
    670: "TL",
    673: "BN",
    674: "NR",
    675: "PG",
    676: "TO",
    677: "SB",
    678: "VU",
    679: "FJ",
    680: "PW",
    682: "CK",
    683: "NU",
    685: "WS",
    686: "KI",
    687: "NC",
    688: "TV",
    689: "PF",
    690: "TK",
    692: "MH",
    852: "HK",
    855: "KH",
    880: "BD",
    960: "MV",
    961: "LB",
    962: "JO",
    964: "IQ",
    965: "KW",
    966: "SA",
    967: "YE",
    968: "OM",
    971: "AE",
    972: "IL",
    973: "BH",
    974: "QA",
    975: "BT",
    976: "MN",
    977: "NP",
    992: "TJ",
    993: "TM",
    994: "AZ",
    995: "GE",
    996: "KG",
    998: "UZ",
    1201: "US",
    1202: "US",
    1203: "US",
    1204: "CA",
    1205: "US",
    1206: "US",
    1207: "US",
    1208: "US",
    1209: "US",
    1210: "US",
    1212: "US",
    1213: "US",
    1214: "US",
    1215: "US",
    1216: "US",
    1217: "US",
    1218: "US",
    1219: "US",
    1224: "US",
    1225: "US",
    1226: "CA",
    1228: "US",
    1231: "US",
    1236: "CA",
    1240: "US",
    1242: "BS",
    1246: "BB",
    1248: "US",
    1250: "CA",
    1252: "US",
    1253: "US",
    1254: "US",
    1256: "US",
    1264: "AI",
    1267: "US",
    1270: "US",
    1281: "US",
    1289: "CA",
    1301: "US",
    1302: "US",
    1303: "US",
    1304: "US",
    1305: "US",
    1306: "CA",
    1307: "US",
    1308: "US",
    1309: "US",
    1310: "US",
    1312: "US",
    1313: "US",
    1314: "US",
    1315: "US",
    1316: "US",
    1317: "US",
    1318: "US",
    1319: "US",
    1320: "US",
    1321: "US",
    1323: "US",
    1330: "US",
    1334: "US",
    1336: "US",
    1345: "KY",
    1347: "US",
    1352: "US",
    1360: "US",
    1361: "US",
    1401: "US",
    1402: "US",
    1403: "CA",
    1404: "US",
    1405: "US",
    1406: "US",
    1407: "US",
    1408: "US",
    1409: "US",
    1410: "US",
    1412: "US",
    1413: "US",
    1414: "US",
    1415: "US",
    1416: "CA",
    1417: "US",
    1418: "CA",
    1419: "US",
    1423: "US",
    1424: "US",
    1425: "US",
    1431: "CA",
    1435: "US",
    1438: "CA",
    1440: "US",
    1441: "BM",
    1443: "US",
    1450: "CA",
    1469: "US",
    1473: "GD",
    1480: "US",
    1484: "US",
    1501: "US",
    1502: "US",
    1503: "US",
    1504: "US",
    1505: "US",
    1506: "CA",
    1507: "US",
    1508: "US",
    1509: "US",
    1510: "US",
    1512: "US",
    1513: "US",
    1514: "CA",
    1515: "US",
    1516: "US",
    1517: "US",
    1518: "US",
    1519: "CA",
    1520: "US",
    1530: "US",
    1540: "US",
    1541: "US",
    1559: "US",
    1561: "US",
    1562: "US",
    1570: "US",
    1571: "US",
    1573: "US",
    1580: "US",
    1581: "CA",
    1587: "CA",
    1601: "US",
    1602: "US",
    1603: "US",
    1604: "CA",
    1605: "US",
    1606: "US",
    1607: "US",
    1608: "US",
    1609: "US",
    1610: "US",
    1612: "US",
    1613: "CA",
    1614: "US",
    1615: "US",
    1616: "US",
    1617: "US",
    1618: "US",
    1619: "US",
    1623: "US",
    1626: "US",
    1630: "US",
    1636: "US",
    1646: "US",
    1647: "CA",
    1650: "US",
    1651: "US",
    1660: "US",
    1661: "US",
    1662: "US",
    1664: "MS",
    1669: "US",
    1670: "MP",
    1671: "GU",
    1678: "US",
    1684: "AS",
    1701: "US",
    1702: "US",
    1703: "US",
    1704: "US",
    1705: "CA",
    1706: "US",
    1707: "US",
    1708: "US",
    1709: "CA",
    1712: "US",
    1713: "US",
    1714: "US",
    1715: "US",
    1716: "US",
    1717: "US",
    1718: "US",
    1719: "US",
    1720: "US",
    1724: "US",
    1727: "US",
    1732: "US",
    1734: "US",
    1740: "US",
    1757: "US",
    1758: "LC",
    1760: "US",
    1765: "US",
    1767: "DM",
    1770: "US",
    1773: "US",
    1775: "US",
    1778: "CA",
    1781: "US",
    1785: "US",
    1786: "US",
    1801: "US",
    1802: "US",
    1803: "US",
    1804: "US",
    1805: "US",
    1806: "US",
    1807: "CA",
    1810: "US",
    1812: "US",
    1813: "US",
    1814: "US",
    1815: "US",
    1816: "US",
    1817: "US",
    1818: "US",
    1819: "CA",
    1828: "US",
    1830: "US",
    1831: "US",
    1832: "US",
    1843: "US",
    1847: "US",
    1849: "DO",
    1850: "US",
    1856: "US",
    1858: "US",
    1860: "US",
    1864: "US",
    1867: "CA",
    1870: "US",
    1876: "JM",
    1901: "US",
    1902: "CA",
    1903: "US",
    1904: "US",
    1905: "CA",
    1906: "US",
    1907: "US",
    1908: "US",
    1909: "US",
    1910: "US",
    1912: "US",
    1913: "US",
    1914: "US",
    1915: "US",
    1916: "US",
    1917: "US",
    1918: "US",
    1919: "US",
    1920: "US",
    1925: "US",
    1931: "US",
    1935: "US",
    1937: "US",
    1939: "PR",
    1940: "US",
    1941: "US",
    1949: "US",
    1952: "US",
    1954: "US",
    1956: "US",
    1970: "US",
    1972: "US",
    1973: "US",
    1978: "US",
    6723: "NF",
    262269: "YT",
    262639: "YT",
    441481: "GG",
    441534: "JE",
    6189162: "CC",
    6189164: "CX"
}
  , COMPILED = !0
  , goog = goog || {};
goog.global = this,
goog.exportPath_ = function(e, t, n) {
    e = e.split("."),
    n = n || goog.global,
    e[0]in n || !n.execScript || n.execScript("var " + e[0]);
    for (var o; e.length && (o = e.shift()); )
        e.length || void 0 === t ? n = n[o] ? n[o] : n[o] = {} : n[o] = t
}
,
goog.define = function(e, t) {
    var n = t;
    COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, e) ? n = goog.global.CLOSURE_UNCOMPILED_DEFINES[e] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, e) && (n = goog.global.CLOSURE_DEFINES[e])),
    goog.exportPath_(e, n)
}
,
goog.DEBUG = !0,
goog.LOCALE = "en",
goog.TRUSTED_SITE = !0,
goog.STRICT_MODE_COMPATIBLE = !1,
goog.provide = function(e) {
    if (!COMPILED) {
        if (goog.isProvided_(e))
            throw Error('Namespace "' + e + '" already declared.');
        delete goog.implicitNamespaces_[e];
        for (var t = e; (t = t.substring(0, t.lastIndexOf("."))) && !goog.getObjectByName(t); )
            goog.implicitNamespaces_[t] = !0
    }
    goog.exportPath_(e)
}
,
goog.setTestOnly = function(e) {
    if (COMPILED && !goog.DEBUG)
        throw e = e || "",
        Error(": " + e)
}
,
goog.forwardDeclare = function() {}
,
COMPILED || (goog.isProvided_ = function(e) {
    return !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
}
,
goog.implicitNamespaces_ = {}),
goog.getObjectByName = function(e, t) {
    for (var n, o = e.split("."), r = t || goog.global; n = o.shift(); ) {
        if (!goog.isDefAndNotNull(r[n]))
            return null ;
        r = r[n]
    }
    return r
}
,
goog.globalize = function(e, t) {
    var n, o = t || goog.global;
    for (n in e)
        o[n] = e[n]
}
,
goog.addDependency = function(e, t, n) {
    if (goog.DEPENDENCIES_ENABLED) {
        var o;
        e = e.replace(/\\/g, "/");
        for (var r = goog.dependencies_, d = 0; o = t[d]; d++)
            r.nameToPath[o] = e,
            e in r.pathToNames || (r.pathToNames[e] = {}),
            r.pathToNames[e][o] = !0;
        for (o = 0; t = n[o]; o++)
            e in r.requires || (r.requires[e] = {}),
            r.requires[e][t] = !0
    }
}
,
goog.ENABLE_DEBUG_LOADER = !0,
goog.require = function(e) {
    if (!COMPILED && !goog.isProvided_(e)) {
        if (goog.ENABLE_DEBUG_LOADER) {
            var t = goog.getPathFromDeps_(e);
            if (t)
                return goog.included_[t] = !0,
                void goog.writeScripts_()
        }
        throw e = "goog.require could not find: " + e,
        goog.global.console && goog.global.console.error(e),
        Error(e)
    }
}
,
goog.basePath = "",
goog.nullFunction = function() {}
,
goog.identityFunction = function(e) {
    return e
}
,
goog.abstractMethod = function() {
    throw Error("unimplemented abstract method")
}
,
goog.addSingletonGetter = function(e) {
    e.getInstance = function() {
        return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e),
        e.instance_ = new e)
    }
}
,
goog.instantiatedSingletons_ = [],
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER,
goog.DEPENDENCIES_ENABLED && (goog.included_ = {},
goog.dependencies_ = {
    pathToNames: {},
    nameToPath: {},
    requires: {},
    visited: {},
    written: {}
},
goog.inHtmlDocument_ = function() {
    var e = goog.global.document;
    return "undefined" != typeof e && "write"in e
}
,
goog.findBasePath_ = function() {
    if (goog.global.CLOSURE_BASE_PATH)
        goog.basePath = goog.global.CLOSURE_BASE_PATH;
    else if (goog.inHtmlDocument_())
        for (var e = goog.global.document.getElementsByTagName("script"), t = e.length - 1; t >= 0; --t) {
            var n = e[t].src
              , o = n.lastIndexOf("?")
              , o = -1 == o ? n.length : o;
            if ("base.js" == n.substr(o - 7, 7)) {
                goog.basePath = n.substr(0, o - 7);
                break
            }
        }
}
,
goog.importScript_ = function(e) {
    var t = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[e] && t(e) && (goog.dependencies_.written[e] = !0)
}
,
goog.writeScriptTag_ = function(e) {
    if (goog.inHtmlDocument_()) {
        var t = goog.global.document;
        if ("complete" == t.readyState) {
            if (/\bdeps.js$/.test(e))
                return !1;
            throw Error('Cannot write "' + e + '" after document load')
        }
        return t.write('<script type="text/javascript" src="' + e + '"></script>'),
        !0
    }
    return !1
}
,
goog.writeScripts_ = function() {
    function e(t) {
        if (!(t in r.written)) {
            if (!(t in r.visited) && (r.visited[t] = !0,
            t in r.requires))
                for (var d in r.requires[t])
                    if (!goog.isProvided_(d)) {
                        if (!(d in r.nameToPath))
                            throw Error("Undefined nameToPath for " + d);
                        e(r.nameToPath[d])
                    }
            t in o || (o[t] = !0,
            n.push(t))
        }
    }
    var t, n = [], o = {}, r = goog.dependencies_;
    for (t in goog.included_)
        r.written[t] || e(t);
    for (t = 0; t < n.length; t++) {
        if (!n[t])
            throw Error("Undefined script input");
        goog.importScript_(goog.basePath + n[t])
    }
}
,
goog.getPathFromDeps_ = function(e) {
    return e in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[e] : null
}
,
goog.findBasePath_(),
goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")),
goog.typeOf = function(e) {
    var t = typeof e;
    if ("object" == t) {
        if (!e)
            return "null";
        if (e instanceof Array)
            return "array";
        if (e instanceof Object)
            return t;
        var n = Object.prototype.toString.call(e);
        if ("[object Window]" == n)
            return "object";
        if ("[object Array]" == n || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice"))
            return "array";
        if ("[object Function]" == n || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call"))
            return "function"
    } else if ("function" == t && "undefined" == typeof e.call)
        return "object";
    return t
}
,
goog.isDef = function(e) {
    return void 0 !== e
}
,
goog.isNull = function(e) {
    return null === e
}
,
goog.isDefAndNotNull = function(e) {
    return null != e
}
,
goog.isArray = function(e) {
    return "array" == goog.typeOf(e)
}
,
goog.isArrayLike = function(e) {
    var t = goog.typeOf(e);
    return "array" == t || "object" == t && "number" == typeof e.length
}
,
goog.isDateLike = function(e) {
    return goog.isObject(e) && "function" == typeof e.getFullYear
}
,
goog.isString = function(e) {
    return "string" == typeof e
}
,
goog.isBoolean = function(e) {
    return "boolean" == typeof e
}
,
goog.isNumber = function(e) {
    return "number" == typeof e
}
,
goog.isFunction = function(e) {
    return "function" == goog.typeOf(e)
}
,
goog.isObject = function(e) {
    var t = typeof e;
    return "object" == t && null != e || "function" == t
}
,
goog.getUid = function(e) {
    return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
}
,
goog.hasUid = function(e) {
    return !!e[goog.UID_PROPERTY_]
}
,
goog.removeUid = function(e) {
    "removeAttribute"in e && e.removeAttribute(goog.UID_PROPERTY_);
    try {
        delete e[goog.UID_PROPERTY_]
    } catch (t) {}
}
,
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0),
goog.uidCounter_ = 0,
goog.getHashCode = goog.getUid,
goog.removeHashCode = goog.removeUid,
goog.cloneObject = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if (e.clone)
            return e.clone();
        var n, t = "array" == t ? [] : {};
        for (n in e)
            t[n] = goog.cloneObject(e[n]);
        return t
    }
    return e
}
,
goog.bindNative_ = function(e) {
    return e.call.apply(e.bind, arguments)
}
,
goog.bindJs_ = function(e, t) {
    if (!e)
        throw Error();
    if (2 < arguments.length) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function() {
            var o = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(o, n),
            e.apply(t, o)
        }
    }
    return function() {
        return e.apply(t, arguments)
    }
}
,
goog.bind = function() {
    return goog.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bindNative_ : goog.bindJs_,
    goog.bind.apply(null , arguments)
}
,
goog.partial = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return function() {
        var n = t.slice();
        return n.push.apply(n, arguments),
        e.apply(this, n)
    }
}
,
goog.mixin = function(e, t) {
    for (var n in t)
        e[n] = t[n]
}
,
goog.now = goog.TRUSTED_SITE && Date.now || function() {
    return +new Date
}
,
goog.globalEval = function(e) {
    if (goog.global.execScript)
        goog.global.execScript(e, "JavaScript");
    else {
        if (!goog.global.eval)
            throw Error("goog.globalEval not available");
        if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"),
        "undefined" != typeof goog.global._et_ ? (delete goog.global._et_,
        goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1),
        goog.evalWorksForGlobals_)
            goog.global.eval(e);
        else {
            var t = goog.global.document
              , n = t.createElement("script");
            n.type = "text/javascript",
            n.defer = !1,
            n.appendChild(t.createTextNode(e)),
            t.body.appendChild(n),
            t.body.removeChild(n)
        }
    }
}
,
goog.evalWorksForGlobals_ = null ,
goog.getCssName = function(e, t) {
    var n = function(e) {
        return goog.cssNameMapping_[e] || e
    }
      , o = function(e) {
        e = e.split("-");
        for (var t = [], o = 0; o < e.length; o++)
            t.push(n(e[o]));
        return t.join("-")
    }
      , o = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? n : o : function(e) {
        return e
    }
    ;
    return t ? e + "-" + o(t) : o(e)
}
,
goog.setCssNameMapping = function(e, t) {
    goog.cssNameMapping_ = e,
    goog.cssNameMappingStyle_ = t
}
,
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
goog.getMsg = function(e, t) {
    var n, o = t || {};
    for (n in o) {
        var r = ("" + o[n]).replace(/\$/g, "$$$$");
        e = e.replace(new RegExp("\\{\\$" + n + "\\}","gi"), r)
    }
    return e
}
,
goog.getMsgWithFallback = function(e) {
    return e
}
,
goog.exportSymbol = function(e, t, n) {
    goog.exportPath_(e, t, n)
}
,
goog.exportProperty = function(e, t, n) {
    e[t] = n
}
,
goog.inherits = function(e, t) {
    function n() {}
    n.prototype = t.prototype,
    e.superClass_ = t.prototype,
    e.prototype = new n,
    e.prototype.constructor = e,
    e.base = function(e, n) {
        var o = Array.prototype.slice.call(arguments, 2);
        return t.prototype[n].apply(e, o)
    }
}
,
goog.base = function(e, t) {
    var n = arguments.callee.caller;
    if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !n)
        throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if (n.superClass_)
        return n.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1));
    for (var o = Array.prototype.slice.call(arguments, 2), r = !1, d = e.constructor; d; d = d.superClass_ && d.superClass_.constructor)
        if (d.prototype[t] === n)
            r = !0;
        else if (r)
            return d.prototype[t].apply(e, o);
    if (e[t] === n)
        return e.constructor.prototype[t].apply(e, o);
    throw Error("goog.base called from a method of one name to a method of a different name")
}
,
goog.scope = function(e) {
    e.call(goog.global)
}
,
goog.debug = {},
goog.debug.Error = function(e) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, goog.debug.Error);
    else {
        var t = Error().stack;
        t && (this.stack = t)
    }
    e && (this.message = String(e))
}
,
goog.inherits(goog.debug.Error, Error),
goog.debug.Error.prototype.name = "CustomError",
goog.dom = {},
goog.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
},
goog.string = {},
goog.string.Unicode = {
    NBSP: "Â "
},
goog.string.startsWith = function(e, t) {
    return 0 == e.lastIndexOf(t, 0)
}
,
goog.string.endsWith = function(e, t) {
    var n = e.length - t.length;
    return n >= 0 && e.indexOf(t, n) == n
}
,
goog.string.caseInsensitiveStartsWith = function(e, t) {
    return 0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
}
,
goog.string.caseInsensitiveEndsWith = function(e, t) {
    return 0 == goog.string.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
}
,
goog.string.caseInsensitiveEquals = function(e, t) {
    return e.toLowerCase() == t.toLowerCase()
}
,
goog.string.subs = function(e) {
    for (var t = e.split("%s"), n = "", o = Array.prototype.slice.call(arguments, 1); o.length && 1 < t.length; )
        n += t.shift() + o.shift();
    return n + t.join("%s")
}
,
goog.string.collapseWhitespace = function(e) {
    return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
}
,
goog.string.isEmpty = function(e) {
    return /^[\s\xa0]*$/.test(e)
}
,
goog.string.isEmptySafe = function(e) {
    return goog.string.isEmpty(goog.string.makeSafe(e))
}
,
goog.string.isBreakingWhitespace = function(e) {
    return !/[^\t\n\r ]/.test(e)
}
,
goog.string.isAlpha = function(e) {
    return !/[^a-zA-Z]/.test(e)
}
,
goog.string.isNumeric = function(e) {
    return !/[^0-9]/.test(e)
}
,
goog.string.isAlphaNumeric = function(e) {
    return !/[^a-zA-Z0-9]/.test(e)
}
,
goog.string.isSpace = function(e) {
    return " " == e
}
,
goog.string.isUnicodeChar = function(e) {
    return 1 == e.length && e >= " " && "~" >= e || e >= "Â€" && "ï¿½" >= e
}
,
goog.string.stripNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)+/g, " ")
}
,
goog.string.canonicalizeNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)/g, "\n")
}
,
goog.string.normalizeWhitespace = function(e) {
    return e.replace(/\xa0|\s/g, " ")
}
,
goog.string.normalizeSpaces = function(e) {
    return e.replace(/\xa0|[ \t]+/g, " ")
}
,
goog.string.collapseBreakingSpaces = function(e) {
    return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
,
goog.string.trim = function(e) {
    return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
,
goog.string.trimLeft = function(e) {
    return e.replace(/^[\s\xa0]+/, "")
}
,
goog.string.trimRight = function(e) {
    return e.replace(/[\s\xa0]+$/, "")
}
,
goog.string.caseInsensitiveCompare = function(e, t) {
    var n = String(e).toLowerCase()
      , o = String(t).toLowerCase();
    return o > n ? -1 : n == o ? 0 : 1
}
,
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g,
goog.string.numerateCompare = function(e, t) {
    if (e == t)
        return 0;
    if (!e)
        return -1;
    if (!t)
        return 1;
    for (var n = e.toLowerCase().match(goog.string.numerateCompareRegExp_), o = t.toLowerCase().match(goog.string.numerateCompareRegExp_), r = Math.min(n.length, o.length), d = 0; r > d; d++) {
        var i = n[d]
          , N = o[d];
        if (i != N)
            return n = parseInt(i, 10),
            !isNaN(n) && (o = parseInt(N, 10),
            !isNaN(o) && n - o) ? n - o : N > i ? -1 : 1
    }
    return n.length != o.length ? n.length - o.length : t > e ? -1 : 1
}
,
goog.string.urlEncode = function(e) {
    return encodeURIComponent(String(e))
}
,
goog.string.urlDecode = function(e) {
    return decodeURIComponent(e.replace(/\+/g, " "))
}
,
goog.string.newLineToBr = function(e, t) {
    return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
}
,
goog.string.htmlEscape = function(e, t) {
    return t ? e.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;").replace(goog.string.singleQuoteRe_, "&#39;") : goog.string.allRe_.test(e) ? (-1 != e.indexOf("&") && (e = e.replace(goog.string.amperRe_, "&amp;")),
    -1 != e.indexOf("<") && (e = e.replace(goog.string.ltRe_, "&lt;")),
    -1 != e.indexOf(">") && (e = e.replace(goog.string.gtRe_, "&gt;")),
    -1 != e.indexOf('"') && (e = e.replace(goog.string.quotRe_, "&quot;")),
    -1 != e.indexOf("'") && (e = e.replace(goog.string.singleQuoteRe_, "&#39;")),
    e) : e
}
,
goog.string.amperRe_ = /&/g,
goog.string.ltRe_ = /</g,
goog.string.gtRe_ = />/g,
goog.string.quotRe_ = /"/g,
goog.string.singleQuoteRe_ = /'/g,
goog.string.allRe_ = /[&<>"']/,
goog.string.unescapeEntities = function(e) {
    return goog.string.contains(e, "&") ? "document"in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
}
,
goog.string.unescapeEntitiesWithDocument = function(e, t) {
    return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
}
,
goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
    var n, o = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    return n = t ? t.createElement("div") : document.createElement("div"),
    e.replace(goog.string.HTML_ENTITY_PATTERN_, function(e, t) {
        var r = o[e];
        if (r)
            return r;
        if ("#" == t.charAt(0)) {
            var d = Number("0" + t.substr(1));
            isNaN(d) || (r = String.fromCharCode(d))
        }
        return r || (n.innerHTML = e + " ",
        r = n.firstChild.nodeValue.slice(0, -1)),
        o[e] = r
    })
}
,
goog.string.unescapePureXmlEntities_ = function(e) {
    return e.replace(/&([^;]+);/g, function(e, t) {
        switch (t) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" == t.charAt(0)) {
                var n = Number("0" + t.substr(1));
                if (!isNaN(n))
                    return String.fromCharCode(n)
            }
            return e
        }
    })
}
,
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g,
goog.string.whitespaceEscape = function(e, t) {
    return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
}
,
goog.string.stripQuotes = function(e, t) {
    for (var n = t.length, o = 0; n > o; o++) {
        var r = 1 == n ? t : t.charAt(o);
        if (e.charAt(0) == r && e.charAt(e.length - 1) == r)
            return e.substring(1, e.length - 1)
    }
    return e
}
,
goog.string.truncate = function(e, t, n) {
    return n && (e = goog.string.unescapeEntities(e)),
    e.length > t && (e = e.substring(0, t - 3) + "..."),
    n && (e = goog.string.htmlEscape(e)),
    e
}
,
goog.string.truncateMiddle = function(e, t, n, o) {
    if (n && (e = goog.string.unescapeEntities(e)),
    o && e.length > t) {
        o > t && (o = t);
        var r = e.length - o;
        e = e.substring(0, t - o) + "..." + e.substring(r)
    } else
        e.length > t && (o = Math.floor(t / 2),
        r = e.length - o,
        e = e.substring(0, o + t % 2) + "..." + e.substring(r));
    return n && (e = goog.string.htmlEscape(e)),
    e
}
,
goog.string.specialEscapeChars_ = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
},
goog.string.jsEscapeCache_ = {
    "'": "\\'"
},
goog.string.quote = function(e) {
    if (e = String(e),
    e.quote)
        return e.quote();
    for (var t = ['"'], n = 0; n < e.length; n++) {
        var o = e.charAt(n)
          , r = o.charCodeAt(0);
        t[n + 1] = goog.string.specialEscapeChars_[o] || (r > 31 && 127 > r ? o : goog.string.escapeChar(o))
    }
    return t.push('"'),
    t.join("")
}
,
goog.string.escapeString = function(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t[n] = goog.string.escapeChar(e.charAt(n));
    return t.join("")
}
,
goog.string.escapeChar = function(e) {
    if (e in goog.string.jsEscapeCache_)
        return goog.string.jsEscapeCache_[e];
    if (e in goog.string.specialEscapeChars_)
        return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
    var t = e
      , n = e.charCodeAt(0);
    return n > 31 && 127 > n ? t = e : (256 > n ? (t = "\\x",
    (16 > n || n > 256) && (t += "0")) : (t = "\\u",
    4096 > n && (t += "0")),
    t += n.toString(16).toUpperCase()),
    goog.string.jsEscapeCache_[e] = t
}
,
goog.string.toMap = function(e) {
    for (var t = {}, n = 0; n < e.length; n++)
        t[e.charAt(n)] = !0;
    return t
}
,
goog.string.contains = function(e, t) {
    return -1 != e.indexOf(t)
}
,
goog.string.caseInsensitiveContains = function(e, t) {
    return goog.string.contains(e.toLowerCase(), t.toLowerCase())
}
,
goog.string.countOf = function(e, t) {
    return e && t ? e.split(t).length - 1 : 0
}
,
goog.string.removeAt = function(e, t, n) {
    var o = e;
    return t >= 0 && t < e.length && n > 0 && (o = e.substr(0, t) + e.substr(t + n, e.length - t - n)),
    o
}
,
goog.string.remove = function(e, t) {
    var n = new RegExp(goog.string.regExpEscape(t),"");
    return e.replace(n, "")
}
,
goog.string.removeAll = function(e, t) {
    var n = new RegExp(goog.string.regExpEscape(t),"g");
    return e.replace(n, "")
}
,
goog.string.regExpEscape = function(e) {
    return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
,
goog.string.repeat = function(e, t) {
    return Array(t + 1).join(e)
}
,
goog.string.padNumber = function(e, t, n) {
    return e = goog.isDef(n) ? e.toFixed(n) : String(e),
    n = e.indexOf("."),
    -1 == n && (n = e.length),
    goog.string.repeat("0", Math.max(0, t - n)) + e
}
,
goog.string.makeSafe = function(e) {
    return null == e ? "" : String(e)
}
,
goog.string.buildString = function() {
    return Array.prototype.join.call(arguments, "")
}
,
goog.string.getRandomString = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
}
,
goog.string.compareVersions = function(e, t) {
    for (var n = 0, o = goog.string.trim(String(e)).split("."), r = goog.string.trim(String(t)).split("."), d = Math.max(o.length, r.length), i = 0; 0 == n && d > i; i++) {
        var N = o[i] || ""
          , a = r[i] || ""
          , u = RegExp("(\\d*)(\\D*)", "g")
          , s = RegExp("(\\d*)(\\D*)", "g");
        do {
            var A = u.exec(N) || ["", "", ""]
              , g = s.exec(a) || ["", "", ""];
            if (0 == A[0].length && 0 == g[0].length)
                break;
            var n = 0 == A[1].length ? 0 : parseInt(A[1], 10)
              , p = 0 == g[1].length ? 0 : parseInt(g[1], 10)
              , n = goog.string.compareElements_(n, p) || goog.string.compareElements_(0 == A[2].length, 0 == g[2].length) || goog.string.compareElements_(A[2], g[2])
        } while (0 == n)
    }
    return n
}
,
goog.string.compareElements_ = function(e, t) {
    return t > e ? -1 : e > t ? 1 : 0
}
,
goog.string.HASHCODE_MAX_ = 4294967296,
goog.string.hashCode = function(e) {
    for (var t = 0, n = 0; n < e.length; ++n)
        t = 31 * t + e.charCodeAt(n),
        t %= goog.string.HASHCODE_MAX_;
    return t
}
,
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0,
goog.string.createUniqueString = function() {
    return "goog_" + goog.string.uniqueStringCounter_++
}
,
goog.string.toNumber = function(e) {
    var t = Number(e);
    return 0 == t && goog.string.isEmpty(e) ? 0 / 0 : t
}
,
goog.string.isLowerCamelCase = function(e) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
}
,
goog.string.isUpperCamelCase = function(e) {
    return /^([A-Z][a-z]*)+$/.test(e)
}
,
goog.string.toCamelCase = function(e) {
    return String(e).replace(/\-([a-z])/g, function(e, t) {
        return t.toUpperCase()
    })
}
,
goog.string.toSelectorCase = function(e) {
    return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
}
,
goog.string.toTitleCase = function(e, t) {
    var n = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
    return e.replace(new RegExp("(^" + (n ? "|[" + n + "]+" : "") + ")([a-z])","g"), function(e, t, n) {
        return t + n.toUpperCase()
    })
}
,
goog.string.parseInt = function(e) {
    return isFinite(e) && (e = String(e)),
    goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : 0 / 0
}
,
goog.string.splitLimit = function(e, t, n) {
    e = e.split(t);
    for (var o = []; n > 0 && e.length; )
        o.push(e.shift()),
        n--;
    return e.length && o.push(e.join(t)),
    o
}
,
goog.asserts = {},
goog.asserts.ENABLE_ASSERTS = goog.DEBUG,
goog.asserts.AssertionError = function(e, t) {
    t.unshift(e),
    goog.debug.Error.call(this, goog.string.subs.apply(null , t)),
    t.shift(),
    this.messagePattern = e
}
,
goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
goog.asserts.AssertionError.prototype.name = "AssertionError",
goog.asserts.doAssertFailure_ = function(e, t, n, o) {
    var r = "Assertion failed";
    if (n)
        var r = r + (": " + n)
          , d = o;
    else
        e && (r += ": " + e,
        d = t);
    throw new goog.asserts.AssertionError("" + r,d || [])
}
,
goog.asserts.assert = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null , t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.fail = function(e) {
    if (goog.asserts.ENABLE_ASSERTS)
        throw new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""),Array.prototype.slice.call(arguments, 1))
}
,
goog.asserts.assertNumber = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.assertString = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.assertFunction = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.assertObject = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.assertArray = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.assertBoolean = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.assertElement = function(e, t) {
    return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
    e
}
,
goog.asserts.assertInstanceof = function(e, t, n) {
    return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("instanceof check failed.", null , n, Array.prototype.slice.call(arguments, 3)),
    e
}
,
goog.asserts.assertObjectPrototypeIsIntact = function() {
    for (var e in Object.prototype)
        goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
}
,
goog.array = {},
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE,
goog.array.ASSUME_NATIVE_FUNCTIONS = !1,
goog.array.peek = function(e) {
    return e[e.length - 1]
}
,
goog.array.ARRAY_PROTOTYPE_ = Array.prototype,
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function(e, t, n) {
    return goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.indexOf.call(e, t, n)
}
: function(e, t, n) {
    if (n = null == n ? 0 : 0 > n ? Math.max(0, e.length + n) : n,
    goog.isString(e))
        return goog.isString(t) && 1 == t.length ? e.indexOf(t, n) : -1;
    for (; n < e.length; n++)
        if (n in e && e[n] === t)
            return n;
    return -1
}
,
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function(e, t, n) {
    return goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(e, t, null == n ? e.length - 1 : n)
}
: function(e, t, n) {
    if (n = null == n ? e.length - 1 : n,
    0 > n && (n = Math.max(0, e.length + n)),
    goog.isString(e))
        return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, n) : -1;
    for (; n >= 0; n--)
        if (n in e && e[n] === t)
            return n;
    return -1
}
,
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function(e, t, n) {
    goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.forEach.call(e, t, n)
}
: function(e, t, n) {
    for (var o = e.length, r = goog.isString(e) ? e.split("") : e, d = 0; o > d; d++)
        d in r && t.call(n, r[d], d, e)
}
,
goog.array.forEachRight = function(e, t, n) {
    for (var o = e.length, r = goog.isString(e) ? e.split("") : e, o = o - 1; o >= 0; --o)
        o in r && t.call(n, r[o], o, e)
}
,
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function(e, t, n) {
    return goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.filter.call(e, t, n)
}
: function(e, t, n) {
    for (var o = e.length, r = [], d = 0, i = goog.isString(e) ? e.split("") : e, N = 0; o > N; N++)
        if (N in i) {
            var a = i[N];
            t.call(n, a, N, e) && (r[d++] = a)
        }
    return r
}
,
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function(e, t, n) {
    return goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.map.call(e, t, n)
}
: function(e, t, n) {
    for (var o = e.length, r = Array(o), d = goog.isString(e) ? e.split("") : e, i = 0; o > i; i++)
        i in d && (r[i] = t.call(n, d[i], i, e));
    return r
}
,
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function(e, t, n, o) {
    return goog.asserts.assert(null != e.length),
    o && (t = goog.bind(t, o)),
    goog.array.ARRAY_PROTOTYPE_.reduce.call(e, t, n)
}
: function(e, t, n, o) {
    var r = n;
    return goog.array.forEach(e, function(n, d) {
        r = t.call(o, r, n, d, e)
    }),
    r
}
,
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function(e, t, n, o) {
    return goog.asserts.assert(null != e.length),
    o && (t = goog.bind(t, o)),
    goog.array.ARRAY_PROTOTYPE_.reduceRight.call(e, t, n)
}
: function(e, t, n, o) {
    var r = n;
    return goog.array.forEachRight(e, function(n, d) {
        r = t.call(o, r, n, d, e)
    }),
    r
}
,
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function(e, t, n) {
    return goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.some.call(e, t, n)
}
: function(e, t, n) {
    for (var o = e.length, r = goog.isString(e) ? e.split("") : e, d = 0; o > d; d++)
        if (d in r && t.call(n, r[d], d, e))
            return !0;
    return !1
}
,
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function(e, t, n) {
    return goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.every.call(e, t, n)
}
: function(e, t, n) {
    for (var o = e.length, r = goog.isString(e) ? e.split("") : e, d = 0; o > d; d++)
        if (d in r && !t.call(n, r[d], d, e))
            return !1;
    return !0
}
,
goog.array.count = function(e, t, n) {
    var o = 0;
    return goog.array.forEach(e, function(e, r, d) {
        t.call(n, e, r, d) && ++o
    }, n),
    o
}
,
goog.array.find = function(e, t, n) {
    return t = goog.array.findIndex(e, t, n),
    0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
}
,
goog.array.findIndex = function(e, t, n) {
    for (var o = e.length, r = goog.isString(e) ? e.split("") : e, d = 0; o > d; d++)
        if (d in r && t.call(n, r[d], d, e))
            return d;
    return -1
}
,
goog.array.findRight = function(e, t, n) {
    return t = goog.array.findIndexRight(e, t, n),
    0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
}
,
goog.array.findIndexRight = function(e, t, n) {
    for (var o = e.length, r = goog.isString(e) ? e.split("") : e, o = o - 1; o >= 0; o--)
        if (o in r && t.call(n, r[o], o, e))
            return o;
    return -1
}
,
goog.array.contains = function(e, t) {
    return 0 <= goog.array.indexOf(e, t)
}
,
goog.array.isEmpty = function(e) {
    return 0 == e.length
}
,
goog.array.clear = function(e) {
    if (!goog.isArray(e))
        for (var t = e.length - 1; t >= 0; t--)
            delete e[t];
    e.length = 0
}
,
goog.array.insert = function(e, t) {
    goog.array.contains(e, t) || e.push(t)
}
,
goog.array.insertAt = function(e, t, n) {
    goog.array.splice(e, n, 0, t)
}
,
goog.array.insertArrayAt = function(e, t, n) {
    goog.partial(goog.array.splice, e, n, 0).apply(null , t)
}
,
goog.array.insertBefore = function(e, t, n) {
    var o;
    2 == arguments.length || 0 > (o = goog.array.indexOf(e, n)) ? e.push(t) : goog.array.insertAt(e, t, o)
}
,
goog.array.remove = function(e, t) {
    var n, o = goog.array.indexOf(e, t);
    return (n = o >= 0) && goog.array.removeAt(e, o),
    n
}
,
goog.array.removeAt = function(e, t) {
    return goog.asserts.assert(null != e.length),
    1 == goog.array.ARRAY_PROTOTYPE_.splice.call(e, t, 1).length
}
,
goog.array.removeIf = function(e, t, n) {
    return t = goog.array.findIndex(e, t, n),
    t >= 0 ? (goog.array.removeAt(e, t),
    !0) : !1
}
,
goog.array.concat = function() {
    return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
}
,
goog.array.join = function() {
    return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
}
,
goog.array.toArray = function(e) {
    var t = e.length;
    if (t > 0) {
        for (var n = Array(t), o = 0; t > o; o++)
            n[o] = e[o];
        return n
    }
    return []
}
,
goog.array.clone = goog.array.toArray,
goog.array.extend = function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n, o = arguments[t];
        if (goog.isArray(o) || (n = goog.isArrayLike(o)) && Object.prototype.hasOwnProperty.call(o, "callee"))
            e.push.apply(e, o);
        else if (n)
            for (var r = e.length, d = o.length, i = 0; d > i; i++)
                e[r + i] = o[i];
        else
            e.push(o)
    }
}
,
goog.array.splice = function(e) {
    return goog.asserts.assert(null != e.length),
    goog.array.ARRAY_PROTOTYPE_.splice.apply(e, goog.array.slice(arguments, 1))
}
,
goog.array.slice = function(e, t, n) {
    return goog.asserts.assert(null != e.length),
    2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(e, t) : goog.array.ARRAY_PROTOTYPE_.slice.call(e, t, n)
}
,
goog.array.removeDuplicates = function(e, t, n) {
    t = t || e;
    var o = function() {
        return goog.isObject(i) ? "o" + goog.getUid(i) : (typeof i).charAt(0) + i
    };
    n = n || o;
    for (var o = {}, r = 0, d = 0; d < e.length; ) {
        var i = e[d++]
          , N = n(i);
        Object.prototype.hasOwnProperty.call(o, N) || (o[N] = !0,
        t[r++] = i)
    }
    t.length = r
}
,
goog.array.binarySearch = function(e, t, n) {
    return goog.array.binarySearch_(e, n || goog.array.defaultCompare, !1, t)
}
,
goog.array.binarySelect = function(e, t, n) {
    return goog.array.binarySearch_(e, t, !0, void 0, n)
}
,
goog.array.binarySearch_ = function(e, t, n, o, r) {
    for (var d, i = 0, N = e.length; N > i; ) {
        var a, u = i + N >> 1;
        a = n ? t.call(r, e[u], u, e) : t(o, e[u]),
        a > 0 ? i = u + 1 : (N = u,
        d = !a)
    }
    return d ? i : ~i
}
,
goog.array.sort = function(e, t) {
    e.sort(t || goog.array.defaultCompare)
}
,
goog.array.stableSort = function(e, t) {
    for (var n = 0; n < e.length; n++)
        e[n] = {
            index: n,
            value: e[n]
        };
    var o = t || goog.array.defaultCompare;
    for (goog.array.sort(e, function(e, t) {
        return o(e.value, t.value) || e.index - t.index
    }),
    n = 0; n < e.length; n++)
        e[n] = e[n].value
}
,
goog.array.sortObjectsByKey = function(e, t, n) {
    var o = n || goog.array.defaultCompare;
    goog.array.sort(e, function(e, n) {
        return o(e[t], n[t])
    })
}
,
goog.array.isSorted = function(e, t, n) {
    t = t || goog.array.defaultCompare;
    for (var o = 1; o < e.length; o++) {
        var r = t(e[o - 1], e[o]);
        if (r > 0 || 0 == r && n)
            return !1
    }
    return !0
}
,
goog.array.equals = function(e, t, n) {
    if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length)
        return !1;
    var o = e.length;
    n = n || goog.array.defaultCompareEquality;
    for (var r = 0; o > r; r++)
        if (!n(e[r], t[r]))
            return !1;
    return !0
}
,
goog.array.compare3 = function(e, t, n) {
    n = n || goog.array.defaultCompare;
    for (var o = Math.min(e.length, t.length), r = 0; o > r; r++) {
        var d = n(e[r], t[r]);
        if (0 != d)
            return d
    }
    return goog.array.defaultCompare(e.length, t.length)
}
,
goog.array.defaultCompare = function(e, t) {
    return e > t ? 1 : t > e ? -1 : 0
}
,
goog.array.defaultCompareEquality = function(e, t) {
    return e === t
}
,
goog.array.binaryInsert = function(e, t, n) {
    return n = goog.array.binarySearch(e, t, n),
    0 > n ? (goog.array.insertAt(e, t, -(n + 1)),
    !0) : !1
}
,
goog.array.binaryRemove = function(e, t, n) {
    return t = goog.array.binarySearch(e, t, n),
    t >= 0 ? goog.array.removeAt(e, t) : !1
}
,
goog.array.bucket = function(e, t, n) {
    for (var o = {}, r = 0; r < e.length; r++) {
        var d = e[r]
          , i = t.call(n, d, r, e);
        goog.isDef(i) && (o[i] || (o[i] = [])).push(d)
    }
    return o
}
,
goog.array.toObject = function(e, t, n) {
    var o = {};
    return goog.array.forEach(e, function(r, d) {
        o[t.call(n, r, d, e)] = r
    }),
    o
}
,
goog.array.range = function(e, t, n) {
    var o = []
      , r = 0
      , d = e;
    if (n = n || 1,
    void 0 !== t && (r = e,
    d = t),
    0 > n * (d - r))
        return [];
    if (n > 0)
        for (e = r; d > e; e += n)
            o.push(e);
    else
        for (e = r; e > d; e += n)
            o.push(e);
    return o
}
,
goog.array.repeat = function(e, t) {
    for (var n = [], o = 0; t > o; o++)
        n[o] = e;
    return n
}
,
goog.array.flatten = function() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        goog.isArray(n) ? e.push.apply(e, goog.array.flatten.apply(null , n)) : e.push(n)
    }
    return e
}
,
goog.array.rotate = function(e, t) {
    return goog.asserts.assert(null != e.length),
    e.length && (t %= e.length,
    t > 0 ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(e, e.splice(-t, t)) : 0 > t && goog.array.ARRAY_PROTOTYPE_.push.apply(e, e.splice(0, -t))),
    e
}
,
goog.array.moveItem = function(e, t, n) {
    goog.asserts.assert(t >= 0 && t < e.length),
    goog.asserts.assert(n >= 0 && n < e.length),
    t = goog.array.ARRAY_PROTOTYPE_.splice.call(e, t, 1),
    goog.array.ARRAY_PROTOTYPE_.splice.call(e, n, 0, t[0])
}
,
goog.array.zip = function() {
    if (!arguments.length)
        return [];
    for (var e = [], t = 0; ; t++) {
        for (var n = [], o = 0; o < arguments.length; o++) {
            var r = arguments[o];
            if (t >= r.length)
                return e;
            n.push(r[t])
        }
        e.push(n)
    }
}
,
goog.array.shuffle = function(e, t) {
    for (var n = t || Math.random, o = e.length - 1; o > 0; o--) {
        var r = Math.floor(n() * (o + 1))
          , d = e[o];
        e[o] = e[r],
        e[r] = d
    }
}
,
goog.object = {},
goog.object.forEach = function(e, t, n) {
    for (var o in e)
        t.call(n, e[o], o, e)
}
,
goog.object.filter = function(e, t, n) {
    var o, r = {};
    for (o in e)
        t.call(n, e[o], o, e) && (r[o] = e[o]);
    return r
}
,
goog.object.map = function(e, t, n) {
    var o, r = {};
    for (o in e)
        r[o] = t.call(n, e[o], o, e);
    return r
}
,
goog.object.some = function(e, t, n) {
    for (var o in e)
        if (t.call(n, e[o], o, e))
            return !0;
    return !1
}
,
goog.object.every = function(e, t, n) {
    for (var o in e)
        if (!t.call(n, e[o], o, e))
            return !1;
    return !0
}
,
goog.object.getCount = function(e) {
    var t, n = 0;
    for (t in e)
        n++;
    return n
}
,
goog.object.getAnyKey = function(e) {
    for (var t in e)
        return t
}
,
goog.object.getAnyValue = function(e) {
    for (var t in e)
        return e[t]
}
,
goog.object.contains = function(e, t) {
    return goog.object.containsValue(e, t)
}
,
goog.object.getValues = function(e) {
    var t, n = [], o = 0;
    for (t in e)
        n[o++] = e[t];
    return n
}
,
goog.object.getKeys = function(e) {
    var t, n = [], o = 0;
    for (t in e)
        n[o++] = t;
    return n
}
,
goog.object.getValueByKeys = function(e, t) {
    for (var n = goog.isArrayLike(t), o = n ? t : arguments, n = n ? 0 : 1; n < o.length && (e = e[o[n]],
    goog.isDef(e)); n++)
        ;
    return e
}
,
goog.object.containsKey = function(e, t) {
    return t in e
}
,
goog.object.containsValue = function(e, t) {
    for (var n in e)
        if (e[n] == t)
            return !0;
    return !1
}
,
goog.object.findKey = function(e, t, n) {
    for (var o in e)
        if (t.call(n, e[o], o, e))
            return o
}
,
goog.object.findValue = function(e, t, n) {
    return (t = goog.object.findKey(e, t, n)) && e[t]
}
,
goog.object.isEmpty = function(e) {
    for (var t in e)
        return !1;
    return !0
}
,
goog.object.clear = function(e) {
    for (var t in e)
        delete e[t]
}
,
goog.object.remove = function(e, t) {
    var n;
    return (n = t in e) && delete e[t],
    n
}
,
goog.object.add = function(e, t, n) {
    if (t in e)
        throw Error('The object already contains the key "' + t + '"');
    goog.object.set(e, t, n)
}
,
goog.object.get = function(e, t, n) {
    return t in e ? e[t] : n
}
,
goog.object.set = function(e, t, n) {
    e[t] = n
}
,
goog.object.setIfUndefined = function(e, t, n) {
    return t in e ? e[t] : e[t] = n
}
,
goog.object.clone = function(e) {
    var t, n = {};
    for (t in e)
        n[t] = e[t];
    return n
}
,
goog.object.unsafeClone = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if (e.clone)
            return e.clone();
        var n, t = "array" == t ? [] : {};
        for (n in e)
            t[n] = goog.object.unsafeClone(e[n]);
        return t
    }
    return e
}
,
goog.object.transpose = function(e) {
    var t, n = {};
    for (t in e)
        n[e[t]] = t;
    return n
}
,
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
goog.object.extend = function(e) {
    for (var t, n, o = 1; o < arguments.length; o++) {
        n = arguments[o];
        for (t in n)
            e[t] = n[t];
        for (var r = 0; r < goog.object.PROTOTYPE_FIELDS_.length; r++)
            t = goog.object.PROTOTYPE_FIELDS_[r],
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
    }
}
,
goog.object.create = function() {
    var e = arguments.length;
    if (1 == e && goog.isArray(arguments[0]))
        return goog.object.create.apply(null , arguments[0]);
    if (e % 2)
        throw Error("Uneven number of arguments");
    for (var t = {}, n = 0; e > n; n += 2)
        t[arguments[n]] = arguments[n + 1];
    return t
}
,
goog.object.createSet = function() {
    var e = arguments.length;
    if (1 == e && goog.isArray(arguments[0]))
        return goog.object.createSet.apply(null , arguments[0]);
    for (var t = {}, n = 0; e > n; n++)
        t[arguments[n]] = !0;
    return t
}
,
goog.object.createImmutableView = function(e) {
    var t = e;
    return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e),
    Object.freeze(t)),
    t
}
,
goog.object.isImmutableView = function(e) {
    return !!Object.isFrozen && Object.isFrozen(e)
}
,
goog.proto2 = {},
goog.proto2.Descriptor = function(e, t, n) {
    for (this.messageType_ = e,
    this.name_ = t.name || null ,
    this.fullName_ = t.fullName || null ,
    this.containingType_ = t.containingType,
    this.fields_ = {},
    e = 0; e < n.length; e++)
        t = n[e],
        this.fields_[t.getTag()] = t
}
,
goog.proto2.Descriptor.prototype.getName = function() {
    return this.name_
}
,
goog.proto2.Descriptor.prototype.getFullName = function() {
    return this.fullName_
}
,
goog.proto2.Descriptor.prototype.getContainingType = function() {
    return this.containingType_ ? this.containingType_.getDescriptor() : null
}
,
goog.proto2.Descriptor.prototype.getFields = function() {
    var e = goog.object.getValues(this.fields_);
    return goog.array.sort(e, function(e, t) {
        return e.getTag() - t.getTag()
    }),
    e
}
,
goog.proto2.Descriptor.prototype.getFieldsMap = function() {
    return this.fields_
}
,
goog.proto2.Descriptor.prototype.findFieldByName = function(e) {
    return goog.object.findValue(this.fields_, function(t) {
        return t.getName() == e
    }) || null
}
,
goog.proto2.Descriptor.prototype.findFieldByTag = function(e) {
    return goog.asserts.assert(goog.string.isNumeric(e)),
    this.fields_[parseInt(e, 10)] || null
}
,
goog.proto2.Descriptor.prototype.createMessageInstance = function() {
    return new this.messageType_
}
,
goog.proto2.FieldDescriptor = function(e, t, n) {
    switch (this.parent_ = e,
    goog.asserts.assert(goog.string.isNumeric(t)),
    this.tag_ = t,
    this.name_ = n.name,
    this.isRepeated_ = !!n.repeated,
    this.isRequired_ = !!n.required,
    this.fieldType_ = n.fieldType,
    this.nativeType_ = n.type,
    this.deserializationConversionPermitted_ = !1,
    this.fieldType_) {
    case goog.proto2.FieldDescriptor.FieldType.INT64:
    case goog.proto2.FieldDescriptor.FieldType.UINT64:
    case goog.proto2.FieldDescriptor.FieldType.FIXED64:
    case goog.proto2.FieldDescriptor.FieldType.SFIXED64:
    case goog.proto2.FieldDescriptor.FieldType.SINT64:
        this.deserializationConversionPermitted_ = !0
    }
    this.defaultValue_ = n.defaultValue
}
,
goog.proto2.FieldDescriptor.FieldType = {
    DOUBLE: 1,
    FLOAT: 2,
    INT64: 3,
    UINT64: 4,
    INT32: 5,
    FIXED64: 6,
    FIXED32: 7,
    BOOL: 8,
    STRING: 9,
    GROUP: 10,
    MESSAGE: 11,
    BYTES: 12,
    UINT32: 13,
    ENUM: 14,
    SFIXED32: 15,
    SFIXED64: 16,
    SINT32: 17,
    SINT64: 18
},
goog.proto2.FieldDescriptor.prototype.getTag = function() {
    return this.tag_
}
,
goog.proto2.FieldDescriptor.prototype.getContainingType = function() {
    return this.parent_.getDescriptor()
}
,
goog.proto2.FieldDescriptor.prototype.getName = function() {
    return this.name_
}
,
goog.proto2.FieldDescriptor.prototype.getDefaultValue = function() {
    if (void 0 === this.defaultValue_) {
        var e = this.nativeType_;
        this.defaultValue_ = e === Boolean ? !1 : e === Number ? 0 : e === String ? this.deserializationConversionPermitted_ ? "0" : "" : new e
    }
    return this.defaultValue_
}
,
goog.proto2.FieldDescriptor.prototype.getFieldType = function() {
    return this.fieldType_
}
,
goog.proto2.FieldDescriptor.prototype.getNativeType = function() {
    return this.nativeType_
}
,
goog.proto2.FieldDescriptor.prototype.deserializationConversionPermitted = function() {
    return this.deserializationConversionPermitted_
}
,
goog.proto2.FieldDescriptor.prototype.getFieldMessageType = function() {
    return goog.asserts.assert(this.isCompositeType(), "Expected message or group"),
    this.nativeType_.getDescriptor()
}
,
goog.proto2.FieldDescriptor.prototype.isCompositeType = function() {
    return this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.MESSAGE || this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.GROUP
}
,
goog.proto2.FieldDescriptor.prototype.isRepeated = function() {
    return this.isRepeated_
}
,
goog.proto2.FieldDescriptor.prototype.isRequired = function() {
    return this.isRequired_
}
,
goog.proto2.FieldDescriptor.prototype.isOptional = function() {
    return !this.isRepeated_ && !this.isRequired_
}
,
goog.proto2.Message = function() {
    this.values_ = {},
    this.fields_ = this.getDescriptor().getFieldsMap(),
    this.deserializedFields_ = this.lazyDeserializer_ = null
}
,
goog.proto2.Message.FieldType = {
    DOUBLE: 1,
    FLOAT: 2,
    INT64: 3,
    UINT64: 4,
    INT32: 5,
    FIXED64: 6,
    FIXED32: 7,
    BOOL: 8,
    STRING: 9,
    GROUP: 10,
    MESSAGE: 11,
    BYTES: 12,
    UINT32: 13,
    ENUM: 14,
    SFIXED32: 15,
    SFIXED64: 16,
    SINT32: 17,
    SINT64: 18
},
goog.proto2.Message.prototype.initializeForLazyDeserializer = function(e, t) {
    this.lazyDeserializer_ = e,
    this.values_ = t,
    this.deserializedFields_ = {}
}
,
goog.proto2.Message.prototype.setUnknown = function(e, t) {
    goog.asserts.assert(!this.fields_[e], "Field is not unknown in this message"),
    goog.asserts.assert(e >= 1, "Tag is not valid"),
    goog.asserts.assert(null !== t, "Value cannot be null"),
    this.values_[e] = t,
    this.deserializedFields_ && delete this.deserializedFields_[e]
}
,
goog.proto2.Message.prototype.forEachUnknown = function(e, t) {
    var n, o = t || this;
    for (n in this.values_) {
        var r = Number(n);
        this.fields_[r] || e.call(o, r, this.values_[n])
    }
}
,
goog.proto2.Message.prototype.getDescriptor = function() {
    var e = this.constructor;
    return e.descriptor_ || (e.descriptor_ = goog.proto2.Message.createDescriptor_(e, e.descriptorObj_))
}
,
goog.proto2.Message.prototype.has = function(e) {
    return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.has$Value(e.getTag())
}
,
goog.proto2.Message.prototype.arrayOf = function(e) {
    return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.array$Values(e.getTag())
}
,
goog.proto2.Message.prototype.countOf = function(e) {
    return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.count$Values(e.getTag())
}
,
goog.proto2.Message.prototype.get = function(e, t) {
    return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.get$Value(e.getTag(), t)
}
,
goog.proto2.Message.prototype.getOrDefault = function(e, t) {
    return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.get$ValueOrDefault(e.getTag(), t)
}
,
goog.proto2.Message.prototype.set = function(e, t) {
    goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.set$Value(e.getTag(), t)
}
,
goog.proto2.Message.prototype.add = function(e, t) {
    goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.add$Value(e.getTag(), t)
}
,
goog.proto2.Message.prototype.clear = function(e) {
    goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"),
    this.clear$Field(e.getTag())
}
,
goog.proto2.Message.prototype.equals = function(e) {
    if (!e || this.constructor != e.constructor)
        return !1;
    for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
        var o = t[n]
          , r = o.getTag();
        if (this.has$Value(r) != e.has$Value(r))
            return !1;
        if (this.has$Value(r)) {
            var d = o.isCompositeType()
              , i = this.getValueForTag_(r)
              , r = e.getValueForTag_(r);
            if (o.isRepeated()) {
                if (i.length != r.length)
                    return !1;
                for (o = 0; o < i.length; o++) {
                    var N = i[o]
                      , a = r[o];
                    if (d ? !N.equals(a) : N != a)
                        return !1
                }
            } else if (d ? !i.equals(r) : i != r)
                return !1
        }
    }
    return !0
}
,
goog.proto2.Message.prototype.copyFrom = function(e) {
    goog.asserts.assert(this.constructor == e.constructor, "The source message must have the same type."),
    this != e && (this.values_ = {},
    this.deserializedFields_ && (this.deserializedFields_ = {}),
    this.mergeFrom(e))
}
,
goog.proto2.Message.prototype.mergeFrom = function(e) {
    goog.asserts.assert(this.constructor == e.constructor, "The source message must have the same type.");
    for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
        var o = t[n]
          , r = o.getTag();
        if (e.has$Value(r)) {
            this.deserializedFields_ && delete this.deserializedFields_[o.getTag()];
            var d = o.isCompositeType();
            if (o.isRepeated())
                for (var o = e.array$Values(r), i = 0; i < o.length; i++)
                    this.add$Value(r, d ? o[i].clone() : o[i]);
            else
                o = e.getValueForTag_(r),
                d ? (d = this.getValueForTag_(r)) ? d.mergeFrom(o) : this.set$Value(r, o.clone()) : this.set$Value(r, o)
        }
    }
}
,
goog.proto2.Message.prototype.clone = function() {
    var e = new this.constructor;
    return e.copyFrom(this),
    e
}
,
goog.proto2.Message.prototype.initDefaults = function(e) {
    for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
        var o = t[n]
          , r = o.getTag()
          , d = o.isCompositeType();
        if (this.has$Value(r) || o.isRepeated() || (d ? this.values_[r] = new (o.getNativeType()) : e && (this.values_[r] = o.getDefaultValue())),
        d)
            if (o.isRepeated())
                for (o = this.array$Values(r),
                r = 0; r < o.length; r++)
                    o[r].initDefaults(e);
            else
                this.get$Value(r).initDefaults(e)
    }
}
,
goog.proto2.Message.prototype.has$Value = function(e) {
    return null != this.values_[e]
}
,
goog.proto2.Message.prototype.getValueForTag_ = function(e) {
    var t = this.values_[e];
    return goog.isDefAndNotNull(t) ? this.lazyDeserializer_ ? e in this.deserializedFields_ ? this.deserializedFields_[e] : (t = this.lazyDeserializer_.deserializeField(this, this.fields_[e], t),
    this.deserializedFields_[e] = t) : t : null
}
,
goog.proto2.Message.prototype.get$Value = function(e, t) {
    var n = this.getValueForTag_(e);
    if (this.fields_[e].isRepeated()) {
        var o = t || 0;
        return goog.asserts.assert(o >= 0 && o < n.length, "Given index is out of bounds"),
        n[o]
    }
    return n
}
,
goog.proto2.Message.prototype.get$ValueOrDefault = function(e, t) {
    return this.has$Value(e) ? this.get$Value(e, t) : this.fields_[e].getDefaultValue()
}
,
goog.proto2.Message.prototype.array$Values = function(e) {
    return this.getValueForTag_(e) || []
}
,
goog.proto2.Message.prototype.count$Values = function(e) {
    return this.fields_[e].isRepeated() ? this.has$Value(e) ? this.values_[e].length : 0 : this.has$Value(e) ? 1 : 0
}
,
goog.proto2.Message.prototype.set$Value = function(e, t) {
    goog.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[e], t),
    this.values_[e] = t,
    this.deserializedFields_ && (this.deserializedFields_[e] = t)
}
,
goog.proto2.Message.prototype.add$Value = function(e, t) {
    goog.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[e], t),
    this.values_[e] || (this.values_[e] = []),
    this.values_[e].push(t),
    this.deserializedFields_ && delete this.deserializedFields_[e]
}
,
goog.proto2.Message.prototype.checkFieldType_ = function(e, t) {
    e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.ENUM ? goog.asserts.assertNumber(t) : goog.asserts.assert(t.constructor == e.getNativeType())
}
,
goog.proto2.Message.prototype.clear$Field = function(e) {
    delete this.values_[e],
    this.deserializedFields_ && delete this.deserializedFields_[e]
}
,
goog.proto2.Message.createDescriptor_ = function(e, t) {
    var n, o = [], r = t[0];
    for (n in t)
        0 != n && o.push(new goog.proto2.FieldDescriptor(e,n,t[n]));
    return new goog.proto2.Descriptor(e,r,o)
}
,
goog.proto2.Message.set$Metadata = function(e, t) {
    e.descriptorObj_ = t,
    e.getDescriptor = function() {
        return e.descriptor_ || (new e).getDescriptor()
    }
}
,
goog.proto2.Serializer = function() {}
,
goog.proto2.Serializer.DECODE_SYMBOLIC_ENUMS = !1,
goog.proto2.Serializer.prototype.getSerializedValue = function(e, t) {
    return e.isCompositeType() ? this.serialize(t) : t
}
,
goog.proto2.Serializer.prototype.deserialize = function(e, t) {
    var n = e.createMessageInstance();
    return this.deserializeTo(n, t),
    goog.asserts.assert(n instanceof goog.proto2.Message),
    n
}
,
goog.proto2.Serializer.prototype.getDeserializedValue = function(e, t) {
    if (e.isCompositeType())
        return t instanceof goog.proto2.Message ? t : this.deserialize(e.getFieldMessageType(), t);
    if (e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.ENUM) {
        if (goog.proto2.Serializer.DECODE_SYMBOLIC_ENUMS && goog.isString(t)) {
            var n = e.getNativeType();
            if (n.hasOwnProperty(t))
                return n[t]
        }
        return t
    }
    if (!e.deserializationConversionPermitted())
        return t;
    if (n = e.getNativeType(),
    n === String) {
        if (goog.isNumber(t))
            return String(t)
    } else if (n === Number && goog.isString(t) && /^-?[0-9]+$/.test(t))
        return Number(t);
    return t
}
,
goog.proto2.LazyDeserializer = function() {}
,
goog.inherits(goog.proto2.LazyDeserializer, goog.proto2.Serializer),
goog.proto2.LazyDeserializer.prototype.deserialize = function(e, t) {
    var n = e.createMessageInstance();
    return n.initializeForLazyDeserializer(this, t),
    goog.asserts.assert(n instanceof goog.proto2.Message),
    n
}
,
goog.proto2.LazyDeserializer.prototype.deserializeTo = function() {
    throw Error("Unimplemented")
}
,
goog.proto2.PbLiteSerializer = function() {}
,
goog.inherits(goog.proto2.PbLiteSerializer, goog.proto2.LazyDeserializer),
goog.proto2.PbLiteSerializer.prototype.zeroIndexing_ = !1,
goog.proto2.PbLiteSerializer.prototype.setZeroIndexed = function(e) {
    this.zeroIndexing_ = e
}
,
goog.proto2.PbLiteSerializer.prototype.serialize = function(e) {
    for (var t = e.getDescriptor().getFields(), n = [], o = this.zeroIndexing_, r = 0; r < t.length; r++) {
        var d = t[r];
        if (e.has(d)) {
            var i = d.getTag()
              , i = o ? i - 1 : i;
            if (d.isRepeated()) {
                n[i] = [];
                for (var N = 0; N < e.countOf(d); N++)
                    n[i][N] = this.getSerializedValue(d, e.get(d, N))
            } else
                n[i] = this.getSerializedValue(d, e.get(d))
        }
    }
    return e.forEachUnknown(function(e, t) {
        n[o ? e - 1 : e] = t
    }),
    n
}
,
goog.proto2.PbLiteSerializer.prototype.deserializeField = function(e, t, n) {
    if (null == n)
        return n;
    if (t.isRepeated()) {
        e = [],
        goog.asserts.assert(goog.isArray(n));
        for (var o = 0; o < n.length; o++)
            e[o] = this.getDeserializedValue(t, n[o]);
        return e
    }
    return this.getDeserializedValue(t, n)
}
,
goog.proto2.PbLiteSerializer.prototype.getSerializedValue = function(e, t) {
    return e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.BOOL ? t ? 1 : 0 : goog.proto2.Serializer.prototype.getSerializedValue.apply(this, arguments)
}
,
goog.proto2.PbLiteSerializer.prototype.getDeserializedValue = function(e, t) {
    return e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.BOOL ? (goog.asserts.assert(goog.isNumber(t) || goog.isBoolean(t), "Value is expected to be a number or boolean"),
    !!t) : goog.proto2.Serializer.prototype.getDeserializedValue.apply(this, arguments)
}
,
goog.proto2.PbLiteSerializer.prototype.deserialize = function(e, t) {
    var n = t;
    if (this.zeroIndexing_) {
        var o, n = [];
        for (o in t)
            n[parseInt(o, 10) + 1] = t[o]
    }
    return goog.proto2.PbLiteSerializer.superClass_.deserialize.call(this, e, n)
}
,
goog.string.StringBuffer = function(e) {
    null != e && this.append.apply(this, arguments)
}
,
goog.string.StringBuffer.prototype.buffer_ = "",
goog.string.StringBuffer.prototype.set = function(e) {
    this.buffer_ = "" + e
}
,
goog.string.StringBuffer.prototype.append = function(e, t) {
    if (this.buffer_ += e,
    null != t)
        for (var n = 1; n < arguments.length; n++)
            this.buffer_ += arguments[n];
    return this
}
,
goog.string.StringBuffer.prototype.clear = function() {
    this.buffer_ = ""
}
,
goog.string.StringBuffer.prototype.getLength = function() {
    return this.buffer_.length
}
,
goog.string.StringBuffer.prototype.toString = function() {
    return this.buffer_
}
;
var i18n = {
    phonenumbers: {}
};
i18n.phonenumbers.NumberFormat = function() {
    goog.proto2.Message.apply(this)
}
,
goog.inherits(i18n.phonenumbers.NumberFormat, goog.proto2.Message),
i18n.phonenumbers.NumberFormat.prototype.getPattern = function() {
    return this.get$Value(1)
}
,
i18n.phonenumbers.NumberFormat.prototype.getPatternOrDefault = function() {
    return this.get$ValueOrDefault(1)
}
,
i18n.phonenumbers.NumberFormat.prototype.setPattern = function(e) {
    this.set$Value(1, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.hasPattern = function() {
    return this.has$Value(1)
}
,
i18n.phonenumbers.NumberFormat.prototype.patternCount = function() {
    return this.count$Values(1)
}
,
i18n.phonenumbers.NumberFormat.prototype.clearPattern = function() {
    this.clear$Field(1)
}
,
i18n.phonenumbers.NumberFormat.prototype.getFormat = function() {
    return this.get$Value(2)
}
,
i18n.phonenumbers.NumberFormat.prototype.getFormatOrDefault = function() {
    return this.get$ValueOrDefault(2)
}
,
i18n.phonenumbers.NumberFormat.prototype.setFormat = function(e) {
    this.set$Value(2, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.hasFormat = function() {
    return this.has$Value(2)
}
,
i18n.phonenumbers.NumberFormat.prototype.formatCount = function() {
    return this.count$Values(2)
}
,
i18n.phonenumbers.NumberFormat.prototype.clearFormat = function() {
    this.clear$Field(2)
}
,
i18n.phonenumbers.NumberFormat.prototype.getLeadingDigitsPattern = function(e) {
    return this.get$Value(3, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.getLeadingDigitsPatternOrDefault = function(e) {
    return this.get$ValueOrDefault(3, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.addLeadingDigitsPattern = function(e) {
    this.add$Value(3, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.leadingDigitsPatternArray = function() {
    return this.array$Values(3)
}
,
i18n.phonenumbers.NumberFormat.prototype.hasLeadingDigitsPattern = function() {
    return this.has$Value(3)
}
,
i18n.phonenumbers.NumberFormat.prototype.leadingDigitsPatternCount = function() {
    return this.count$Values(3)
}
,
i18n.phonenumbers.NumberFormat.prototype.clearLeadingDigitsPattern = function() {
    this.clear$Field(3)
}
,
i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRule = function() {
    return this.get$Value(4)
}
,
i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRuleOrDefault = function() {
    return this.get$ValueOrDefault(4)
}
,
i18n.phonenumbers.NumberFormat.prototype.setNationalPrefixFormattingRule = function(e) {
    this.set$Value(4, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.hasNationalPrefixFormattingRule = function() {
    return this.has$Value(4)
}
,
i18n.phonenumbers.NumberFormat.prototype.nationalPrefixFormattingRuleCount = function() {
    return this.count$Values(4)
}
,
i18n.phonenumbers.NumberFormat.prototype.clearNationalPrefixFormattingRule = function() {
    this.clear$Field(4)
}
,
i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormatting = function() {
    return this.get$Value(6)
}
,
i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormattingOrDefault = function() {
    return this.get$ValueOrDefault(6)
}
,
i18n.phonenumbers.NumberFormat.prototype.setNationalPrefixOptionalWhenFormatting = function(e) {
    this.set$Value(6, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.hasNationalPrefixOptionalWhenFormatting = function() {
    return this.has$Value(6)
}
,
i18n.phonenumbers.NumberFormat.prototype.nationalPrefixOptionalWhenFormattingCount = function() {
    return this.count$Values(6)
}
,
i18n.phonenumbers.NumberFormat.prototype.clearNationalPrefixOptionalWhenFormatting = function() {
    this.clear$Field(6)
}
,
i18n.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRule = function() {
    return this.get$Value(5)
}
,
i18n.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRuleOrDefault = function() {
    return this.get$ValueOrDefault(5)
}
,
i18n.phonenumbers.NumberFormat.prototype.setDomesticCarrierCodeFormattingRule = function(e) {
    this.set$Value(5, e)
}
,
i18n.phonenumbers.NumberFormat.prototype.hasDomesticCarrierCodeFormattingRule = function() {
    return this.has$Value(5)
}
,
i18n.phonenumbers.NumberFormat.prototype.domesticCarrierCodeFormattingRuleCount = function() {
    return this.count$Values(5)
}
,
i18n.phonenumbers.NumberFormat.prototype.clearDomesticCarrierCodeFormattingRule = function() {
    this.clear$Field(5)
}
,
i18n.phonenumbers.PhoneNumberDesc = function() {
    goog.proto2.Message.apply(this)
}
,
goog.inherits(i18n.phonenumbers.PhoneNumberDesc, goog.proto2.Message),
i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPattern = function() {
    return this.get$Value(2)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPatternOrDefault = function() {
    return this.get$ValueOrDefault(2)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.setNationalNumberPattern = function(e) {
    this.set$Value(2, e)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.hasNationalNumberPattern = function() {
    return this.has$Value(2)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.nationalNumberPatternCount = function() {
    return this.count$Values(2)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.clearNationalNumberPattern = function() {
    this.clear$Field(2)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberPattern = function() {
    return this.get$Value(3)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberPatternOrDefault = function() {
    return this.get$ValueOrDefault(3)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.setPossibleNumberPattern = function(e) {
    this.set$Value(3, e)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.hasPossibleNumberPattern = function() {
    return this.has$Value(3)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.possibleNumberPatternCount = function() {
    return this.count$Values(3)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.clearPossibleNumberPattern = function() {
    this.clear$Field(3)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.getExampleNumber = function() {
    return this.get$Value(6)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.getExampleNumberOrDefault = function() {
    return this.get$ValueOrDefault(6)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.setExampleNumber = function(e) {
    this.set$Value(6, e)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.hasExampleNumber = function() {
    return this.has$Value(6)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.exampleNumberCount = function() {
    return this.count$Values(6)
}
,
i18n.phonenumbers.PhoneNumberDesc.prototype.clearExampleNumber = function() {
    this.clear$Field(6)
}
,
i18n.phonenumbers.PhoneMetadata = function() {
    goog.proto2.Message.apply(this)
}
,
goog.inherits(i18n.phonenumbers.PhoneMetadata, goog.proto2.Message),
i18n.phonenumbers.PhoneMetadata.prototype.getGeneralDesc = function() {
    return this.get$Value(1)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getGeneralDescOrDefault = function() {
    return this.get$ValueOrDefault(1)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setGeneralDesc = function(e) {
    this.set$Value(1, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasGeneralDesc = function() {
    return this.has$Value(1)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.generalDescCount = function() {
    return this.count$Values(1)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearGeneralDesc = function() {
    this.clear$Field(1)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getFixedLine = function() {
    return this.get$Value(2)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getFixedLineOrDefault = function() {
    return this.get$ValueOrDefault(2)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setFixedLine = function(e) {
    this.set$Value(2, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasFixedLine = function() {
    return this.has$Value(2)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.fixedLineCount = function() {
    return this.count$Values(2)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearFixedLine = function() {
    this.clear$Field(2)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getMobile = function() {
    return this.get$Value(3)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getMobileOrDefault = function() {
    return this.get$ValueOrDefault(3)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setMobile = function(e) {
    this.set$Value(3, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasMobile = function() {
    return this.has$Value(3)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.mobileCount = function() {
    return this.count$Values(3)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearMobile = function() {
    this.clear$Field(3)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getTollFree = function() {
    return this.get$Value(4)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getTollFreeOrDefault = function() {
    return this.get$ValueOrDefault(4)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setTollFree = function(e) {
    this.set$Value(4, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasTollFree = function() {
    return this.has$Value(4)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.tollFreeCount = function() {
    return this.count$Values(4)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearTollFree = function() {
    this.clear$Field(4)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPremiumRate = function() {
    return this.get$Value(5)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPremiumRateOrDefault = function() {
    return this.get$ValueOrDefault(5)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setPremiumRate = function(e) {
    this.set$Value(5, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasPremiumRate = function() {
    return this.has$Value(5)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.premiumRateCount = function() {
    return this.count$Values(5)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearPremiumRate = function() {
    this.clear$Field(5)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getSharedCost = function() {
    return this.get$Value(6)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getSharedCostOrDefault = function() {
    return this.get$ValueOrDefault(6)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setSharedCost = function(e) {
    this.set$Value(6, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasSharedCost = function() {
    return this.has$Value(6)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.sharedCostCount = function() {
    return this.count$Values(6)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearSharedCost = function() {
    this.clear$Field(6)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPersonalNumber = function() {
    return this.get$Value(7)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPersonalNumberOrDefault = function() {
    return this.get$ValueOrDefault(7)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setPersonalNumber = function(e) {
    this.set$Value(7, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasPersonalNumber = function() {
    return this.has$Value(7)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.personalNumberCount = function() {
    return this.count$Values(7)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearPersonalNumber = function() {
    this.clear$Field(7)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getVoip = function() {
    return this.get$Value(8)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getVoipOrDefault = function() {
    return this.get$ValueOrDefault(8)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setVoip = function(e) {
    this.set$Value(8, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasVoip = function() {
    return this.has$Value(8)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.voipCount = function() {
    return this.count$Values(8)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearVoip = function() {
    this.clear$Field(8)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPager = function() {
    return this.get$Value(21)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPagerOrDefault = function() {
    return this.get$ValueOrDefault(21)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setPager = function(e) {
    this.set$Value(21, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasPager = function() {
    return this.has$Value(21)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.pagerCount = function() {
    return this.count$Values(21)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearPager = function() {
    this.clear$Field(21)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getUan = function() {
    return this.get$Value(25)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getUanOrDefault = function() {
    return this.get$ValueOrDefault(25)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setUan = function(e) {
    this.set$Value(25, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasUan = function() {
    return this.has$Value(25)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.uanCount = function() {
    return this.count$Values(25)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearUan = function() {
    this.clear$Field(25)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getEmergency = function() {
    return this.get$Value(27)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getEmergencyOrDefault = function() {
    return this.get$ValueOrDefault(27)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setEmergency = function(e) {
    this.set$Value(27, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasEmergency = function() {
    return this.has$Value(27)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.emergencyCount = function() {
    return this.count$Values(27)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearEmergency = function() {
    this.clear$Field(27)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getVoicemail = function() {
    return this.get$Value(28)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getVoicemailOrDefault = function() {
    return this.get$ValueOrDefault(28)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setVoicemail = function(e) {
    this.set$Value(28, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasVoicemail = function() {
    return this.has$Value(28)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.voicemailCount = function() {
    return this.count$Values(28)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearVoicemail = function() {
    this.clear$Field(28)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNoInternationalDialling = function() {
    return this.get$Value(24)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNoInternationalDiallingOrDefault = function() {
    return this.get$ValueOrDefault(24)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setNoInternationalDialling = function(e) {
    this.set$Value(24, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasNoInternationalDialling = function() {
    return this.has$Value(24)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.noInternationalDiallingCount = function() {
    return this.count$Values(24)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearNoInternationalDialling = function() {
    this.clear$Field(24)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getId = function() {
    return this.get$Value(9)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getIdOrDefault = function() {
    return this.get$ValueOrDefault(9)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setId = function(e) {
    this.set$Value(9, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasId = function() {
    return this.has$Value(9)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.idCount = function() {
    return this.count$Values(9)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearId = function() {
    this.clear$Field(9)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getCountryCode = function() {
    return this.get$Value(10)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getCountryCodeOrDefault = function() {
    return this.get$ValueOrDefault(10)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setCountryCode = function(e) {
    this.set$Value(10, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasCountryCode = function() {
    return this.has$Value(10)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.countryCodeCount = function() {
    return this.count$Values(10)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearCountryCode = function() {
    this.clear$Field(10)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getInternationalPrefix = function() {
    return this.get$Value(11)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getInternationalPrefixOrDefault = function() {
    return this.get$ValueOrDefault(11)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setInternationalPrefix = function(e) {
    this.set$Value(11, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasInternationalPrefix = function() {
    return this.has$Value(11)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.internationalPrefixCount = function() {
    return this.count$Values(11)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearInternationalPrefix = function() {
    this.clear$Field(11)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefix = function() {
    return this.get$Value(17)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefixOrDefault = function() {
    return this.get$ValueOrDefault(17)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setPreferredInternationalPrefix = function(e) {
    this.set$Value(17, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasPreferredInternationalPrefix = function() {
    return this.has$Value(17)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.preferredInternationalPrefixCount = function() {
    return this.count$Values(17)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearPreferredInternationalPrefix = function() {
    this.clear$Field(17)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefix = function() {
    return this.get$Value(12)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixOrDefault = function() {
    return this.get$ValueOrDefault(12)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefix = function(e) {
    this.set$Value(12, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefix = function() {
    return this.has$Value(12)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixCount = function() {
    return this.count$Values(12)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefix = function() {
    this.clear$Field(12)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefix = function() {
    return this.get$Value(13)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefixOrDefault = function() {
    return this.get$ValueOrDefault(13)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setPreferredExtnPrefix = function(e) {
    this.set$Value(13, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasPreferredExtnPrefix = function() {
    return this.has$Value(13)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.preferredExtnPrefixCount = function() {
    return this.count$Values(13)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearPreferredExtnPrefix = function() {
    this.clear$Field(13)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsing = function() {
    return this.get$Value(15)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsingOrDefault = function() {
    return this.get$ValueOrDefault(15)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefixForParsing = function(e) {
    this.set$Value(15, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixForParsing = function() {
    return this.has$Value(15)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixForParsingCount = function() {
    return this.count$Values(15)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixForParsing = function() {
    this.clear$Field(15)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRule = function() {
    return this.get$Value(16)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRuleOrDefault = function() {
    return this.get$ValueOrDefault(16)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefixTransformRule = function(e) {
    this.set$Value(16, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixTransformRule = function() {
    return this.has$Value(16)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixTransformRuleCount = function() {
    return this.count$Values(16)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixTransformRule = function() {
    this.clear$Field(16)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePattern = function() {
    return this.get$Value(18)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePatternOrDefault = function() {
    return this.get$ValueOrDefault(18)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setSameMobileAndFixedLinePattern = function(e) {
    this.set$Value(18, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasSameMobileAndFixedLinePattern = function() {
    return this.has$Value(18)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.sameMobileAndFixedLinePatternCount = function() {
    return this.count$Values(18)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearSameMobileAndFixedLinePattern = function() {
    this.clear$Field(18)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNumberFormat = function(e) {
    return this.get$Value(19, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getNumberFormatOrDefault = function(e) {
    return this.get$ValueOrDefault(19, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.addNumberFormat = function(e) {
    this.add$Value(19, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.numberFormatArray = function() {
    return this.array$Values(19)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasNumberFormat = function() {
    return this.has$Value(19)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.numberFormatCount = function() {
    return this.count$Values(19)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearNumberFormat = function() {
    this.clear$Field(19)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormat = function(e) {
    return this.get$Value(20, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormatOrDefault = function(e) {
    return this.get$ValueOrDefault(20, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.addIntlNumberFormat = function(e) {
    this.add$Value(20, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.intlNumberFormatArray = function() {
    return this.array$Values(20)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasIntlNumberFormat = function() {
    return this.has$Value(20)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.intlNumberFormatCount = function() {
    return this.count$Values(20)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearIntlNumberFormat = function() {
    this.clear$Field(20)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getMainCountryForCode = function() {
    return this.get$Value(22)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getMainCountryForCodeOrDefault = function() {
    return this.get$ValueOrDefault(22)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setMainCountryForCode = function(e) {
    this.set$Value(22, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasMainCountryForCode = function() {
    return this.has$Value(22)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.mainCountryForCodeCount = function() {
    return this.count$Values(22)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearMainCountryForCode = function() {
    this.clear$Field(22)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getLeadingDigits = function() {
    return this.get$Value(23)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getLeadingDigitsOrDefault = function() {
    return this.get$ValueOrDefault(23)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setLeadingDigits = function(e) {
    this.set$Value(23, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasLeadingDigits = function() {
    return this.has$Value(23)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.leadingDigitsCount = function() {
    return this.count$Values(23)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearLeadingDigits = function() {
    this.clear$Field(23)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getLeadingZeroPossible = function() {
    return this.get$Value(26)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.getLeadingZeroPossibleOrDefault = function() {
    return this.get$ValueOrDefault(26)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.setLeadingZeroPossible = function(e) {
    this.set$Value(26, e)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.hasLeadingZeroPossible = function() {
    return this.has$Value(26)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.leadingZeroPossibleCount = function() {
    return this.count$Values(26)
}
,
i18n.phonenumbers.PhoneMetadata.prototype.clearLeadingZeroPossible = function() {
    this.clear$Field(26)
}
,
i18n.phonenumbers.PhoneMetadataCollection = function() {
    goog.proto2.Message.apply(this)
}
,
goog.inherits(i18n.phonenumbers.PhoneMetadataCollection, goog.proto2.Message),
i18n.phonenumbers.PhoneMetadataCollection.prototype.getMetadata = function(e) {
    return this.get$Value(1, e)
}
,
i18n.phonenumbers.PhoneMetadataCollection.prototype.getMetadataOrDefault = function(e) {
    return this.get$ValueOrDefault(1, e)
}
,
i18n.phonenumbers.PhoneMetadataCollection.prototype.addMetadata = function(e) {
    this.add$Value(1, e)
}
,
i18n.phonenumbers.PhoneMetadataCollection.prototype.metadataArray = function() {
    return this.array$Values(1)
}
,
i18n.phonenumbers.PhoneMetadataCollection.prototype.hasMetadata = function() {
    return this.has$Value(1)
}
,
i18n.phonenumbers.PhoneMetadataCollection.prototype.metadataCount = function() {
    return this.count$Values(1)
}
,
i18n.phonenumbers.PhoneMetadataCollection.prototype.clearMetadata = function() {
    this.clear$Field(1)
}
,
goog.proto2.Message.set$Metadata(i18n.phonenumbers.NumberFormat, {
    0: {
        name: "NumberFormat",
        fullName: "i18n.phonenumbers.NumberFormat"
    },
    1: {
        name: "pattern",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    2: {
        name: "format",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    3: {
        name: "leading_digits_pattern",
        repeated: !0,
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    4: {
        name: "national_prefix_formatting_rule",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    6: {
        name: "national_prefix_optional_when_formatting",
        fieldType: goog.proto2.Message.FieldType.BOOL,
        type: Boolean
    },
    5: {
        name: "domestic_carrier_code_formatting_rule",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    }
}),
goog.proto2.Message.set$Metadata(i18n.phonenumbers.PhoneNumberDesc, {
    0: {
        name: "PhoneNumberDesc",
        fullName: "i18n.phonenumbers.PhoneNumberDesc"
    },
    2: {
        name: "national_number_pattern",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    3: {
        name: "possible_number_pattern",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    6: {
        name: "example_number",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    }
}),
goog.proto2.Message.set$Metadata(i18n.phonenumbers.PhoneMetadata, {
    0: {
        name: "PhoneMetadata",
        fullName: "i18n.phonenumbers.PhoneMetadata"
    },
    1: {
        name: "general_desc",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    2: {
        name: "fixed_line",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    3: {
        name: "mobile",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    4: {
        name: "toll_free",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    5: {
        name: "premium_rate",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    6: {
        name: "shared_cost",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    7: {
        name: "personal_number",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    8: {
        name: "voip",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    21: {
        name: "pager",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    25: {
        name: "uan",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    27: {
        name: "emergency",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    28: {
        name: "voicemail",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    24: {
        name: "no_international_dialling",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneNumberDesc
    },
    9: {
        name: "id",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    10: {
        name: "country_code",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.INT32,
        type: Number
    },
    11: {
        name: "international_prefix",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    17: {
        name: "preferred_international_prefix",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    12: {
        name: "national_prefix",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    13: {
        name: "preferred_extn_prefix",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    15: {
        name: "national_prefix_for_parsing",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    16: {
        name: "national_prefix_transform_rule",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    18: {
        name: "same_mobile_and_fixed_line_pattern",
        fieldType: goog.proto2.Message.FieldType.BOOL,
        defaultValue: !1,
        type: Boolean
    },
    19: {
        name: "number_format",
        repeated: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.NumberFormat
    },
    20: {
        name: "intl_number_format",
        repeated: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.NumberFormat
    },
    22: {
        name: "main_country_for_code",
        fieldType: goog.proto2.Message.FieldType.BOOL,
        defaultValue: !1,
        type: Boolean
    },
    23: {
        name: "leading_digits",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    26: {
        name: "leading_zero_possible",
        fieldType: goog.proto2.Message.FieldType.BOOL,
        defaultValue: !1,
        type: Boolean
    }
}),
goog.proto2.Message.set$Metadata(i18n.phonenumbers.PhoneMetadataCollection, {
    0: {
        name: "PhoneMetadataCollection",
        fullName: "i18n.phonenumbers.PhoneMetadataCollection"
    },
    1: {
        name: "metadata",
        repeated: !0,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: i18n.phonenumbers.PhoneMetadata
    }
}),
i18n.phonenumbers.PhoneNumber = function() {
    goog.proto2.Message.apply(this)
}
,
goog.inherits(i18n.phonenumbers.PhoneNumber, goog.proto2.Message),
i18n.phonenumbers.PhoneNumber.prototype.getCountryCode = function() {
    return this.get$Value(1)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeOrDefault = function() {
    return this.get$ValueOrDefault(1)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setCountryCode = function(e) {
    this.set$Value(1, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasCountryCode = function() {
    return this.has$Value(1)
}
,
i18n.phonenumbers.PhoneNumber.prototype.countryCodeCount = function() {
    return this.count$Values(1)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearCountryCode = function() {
    this.clear$Field(1)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getNationalNumber = function() {
    return this.get$Value(2)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getNationalNumberOrDefault = function() {
    return this.get$ValueOrDefault(2)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setNationalNumber = function(e) {
    this.set$Value(2, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasNationalNumber = function() {
    return this.has$Value(2)
}
,
i18n.phonenumbers.PhoneNumber.prototype.nationalNumberCount = function() {
    return this.count$Values(2)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearNationalNumber = function() {
    this.clear$Field(2)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getExtension = function() {
    return this.get$Value(3)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getExtensionOrDefault = function() {
    return this.get$ValueOrDefault(3)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setExtension = function(e) {
    this.set$Value(3, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasExtension = function() {
    return this.has$Value(3)
}
,
i18n.phonenumbers.PhoneNumber.prototype.extensionCount = function() {
    return this.count$Values(3)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearExtension = function() {
    this.clear$Field(3)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getItalianLeadingZero = function() {
    return this.get$Value(4)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getItalianLeadingZeroOrDefault = function() {
    return this.get$ValueOrDefault(4)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setItalianLeadingZero = function(e) {
    this.set$Value(4, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasItalianLeadingZero = function() {
    return this.has$Value(4)
}
,
i18n.phonenumbers.PhoneNumber.prototype.italianLeadingZeroCount = function() {
    return this.count$Values(4)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearItalianLeadingZero = function() {
    this.clear$Field(4)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZeros = function() {
    return this.get$Value(8)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZerosOrDefault = function() {
    return this.get$ValueOrDefault(8)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setNumberOfLeadingZeros = function(e) {
    this.set$Value(8, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasNumberOfLeadingZeros = function() {
    return this.has$Value(8)
}
,
i18n.phonenumbers.PhoneNumber.prototype.numberOfLeadingZerosCount = function() {
    return this.count$Values(8)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearNumberOfLeadingZeros = function() {
    this.clear$Field(8)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getRawInput = function() {
    return this.get$Value(5)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getRawInputOrDefault = function() {
    return this.get$ValueOrDefault(5)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setRawInput = function(e) {
    this.set$Value(5, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasRawInput = function() {
    return this.has$Value(5)
}
,
i18n.phonenumbers.PhoneNumber.prototype.rawInputCount = function() {
    return this.count$Values(5)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearRawInput = function() {
    this.clear$Field(5)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeSource = function() {
    return this.get$Value(6)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeSourceOrDefault = function() {
    return this.get$ValueOrDefault(6)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setCountryCodeSource = function(e) {
    this.set$Value(6, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasCountryCodeSource = function() {
    return this.has$Value(6)
}
,
i18n.phonenumbers.PhoneNumber.prototype.countryCodeSourceCount = function() {
    return this.count$Values(6)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearCountryCodeSource = function() {
    this.clear$Field(6)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCode = function() {
    return this.get$Value(7)
}
,
i18n.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCodeOrDefault = function() {
    return this.get$ValueOrDefault(7)
}
,
i18n.phonenumbers.PhoneNumber.prototype.setPreferredDomesticCarrierCode = function(e) {
    this.set$Value(7, e)
}
,
i18n.phonenumbers.PhoneNumber.prototype.hasPreferredDomesticCarrierCode = function() {
    return this.has$Value(7)
}
,
i18n.phonenumbers.PhoneNumber.prototype.preferredDomesticCarrierCodeCount = function() {
    return this.count$Values(7)
}
,
i18n.phonenumbers.PhoneNumber.prototype.clearPreferredDomesticCarrierCode = function() {
    this.clear$Field(7)
}
,
i18n.phonenumbers.PhoneNumber.CountryCodeSource = {
    FROM_NUMBER_WITH_PLUS_SIGN: 1,
    FROM_NUMBER_WITH_IDD: 5,
    FROM_NUMBER_WITHOUT_PLUS_SIGN: 10,
    FROM_DEFAULT_COUNTRY: 20
},
goog.proto2.Message.set$Metadata(i18n.phonenumbers.PhoneNumber, {
    0: {
        name: "PhoneNumber",
        fullName: "i18n.phonenumbers.PhoneNumber"
    },
    1: {
        name: "country_code",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.INT32,
        type: Number
    },
    2: {
        name: "national_number",
        required: !0,
        fieldType: goog.proto2.Message.FieldType.UINT64,
        type: Number
    },
    3: {
        name: "extension",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    4: {
        name: "italian_leading_zero",
        fieldType: goog.proto2.Message.FieldType.BOOL,
        type: Boolean
    },
    8: {
        name: "number_of_leading_zeros",
        fieldType: goog.proto2.Message.FieldType.INT32,
        defaultValue: 1,
        type: Number
    },
    5: {
        name: "raw_input",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    },
    6: {
        name: "country_code_source",
        fieldType: goog.proto2.Message.FieldType.ENUM,
        defaultValue: i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN,
        type: i18n.phonenumbers.PhoneNumber.CountryCodeSource
    },
    7: {
        name: "preferred_domestic_carrier_code",
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
    }
}),
i18n.phonenumbers.metadata = {},
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
    1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    379: ["VA"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    800: ["001"],
    808: ["001"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    870: ["001"],
    878: ["001"],
    880: ["BD"],
    881: ["001"],
    882: ["001"],
    883: ["001"],
    886: ["TW"],
    888: ["001"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    979: ["001"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"]
},
i18n.phonenumbers.metadata.countryToMetadata = {
    AC: [, [, , "[2-467]\\d{3}", "\\d{4}"], [, , "(?:[267]\\d|3[0-5]|4[4-69])\\d{2}", "\\d{4}", , , "6889"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "AC", 247, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AD: [, [, , "(?:[346-9]|180)\\d{5}", "\\d{6,8}"], [, , "[78]\\d{5}", "\\d{6}", , , "712345"], [, , "[346]\\d{5}", "\\d{6}", , , "312345"], [, , "180[02]\\d{4}", "\\d{8}", , , "18001234"], [, , "9\\d{5}", "\\d{6}", , , "912345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "AD", 376, "00", , , , , , , , [[, "(\\d{3})(\\d{3})", "$1 $2", ["[346-9]"], "", "", 0], [, "(180[02])(\\d{4})", "$1 $2", ["1"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AE: [, [, , "[2-79]\\d{7,8}|800\\d{2,9}", "\\d{5,12}"], [, , "[2-4679][2-8]\\d{6}", "\\d{7,8}", , , "22345678"], [, , "5[0256]\\d{7}", "\\d{9}", , , "501234567"], [, , "400\\d{6}|800\\d{2,9}", "\\d{5,12}", , , "800123456"], [, , "900[02]\\d{5}", "\\d{9}", , , "900234567"], [, , "700[05]\\d{5}", "\\d{9}", , , "700012345"], [, , "NA", "NA"], [, , "NA", "NA"], "AE", 971, "00", "0", , , "0", , , , [[, "([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"], "0$1", "", 0], [, "(5[0256])(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1", "", 0], [, "([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]0"], "$1", "", 0], [, "([68]00)(\\d{2,9})", "$1 $2", ["60|8"], "$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "600[25]\\d{5}", "\\d{9}", , , "600212345"], , , [, , "NA", "NA"]],
    AF: [, [, , "[2-7]\\d{8}", "\\d{7,9}"], [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", "\\d{7,9}", , , "234567890"], [, , "7(?:[05-9]\\d{7}|29\\d{6})", "\\d{9}", , , "701234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "AF", 93, "00", "0", , , "0", , , , [[, "([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-6]|7[013-9]"], "0$1", "", 0], [, "(729)(\\d{3})(\\d{3})", "$1 $2 $3", ["729"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684601234"], [, , "268(?:464|7(?:2[0-9]|64|7[0-689]|8[02-68]))\\d{4}", "\\d{10}", , , "2684641234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "26848[01]\\d{4}", "\\d{10}", , , "2684801234"], "AG", 1, "011", "1", , , "1", , , , , , [, , "26840[69]\\d{4}", "\\d{10}", , , "2684061234"], , "268", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AI: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "2644(?:6[12]|9[78])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2644612345"], [, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", "\\d{10}", , , "2642351234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "AI", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "264", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AL: [, [, , "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", "\\d{5,9}"], [, , "(?:2(?:[168][1-9]|[247]\\d|9[1-7])|3(?:1[1-3]|[2-6]\\d|[79][1-8]|8[1-9])|4\\d{2}|5(?:1[1-4]|[2-578]\\d|6[1-5]|9[1-7])|8(?:[19][1-5]|[2-6]\\d|[78][1-7]))\\d{5}", "\\d{5,8}", , , "22345678"], [, , "6[6-9]\\d{7}", "\\d{9}", , , "661234567"], [, , "800\\d{4}", "\\d{7}", , , "8001234"], [, , "900\\d{3}", "\\d{6}", , , "900123"], [, , "808\\d{3}", "\\d{6}", , , "808123"], [, , "700\\d{5}", "\\d{8}", , , "70012345"], [, , "NA", "NA"], "AL", 355, "00", "0", , , "0", , , , [[, "(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"], "0$1", "", 0], [, "(6[6-9])(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|8[016-9]|[79]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AM: [, [, , "[1-9]\\d{7}", "\\d{5,8}"], [, , "(?:1[01]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}", "\\d{5,8}", , , "10123456"], [, , "(?:55|77|9[1-9])\\d{6}", "\\d{8}", , , "77123456"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "90[016]\\d{5}", "\\d{8}", , , "90012345"], [, , "80[1-4]\\d{5}", "\\d{8}", , , "80112345"], [, , "NA", "NA"], [, , "60[2-6]\\d{5}", "\\d{8}", , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)", "", 0], [, "(\\d{2})(\\d{6})", "$1 $2", ["[5-7]|9[1-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)", "", 0], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AO: [, [, , "[29]\\d{8}", "\\d{9}"], [, , "2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}", "\\d{9}", , , "222123456"], [, , "9[1-49]\\d{7}", "\\d{9}", , , "923123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "AO", 244, "00", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AR: [, [, , "[1-368]\\d{9}|9\\d{10}", "\\d{6,11}"], [, , "11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}", "\\d{6,10}", , , "1123456789"], [, , "675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})", "\\d{6,11}", , , "91123456789"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "60[04579]\\d{7}", "\\d{10}", , , "6001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[124-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:1[1568]|2[15]|3[145]|4[13]|5[14-8]|[069]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", , , [[, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1", "", 0], [, "(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], "0$1", "", 0], [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9(?:[179]|4[13479]|8[0-24-9]))|3(?:36|4[12358]|5(?:[18]|3[014-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49])))"], "0$1", "", 0], [, "(9)(\\d{4})(\\d{3})(\\d{3})", "$2 15-$3-$4", ["93[58]", "9(?:3(?:53|8[78]))", "9(?:3(?:537|8(?:73|88)))"], "0$1", "", 0], [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], "0$1", "", 0], [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[0-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49]))"], "0$1", "", 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2-$3", ["3(?:53|8[78])", "3(?:537|8(?:73|88))"], "0$1", "", 1], [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", "", 1], [, "(\\d{3})", "$1", ["1[012]|911"], "$1", "", 0]], [[, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1", "", 0], [, "(9)(11)(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["911"]], [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9(?:[179]|4[13479]|8[0-24-9]))|3(?:36|4[12358]|5(?:[18]|3[014-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49])))"]], [, "(9)(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3-$4", ["93[58]", "9(?:3(?:53|8[78]))", "9(?:3(?:537|8(?:73|88)))"]], [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9[23]"]], [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[0-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49]))"], "0$1", "", 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2-$3", ["3(?:53|8[78])", "3(?:537|8(?:73|88))"], "0$1", "", 1], [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", "", 1]], [, , "NA", "NA"], , , [, , "810\\d{7}", "\\d{10}", , , "8101234567"], [, , "810\\d{7}", "\\d{10}", , , "8101234567"], , , [, , "NA", "NA"]],
    AS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", "\\d{7}(?:\\d{3})?", , , "6846221234"], [, , "684(?:25[2468]|7(?:3[13]|70))\\d{4}", "\\d{10}", , , "6847331234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "AS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "684", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AT: [, [, , "[1-9]\\d{3,12}", "\\d{3,13}"], [, , "1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}", "\\d{3,13}", , , "1234567890"], [, , "6(?:44|5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", "\\d{7,13}", , , "644123456"], [, , "80[02]\\d{6,10}", "\\d{9,13}", , , "800123456"], [, , "(?:711|9(?:0[01]|3[019]))\\d{6,10}", "\\d{9,13}", , , "900123456"], [, , "8(?:10|2[018])\\d{6,10}", "\\d{9,13}", , , "810123456"], [, , "NA", "NA"], [, , "780\\d{6,10}", "\\d{9,13}", , , "780123456"], "AT", 43, "00", "0", , , "0", , , , [[, "(1)(\\d{3,12})", "$1 $2", ["1"], "0$1", "", 0], [, "(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"], "0$1", "", 0], [, "(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"], "0$1", "", 0], [, "(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"], "0$1", "", 0], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["316|46|51|732|6(?:44|5[0-3579]|[6-9])|7(?:1|[28]0)|[89]"], "0$1", "", 0], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-35-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}", "\\d{5,13}", , , "50123"], , , [, , "NA", "NA"]],
    AU: [, [, , "[1-578]\\d{5,9}", "\\d{6,10}"], [, , "[237]\\d{8}|8(?:[68]\\d{3}|7[0-69]\\d{2}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}", "\\d{8,9}", , , "212345678"], [, , "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[0457-9]|8[17-9]|9[07-9])\\d{6}", "\\d{9}", , , "412345678"], [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456"], [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"], [, , "13(?:00\\d{2})?\\d{4}", "\\d{6,10}", , , "1300123456"], [, , "500\\d{6}", "\\d{9}", , , "500123456"], [, , "550\\d{6}", "\\d{9}", , , "550123456"], "AU", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , [[, "([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "", 0], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]|14"], "0$1", "", 0], [, "(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1", "", 0], [, "(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[38]0|90)", "1(?:[38]00|90)"], "$1", "", 0], [, "(180)(2\\d{3})", "$1 $2", ["180", "1802"], "$1", "", 0], [, "(19\\d)(\\d{3})", "$1 $2", ["19[13]"], "$1", "", 0], [, "(19\\d{2})(\\d{4})", "$1 $2", ["19[67]"], "$1", "", 0], [, "(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"], "$1", "", 0]], , [, , "16\\d{3,7}", "\\d{5,9}", , , "1612345"], 1, , [, , "1(?:3(?:\\d{4}|00\\d{6})|80(?:0\\d{6}|2\\d{3}))", "\\d{6,10}", , , "1300123456"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AW: [, [, , "[25-9]\\d{6}", "\\d{7}"], [, , "5(?:2\\d|8[1-9])\\d{4}", "\\d{7}", , , "5212345"], [, , "(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}", "\\d{7}", , , "5601234"], [, , "800\\d{4}", "\\d{7}", , , "8001234"], [, , "900\\d{4}", "\\d{7}", , , "9001234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "28\\d{5}|501\\d{4}", "\\d{7}", , , "5011234"], "AW", 297, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    AX: [, [, , "[135]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,8}|8\\d{6,9}", "\\d{5,12}"], [, , "18[1-8]\\d{3,9}", "\\d{6,12}", , , "1812345678"], [, , "4\\d{5,10}|50\\d{4,8}", "\\d{6,11}", , , "412345678"], [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567"], [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "AX", 358, "00|99[049]", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "100123"], [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "10112345"], , , [, , "NA", "NA"]],
    AZ: [, [, , "[1-9]\\d{8}", "\\d{7,9}"], [, , "(?:1[28]\\d|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])|365)\\d{6}", "\\d{7,9}", , , "123123456"], [, , "(?:4[04]|5[015]|60|7[07])\\d{7}", "\\d{9}", , , "401234567"], [, , "88\\d{7}", "\\d{9}", , , "881234567"], [, , "900200\\d{3}", "\\d{9}", , , "900200123"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "AZ", 994, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["(?:1[28]|2(?:[45]2|[0-36])|365)"], "(0$1)", "", 0], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BA: [, [, , "[3-9]\\d{7,8}", "\\d{6,9}"], [, , "(?:[35]\\d|49)\\d{6}", "\\d{6,8}", , , "30123456"], [, , "6(?:03|44|71|[1-356])\\d{6}", "\\d{8,9}", , , "61123456"], [, , "8[08]\\d{6}", "\\d{8}", , , "80123456"], [, , "9[0246]\\d{6}", "\\d{8}", , , "90123456"], [, , "8[12]\\d{6}", "\\d{8}", , , "82123456"], [, , "NA", "NA"], [, , "NA", "NA"], "BA", 387, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1", "", 0], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "70[23]\\d{5}", "\\d{8}", , , "70223456"], , , [, , "NA", "NA"]],
    BB: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "246[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2462345678"], [, , "246(?:(?:2[346]|45|82)\\d|25[0-4])\\d{4}", "\\d{10}", , , "2462501234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "BB", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "246", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BD: [, [, , "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", "\\d{6,10}"], [, , "2(?:7(?:1[0-267]|2[0-289]|3[0-29]|[46][01]|5[1-3]|7[017]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|6[1-35]|7[1-5]|8[1-8])|9(?:0[0-2]|1[1-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[016-8]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}", "\\d{6,9}", , , "27111234"], [, , "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", "\\d{10}", , , "1812345678"], [, , "80[03]\\d{7}", "\\d{10}", , , "8001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "96(?:0[49]|1[0-4]|6[69])\\d{6}", "\\d{10}", , , "9604123456"], "BD", 880, "00[12]?", "0", , , "0", , "00", , [[, "(2)(\\d{7})", "$1-$2", ["2"], "0$1", "", 0], [, "(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"], "0$1", "", 0], [, "(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"], "0$1", "", 0], [, "(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BE: [, [, , "[1-9]\\d{7,8}", "\\d{8,9}"], [, , "(?:1[0-69]|[49][23]|5\\d|6[013-57-9]|71|8[0-79])[1-9]\\d{5}|[23][2-8]\\d{6}", "\\d{8}", , , "12345678"], [, , "4(?:[679]\\d|8[03-9])\\d{6}", "\\d{9}", , , "470123456"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "(?:70[2-7]|90\\d)\\d{5}", "\\d{8}", , , "90123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BE", 32, "00", "0", , , "0", , , , [[, "(4[6-9]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"], "0$1", "", 0], [, "([2-49])(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|[49][23]"], "0$1", "", 0], [, "([15-8]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"], "0$1", "", 0], [, "([89]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "78\\d{6}", "\\d{8}", , , "78123456"], , , [, , "NA", "NA"]],
    BF: [, [, , "[24-7]\\d{7}", "\\d{8}"], [, , "(?:20(?:49|5[23]|9[016-9])|40(?:4[569]|5[4-6]|7[0179])|50(?:[34]\\d|50))\\d{4}", "\\d{8}", , , "20491234"], [, , "6(?:[0-689]\\d|7[0-5])\\d{5}|7\\d{7}", "\\d{8}", , , "70123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BF", 226, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BG: [, [, , "[23567]\\d{5,7}|[489]\\d{6,8}", "\\d{5,9}"], [, , "2(?:[0-8]\\d{5,6}|9\\d{4,6})|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}", "\\d{5,8}", , , "2123456"], [, , "(?:8[7-9]|98)\\d{7}|4(?:3[0789]|8\\d)\\d{5}", "\\d{8,9}", , , "48123456"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "90\\d{6}", "\\d{8}", , , "90123456"], [, , "NA", "NA"], [, , "700\\d{5}", "\\d{5,9}", , , "70012345"], [, , "NA", "NA"], "BG", 359, "00", "0", , , "0", , , , [[, "(2)(\\d{5})", "$1 $2", ["29"], "0$1", "", 0], [, "(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1", "", 0], [, "(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BH: [, [, , "[136-9]\\d{7}", "\\d{8}"], [, , "(?:1(?:3[13-6]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|88)|9[69][69])|7(?:7\\d{2}|178))\\d{4}", "\\d{8}", , , "17001234"], [, , "(?:3(?:[1-4679]\\d|5[0135]|8[0-48])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9])))\\d{4}", "\\d{8}", , , "36001234"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "(?:87|9[014578])\\d{6}", "\\d{8}", , , "90123456"], [, , "84\\d{6}", "\\d{8}", , , "84123456"], [, , "NA", "NA"], [, , "NA", "NA"], "BH", 973, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BI: [, [, , "[27]\\d{7}", "\\d{8}"], [, , "22(?:2[0-7]|[3-5]0)\\d{4}", "\\d{8}", , , "22201234"], [, , "(?:29|7[14-9])\\d{6}", "\\d{8}", , , "79561234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BI", 257, "00", , , , , , , , [[, "([27]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BJ: [, [, , "[2689]\\d{7}|7\\d{3}", "\\d{4,8}"], [, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", "\\d{8}", , , "20211234"], [, , "(?:6[146-8]|9[03-9])\\d{6}", "\\d{8}", , , "90011234"], [, , "7[3-5]\\d{2}", "\\d{4}", , , "7312"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "857[58]\\d{4}", "\\d{8}", , , "85751234"], "BJ", 229, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "81\\d{6}", "\\d{8}", , , "81123456"], , , [, , "NA", "NA"]],
    BL: [, [, , "[56]\\d{8}", "\\d{9}"], [, , "590(?:2[7-9]|5[12]|87)\\d{4}", "\\d{9}", , , "590271234"], [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BL", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BM: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4412345678"], [, , "441(?:[37]\\d|5[0-39])\\d{5}", "\\d{10}", , , "4413701234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "BM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "441", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BN: [, [, , "[2-578]\\d{6}", "\\d{7}"], [, , "[2-5]\\d{6}", "\\d{7}", , , "2345678"], [, , "[78]\\d{6}", "\\d{7}", , , "7123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BN", 673, "00", , , , , , , , [[, "([2-578]\\d{2})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BO: [, [, , "[23467]\\d{7}", "\\d{7,8}"], [, , "(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}", "\\d{7,8}", , , "22123456"], [, , "[67]\\d{7}", "\\d{8}", , , "71234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BO", 591, "00(1\\d)?", "0", , , "0(1\\d)?", , , , [[, "([234])(\\d{7})", "$1 $2", ["[234]"], "", "0$CC $1", 0], [, "([67]\\d{7})", "$1", ["[67]"], "", "0$CC $1", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BQ: [, [, , "[347]\\d{6}", "\\d{7}"], [, , "(?:318[023]|416[023]|7(?:1[578]|50)\\d)\\d{3}", "\\d{7}", , , "7151234"], [, , "(?:318[14-68]|416[15-9]|7(?:0[01]|7[07]|[89]\\d)\\d)\\d{3}", "\\d{7}", , , "3181234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BQ", 599, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BR: [, [, , "[1-46-9]\\d{7,10}|5\\d{8,9}", "\\d{8,11}"], [, , "1[1-9][2-5]\\d{7}|(?:[4689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", "\\d{8,11}", , , "1123456789"], [, , "1[1-9](?:7|9\\d)\\d{7}|2[12478]9?[6-9]\\d{7}|(?:3[1-578]|[4689][1-9]|5[13-5]|7[13-579])[6-9]\\d{7}", "\\d{10,11}", , , "11961234567"], [, , "800\\d{6,7}", "\\d{8,11}", , , "800123456"], [, , "[359]00\\d{6,7}", "\\d{8,11}", , , "300123456"], [, , "[34]00\\d{5}", "\\d{8}", , , "40041234"], [, , "NA", "NA"], [, , "NA", "NA"], "BR", 55, "00(?:1[45]|2[135]|31|4[13])", "0", , , "0(?:(1[245]|2[135]|31|4[13])(\\d{10,11}))?", "$2", , , [[, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:[1-9]|0[1-9])"], "$1", "", 0], [, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:[1-9]|0[1-9])"], "$1", "", 0], [, "(\\d{3,5})", "$1", ["1[125689]"], "$1", "", 0], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[189][1-9]|2[12478])9"], "($1)", "0 $CC ($1)", 0], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)", 0], [, "([34]00\\d)(\\d{4})", "$1-$2", ["[34]00"], "", "", 0], [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1", "", 0]], [[, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[189][1-9]|2[12478])9"], "($1)", "0 $CC ($1)", 0], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)", 0], [, "([34]00\\d)(\\d{4})", "$1-$2", ["[34]00"], "", "", 0], [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1", "", 0]], [, , "NA", "NA"], , , [, , "[34]00\\d{5}", "\\d{8}", , , "40041234"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BS: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[12]|12|7[67]|8[78]|9[89])|702)\\d{4}", "\\d{7}(?:\\d{3})?", , , "2423456789"], [, , "242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|727)\\d{4}", "\\d{10}", , , "2423591234"], [, , "242300\\d{4}|8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "BS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "242", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BT: [, [, , "[1-8]\\d{6,7}", "\\d{6,8}"], [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", "\\d{6,7}", , , "2345678"], [, , "[17]7\\d{6}", "\\d{8}", , , "17123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BT", 975, "00", , , , , , , , [[, "([17]7)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"], "", "", 0], [, "([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BW: [, [, , "[2-79]\\d{6,7}", "\\d{7,8}"], [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0235-9]|55|6\\d|7[01]|9[0-57])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", "\\d{7}", , , "2401234"], [, , "7(?:[1-35]\\d{6}|[46][0-7]\\d{5}|7[01467]\\d{5})", "\\d{8}", , , "71123456"], [, , "NA", "NA"], [, , "90\\d{5}", "\\d{7}", , , "9012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "79[12][01]\\d{4}", "\\d{8}", , , "79101234"], "BW", 267, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"], "", "", 0], [, "(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "", "", 0], [, "(90)(\\d{5})", "$1 $2", ["9"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BY: [, [, , "[1-4]\\d{8}|[89]\\d{9,10}", "\\d{7,11}"], [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", "\\d{7,9}", , , "152450911"], [, , "(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}", "\\d{9}", , , "294911911"], [, , "8(?:0[13]|20\\d)\\d{7}", "\\d{10,11}", , , "8011234567"], [, , "(?:810|902)\\d{7}", "\\d{10}", , , "9021234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BY", 375, "810", "8", , , "8?0?", , "8~10", , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1", "", 0], [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1", "", 0], [, "([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1", "", 0], [, "(8\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1", "", 0]], , [, , "NA", "NA"], , , [, , "8(?:[013]|[12]0)\\d{8}|902\\d{7}", "\\d{10,11}", , , "82012345678"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    BZ: [, [, , "[2-8]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?"], [, , "[234578][02]\\d{5}", "\\d{7}", , , "2221234"], [, , "6[0-367]\\d{5}", "\\d{7}", , , "6221234"], [, , "0800\\d{7}", "\\d{11}", , , "08001234123"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "BZ", 501, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"], "", "", 0], [, "(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    CA: [, [, , "[2-9]\\d{9}|3\\d{6}", "\\d{7}(?:\\d{3})?"], [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|79|8[17])|6(?:0[04]|13|39|47)|7(?:0[59]|78|80)|8(?:[06]7|19|73)|90[25])[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "2042345678"], [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|79|8[17])|6(?:0[04]|13|39|47)|7(?:0[59]|78|80)|8(?:[06]7|19|73)|90[25])[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2042345678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "CA", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CC: [, [, , "[1458]\\d{5,9}", "\\d{6,10}"], [, , "89162\\d{4}", "\\d{8,9}", , , "891621234"], [, , "4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-37-9]|6[6-9]|7[07-9]|8[7-9])\\d{6}", "\\d{9}", , , "412345678"], [, , "1(?:80(?:0\\d{2})?|3(?:00\\d{2})?)\\d{4}", "\\d{6,10}", , , "1800123456"], [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"], [, , "NA", "NA"], [, , "500\\d{6}", "\\d{9}", , , "500123456"], [, , "550\\d{6}", "\\d{9}", , , "550123456"], "CC", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CD: [, [, , "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", "\\d{7,9}"], [, , "1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}", "\\d{7,9}", , , "1234567"], [, , "8(?:[0-2459]\\d{2}|8)\\d{5}|9[7-9]\\d{7}", "\\d{7,9}", , , "991234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CD", 243, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"], "0$1", "", 0], [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"], "0$1", "", 0], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1", "", 0], [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CF: [, [, , "[278]\\d{7}", "\\d{8}"], [, , "2[12]\\d{6}", "\\d{8}", , , "21612345"], [, , "7[0257]\\d{6}", "\\d{8}", , , "70012345"], [, , "NA", "NA"], [, , "8776\\d{4}", "\\d{8}", , , "87761234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CF", 236, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CG: [, [, , "[028]\\d{8}", "\\d{9}"], [, , "222[1-589]\\d{5}", "\\d{9}", , , "222123456"], [, , "0[14-6]\\d{7}", "\\d{9}", , , "061234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CG", 242, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"], "", "", 0], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    CH: [, [, , "[2-9]\\d{8}|860\\d{9}", "\\d{9}(?:\\d{3})?"], [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", "\\d{9}", , , "212345678"], [, , "7[5-9]\\d{7}", "\\d{9}", , , "781234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "90[016]\\d{6}", "\\d{9}", , , "900123456"], [, , "84[0248]\\d{6}", "\\d{9}", , , "840123456"], [, , "878\\d{6}", "\\d{9}", , , "878123456"], [, , "NA", "NA"], "CH", 41, "00", "0", , , "0", , , , [[, "([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"], "0$1", "", 0], [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"], "0$1", "", 0]], , [, , "74[0248]\\d{6}", "\\d{9}", , , "740123456"], , , [, , "NA", "NA"], [, , "5[18]\\d{7}", "\\d{9}", , , "581234567"], , , [, , "860\\d{9}", "\\d{12}", , , "860123456789"]],
    CI: [, [, , "[02-7]\\d{7}", "\\d{8}"], [, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", "\\d{8}", , , "21234567"], [, , "(?:0[1-9]|4[0-24-9]|5[4-9]|6[015-79]|77)\\d{6}", "\\d{8}", , , "01234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CI", 225, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    CK: [, [, , "[2-57]\\d{4}", "\\d{5}"], [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", "\\d{5}", , , "21234"], [, , "(?:5[0-68]|7\\d)\\d{3}", "\\d{5}", , , "71234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CK", 682, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CL: [, [, , "(?:[2-9]|600|123)\\d{7,8}", "\\d{6,11}"], [, , "2(?:2\\d{7}|1962\\d{4})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[1347])\\d{7}|65\\d{6,7}", "\\d{6,9}", , , "221234567"], [, , "9[5-9]\\d{7}", "\\d{8,9}", , , "961234567"], [, , "800\\d{6}|1230\\d{7}", "\\d{9,11}", , , "800123456"], [, , "NA", "NA"], [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567"], [, , "NA", "NA"], [, , "44\\d{7}", "\\d{9}", , , "441234567"], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "0", , , "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))", , , , [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["22"], "($1)", "$CC ($1)", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)", 0], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["65"], "($1)", "$CC ($1)", 0], [, "(9)([5-9]\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0], [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1", "", 0], [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1", "", 0], [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1", "", 0], [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1", "", 0], [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)", 0], [, "(\\d{4,5})", "$1", ["[1-9]"], "$1", "", 0]], [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["22"], "($1)", "$CC ($1)", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)", 0], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["65"], "($1)", "$CC ($1)", 0], [, "(9)([5-9]\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0], [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1", "", 0], [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1", "", 0], [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1", "", 0], [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1", "", 0], [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)", 0]], [, , "NA", "NA"], , , [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CM: [, [, , "[2357-9]\\d{7}", "\\d{8}"], [, , "(?:22|33)\\d{6}", "\\d{8}", , , "22123456"], [, , "[579]\\d{7}", "\\d{8}", , , "71234567"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "88\\d{6}", "\\d{8}", , , "88012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CM", 237, "00", , , , , , , , [[, "([2357-9]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23579]|88"], "", "", 0], [, "(800)(\\d{2})(\\d{3})", "$1 $2 $3", ["80"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CN: [, [, , "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,9}", "\\d{4,12}"], [, , "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}", "\\d{4,12}", , , "1012345678"], [, , "1(?:[38]\\d|4[57]|5[0-35-9]|7[06-8])\\d{8}", "\\d{11}", , , "13123456789"], [, , "(?:10)?800\\d{7}", "\\d{10,12}", , , "8001234567"], [, , "16[08]\\d{5}", "\\d{8}", , , "16812345"], [, , "400\\d{7}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", "\\d{7,10}", , , "4001234567"], [, , "NA", "NA"], [, , "NA", "NA"], "CN", 86, "(1[1279]\\d{3})?00", "0", , , "(1[1279]\\d{3})|0", , "00", , [[, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "$CC $1", 1], [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"], "", "", 0], [, "(\\d{5,6})", "$1", ["100|95"], "", "", 0], [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1", 0], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|9[56])"], "0$1", "$CC $1", 0], [, "(\\d{3,4})(\\d{4})", "$1 $2", ["[2-9]"], "", "", 0], [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1], [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98)"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-578]"], "", "$CC $1", 0], [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"], "", "", 0]], [[, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "$CC $1", 1], [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"], "", "", 0], [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1", 0], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|9[56])"], "0$1", "$CC $1", 0], [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1], [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98)"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-578]"], "", "$CC $1", 0], [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"], "", "", 0]], [, , "NA", "NA"], , , [, , "(?:4|(?:10)?8)00\\d{7}", "\\d{10,12}", , , "4001234567"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CO: [, [, , "(?:[13]\\d{0,3}|[24-8])\\d{7}", "\\d{7,11}"], [, , "[124-8][2-9]\\d{6}", "\\d{8}", , , "12345678"], [, , "3(?:0[0-5]|1\\d|[25][01])\\d{7}", "\\d{10}", , , "3211234567"], [, , "1800\\d{7}", "\\d{11}", , , "18001234567"], [, , "19(?:0[01]|4[78])\\d{7}", "\\d{11}", , , "19001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:44|56))?", , , , [[, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"], "($1)", "0$CC $1", 0], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "", "0$CC $1", 0], [, "(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1", "", 0]], [[, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"], "($1)", "0$CC $1", 0], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "", "0$CC $1", 0], [, "(1)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"]]], [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CR: [, [, , "[24-9]\\d{7,9}", "\\d{8,10}"], [, , "2[24-7]\\d{6}", "\\d{8}", , , "22123456"], [, , "57[0-3]\\d{5}|6(?:[0-2]\\d|30)\\d{5}|7[0-3]\\d{6}|8[3-9]\\d{6}", "\\d{8}", , , "83123456"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "90[059]\\d{7}", "\\d{10}", , , "9001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "210[0-6]\\d{4}|4(?:0(?:0[01]\\d{4}|10[0-3]\\d{3}|2900\\d{2}|3[01]\\d{4}|40\\d{4}|5\\d{5}|70[01]\\d{3}|8[0-2]\\d{4})|1[01]\\d{5}|20[0-3]\\d{4}|400\\d{4}|70[0-2]\\d{4})|5100\\d{4}", "\\d{8}", , , "40001234"], "CR", 506, "00", , , , "(19(?:0[01468]|19|20|66|77))", , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], "", "$CC $1", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"], "", "$CC $1", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CU: [, [, , "[2-57]\\d{5,7}", "\\d{4,8}"], [, , "2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}", "\\d{4,8}", , , "71234567"], [, , "5\\d{7}", "\\d{8}", , , "51234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CU", 53, "119", "0", , , "0", , , , [[, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)", "", 0], [, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)", "", 0], [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CV: [, [, , "[259]\\d{6}", "\\d{7}"], [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", "\\d{7}", , , "2211234"], [, , "(?:9\\d|59)\\d{5}", "\\d{7}", , , "9911234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "CV", 238, "0", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CW: [, [, , "[169]\\d{6,7}", "\\d{7,8}"], [, , "9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", "\\d{7,8}", , , "94151234"], [, , "9(?:5(?:[1246]\\d|3[01])|6(?:[16-9]\\d|3[01]))\\d{4}", "\\d{7,8}", , , "95181234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "(?:10|69)\\d{5}", "\\d{7}", , , "1011234"], [, , "NA", "NA"], [, , "NA", "NA"], "CW", 599, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"], "", "", 0], [, "(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "", "", 0]], , [, , "955\\d{5}", "\\d{7,8}", , , "95581234"], 1, , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CX: [, [, , "[1458]\\d{5,9}", "\\d{6,10}"], [, , "89164\\d{4}", "\\d{8,9}", , , "891641234"], [, , "4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-37-9]|6[6-9]|7[07-9]|8[7-9])\\d{6}", "\\d{9}", , , "412345678"], [, , "1(?:80(?:0\\d{2})?|3(?:00\\d{2})?)\\d{4}", "\\d{6,10}", , , "1800123456"], [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"], [, , "NA", "NA"], [, , "500\\d{6}", "\\d{9}", , , "500123456"], [, , "550\\d{6}", "\\d{9}", , , "550123456"], "CX", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    CY: [, [, , "[257-9]\\d{7}", "\\d{8}"], [, , "2[2-6]\\d{6}", "\\d{8}", , , "22345678"], [, , "9[5-79]\\d{6}", "\\d{8}", , , "96123456"], [, , "800\\d{5}", "\\d{8}", , , "80001234"], [, , "90[09]\\d{5}", "\\d{8}", , , "90012345"], [, , "80[1-9]\\d{5}", "\\d{8}", , , "80112345"], [, , "700\\d{5}", "\\d{8}", , , "70012345"], [, , "NA", "NA"], "CY", 357, "00", , , , , , , , [[, "(\\d{2})(\\d{6})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "(?:50|77)\\d{6}", "\\d{8}", , , "77123456"], , , [, , "NA", "NA"]],
    CZ: [, [, , "[2-8]\\d{8}|9\\d{8,11}", "\\d{9,12}"], [, , "2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}", "\\d{9,12}", , , "212345678"], [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", "\\d{9,12}", , , "601123456"], [, , "800\\d{6}", "\\d{9,12}", , , "800123456"], [, , "9(?:0[05689]|76)\\d{6}", "\\d{9,12}", , , "900123456"], [, , "8[134]\\d{7}", "\\d{9,12}", , , "811234567"], [, , "70[01]\\d{6}", "\\d{9,12}", , , "700123456"], [, , "9[17]0\\d{6}", "\\d{9,12}", , , "910123456"], "CZ", 420, "00", , , , , , , , [[, "([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"], "", "", 0], [, "(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"], "", "", 0], [, "(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "9(?:5\\d|7[234])\\d{6}", "\\d{9,12}", , , "972123456"], , , [, , "9(?:3\\d{9}|6\\d{7,10})", "\\d{9,12}", , , "93123456789"]],
    DE: [, [, , "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,7})", "\\d{2,15}"], [, , "[246]\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-9]\\d)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})", "\\d{2,15}", , , "30123456"], [, , "1(?:5[0-2579]\\d{8}|6[023]\\d{7,8}|7(?:[0-57-9]\\d?|6\\d)\\d{7})", "\\d{10,11}", , , "15123456789"], [, , "800\\d{7,12}", "\\d{10,15}", , , "8001234567890"], [, , "137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})", "\\d{10,11}", , , "9001234567"], [, , "1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})", "\\d{7,14}", , , "18012345"], [, , "700\\d{8}", "\\d{11}", , , "70012345678"], [, , "NA", "NA"], "DE", 49, "00", "0", , , "0", , , , [[, "(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1", "", 0], [, "(1\\d{3})(\\d{7})", "$1 $2", ["15"], "0$1", "", 0], [, "(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"], "0$1", "", 0], [, "(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"], "0$1", "", 0], [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])", "[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"], "0$1", "", 0], [, "(3\\d{4})(\\d{1,10})", "$1 $2", ["3"], "0$1", "", 0], [, "(800)(\\d{7,12})", "$1 $2", ["800"], "0$1", "", 0], [, "(177)(99)(\\d{7,8})", "$1 $2 $3", ["177", "1779", "17799"], "0$1", "", 0], [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["(?:18|90)0|137", "1(?:37|80)|900[1359]"], "0$1", "", 0], [, "(1\\d{2})(\\d{5,11})", "$1 $2", ["181"], "0$1", "", 0], [, "(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1", "", 0], [, "(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"], "0$1", "", 0], [, "(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"], "0$1", "", 0], [, "(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"], "0$1", "", 0], [, "(138)(\\d{4})", "$1 $2", ["138"], "0$1", "", 0]], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", "\\d{4,14}", , , "16412345"], , , [, , "NA", "NA"], [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", "\\d{8,14}", , , "18500123456"], , , [, , "17799\\d{7,8}", "\\d{12,13}", , , "177991234567"]],
    DJ: [, [, , "[27]\\d{7}", "\\d{8}"], [, , "2(?:1[2-5]|7[45])\\d{5}", "\\d{8}", , , "21360003"], [, , "77[6-8]\\d{5}", "\\d{8}", , , "77831001"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "DJ", 253, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    DK: [, [, , "[2-9]\\d{7}", "\\d{8}"], [, , "(?:[2-7]\\d|8[126-9]|9[126-9])\\d{6}", "\\d{8}", , , "32123456"], [, , "(?:[2-7]\\d|8[126-9]|9[126-9])\\d{6}", "\\d{8}", , , "20123456"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "90\\d{6}", "\\d{8}", , , "90123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "DK", 45, "00", , , , , , , 1, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    DM: [, [, , "[57-9]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7674201234"], [, , "767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}", "\\d{10}", , , "7672251234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "DM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "767", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    DO: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})", "\\d{7}(?:\\d{3})?", , , "8092345678"], [, , "8[024]9[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "8092345678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "DO", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "8[024]9", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    DZ: [, [, , "(?:[1-4]|[5-9]\\d)\\d{7}", "\\d{8,9}"], [, , "(?:1\\d|2[014-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}", "\\d{8,9}", , , "12345678"], [, , "(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-3])\\d{6}", "\\d{9}", , , "551234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "80[3-689]1\\d{5}", "\\d{9}", , , "808123456"], [, , "80[12]1\\d{5}", "\\d{9}", , , "801123456"], [, , "NA", "NA"], [, , "98[23]\\d{6}", "\\d{9}", , , "983123456"], "DZ", 213, "00", "0", , , "0", , , , [[, "([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1", "", 0], [, "([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1", "", 0], [, "(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    EC: [, [, , "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", "\\d{7,11}"], [, , "[2-7][2-7]\\d{6}", "\\d{7,8}", , , "22123456"], [, , "9(?:39|[45][89]|[67][7-9]|[89]\\d)\\d{6}", "\\d{9}", , , "991234567"], [, , "1800\\d{6,7}", "\\d{10,11}", , , "18001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "[2-7]890\\d{4}", "\\d{8}", , , "28901234"], "EC", 593, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], "(0$1)", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0], [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1", "", 0]], [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[247]|[356][2-8]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0], [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1", "", 0]], [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    EE: [, [, , "1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}", "\\d{4,10}"], [, , "(?:3[23589]|4(?:0\\d|[3-8])|6\\d|7[1-9]|88)\\d{5}", "\\d{7,8}", , , "3212345"], [, , "(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}", "\\d{7,8}", , , "51234567"], [, , "800(?:0\\d{3}|1\\d|[2-9])\\d{3}", "\\d{7,10}", , , "80012345"], [, , "900\\d{4}", "\\d{7}", , , "9001234"], [, , "NA", "NA"], [, , "70[0-2]\\d{5}", "\\d{8}", , , "70012345"], [, , "NA", "NA"], "EE", 372, "00", , , , , , , , [[, "([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"], "", "", 0], [, "(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"], "", "", 0], [, "(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"], "", "", 0], [, "([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"], "", "", 0]], , [, , "NA", "NA"], , , [, , "1\\d{3,4}|800[2-9]\\d{3}", "\\d{4,7}", , , "8002123"], [, , "1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}", "\\d{4,5}", , , "12123"], , , [, , "NA", "NA"]],
    EG: [, [, , "1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}", "\\d{5,10}"], [, , "(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}", "\\d{5,9}", , , "234567890"], [, , "1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}", "\\d{10}", , , "1001234567"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "900\\d{7}", "\\d{10}", , , "9001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "EG", 20, "00", "0", , , "0", , , , [[, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[012]|[89]00"], "0$1", "", 0], [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|[89][2-9]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    EH: [, [, , "[5689]\\d{8}", "\\d{9}"], [, , "528[89]\\d{5}", "\\d{9}", , , "528812345"], [, , "6(?:0[0-8]|[12-7]\\d|8[01]|9[2457-9])\\d{6}", "\\d{9}", , , "650123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "89\\d{7}", "\\d{9}", , , "891234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "EH", 212, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , "528[89]", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    ER: [, [, , "[178]\\d{6}", "\\d{6,7}"], [, , "1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}", "\\d{6,7}", , , "8370362"], [, , "17[1-3]\\d{4}|7\\d{6}", "\\d{7}", , , "7123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "ER", 291, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    ES: [, [, , "[5-9]\\d{8}", "\\d{9}"], [, , "8(?:[13]0|[28][0-8]|[47][1-9]|5[01346-9]|6[0457-9])\\d{6}|9(?:[1238][0-8]\\d{6}|4[1-9]\\d{6}|5\\d{7}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})", "\\d{9}", , , "810123456"], [, , "(?:6\\d{6}|7[1-4]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}", "\\d{9}", , , "612345678"], [, , "[89]00\\d{6}", "\\d{9}", , , "800123456"], [, , "80[367]\\d{6}", "\\d{9}", , , "803123456"], [, , "90[12]\\d{6}", "\\d{9}", , , "901123456"], [, , "70\\d{7}", "\\d{9}", , , "701234567"], [, , "NA", "NA"], "ES", 34, "00", , , , , , , , [[, "([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "51\\d{7}", "\\d{9}", , , "511234567"], , , [, , "NA", "NA"]],
    ET: [, [, , "[1-59]\\d{8}", "\\d{7,9}"], [, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[57]|44|5[0-4])|6(?:18|2[69]|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", "\\d{7,9}", , , "111112345"], [, , "9(?:[1-3]\\d|5[89])\\d{6}", "\\d{9}", , , "911234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "ET", 251, "00", "0", , , "0", , , , [[, "([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    FI: [, [, , "1\\d{4,11}|[2-9]\\d{4,10}", "\\d{5,12}"], [, , "1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "\\d{5,12}", , , "1312345678"], [, , "4\\d{5,10}|50\\d{4,8}", "\\d{6,11}", , , "412345678"], [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567"], [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "FI", 358, "00|99[049]", "0", , , "0", , , , [[, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]00|[6-8]0)"], "0$1", "", 0], [, "(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1", "", 0], [, "(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"], "0$1", "", 0]], , [, , "NA", "NA"], 1, , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "100123"], [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "10112345"], , , [, , "NA", "NA"]],
    FJ: [, [, , "[36-9]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?"], [, , "(?:3[0-5]|6[25-7]|8[58])\\d{5}", "\\d{7}", , , "3212345"], [, , "(?:7[0-8]|8[034679]|9\\d)\\d{5}", "\\d{7}", , , "7012345"], [, , "0800\\d{7}", "\\d{11}", , , "08001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "FJ", 679, "0(?:0|52)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[36-9]"], "", "", 0], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    FK: [, [, , "[2-7]\\d{4}", "\\d{5}"], [, , "[2-47]\\d{4}", "\\d{5}", , , "31234"], [, , "[56]\\d{4}", "\\d{5}", , , "51234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "FK", 500, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    FM: [, [, , "[39]\\d{6}", "\\d{7}"], [, , "3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}", "\\d{7}", , , "3201234"], [, , "3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}", "\\d{7}", , , "3501234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "FM", 691, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    FO: [, [, , "[2-9]\\d{5}", "\\d{6}"], [, , "(?:20|[3-4]\\d|8[19])\\d{4}", "\\d{6}", , , "201234"], [, , "(?:2[1-9]|5\\d|7[1-79])\\d{4}", "\\d{6}", , , "211234"], [, , "80[257-9]\\d{3}", "\\d{6}", , , "802123"], [, , "90(?:[1345][15-7]|2[125-7]|99)\\d{2}", "\\d{6}", , , "901123"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "(?:6[0-36]|88)\\d{4}", "\\d{6}", , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [[, "(\\d{6})", "$1", , "", "$CC $1", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    FR: [, [, , "[1-9]\\d{8}", "\\d{9}"], [, , "[1-5]\\d{8}", "\\d{9}", , , "123456789"], [, , "6\\d{8}|7[5-9]\\d{7}", "\\d{9}", , , "612345678"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"], [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"], [, , "NA", "NA"], [, , "9\\d{8}", "\\d{9}", , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [[, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1", "", 0], [, "(1\\d{2})(\\d{3})", "$1 $2", ["11"], "$1", "", 0], [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1", "", 0]], [[, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1", "", 0], [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1", "", 0]], [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GA: [, [, , "0?\\d{7}", "\\d{7,8}"], [, , "01\\d{6}", "\\d{8}", , , "01441234"], [, , "0?[2-7]\\d{6}", "\\d{7,8}", , , "06031234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GA", 241, "00", , , , , , , , [[, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1", "", 0], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    GB: [, [, , "\\d{7,10}", "\\d{4,10}"], [, , "2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}", "\\d{4,10}", , , "1212345678"], [, , "7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}", "\\d{10}", , , "7400123456"], [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"], [, , "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "\\d{10}", , , "9012345678"], [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", "\\d{7}(?:\\d{3})?", , , "8431234567"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "GB", 44, "00", "0", " x", , "0", , , , [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7(?:0|6[013-9])", "2|5[56]|7(?:0|6(?:[013-9]|2[0-35-9]))"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"], "0$1", "", 0], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:387|5(?:24|39)|697|768|946)", "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"], "0$1", "", 0], [, "(1\\d{3})(\\d{5,6})", "$1 $2", ["1"], "0$1", "", 0], [, "(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-5789]|62)", "7(?:[1-5789]|624)"], "0$1", "", 0], [, "(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1", "", 0], [, "(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1", "", 0], [, "(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"], "0$1", "", 0], [, "(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "", 0], [, "([58]00)(\\d{6})", "$1 $2", ["[58]00"], "0$1", "", 0]], , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], 1, , [, , "NA", "NA"], [, , "(?:3[0347]|55)\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]],
    GD: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4732691234"], [, , "473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}", "\\d{10}", , , "4734031234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "GD", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "473", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GE: [, [, , "[34578]\\d{8}", "\\d{6,9}"], [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", "\\d{6,9}", , , "322123456"], [, , "5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}", "\\d{9}", , , "555123456"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "706\\d{6}", "\\d{9}", , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "$1", "", 0]], , [, , "NA", "NA"], , , [, , "706\\d{6}", "\\d{9}", , , "706123456"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GF: [, [, , "[56]\\d{8}", "\\d{9}"], [, , "594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}", "\\d{9}", , , "594101234"], [, , "694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}", "\\d{9}", , , "694201234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GF", 594, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GG: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"], [, , "1481\\d{6}", "\\d{6,10}", , , "1481456789"], [, , "7(?:781|839|911)\\d{6}", "\\d{10}", , , "7781123456"], [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"], [, , "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "\\d{10}", , , "9012345678"], [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", "\\d{7}(?:\\d{3})?", , , "8431234567"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "GG", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], , , [, , "NA", "NA"], [, , "(?:3[0347]|55)\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]],
    GH: [, [, , "[235]\\d{8}|8\\d{7}", "\\d{7,9}"], [, , "3(?:0[237]\\d|[167](?:2[0-6]|7\\d)|2(?:2[0-5]|7\\d)|3(?:2[0-3]|7\\d)|4(?:2[013-9]|3[01]|7\\d)|5(?:2[0-7]|7\\d)|8(?:2[0-2]|7\\d)|9(?:20|7\\d))\\d{5}", "\\d{7,9}", , , "302345678"], [, , "(?:2[034678]\\d|5(?:[047]\\d|54))\\d{6}", "\\d{9}", , , "231234567"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GH", 233, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1", "", 0], [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GI: [, [, , "[2568]\\d{7}", "\\d{8}"], [, , "2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}", "\\d{8}", , , "20012345"], [, , "(?:5[46-8]|62)\\d{6}", "\\d{8}", , , "57123456"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "8[1-689]\\d{6}", "\\d{8}", , , "88123456"], [, , "87\\d{6}", "\\d{8}", , , "87123456"], [, , "NA", "NA"], [, , "NA", "NA"], "GI", 350, "00", , , , , , , , [[, "(\\d{3})(\\d{5})", "$1 $2", ["2"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GL: [, [, , "[1-689]\\d{5}", "\\d{6}"], [, , "(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}", "\\d{6}", , , "321000"], [, , "[245][2-9]\\d{4}", "\\d{6}", , , "221234"], [, , "80\\d{4}", "\\d{6}", , , "801234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "3[89]\\d{4}", "\\d{6}", , , "381234"], "GL", 299, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GM: [, [, , "[2-9]\\d{6}", "\\d{7}"], [, , "(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", "\\d{7}", , , "5661234"], [, , "(?:2[0-6]|[3679]\\d)\\d{5}", "\\d{7}", , , "3012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GM", 220, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GN: [, [, , "[367]\\d{7,8}", "\\d{8,9}"], [, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", "\\d{8}", , , "30241234"], [, , "6[02356]\\d{7}", "\\d{9}", , , "601123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "722\\d{6}", "\\d{9}", , , "722123456"], "GN", 224, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"], "", "", 0], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GP: [, [, , "[56]\\d{8}", "\\d{9}"], [, , "590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}", "\\d{9}", , , "590201234"], [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GP", 590, "00", "0", , , "0", , , , [[, "([56]90)(\\d{2})(\\d{4})", "$1 $2-$3", , "0$1", "", 0]], , [, , "NA", "NA"], 1, , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GQ: [, [, , "[23589]\\d{8}", "\\d{9}"], [, , "3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}", "\\d{9}", , , "333091234"], [, , "(?:222|551)\\d{6}", "\\d{9}", , , "222123456"], [, , "80\\d[1-9]\\d{5}", "\\d{9}", , , "800123456"], [, , "90\\d[1-9]\\d{5}", "\\d{9}", , , "900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GQ", 240, "00", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"], "", "", 0], [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GR: [, [, , "[26-9]\\d{9}", "\\d{10}"], [, , "2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", "\\d{10}", , , "2123456789"], [, , "69\\d{8}", "\\d{10}", , , "6912345678"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "90[19]\\d{7}", "\\d{10}", , , "9091234567"], [, , "8(?:0[16]|12|25)\\d{7}", "\\d{10}", , , "8011234567"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], [, , "NA", "NA"], "GR", 30, "00", , , , , , , , [[, "([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"], "", "", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"], "", "", 0], [, "(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GT: [, [, , "[2-7]\\d{7}|1[89]\\d{9}", "\\d{8}(?:\\d{3})?"], [, , "[267][2-9]\\d{6}", "\\d{8}", , , "22456789"], [, , "[345]\\d{7}", "\\d{8}", , , "51234567"], [, , "18[01]\\d{8}", "\\d{11}", , , "18001112222"], [, , "19\\d{9}", "\\d{11}", , , "19001112222"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GT", 502, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"], "", "", 0], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GU: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6713001234"], [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6713001234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "GU", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "671", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GW: [, [, , "[3-79]\\d{6}", "\\d{7}"], [, , "3(?:2[0125]|3[1245]|4[12]|5[1-4]|70|9[1-467])\\d{4}", "\\d{7}", , , "3201234"], [, , "(?:[5-7]\\d|9[012])\\d{5}", "\\d{7}", , , "5012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "40\\d{5}", "\\d{7}", , , "4012345"], "GW", 245, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    GY: [, [, , "[2-4679]\\d{6}", "\\d{7}"], [, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", "\\d{7}", , , "2201234"], [, , "6\\d{6}", "\\d{7}", , , "6091234"], [, , "(?:289|862)\\d{4}", "\\d{7}", , , "2891234"], [, , "9008\\d{3}", "\\d{7}", , , "9008123"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "GY", 592, "001", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    HK: [, [, , "[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}", "\\d{5,11}"], [, , "(?:[23]\\d|5[78])\\d{6}", "\\d{8}", , , "21234567"], [, , "(?:5[1-69]\\d|6\\d{2}|9(?:0[1-9]|[1-8]\\d))\\d{5}", "\\d{8}", , , "51234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", "\\d{5,11}", , , "90012345678"], [, , "NA", "NA"], [, , "8[1-3]\\d{6}", "\\d{8}", , , "81123456"], [, , "NA", "NA"], "HK", 852, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[235-7]|[89](?:0[1-9]|[1-9])"], "", "", 0], [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"], "", "", 0], [, "(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"], "", "", 0], [, "(900)(\\d{2,5})", "$1 $2", ["900"], "", "", 0]], , [, , "7\\d{7}", "\\d{8}", , , "71234567"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    HN: [, [, , "[237-9]\\d{7}", "\\d{8}"], [, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[056]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:4[3-5]|5\\d|6[56]|74)|6(?:[056]\\d|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[34])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}", "\\d{8}", , , "22123456"], [, , "[37-9]\\d{7}", "\\d{8}", , , "91234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "HN", 504, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1-$2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    HR: [, [, , "[1-7]\\d{5,8}|[89]\\d{6,11}", "\\d{6,12}"], [, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6}", "\\d{6,8}", , , "12345678"], [, , "9[1257-9]\\d{6,10}", "\\d{8,12}", , , "912345678"], [, , "80[01]\\d{4,7}", "\\d{7,10}", , , "8001234567"], [, , "6(?:[09]\\d{7}|[145]\\d{4,7})", "\\d{6,9}", , , "611234"], [, , "NA", "NA"], [, , "7[45]\\d{4,7}", "\\d{6,9}", , , "741234567"], [, , "NA", "NA"], "HR", 385, "00", "0", , , "0", , , , [[, "(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1", "", 0], [, "(6[09])(\\d{4})(\\d{3})", "$1 $2 $3", ["6[09]"], "0$1", "", 0], [, "(62)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["62"], "0$1", "", 0], [, "([2-5]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-5]"], "0$1", "", 0], [, "(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1", "", 0], [, "(9\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0], [, "(9\\d)(\\d{3,4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"], "0$1", "", 0], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[145]|7"], "0$1", "", 0], [, "(\\d{2})(\\d{3,4})(\\d{3})", "$1 $2 $3", ["6[145]|7"], "0$1", "", 0], [, "(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1", "", 0], [, "(80[01])(\\d{3,4})(\\d{3})", "$1 $2 $3", ["8"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "62\\d{6,7}", "\\d{8,9}", , , "62123456"], , , [, , "NA", "NA"]],
    HT: [, [, , "[2-489]\\d{7}", "\\d{8}"], [, , "2(?:[24]\\d|5[1-5]|94)\\d{5}", "\\d{8}", , , "22453300"], [, , "(?:3[1-9]|4\\d)\\d{6}", "\\d{8}", , , "34101234"], [, , "8\\d{7}", "\\d{8}", , , "80012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "98[89]\\d{5}", "\\d{8}", , , "98901234"], "HT", 509, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    HU: [, [, , "[1-9]\\d{7,8}", "\\d{6,9}"], [, , "(?:1\\d|2(?:1\\d|[2-9])|3[2-7]|4[24-9]|5[2-79]|6[23689]|7(?:1\\d|[2-9])|8[2-57-9]|9[2-69])\\d{6}", "\\d{6,9}", , , "12345678"], [, , "(?:[27]0|3[01])\\d{7}", "\\d{9}", , , "201234567"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "9[01]\\d{6}", "\\d{8}", , , "90123456"], [, , "40\\d{6}", "\\d{8}", , , "40123456"], [, , "NA", "NA"], [, , "NA", "NA"], "HU", 36, "00", "06", , , "06", , , , [[, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)", "", 0], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)", "", 0]], , [, , "NA", "NA"], , , [, , "[48]0\\d{6}", "\\d{8}", , , "80123456"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    ID: [, [, , "[1-9]\\d{6,10}", "\\d{5,11}"], [, , "2(?:1(?:14\\d{3}|[0-8]\\d{6,7}|500\\d{3}|9\\d{6})|[24]\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|2[1-578]|3[1-68]|4[1-3]|5[1-8]|6[1-3568]|7[0-46]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[1246-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-469]|4[1-6])|7(?:1[1-46-9]|2[14-9]|[36]\\d|4[1-8]|5[1-9]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", "\\d{5,10}", , , "612345678"], [, , "(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,9}", "\\d{9,11}", , , "812345678"], [, , "177\\d{6,8}|800\\d{5,7}", "\\d{8,11}", , , "8001234567"], [, , "809\\d{7}", "\\d{10}", , , "8091234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "ID", 62, "0(?:0[1789]|10(?:00|1[67]))", "0", , , "0", , , , [[, "(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)", "", 0], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["[4579]|2[035-9]|[36][02-9]"], "(0$1)", "", 0], [, "(8\\d{2})(\\d{3,4})(\\d{3,4})", "$1-$2-$3", ["8[1-35-9]"], "0$1", "", 0], [, "(177)(\\d{6,8})", "$1 $2", ["1"], "0$1", "", 0], [, "(800)(\\d{5,7})", "$1 $2", ["800"], "0$1", "", 0], [, "(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "8071\\d{6}", "\\d{10}", , , "8071123456"], [, , "8071\\d{6}", "\\d{10}", , , "8071123456"], , , [, , "NA", "NA"]],
    IE: [, [, , "[124-9]\\d{6,9}", "\\d{5,10}"], [, , "1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})", "\\d{5,10}", , , "2212345"], [, , "8(?:22\\d{6}|[35-9]\\d{7})", "\\d{9}", , , "850123456"], [, , "1800\\d{6}", "\\d{10}", , , "1800123456"], [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", "\\d{10}", , , "1520123456"], [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456"], [, , "700\\d{6}", "\\d{9}", , , "700123456"], [, , "76\\d{7}", "\\d{9}", , , "761234567"], "IE", 353, "00", "0", , , "0", , , , [[, "(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)", "", 0], [, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)", "", 0], [, "(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"], "(0$1)", "", 0], [, "(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"], "(0$1)", "", 0], [, "(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)", "", 0], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"], "(0$1)", "", 0], [, "([78]\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1", "", 0], [, "(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1", "", 0], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:8[059]|5)", "1(?:8[059]0|5)"], "$1", "", 0]], , [, , "NA", "NA"], , , [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456"], [, , "818\\d{6}", "\\d{9}", , , "818123456"], , , [, , "8[35-9]\\d{8}", "\\d{10}", , , "8501234567"]],
    IL: [, [, , "[17]\\d{6,9}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}", "\\d{4,10}"], [, , "[2-489]\\d{7}", "\\d{7,8}", , , "21234567"], [, , "5(?:[02347-9]\\d{2}|5(?:2[23]|3[34]|4[45]|5[5689]|6[67]|7[78]|8[89])|6[2-9]\\d)\\d{5}", "\\d{9}", , , "501234567"], [, , "1(?:80[019]\\d{3}|255)\\d{3}", "\\d{7,10}", , , "1800123456"], [, , "1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}", "\\d{8,10}", , , "1919123456"], [, , "1700\\d{6}", "\\d{10}", , , "1700123456"], [, , "NA", "NA"], [, , "7(?:2[23]\\d|3[237]\\d|47\\d|6(?:5\\d|8[068])|7\\d{2}|8(?:33|55|77|81))\\d{5}", "\\d{9}", , , "771234567"], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [[, "([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1", "", 0], [, "([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "", 0], [, "(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"], "$1", "", 0], [, "(1255)(\\d{3})", "$1-$2", ["125"], "$1", "", 0], [, "(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120"], "$1", "", 0], [, "(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121"], "$1", "", 0], [, "(1599)(\\d{6})", "$1-$2", ["15"], "$1", "", 0], [, "(\\d{4})", "*$1", ["[2-689]"], "$1", "", 0]], , [, , "NA", "NA"], , , [, , "1700\\d{6}|[2-689]\\d{3}", "\\d{4,10}", , , "1700123456"], [, , "[2-689]\\d{3}|1599\\d{6}", "\\d{4}(?:\\d{6})?", , , "1599123456"], , , [, , "NA", "NA"]],
    IM: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"], [, , "1624\\d{6}", "\\d{6,10}", , , "1624456789"], [, , "7[569]24\\d{6}", "\\d{10}", , , "7924123456"], [, , "808162\\d{4}", "\\d{10}", , , "8081624567"], [, , "(?:872299|90[0167]624)\\d{4}", "\\d{10}", , , "9016247890"], [, , "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}", "\\d{10}", , , "8456247890"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "IM", 44, "00", "0", " x", , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]],
    IN: [, [, , "1\\d{7,12}|[2-9]\\d{9,10}", "\\d{6,13}"], [, , "(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[126-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:[136][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}", "\\d{6,10}", , , "1123456789"], [, , "(?:7(?:0(?:2[2-9]|[3-6]\\d|7[01])|2(?:0[04-9]|5[09]|7[5-8]|9[389])|3(?:0[1-9]|[58]\\d|7[3679]|9[689])|4(?:0[1-9]|1[15-9]|[29][89]|39|8[389])|5(?:[034678]\\d|2[03-9]|5[017-9]|9[7-9])|6(?:0[0127]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)|7(?:0[2-9]|[1-79]\\d|8[1-9])|8(?:[0-7]\\d|9[013-9]))|8(?:0(?:[01589]\\d|6[67])|1(?:[02-589]\\d|1[0135-9]|7[0-79])|2(?:[236-9]\\d|5[1-9])|3(?:[0357-9]\\d|4[1-9])|[45]\\d{2}|6[02457-9]\\d|7[1-69]\\d|8(?:[0-26-9]\\d|44|5[2-9])|9(?:[035-9]\\d|2[2-9]|4[0-8]))|9\\d{3})\\d{6}", "\\d{10}", , , "9123456789"], [, , "1(?:600\\d{6}|80(?:0\\d{4,8}|3\\d{9}))", "\\d{8,13}", , , "1800123456"], [, , "186[12]\\d{9}", "\\d{13}", , , "1861123456789"], [, , "1860\\d{7}", "\\d{11}", , , "18603451234"], [, , "NA", "NA"], [, , "NA", "NA"], "IN", 91, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{6})", "$1 $2 $3", ["7(?:0[2-7]|2[0579]|3[057-9]|4[0-389]|6[0-35-9]|[57]|8[0-79])|8(?:0[015689]|1[0-57-9]|2[2356-9]|3[0-57-9]|[45]|6[02457-9]|7[1-69]|8[0124-9]|9[02-9])|9", "7(?:0(?:2[2-9]|[3-6]|7[01])|2(?:0[04-9]|5[09]|7[5-8]|9[389])|3(?:0[1-9]|[58]|7[3679]|9[689])|4(?:0[1-9]|1[15-9]|[29][89]|39|8[389])|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-27]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|8(?:[0-7]|9[013-9]))|8(?:0(?:[01589]|6[67])|1(?:[02-589]|1[0135-9]|7[0-79])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7[1-69]|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9"], "0$1", "", 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79|80[2-46]"], "0$1", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[126-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:[136][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)"], "0$1", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)", "7(?:12|2[14]|3[134]|4[47]|5(?:1|5[2-6])|[67]1|88)"], "0$1", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"], "0$1", "", 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"], "0$1", "", 1], [, "(1600)(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1", "", 1], [, "(1800)(\\d{4,5})", "$1 $2", ["180", "1800"], "$1", "", 1], [, "(18[06]0)(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], "$1", "", 1], [, "(140)(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1", "", 1], [, "(\\d{4})(\\d{3})(\\d{4})(\\d{2})", "$1 $2 $3 $4", ["18[06]", "18(?:03|6[12])"], "$1", "", 1]], , [, , "NA", "NA"], , , [, , "1(?:600\\d{6}|8(?:0(?:0\\d{4,8}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))", "\\d{8,13}", , , "1800123456"], [, , "140\\d{7}", "\\d{10}", , , "1409305260"], , , [, , "NA", "NA"]],
    IO: [, [, , "3\\d{6}", "\\d{7}"], [, , "37\\d{5}", "\\d{7}", , , "3709100"], [, , "38\\d{5}", "\\d{7}", , , "3801234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "IO", 246, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    IQ: [, [, , "[1-7]\\d{7,9}", "\\d{6,10}"], [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", "\\d{6,9}", , , "12345678"], [, , "7[3-9]\\d{8}", "\\d{10}", , , "7912345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "IQ", 964, "00", "0", , , "0", , , , [[, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1", "", 0], [, "([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1", "", 0], [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    IR: [, [, , "[14-8]\\d{6,9}|[23]\\d{4,9}|9(?:[1-4]\\d{8}|9\\d{2,8})", "\\d{4,10}"], [, , "1(?:[13-589][12]|[27][1-4])\\d{7}|2(?:1\\d{3,8}|3[12]\\d{7}|4(?:1\\d{4,7}|2\\d{7})|5(?:1\\d{3,7}|[2356]\\d{7})|6\\d{8}|7[34]\\d{7}|[89][12]\\d{7})|3(?:1(?:1\\d{4,7}|2\\d{7})|2[1-4]\\d{7}|3(?:[125]\\d{7}|4\\d{6,7})|4(?:1\\d{6,7}[24-9]\\d{7})|5(?:1\\d{4,7}|[23]\\d{7})|[6-9][12]\\d{7})|4(?:[135-9][12]\\d{7}|2[1-467]\\d{7}|4(?:1\\d{4,7}|[2-4]\\d{7}))|5(?:1(?:1\\d{4,7}|2\\d{7})|2[89]\\d{7}|3[1-5]\\d{7}|4(?:1\\d{4,7}|[2-8]\\d{7})|[5-7][12]\\d{7}|8[1245]\\d{7})|6(?:1(?:1\\d{6,7}|2\\d{7})|[347-9][12]\\d{7}|5(?:1\\d{7}|2\\d{6,7})|6[1-6]\\d{7})|7(?:[13589][12]|2[1289]|4[1-4]|6[1-6]|7[1-3])\\d{7}|8(?:[145][12]|3[124578]|6[1256]|7[1245])\\d{7}", "\\d{5,10}", , , "2123456789"], [, , "9[1-3]\\d{8}", "\\d{10}", , , "9123456789"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "(?:[2-6]0\\d|993)\\d{7}", "\\d{10}", , , "9932123456"], "IR", 98, "00", "0", , , "0", , , , [[, "(2[15])(\\d{3,5})", "$1 $2", ["2(?:1|5[0-47-9])"], "0$1", "", 0], [, "(2[15])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1|5[0-47-9])"], "0$1", "", 0], [, "(2\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2(?:[16]|5[0-47-9])"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]|2[02-57-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[13-9]|2[02-57-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{3})", "$1 $2", ["[13-9]|2[02-57-9]"], "0$1", "", 0]], , [, , "943\\d{7}", "\\d{10}", , , "9432123456"], , , [, , "NA", "NA"], [, , "9990\\d{0,6}", "\\d{4,10}", , , "9990123456"], , , [, , "NA", "NA"]],
    IS: [, [, , "[4-9]\\d{6}|38\\d{7}", "\\d{7,9}"], [, , "(?:4(?:[14][0-245]|2[0-7]|[37][0-8]|5[0-3568]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[013-7]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", "\\d{7}", , , "4101234"], [, , "38[589]\\d{6}|(?:6(?:1[0-8]|3[0-27-9]|4[0-27]|5[0-29]|[67][0-69]|9\\d)|7(?:5[057]|7\\d|8[0-3])|8(?:2[0-5]|[469]\\d|5[1-9]))\\d{4}", "\\d{7,9}", , , "6101234"], [, , "800\\d{4}", "\\d{7}", , , "8001234"], [, , "90\\d{5}", "\\d{7}", , , "9011234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "49[0-24-79]\\d{4}", "\\d{7}", , , "4921234"], "IS", 354, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"], "", "", 0], [, "(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "(?:6(?:2[0-8]|49|8\\d)|8(?:2[6-9]|[38]\\d|50|7[014-9])|95[48])\\d{4}", "\\d{7}", , , "6201234"]],
    IT: [, [, , "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", "\\d{6,11}"], [, , "0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "\\d{6,11}", , , "0212345678"], [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "\\d{9,11}", , , "3123456789"], [, , "80(?:0\\d{6}|3\\d{3})", "\\d{6,9}", , , "800123456"], [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "\\d{6,10}", , , "899123456"], [, , "84(?:[08]\\d{6}|[17]\\d{3})", "\\d{6,9}", , , "848123456"], [, , "1(?:78\\d|99)\\d{6}", "\\d{9,10}", , , "1781234567"], [, , "55\\d{8}", "\\d{10}", , , "5512345678"], "IT", 39, "00", , , , , , , , [[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"], "", "", 0], [, "(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"], "", "", 0], [, "(0[26])(\\d{4,6})", "$1 $2", ["0[26]"], "", "", 0], [, "(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"], "", "", 0], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"], "", "", 0], [, "(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"], "", "", 0], [, "(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"], "", "", 0], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"], "", "", 0], [, "(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"], "", "", 0], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"], "", "", 0]], , [, , "NA", "NA"], , , [, , "848\\d{6}", "\\d{9}", , , "848123456"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    JE: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"], [, , "1534\\d{6}", "\\d{6,10}", , , "1534456789"], [, , "7(?:509|7(?:00|97)|829|937)\\d{6}", "\\d{10}", , , "7797123456"], [, , "80(?:07(?:35|81)|8901)\\d{4}", "\\d{10}", , , "8007354567"], [, , "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "\\d{10}", , , "9018105678"], [, , "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}", "\\d{10}", , , "8447034567"], [, , "701511\\d{4}", "\\d{10}", , , "7015115678"], [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "JE", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], , , [, , "NA", "NA"], [, , "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]],
    JM: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8765123456"], [, , "876(?:2[1789]\\d|[348]\\d{2}|5(?:08|27|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", "\\d{10}", , , "8762101234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "JM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "876", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    JO: [, [, , "[235-9]\\d{7,8}", "\\d{7,9}"], [, , "(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][02]|9[0-2])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-2]|[57][02]|60)|53(?:0[0-2]|[13][02]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|300|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|9[09]))\\d{4}", "\\d{7,8}", , , "62001234"], [, , "7(?:55|7[25-9]|8[05-9]|9[015-9])\\d{6}", "\\d{9}", , , "790123456"], [, , "80\\d{6}", "\\d{8}", , , "80012345"], [, , "900\\d{5}", "\\d{8}", , , "90012345"], [, , "85\\d{6}", "\\d{8}", , , "85012345"], [, , "70\\d{7}", "\\d{9}", , , "700123456"], [, , "NA", "NA"], "JO", 962, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)", "", 0], [, "(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["70|8[0158]|9"], "0$1", "", 0]], , [, , "74(?:66|77)\\d{5}", "\\d{9}", , , "746612345"], , , [, , "NA", "NA"], [, , "8(?:10|8\\d)\\d{5}", "\\d{8}", , , "88101234"], , , [, , "NA", "NA"]],
    JP: [, [, , "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", "\\d{8,17}"], [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}", "\\d{9}", , , "312345678"], [, , "[7-9]0[1-9]\\d{7}", "\\d{10}", , , "7012345678"], [, , "120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", "\\d{8,17}", , , "120123456"], [, , "990\\d{6}", "\\d{9}", , , "990123456"], [, , "NA", "NA"], [, , "60\\d{7}", "\\d{9}", , , "601234567"], [, , "50[1-9]\\d{7}", "\\d{10}", , , "5012345678"], "JP", 81, "010", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1", "", 0], [, "(\\d{4})(\\d{4})", "$1-$2", ["0077"], "$1", "", 0], [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["0077"], "$1", "", 0], [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["0088"], "$1", "", 0], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["00(?:37|66)"], "$1", "", 0], [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["00(?:37|66)"], "$1", "", 0], [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["00(?:37|66)"], "$1", "", 0], [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["00(?:37|66)"], "$1", "", 0], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1", "", 0], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"], "0$1", "", 0], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1", "", 0]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1", "", 0], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1", "", 0], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"], "0$1", "", 0], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1", "", 0]], [, , "20\\d{8}", "\\d{10}", , , "2012345678"], , , [, , "00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", "\\d{8,17}", , , "00777012"], [, , "570\\d{6}", "\\d{9}", , , "570123456"], 1, , [, , "NA", "NA"]],
    KE: [, [, , "20\\d{6,7}|[4-9]\\d{6,9}", "\\d{7,10}"], [, , "20\\d{6,7}|4(?:[0136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|[26]\\d{7})", "\\d{7,9}", , , "202012345"], [, , "7(?:[0-3]\\d|5[0-6]|7[0-5]|8[0-25-9])\\d{6}", "\\d{9}", , , "712123456"], [, , "800[24-8]\\d{5,6}", "\\d{9,10}", , , "800223456"], [, , "900[02-9]\\d{5}", "\\d{9}", , , "900223456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "KE", 254, "000", "0", , , "0", , , , [[, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1", "", 0], [, "(\\d{3})(\\d{6,7})", "$1 $2", ["7"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KG: [, [, , "[235-8]\\d{8,9}", "\\d{5,10}"], [, , "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", "\\d{5,10}", , , "312123456"], [, , "(?:20[0-35]|5[124-7]\\d|7[07]\\d)\\d{6}", "\\d{9}", , , "700123456"], [, , "800\\d{6,7}", "\\d{9,10}", , , "800123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "KG", 996, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"], "0$1", "", 0], [, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KH: [, [, , "[1-9]\\d{7,9}", "\\d{6,10}"], [, , "(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}", "\\d{6,9}", , , "23756789"], [, , "(?:1(?:[013-9]|2\\d?)|3[18]\\d|6[016-9]|7(?:[07-9]|6\\d)|8(?:[013-79]|8\\d)|9(?:6\\d|7\\d?|[0-589]))\\d{6}", "\\d{8,9}", , , "91234567"], [, , "1800(?:1\\d|2[019])\\d{4}", "\\d{10}", , , "1800123456"], [, , "1900(?:1\\d|2[09])\\d{4}", "\\d{10}", , , "1900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "KH", 855, "00[14-9]", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1", "", 0], [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KI: [, [, , "[2458]\\d{4}|3\\d{4,7}|7\\d{7}", "\\d{5,8}"], [, , "(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}", "\\d{5}", , , "31234"], [, , "7(?:[24]\\d|3[1-9]|8[0-5])\\d{5}", "\\d{8}", , , "72012345"], [, , "NA", "NA"], [, , "3001\\d{4}", "\\d{5,8}", , , "30010000"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "KI", 686, "00", , , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KM: [, [, , "[379]\\d{6}", "\\d{7}"], [, , "7(?:6[0-37-9]|7[0-57-9])\\d{4}", "\\d{7}", , , "7712345"], [, , "3[234]\\d{5}", "\\d{7}", , , "3212345"], [, , "NA", "NA"], [, , "(?:39[01]|9[01]0)\\d{4}", "\\d{7}", , , "9001234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "KM", 269, "00", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KN: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8692361234"], [, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-6])\\d{4}", "\\d{10}", , , "8697652917"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "KN", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "869", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KP: [, [, , "1\\d{9}|[28]\\d{7}", "\\d{6,8}|\\d{10}"], [, , "2\\d{7}|85\\d{6}", "\\d{6,8}", , , "21234567"], [, , "19[123]\\d{7}", "\\d{10}", , , "1921234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "KP", 850, "00|99", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1", "", 0], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}", "\\d{8}", , , "23821234"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KR: [, [, , "[1-7]\\d{3,9}|8\\d{8}", "\\d{4,10}"], [, , "(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})", "\\d{4,10}", , , "22123456"], [, , "1[0-26-9]\\d{7,8}", "\\d{9,10}", , , "1023456789"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "60[2-9]\\d{6}", "\\d{9}", , , "602345678"], [, , "NA", "NA"], [, , "50\\d{8}", "\\d{10}", , , "5012345678"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], "KR", 82, "00(?:[124-68]|[37]\\d{2})", "0", , , "0(8[1-46-8]|85\\d{2})?", , , , [[, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["1(?:0|1[19]|[69]9|5[458])|[57]0", "1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"], "0$1", "0$CC-$1", 0], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1(?:[169][2-8]|[78]|5[1-4])|[68]0|[3-6][1-9][1-9]", "1(?:[169][2-8]|[78]|5(?:[1-3]|4[56]))|[68]0|[3-6][1-9][1-9]"], "0$1", "0$CC-$1", 0], [, "(\\d{3})(\\d)(\\d{4})", "$1-$2-$3", ["131", "1312"], "0$1", "0$CC-$1", 0], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["131", "131[13-9]"], "0$1", "0$CC-$1", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["13[2-9]"], "0$1", "0$CC-$1", 0], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3-$4", ["30"], "0$1", "0$CC-$1", 0], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1", 0], [, "(\\d)(\\d{3,4})", "$1-$2", ["21[0-46-9]"], "0$1", "0$CC-$1", 0], [, "(\\d{2})(\\d{3,4})", "$1-$2", ["[3-6][1-9]1", "[3-6][1-9]1(?:[0-46-9])"], "0$1", "0$CC-$1", 0], [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[46-9]|6[04678])", "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88))"], "$1", "0$CC-$1", 0]], , [, , "15\\d{7,8}", "\\d{9,10}", , , "1523456789"], , , [, , "NA", "NA"], [, , "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88))\\d{4}", "\\d{8}", , , "15441234"], , , [, , "NA", "NA"]],
    KW: [, [, , "[12569]\\d{6,7}", "\\d{7,8}"], [, , "(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}", "\\d{7,8}", , , "22345678"], [, , "(?:5(?:[05]\\d|1[0-6])|6(?:0[034679]|5[015-9]|6\\d|7[067]|9[0369])|9(?:0[09]|4[049]|55|6[069]|[79]\\d|8[089]))\\d{5}", "\\d{8}", , , "50012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "KW", 965, "00", , , , , , , , [[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[1269]"], "", "", 0], [, "(5[015]\\d)(\\d{5})", "$1 $2", ["5"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KY: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "3452221234"], [, , "345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[3-9]|3[689]))\\d{4}", "\\d{10}", , , "3453231234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}|345976\\d{4}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "KY", 1, "011", "1", , , "1", , , , , , [, , "345849\\d{4}", "\\d{10}", , , "3458491234"], , "345", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    KZ: [, [, , "(?:33\\d|7\\d{2}|80[09])\\d{7}", "\\d{10}"], [, , "33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[023]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[1-79]|4[0-35-9]|59)|4(?:2\\d|3[013-79]|4[0-8]|5[1-79])|5(?:2\\d|3[1-8]|4[1-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[237]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", "\\d{10}", , , "7123456789"], [, , "7(?:0[01257]|47|6[02-4]|7[15-8]|85)\\d{7}", "\\d{10}", , , "7710009998"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "809\\d{7}", "\\d{10}", , , "8091234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "751\\d{7}", "\\d{10}", , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , "NA", "NA"], , , [, , "751\\d{7}", "\\d{10}", , , "7511234567"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LA: [, [, , "[2-8]\\d{7,9}", "\\d{6,10}"], [, , "(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}", "\\d{6,9}", , , "21212862"], [, , "20(?:2[2389]|5[4-689]|7[6-8]|9[57-9])\\d{6}", "\\d{10}", , , "2023123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "LA", 856, "00", "0", , , "0", , , , [[, "(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"], "0$1", "", 0], [, "([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1", "", 0], [, "(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LB: [, [, , "[13-9]\\d{6,7}", "\\d{7,8}"], [, , "(?:[14-6]\\d{2}|7(?:[2-579]\\d|62|8[0-7])|[89][2-9]\\d)\\d{4}", "\\d{7}", , , "1123456"], [, , "(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|91))\\d{5}", "\\d{7,8}", , , "71123456"], [, , "NA", "NA"], [, , "9[01]\\d{6}", "\\d{8}", , , "90123456"], [, , "8[01]\\d{6}", "\\d{8}", , , "80123456"], [, , "NA", "NA"], [, , "NA", "NA"], "LB", 961, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-6]|7(?:[2-579]|62|8[0-7])|[89][2-9]"], "0$1", "", 0], [, "([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89][01]|7(?:[01]|6[013-9]|8[89]|91)"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", "\\d{7}(?:\\d{3})?", , , "7584305678"], [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}", "\\d{10}", , , "7582845678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "LC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "758", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LI: [, [, , "6\\d{8}|[23789]\\d{6}", "\\d{7,9}"], [, , "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}", "\\d{7}", , , "2345678"], [, , "6(?:51[01]|6(?:[01][0-4]|2[016-9]|88)|710)\\d{5}|7(?:36|4[25]|56|[7-9]\\d)\\d{4}", "\\d{7,9}", , , "661234567"], [, , "80(?:0(?:2[238]|79)|9\\d{2})\\d{2}", "\\d{7}", , , "8002222"], [, , "90(?:0(?:2[278]|79)|1(?:23|3[012])|6(?:4\\d|6[0126]))\\d{2}", "\\d{7}", , , "9002222"], [, , "NA", "NA"], [, , "701\\d{4}", "\\d{7}", , , "7011234"], [, , "NA", "NA"], "LI", 423, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[23]|7[3-57-9]|87"], "", "", 0], [, "(6\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], "", "", 0], [, "(6[567]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["6[567]"], "", "", 0], [, "(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"], "", "", 0], [, "([7-9]0\\d)(\\d{2})(\\d{2})", "$1 $2 $3", ["[7-9]0"], "", "", 0], [, "([89]0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]0"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "87(?:0[128]|7[0-4])\\d{3}", "\\d{7}", , , "8770123"], , , [, , "697(?:[35]6|4[25]|[7-9]\\d)\\d{4}", "\\d{9}", , , "697361234"]],
    LK: [, [, , "[1-9]\\d{8}", "\\d{7,9}"], [, , "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", "\\d{7,9}", , , "112345678"], [, , "7[125-8]\\d{7}", "\\d{9}", , , "712345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "LK", 94, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{1})(\\d{6})", "$1 $2 $3", ["[1-689]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LR: [, [, , "2\\d{7}|[37-9]\\d{8}|[45]\\d{6}", "\\d{7,9}"], [, , "2\\d{7}", "\\d{8}", , , "21234567"], [, , "(?:330\\d|4[67]|5\\d|77\\d{2}|88\\d{2}|994\\d)\\d{5}", "\\d{7,9}", , , "770123456"], [, , "NA", "NA"], [, , "90[03]\\d{6}", "\\d{9}", , , "900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "332(?:0[02]|5\\d)\\d{4}", "\\d{9}", , , "332001234"], "LR", 231, "00", "0", , , "0", , , , [[, "(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1", "", 0], [, "([79]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[79]"], "0$1", "", 0], [, "([4-6])(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LS: [, [, , "[2568]\\d{7}", "\\d{8}"], [, , "2\\d{7}", "\\d{8}", , , "22123456"], [, , "[56]\\d{7}", "\\d{8}", , , "50123456"], [, , "800[256]\\d{4}", "\\d{8}", , , "80021234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "LS", 266, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LT: [, [, , "[3-9]\\d{7}", "\\d{8}"], [, , "(?:3[1478]|4[124-6]|52)\\d{6}", "\\d{8}", , , "31234567"], [, , "6\\d{7}", "\\d{8}", , , "61234567"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "9(?:0[0239]|10)\\d{5}", "\\d{8}", , , "90012345"], [, , "808\\d{5}", "\\d{8}", , , "80812345"], [, , "700\\d{5}", "\\d{8}", , , "70012345"], [, , "NA", "NA"], "LT", 370, "00", "8", , , "[08]", , , , [[, "([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"], "(8-$1)", "", 1], [, "([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"], "(8-$1)", "", 1], [, "([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", "", 1], [, "(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", "", 1]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "70[67]\\d{5}", "\\d{8}", , , "70712345"], , , [, , "NA", "NA"]],
    LU: [, [, , "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", "\\d{4,11}"], [, , "(?:2(?:2\\d{1,2}|3[2-9]|[67]\\d|4[1-8]\\d?|5[1-5]\\d?|9[0-24-9]\\d?)|3(?:[059][05-9]|[13]\\d|[26][015-9]|4[0-26-9]|7[0-389]|8[08])\\d?|4\\d{2,3}|5(?:[01458]\\d|[27][0-69]|3[0-3]|[69][0-7])\\d?|7(?:1[019]|2[05-9]|3[05]|[45][07-9]|[679][089]|8[06-9])\\d?|8(?:0[2-9]|1[0-36-9]|3[3-9]|[469]9|[58][7-9]|7[89])\\d?|9(?:0[89]|2[0-49]|37|49|5[0-27-9]|7[7-9]|9[0-478])\\d?)\\d{1,7}", "\\d{4,11}", , , "27123456"], [, , "6(?:[269][18]|71)\\d{6}", "\\d{9}", , , "628123456"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "90[01]\\d{5}", "\\d{8}", , , "90012345"], [, , "801\\d{5}", "\\d{8}", , , "80112345"], [, , "70\\d{6}", "\\d{8}", , , "70123456"], [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", "\\d{4,10}", , , "20201234"], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)", , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], "", "$CC $1", 0], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], "", "$CC $1", 0], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"], "", "$CC $1", 0], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], "", "$CC $1", 0], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], "", "$CC $1", 0], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], "", "$CC $1", 0], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], "", "$CC $1", 0], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0[01]|70"], "", "$CC $1", 0], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], "", "$CC $1", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LV: [, [, , "[2689]\\d{7}", "\\d{8}"], [, , "6[3-8]\\d{6}", "\\d{8}", , , "63123456"], [, , "2\\d{7}", "\\d{8}", , , "21234567"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "90\\d{6}", "\\d{8}", , , "90123456"], [, , "81\\d{6}", "\\d{8}", , , "81123456"], [, , "NA", "NA"], [, , "NA", "NA"], "LV", 371, "00", , , , , , , , [[, "([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    LY: [, [, , "[25679]\\d{8}", "\\d{7,9}"], [, , "(?:2[1345]|5[1347]|6[123479]|71)\\d{7}", "\\d{7,9}", , , "212345678"], [, , "9[1-6]\\d{7}", "\\d{9}", , , "912345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "LY", 218, "00", "0", , , "0", , , , [[, "([25679]\\d)(\\d{7})", "$1-$2", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MA: [, [, , "[5689]\\d{8}", "\\d{9}"], [, , "5(?:2(?:(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-8]|8[235-7])\\d|9(?:0\\d|[89]0))|3(?:(?:[0-4]\\d|[57][2-9]|6[235-8]|9[3-9])\\d|8(?:0\\d|[89]0)))\\d{4}", "\\d{9}", , , "520123456"], [, , "6(?:0[0-8]|[12-7]\\d|8[01]|9[2457-9])\\d{6}", "\\d{9}", , , "650123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "89\\d{7}", "\\d{9}", , , "891234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MA", 212, "00", "0", , , "0", , , , [[, "([56]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|6"], "0$1", "", 0], [, "([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9])|892", "5(?:2(?:[2-48]|90)|3(?:[5-79]|80))|892"], "0$1", "", 0], [, "(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1", "", 0], [, "(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"], "0$1", "", 0]], , [, , "NA", "NA"], 1, , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MC: [, [, , "[4689]\\d{7,8}", "\\d{8,9}"], [, , "9[2-47-9]\\d{6}", "\\d{8}", , , "99123456"], [, , "6\\d{8}|4\\d{7}", "\\d{8,9}", , , "612345678"], [, , "(?:8\\d|90)\\d{6}", "\\d{8}", , , "90123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MC", 377, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1", "", 0], [, "(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "8\\d{7}", "\\d{8}"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MD: [, [, , "[235-9]\\d{7}", "\\d{8}"], [, , "(?:2(?:1[0569]|2\\d|3[015-7]|4[1-46-9]|5[0-24689]|6[2-589]|7[1-37]|9[1347-9])|5(?:33|5[257]))\\d{5}", "\\d{8}", , , "22212345"], [, , "(?:562|6(?:50|7[1-6]|[089]\\d)|7(?:67|7[457-9]|[89]\\d))\\d{5}", "\\d{8}", , , "65012345"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "90[056]\\d{5}", "\\d{8}", , , "90012345"], [, , "808\\d{5}", "\\d{8}", , , "80812345"], [, , "NA", "NA"], [, , "3[08]\\d{6}", "\\d{8}", , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1", "", 0], [, "([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-79]|[5-7]"], "0$1", "", 0], [, "([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "8(?:03|14)\\d{5}", "\\d{8}", , , "80312345"], , , [, , "NA", "NA"]],
    ME: [, [, , "[2-9]\\d{7,8}", "\\d{6,9}"], [, , "(?:20[2-8]|3(?:0[2-7]|1[35-7]|2[3567]|3[4-7])|4(?:0[237]|1[27])|5(?:0[47]|1[27]|2[378]))\\d{5}", "\\d{6,8}", , , "30234567"], [, , "6(?:32\\d|[89]\\d{2}|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d)))\\d{4}", "\\d{8,9}", , , "67622901"], [, , "800[28]\\d{4}", "\\d{8}", , , "80080002"], [, , "(?:88\\d|9(?:4[13-8]|5[16-8]))\\d{5}", "\\d{8}", , , "94515151"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "78[1-9]\\d{5}", "\\d{8}", , , "78108780"], "ME", 382, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[3789]", "[2-57-9]|6(?:[389]|7(?:[0-8]|9[3-9]))"], "0$1", "", 0], [, "(67)(9)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["679", "679[0-2]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "77\\d{6}", "\\d{8}", , , "77273012"], , , [, , "NA", "NA"]],
    MF: [, [, , "[56]\\d{8}", "\\d{9}"], [, , "590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}", "\\d{9}", , , "590271234"], [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MF", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MG: [, [, , "[23]\\d{8}", "\\d{7,9}"], [, , "20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}", "\\d{7,9}", , , "202123456"], [, , "3[2-49]\\d{7}", "\\d{9}", , , "321234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "22\\d{7}", "\\d{9}", , , "221234567"], "MG", 261, "00", "0", , , "0", , , , [[, "([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MH: [, [, , "[2-6]\\d{6}", "\\d{7}"], [, , "(?:247|528|625)\\d{4}", "\\d{7}", , , "2471234"], [, , "(?:235|329|45[56]|545)\\d{4}", "\\d{7}", , , "2351234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "635\\d{4}", "\\d{7}", , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [[, "(\\d{3})(\\d{4})", "$1-$2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MK: [, [, , "[2-578]\\d{7}", "\\d{8}"], [, , "(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}", "\\d{6,8}", , , "22212345"], [, , "7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}", "\\d{8}", , , "72345678"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "5[02-9]\\d{6}", "\\d{8}", , , "50012345"], [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", "\\d{8}", , , "80123456"], [, , "NA", "NA"], [, , "NA", "NA"], "MK", 389, "00", "0", , , "0", , , , [[, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1", "", 0], [, "([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1", "", 0], [, "([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    ML: [, [, , "[246-9]\\d{7}", "\\d{8}"], [, , "(?:2(?:0(?:2[0-589]|7\\d)|1(?:2[5-7]|[3-689]\\d|7[2-4689]))|44[239]\\d)\\d{4}", "\\d{8}", , , "20212345"], [, , "[67]\\d{7}|9[0-25-9]\\d{6}", "\\d{8}", , , "65012345"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "ML", 223, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"], "", "", 0], [, "(\\d{4})", "$1", ["67|74"], "", "", 0]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"], "", "", 0]], [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MM: [, [, , "[14578]\\d{5,7}|[26]\\d{5,8}|9(?:2\\d{0,2}|[58]|3\\d|4\\d{1,2}|6\\d?|[79]\\d{0,2})\\d{6}", "\\d{5,10}"], [, , "1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:[236-9]\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5}))|4(?:2[245-8]|[346][2-6]|5[3-5])\\d{4}|5(?:2(?:20?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9[24])\\d{4}|7(?:[04][24-8]|[15][2-7]|22|3[2-4])\\d{4}|8(?:1(?:2\\d?|[3-689])|2[2-8]|3[24]|4[24-7]|5[245]|6[23])\\d{4}", "\\d{5,9}", , , "1234567"], [, , "17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2})|3[136]\\d|4(?:0[0-4]\\d|[1379]\\d|[24][0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|7(?:3\\d|9\\d{2})|8\\d|9(?:1\\d|7\\d{2}|[089]))\\d{5}", "\\d{7,10}", , , "92123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "1333\\d{4}", "\\d{8}", , , "13331234"], "MM", 95, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[45]"], "0$1", "", 0], [, "(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"], "0$1", "", 0], [, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["67|81"], "0$1", "", 0], [, "(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"], "0$1", "", 0], [, "(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[13789])"], "0$1", "", 0], [, "(9)(4\\d{4})(\\d{4})", "$1 $2 $3", ["94[0245]"], "0$1", "", 0], [, "(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["925"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MN: [, [, , "[12]\\d{7,9}|[57-9]\\d{7}", "\\d{6,10}"], [, , "[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}", "\\d{6,10}", , , "50123456"], [, , "(?:8[689]|9[013-9])\\d{6}", "\\d{8}", , , "88123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "7[05-8]\\d{6}", "\\d{8}", , , "75123456"], "MN", 976, "001", "0", , , "0", , , , [[, "([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1", "", 0], [, "([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1", "", 0], [, "([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"], "0$1", "", 0], [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1", "", 0], [, "([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MO: [, [, , "[268]\\d{7}", "\\d{8}"], [, , "(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}", "\\d{8}", , , "28212345"], [, , "6[236]\\d{6}", "\\d{8}", , , "66123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MO", 853, "00", , , , , , , , [[, "([268]\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MP: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}", "\\d{7}(?:\\d{3})?", , , "6702345678"], [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}", "\\d{7}(?:\\d{3})?", , , "6702345678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "MP", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "670", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MQ: [, [, , "[56]\\d{8}", "\\d{9}"], [, , "596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}", "\\d{9}", , , "596301234"], [, , "696(?:[0-479]\\d|5[01]|8[0-689])\\d{4}", "\\d{9}", , , "696201234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MQ", 596, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MR: [, [, , "[2-48]\\d{7}", "\\d{8}"], [, , "25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}", "\\d{8}", , , "35123456"], [, , "(?:2(?:2\\d|70)|3(?:3\\d|6[1-36]|7[1-3])|4(?:4\\d|6[0457-9]|7[4-9]|8[01346-8]))\\d{5}", "\\d{8}", , , "22123456"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MR", 222, "00", , , , , , , , [[, "([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "664491\\d{4}", "\\d{7}(?:\\d{3})?", , , "6644912345"], [, , "66449[2-6]\\d{4}", "\\d{10}", , , "6644923456"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "MS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "664", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MT: [, [, , "[2357-9]\\d{7}", "\\d{8}"], [, , "2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}", "\\d{8}", , , "21001234"], [, , "(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}", "\\d{8}", , , "96961234"], [, , "800[3467]\\d{4}", "\\d{8}", , , "80071234"], [, , "5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168])|[12]\\d0[1-5])\\d{3}", "\\d{8}", , , "50037123"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "3550\\d{4}", "\\d{8}", , , "35501234"], "MT", 356, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "7117\\d{4}", "\\d{8}", , , "71171234"], , , [, , "NA", "NA"], [, , "501\\d{5}", "\\d{8}", , , "50112345"], , , [, , "NA", "NA"]],
    MU: [, [, , "[2-9]\\d{6,7}", "\\d{7,8}"], [, , "(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}", "\\d{7,8}", , , "2012345"], [, , "5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[256]\\d|7[15-8])|9[0-8]\\d)\\d{4}", "\\d{8}", , , "52512345"], [, , "80[012]\\d{4}", "\\d{7}", , , "8001234"], [, , "30\\d{5}", "\\d{7}", , , "3012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "3(?:20|9\\d)\\d{4}", "\\d{7}", , , "3201234"], "MU", 230, "0(?:0|[2-7]0|33)", , , , , , "020", , [[, "([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"], "", "", 0], [, "(5\\d{3})(\\d{4})", "$1 $2", ["5"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MV: [, [, , "[3467]\\d{6}|9(?:00\\d{7}|\\d{6})", "\\d{7,10}"], [, , "(?:3(?:0[01]|3[0-59])|6(?:[567][02468]|8[024689]|90))\\d{4}", "\\d{7}", , , "6701234"], [, , "(?:46[46]|7[3-9]\\d|9[16-9]\\d)\\d{4}", "\\d{7}", , , "7712345"], [, , "NA", "NA"], [, , "900\\d{7}", "\\d{10}", , , "9001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MV", 960, "0(?:0|19)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:[1-9]|0[1-9])"], "", "", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["900"], "", "", 0]], , [, , "781\\d{4}", "\\d{7}", , , "7812345"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MW: [, [, , "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", "\\d{7,9}"], [, , "(?:1[2-9]|21\\d{2})\\d{5}", "\\d{7,9}", , , "1234567"], [, , "(?:111|77\\d|88\\d|99\\d)\\d{6}", "\\d{9}", , , "991234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MW", 265, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "0$1", "", 0], [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1789]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MX: [, [, , "[1-9]\\d{9,10}", "\\d{7,11}"], [, , "(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", "\\d{7,10}", , , "2221234567"], [, , "1(?:(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})", "\\d{11}", , , "12221234567"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "900\\d{7}", "\\d{10}", , , "9001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MX", 52, "0[09]", "01", , , "0[12]|04[45](\\d{10})", "1$1", , , [[, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[12457-9]|5[89]|8[02-9]|9[0-35-9]"], "01 $1", "", 1], [, "(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", "", 1], [, "(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[12457-9]|5[89]|8[2-9]|9[1-35-9])"], "$1", "", 1]], [[, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[12457-9]|5[89]|8[02-9]|9[0-35-9]"], "01 $1", "", 1], [, "(1)([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|55|81)"]], [, "(1)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1(?:[2467]|3[12457-9]|5[89]|8[2-9]|9[1-35-9])"]]], [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    MY: [, [, , "[13-9]\\d{7,9}", "\\d{6,10}"], [, , "(?:3[2-9]\\d|[4-9][2-9])\\d{6}", "\\d{6,9}", , , "323456789"], [, , "1(?:1[1-3]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}", "\\d{9,10}", , , "123456789"], [, , "1[378]00\\d{6}", "\\d{10}", , , "1300123456"], [, , "1600\\d{6}", "\\d{10}", , , "1600123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "154\\d{7}", "\\d{10}", , , "1541234567"], "MY", 60, "00", "0", , , "0", , , , [[, "([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1", "", 0], [, "(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1", "", 0], [, "([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1", "", 0], [, "(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0"], "", "", 0], [, "(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1", "", 0], [, "(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    MZ: [, [, , "[28]\\d{7,8}", "\\d{8,9}"], [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", "\\d{8}", , , "21123456"], [, , "8[23467]\\d{7}", "\\d{9}", , , "821234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "MZ", 258, "00", , , , , , , , [[, "([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"], "", "", 0], [, "(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NA: [, [, , "[68]\\d{7,8}", "\\d{8,9}"], [, , "6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4[01]|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[29]|7[01]|81)|4(?:17|2(?:[012]|7?)|4(?:[06]|1\\d)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|69|7[01]))\\d{4}", "\\d{8,9}", , , "61221234"], [, , "(?:60|8[125])\\d{7}", "\\d{9}", , , "811234567"], [, , "NA", "NA"], [, , "8701\\d{5}", "\\d{9}", , , "870123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "8(?:3\\d{2}|86)\\d{5}", "\\d{8,9}", , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [[, "(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1235]"], "0$1", "", 0], [, "(6\\d)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["6"], "0$1", "", 0], [, "(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1", "", 0], [, "(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NC: [, [, , "[2-57-9]\\d{5}", "\\d{6}"], [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", "\\d{6}", , , "201234"], [, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", "\\d{6}", , , "751234"], [, , "NA", "NA"], [, , "36\\d{4}", "\\d{6}", , , "366711"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NC", 687, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NE: [, [, , "[0289]\\d{7}", "\\d{8}"], [, , "2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", "\\d{8}", , , "20201234"], [, , "(?:89|9\\d)\\d{6}", "\\d{8}", , , "93123456"], [, , "08\\d{6}", "\\d{8}", , , "08123456"], [, , "09\\d{6}", "\\d{8}", , , "09123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NE", 227, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[289]|09"], "", "", 0], [, "(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    NF: [, [, , "[13]\\d{5}", "\\d{5,6}"], [, , "(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}", "\\d{5,6}", , , "106609"], [, , "38\\d{4}", "\\d{5,6}", , , "381234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NF", 672, "00", , , , , , , , [[, "(\\d{2})(\\d{4})", "$1 $2", ["1"], "", "", 0], [, "(\\d)(\\d{5})", "$1 $2", ["3"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NG: [, [, , "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", "\\d{5,14}"], [, , "[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}", "\\d{5,9}", , , "12345678"], [, , "(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[13-9]\\d|2[1-9])|8(?:0[2-9]|1\\d)\\d|90[239]\\d)\\d{6}", "\\d{8,10}", , , "8021234567"], [, , "800\\d{7,11}", "\\d{10,14}", , , "80017591759"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NG", 234, "009", "0", , , "0", , , , [[, "([129])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[129]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[239]"], "0$1", "", 0], [, "([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"], "0$1", "", 0], [, "([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"], "0$1", "", 0], [, "(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "700\\d{7,11}", "\\d{10,14}", , , "7001234567"], , , [, , "NA", "NA"]],
    NI: [, [, , "[12578]\\d{7}", "\\d{8}"], [, , "2\\d{7}", "\\d{8}", , , "21234567"], [, , "5(?:500\\d{4}|7\\d{6})|7[5-8]\\d{6}|8\\d{7}", "\\d{8}", , , "81234567"], [, , "1800\\d{4}", "\\d{8}", , , "18001234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NI", 505, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NL: [, [, , "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", "\\d{5,10}"], [, , "(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}", "\\d{9}", , , "101234567"], [, , "6[1-58]\\d{7}", "\\d{9}", , , "612345678"], [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234"], [, , "90[069]\\d{4,7}", "\\d{7,10}", , , "9061234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "85\\d{7}", "\\d{9}", , , "851234567"], "NL", 31, "00", "0", , , "0", , , , [[, "([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"], "0$1", "", 0], [, "([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1", "", 0], [, "(6)(\\d{8})", "$1 $2", ["6[0-57-9]"], "0$1", "", 0], [, "(66)(\\d{7})", "$1 $2", ["66"], "0$1", "", 0], [, "(14)(\\d{3,4})", "$1 $2", ["14"], "$1", "", 0], [, "([89]0\\d)(\\d{4,7})", "$1 $2", ["80|9"], "0$1", "", 0]], , [, , "66\\d{7}", "\\d{9}", , , "662345678"], , , [, , "14\\d{3,4}", "\\d{5,6}"], [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", "\\d{5,6}", , , "14020"], , , [, , "NA", "NA"]],
    NO: [, [, , "0\\d{4}|[2-9]\\d{7}", "\\d{5}(?:\\d{3})?"], [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "\\d{8}", , , "21234567"], [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", "\\d{8}", , , "41234567"], [, , "80[01]\\d{5}", "\\d{8}", , , "80012345"], [, , "82[09]\\d{5}", "\\d{8}", , , "82012345"], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234"], [, , "880\\d{5}", "\\d{8}", , , "88012345"], [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345"], "NO", 47, "00", , , , , , , , [[, "([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"], "", "", 0], [, "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"], "", "", 0]], , [, , "NA", "NA"], 1, , [, , "NA", "NA"], [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345"]],
    NP: [, [, , "[1-8]\\d{7}|9(?:[1-69]\\d{6}|7[2-6]\\d{5,7}|8\\d{8})", "\\d{6,10}"], [, , "(?:1[0124-6]|2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])\\d{6}", "\\d{6,8}", , , "14567890"], [, , "9(?:7[45]|8[01456])\\d{7}", "\\d{10}", , , "9841234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NP", 977, "00", "0", , , "0", , , , [[, "(1)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1", "", 0], [, "(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"], "0$1", "", 0], [, "(9\\d{2})(\\d{7})", "$1-$2", ["9(?:7[45]|8)"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NR: [, [, , "[458]\\d{6}", "\\d{7}"], [, , "(?:444|888)\\d{4}", "\\d{7}", , , "4441234"], [, , "55[5-9]\\d{4}", "\\d{7}", , , "5551234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NR", 674, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NU: [, [, , "[1-5]\\d{3}", "\\d{4}"], [, , "[34]\\d{3}", "\\d{4}", , , "4002"], [, , "[125]\\d{3}", "\\d{4}", , , "1234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NU", 683, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    NZ: [, [, , "6[235-9]\\d{6}|[2-57-9]\\d{7,10}", "\\d{7,11}"], [, , "(?:3[2-79]|[49][2-689]|6[235-9]|7[2-5789])\\d{6}|24099\\d{3}", "\\d{7,8}", , , "32345678"], [, , "2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})", "\\d{8,10}", , , "211234567"], [, , "508\\d{6,7}|80\\d{6,8}", "\\d{8,10}", , , "800123456"], [, , "90\\d{7,9}", "\\d{9,11}", , , "900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [[, "([34679])(\\d{3})(\\d{4})", "$1-$2 $3", ["[3467]|9[1-9]"], "0$1", "", 0], [, "(24099)(\\d{3})", "$1 $2", ["240", "2409", "24099"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|86"], "0$1", "", 0], [, "(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"], "0$1", "", 0]], , [, , "[28]6\\d{6,7}", "\\d{8,9}", , , "26123456"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    OM: [, [, , "(?:2[2-6]|5|9[1-9])\\d{6}|800\\d{5,6}", "\\d{7,9}"], [, , "2[2-6]\\d{6}", "\\d{8}", , , "23123456"], [, , "9[1-9]\\d{6}", "\\d{8}", , , "92123456"], [, , "8007\\d{4,5}|500\\d{4}", "\\d{7,9}", , , "80071234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "OM", 968, "00", , , , , , , , [[, "(2\\d)(\\d{6})", "$1 $2", ["2"], "", "", 0], [, "(9\\d{3})(\\d{4})", "$1 $2", ["9"], "", "", 0], [, "([58]00)(\\d{4,6})", "$1 $2", ["[58]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PA: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}"], [, , "(?:1(?:0[02-579]|19|2[37]|3[03]|4[479]|57|65|7[016-8]|8[58]|9[1349])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[14-7]|2[0-3]|3[03]|4[0457]|5[56]|6[068]|7[06-8]|8[089])|4(?:3[013-69]|4\\d|7[0-689])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[49]0|5[06-9]|7[0-24-7]|8[89])|8(?:[34]\\d|5[0-4]|8[02])|9(?:0[6-8]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}", "\\d{7}", , , "2001234"], [, , "(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[04-9])\\d{5}", "\\d{7,8}", , , "60012345"], [, , "80[09]\\d{4}", "\\d{7}", , , "8001234"], [, , "(?:779|8(?:2[235]|55|60|7[578]|86|95)|9(?:0[0-2]|81))\\d{4}", "\\d{7}", , , "8601234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "PA", 507, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"], "", "", 0], [, "(\\d{4})(\\d{4})", "$1-$2", ["6"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PE: [, [, , "[14-9]\\d{7,8}", "\\d{6,9}"], [, , "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", "\\d{6,8}", , , "11234567"], [, , "9\\d{8}", "\\d{9}", , , "912345678"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "805\\d{5}", "\\d{8}", , , "80512345"], [, , "801\\d{5}", "\\d{8}", , , "80112345"], [, , "80[24]\\d{5}", "\\d{8}", , , "80212345"], [, , "NA", "NA"], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [[, "(1)(\\d{7})", "$1 $2", ["1"], "(0$1)", "", 0], [, "([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"], "(0$1)", "", 0], [, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)", "", 0], [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PF: [, [, , "[2-79]\\d{5}|8\\d{5,7}", "\\d{6}(?:\\d{2})?"], [, , "(?:4(?:[02-9]\\d|1[02-9])|[5689]\\d{2})\\d{3}", "\\d{6}", , , "401234"], [, , "(?:[237]\\d{2}|411|89\\d{3})\\d{3}", "\\d{6}(?:\\d{2})?", , , "212345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "PF", 689, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["89"], "", "", 0], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "44\\d{4}", "\\d{6}", , , "441234"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PG: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}"], [, , "(?:3[0-2]\\d|4[25]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}", "\\d{7}", , , "3123456"], [, , "(?:20150|68\\d{2}|7(?:[0-369]\\d|75)\\d{2})\\d{3}", "\\d{7,8}", , , "6812345"], [, , "180\\d{4}", "\\d{7}", , , "1801234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "275\\d{4}", "\\d{7}", , , "2751234"], "PG", 675, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"], "", "", 0], [, "(\\d{4})(\\d{4})", "$1 $2", ["20|7"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PH: [, [, , "2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}", "\\d{5,13}"], [, , "2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})", "\\d{5,10}", , , "21234567"], [, , "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[236-9]|7[34-79]|89|9[4-9]))\\d{7}", "\\d{10}", , , "9051234567"], [, , "1800\\d{7,9}", "\\d{11,13}", , , "180012345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "PH", 63, "00", "0", , , "0", , , , [[, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)", "", 0], [, "(2)(\\d{5})", "$1 $2", ["2"], "(0$1)", "", 0], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)", "", 0], [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)", "", 0], [, "([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)", "", 0], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1", "", 0], [, "(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "", "", 0], [, "(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PK: [, [, , "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))", "\\d{6,12}"], [, , "(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}", "\\d{6,10}", , , "2123456789"], [, , "3(?:0\\d|[12][0-5]|3[1-7]|4[0-7]|55|64)\\d{7}", "\\d{10}", , , "3012345678"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "900\\d{5}", "\\d{8}", , , "90012345"], [, , "NA", "NA"], [, , "122\\d{6}", "\\d{9}", , , "122044444"], [, , "NA", "NA"], "PK", 92, "00", "0", , , "0", , , , [[, "(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"], "(0$1)", "", 0], [, "(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"], "(0$1)", "", 0], [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)", "", 0], [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"], "(0$1)", "", 0], [, "(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1", "", 0], [, "([15]\\d{3})(\\d{5,6})", "$1 $2", ["58[12]|1"], "(0$1)", "", 0], [, "(586\\d{2})(\\d{5})", "$1 $2", ["586"], "(0$1)", "", 0], [, "([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", "\\d{11,12}", , , "21111825888"], , , [, , "NA", "NA"]],
    PL: [, [, , "[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}", "\\d{6,9}"], [, , "(?:1[2-8]|2[2-59]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}", "\\d{6,9}", , , "123456789"], [, , "(?:5[0137]|6[069]|7[2389]|88)\\d{7}", "\\d{9}", , , "512345678"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "70\\d{7}", "\\d{9}", , , "701234567"], [, , "801\\d{6}", "\\d{9}", , , "801234567"], [, , "NA", "NA"], [, , "39\\d{7}", "\\d{9}", , , "391234567"], "PL", 48, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[124]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"], "", "", 0], [, "(\\d{2})(\\d{1})(\\d{4})", "$1 $2 $3", ["[12]2"], "", "", 0], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|5[0137]|6[0469]|7[02389]|8[08]"], "", "", 0], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"], "", "", 0], [, "(\\d{3})(\\d{3})", "$1 $2", ["64"], "", "", 0]], , [, , "64\\d{4,7}", "\\d{6,9}", , , "641234567"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PM: [, [, , "[45]\\d{5}", "\\d{6}"], [, , "41\\d{4}", "\\d{6}", , , "411234"], [, , "55\\d{4}", "\\d{6}", , , "551234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "PM", 508, "00", "0", , , "0", , , , [[, "([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PR: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"], [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "PR", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "787|939", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PS: [, [, , "[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})", "\\d{4,10}"], [, , "(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}", "\\d{7,8}", , , "22234567"], [, , "5[69]\\d{7}", "\\d{9}", , , "599123456"], [, , "1800\\d{6}", "\\d{10}", , , "1800123456"], [, , "1(?:4|9\\d)\\d{2}", "\\d{4,5}", , , "19123"], [, , "1700\\d{6}", "\\d{10}", , , "1700123456"], [, , "NA", "NA"], [, , "NA", "NA"], "PS", 970, "00", "0", , , "0", , , , [[, "([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1", "", 0], [, "(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1", "", 0], [, "(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]"], "$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PT: [, [, , "[2-46-9]\\d{8}", "\\d{9}"], [, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", "\\d{9}", , , "212345678"], [, , "9(?:[136]\\d{2}|2[0-79]\\d|480)\\d{5}", "\\d{9}", , , "912345678"], [, , "80[02]\\d{6}", "\\d{9}", , , "800123456"], [, , "76(?:0[1-57]|1[2-47]|2[237])\\d{5}", "\\d{9}", , , "760123456"], [, , "80(?:8\\d|9[1579])\\d{5}", "\\d{9}", , , "808123456"], [, , "884[128]\\d{5}", "\\d{9}", , , "884123456"], [, , "30\\d{7}", "\\d{9}", , , "301234567"], "PT", 351, "00", , , , , , , , [[, "(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"], "", "", 0], [, "([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "70(?:7\\d|8[17])\\d{5}", "\\d{9}", , , "707123456"], , , [, , "NA", "NA"]],
    PW: [, [, , "[2-8]\\d{6}", "\\d{7}"], [, , "2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}", "\\d{7}", , , "2771234"], [, , "(?:6[234689]0|77[45789])\\d{4}", "\\d{7}", , , "6201234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "PW", 680, "01[12]", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    PY: [, [, , "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", "\\d{5,9}"], [, , "(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}", "\\d{5,9}", , , "212345678"], [, , "9(?:6[12]|[78][1-6]|9[1-5])\\d{6}", "\\d{9}", , , "961456789"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "8700[0-4]\\d{4}", "\\d{9}", , , "870012345"], "PY", 595, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{5,7})", "$1 $2", ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"], "($1)", "", 0], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1", "", 0], [, "(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8700"], "", "", 0], [, "(\\d{3})(\\d{4,6})", "$1 $2", ["[2-8][1-9]"], "($1)", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "[2-9]0\\d{4,7}", "\\d{6,9}", , , "201234567"], , , [, , "NA", "NA"]],
    QA: [, [, , "[2-8]\\d{6,7}", "\\d{7,8}"], [, , "4[04]\\d{6}", "\\d{7,8}", , , "44123456"], [, , "[3567]\\d{7}", "\\d{7,8}", , , "33123456"], [, , "800\\d{4}", "\\d{7,8}", , , "8001234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "QA", 974, "00", , , , , , , , [[, "([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"], "", "", 0], [, "([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"], "", "", 0]], , [, , "2(?:[12]\\d|61)\\d{4}", "\\d{7}", , , "2123456"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    RE: [, [, , "[268]\\d{8}", "\\d{9}"], [, , "262\\d{6}", "\\d{9}", , , "262161234"], [, , "6(?:9[23]|47)\\d{6}", "\\d{9}", , , "692123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"], [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"], [, , "NA", "NA"], [, , "NA", "NA"], "RE", 262, "00", "0", , , "0", , , , [[, "([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]], , [, , "NA", "NA"], 1, "262|6[49]|8", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    RO: [, [, , "2\\d{5,8}|[37-9]\\d{8}", "\\d{6,9}"], [, , "2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3[13-6]\\d{7}", "\\d{6,9}", , , "211234567"], [, , "7(?:000|[1-8]\\d{2}|99\\d)\\d{5}", "\\d{9}", , , "712345678"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "90[036]\\d{6}", "\\d{9}", , , "900123456"], [, , "801\\d{6}", "\\d{9}", , , "801123456"], [, , "802\\d{6}", "\\d{9}", , , "802123456"], [, , "NA", "NA"], "RO", 40, "00", "0", " int ", , "0", , , , [[, "([237]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1", "", 0], [, "(21)(\\d{4})", "$1 $2", ["21"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"], "0$1", "", 0], [, "(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "37\\d{7}", "\\d{9}", , , "372123456"], , , [, , "NA", "NA"]],
    RS: [, [, , "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", "\\d{5,12}"], [, , "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}", "\\d{5,12}", , , "10234567"], [, , "6(?:[0-689]|7\\d)\\d{6,7}", "\\d{8,10}", , , "601234567"], [, , "800\\d{3,9}", "\\d{6,12}", , , "80012345"], [, , "(?:90[0169]|78\\d)\\d{3,7}", "\\d{6,12}", , , "90012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "RS", 381, "00", "0", , , "0", , , , [[, "([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"], "0$1", "", 0], [, "([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"], "0$1", "", 0], [, "(6\\d)(\\d{6,8})", "$1 $2", ["6"], "0$1", "", 0], [, "([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"], "0$1", "", 0], [, "(7[26])(\\d{4,9})", "$1 $2", ["7[26]"], "0$1", "", 0], [, "(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "7[06]\\d{4,10}", "\\d{6,12}", , , "700123456"], , , [, , "NA", "NA"]],
    RU: [, [, , "[3489]\\d{9}", "\\d{10}"], [, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-7]|7[1-37-9]))\\d{7}", "\\d{10}", , , "3011234567"], [, , "9\\d{9}", "\\d{10}", , , "9123456789"], [, , "80[04]\\d{7}", "\\d{10}", , , "8001234567"], [, , "80[39]\\d{7}", "\\d{10}", , , "8091234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "RU", 7, "810", "8", , , "8", , "8~10", , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[1-79]"], "$1", "", 1], [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]"], "8 ($1)", "", 1], [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", "", 1]], [[, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]"], "8 ($1)", "", 1], [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", "", 1]], [, , "NA", "NA"], 1, , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    RW: [, [, , "[027-9]\\d{7,8}", "\\d{8,9}"], [, , "2[258]\\d{7}|06\\d{6}", "\\d{8,9}", , , "250123456"], [, , "7[238]\\d{7}", "\\d{9}", , , "720123456"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "900\\d{6}", "\\d{9}", , , "900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "RW", 250, "00", "0", , , "0", , , , [[, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "$1", "", 0], [, "([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1", "", 0], [, "(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    SA: [, [, , "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", "\\d{7,10}"], [, , "11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", "\\d{7,9}", , , "112345678"], [, , "(?:5[013-689]|811)\\d{7}", "\\d{9,10}", , , "512345678"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "NA", "NA"], [, , "92[05]\\d{6}", "\\d{9}", , , "920012345"], [, , "NA", "NA"], [, , "NA", "NA"], "SA", 966, "00", "0", , , "0", , , , [[, "([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"], "0$1", "", 0], [, "(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"], "0$1", "", 0], [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1", "", 0], [, "(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1", "", 0], [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "$1", "", 0], [, "(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SB: [, [, , "[1-9]\\d{4,6}", "\\d{5,7}"], [, , "(?:1[4-79]|[23]\\d|4[01]|5[03]|6[0-37])\\d{3}", "\\d{5}", , , "40123"], [, , "48\\d{3}|7(?:[46-8]\\d|5[025-9]|90)\\d{4}|8[4-8]\\d{5}|9(?:[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}", "\\d{5,7}", , , "7421234"], [, , "1[38]\\d{3}", "\\d{5}", , , "18123"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "5[12]\\d{3}", "\\d{5}", , , "51123"], "SB", 677, "0[01]", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[7-9]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SC: [, [, , "[24689]\\d{5,6}", "\\d{6,7}"], [, , "4[2-46]\\d{5}", "\\d{7}", , , "4217123"], [, , "2[5-8]\\d{5}", "\\d{7}", , , "2510123"], [, , "8000\\d{2}", "\\d{6}", , , "800000"], [, , "98\\d{4}", "\\d{6}", , , "981234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "64\\d{5}", "\\d{7}", , , "6412345"], "SC", 248, "0[0-2]", , , , , , "00", , [[, "(\\d{3})(\\d{3})", "$1 $2", ["[89]"], "", "", 0], [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SD: [, [, , "[19]\\d{8}", "\\d{9}"], [, , "1(?:[125]\\d|8[3567])\\d{6}", "\\d{9}", , , "121231234"], [, , "9[012569]\\d{7}", "\\d{9}", , , "911231234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SD", 249, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SE: [, [, , "[1-9]\\d{5,9}", "\\d{5,10}"], [, , "1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:0[1-9]\\d{4,6}|[246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:0[1-9]\\d{4,6}|3\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8[1-9]\\d{5,7}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})", "\\d{5,9}", , , "8123456"], [, , "7[0236]\\d{7}", "\\d{9}", , , "701234567"], [, , "20(?:0(?:0\\d{2}|[1-9](?:0\\d{1,4}|[1-9]\\d{4}))|1(?:0\\d{4}|[1-9]\\d{4,5})|[2-9]\\d{5})", "\\d{6,9}", , , "20123456"], [, , "9(?:00|39|44)(?:1(?:[0-26]\\d{5}|[3-57-9]\\d{2})|2(?:[0-2]\\d{5}|[3-9]\\d{2})|3(?:[0139]\\d{5}|[24-8]\\d{2})|4(?:[045]\\d{5}|[1-36-9]\\d{2})|5(?:5\\d{5}|[0-46-9]\\d{2})|6(?:[679]\\d{5}|[0-58]\\d{2})|7(?:[078]\\d{5}|[1-69]\\d{2})|8(?:[578]\\d{5}|[0-469]\\d{2}))", "\\d{7}(?:\\d{3})?", , , "9001234567"], [, , "77(?:0(?:0\\d{2}|[1-9](?:0\\d|[1-9]\\d{4}))|[1-6][1-9]\\d{5})", "\\d{6}(?:\\d{3})?", , , "771234567"], [, , "75[1-8]\\d{6}", "\\d{9}", , , "751234567"], [, , "NA", "NA"], "SE", 46, "00", "0", , , "0", , , , [[, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", "", 0], [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], "0$1", "", 0], [, "([1-69]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["1[13689]|2[136]|3[1356]|4[0246]|54|6[03]|90"], "0$1", "", 0], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1", "", 0], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1", "", 0], [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1", "", 0], [, "(77)(\\d{2})(\\d{2})", "$1-$2$3", ["7"], "0$1", "", 0], [, "(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", "", 0], [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], "0$1", "", 0], [, "(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], "0$1", "", 0]], [[, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]], [, "([1-69]\\d)(\\d{3})(\\d{2})", "$1 $2 $3", ["1[13689]|2[136]|3[1356]|4[0246]|54|6[03]|90"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"]], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"]], [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]], [, "(77)(\\d{2})(\\d{2})", "$1 $2 $3", ["7"]], [, "(20)(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]], [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9[034]"]], [, "(9[034]\\d)(\\d{4})", "$1 $2", ["9[034]"]]], [, , "74[02-9]\\d{6}", "\\d{9}", , , "740123456"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SG: [, [, , "[36]\\d{7}|[17-9]\\d{7,10}", "\\d{8,11}"], [, , "6[1-9]\\d{6}", "\\d{8}", , , "61234567"], [, , "(?:8[1-7]|9[0-8])\\d{6}", "\\d{8}", , , "81234567"], [, , "1?800\\d{7}", "\\d{10,11}", , , "18001234567"], [, , "1900\\d{7}", "\\d{11}", , , "19001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "3[12]\\d{6}", "\\d{8}", , , "31234567"], "SG", 65, "0[0-3]\\d", , , , , , , , [[, "([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"], "", "", 0], [, "(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"], "", "", 0], [, "(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["70"], "", "", 0], [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "7000\\d{7}", "\\d{11}", , , "70001234567"], , , [, , "NA", "NA"]],
    SH: [, [, , "[2-79]\\d{3,4}", "\\d{4,5}"], [, , "2(?:[0-57-9]\\d|6[4-9])\\d{2}|(?:[2-46]\\d|7[01])\\d{2}", "\\d{4,5}", , , "2158"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "(?:[59]\\d|7[2-9])\\d{2}", "\\d{4,5}", , , "5012"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SH", 290, "00", , , , , , , , , , [, , "NA", "NA"], 1, , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SI: [, [, , "[1-7]\\d{6,7}|[89]\\d{4,7}", "\\d{5,8}"], [, , "(?:1\\d|[25][2-8]|3[4-8]|4[24-8]|7[3-8])\\d{6}", "\\d{7,8}", , , "11234567"], [, , "(?:[37][01]|4[0139]|51|6[48])\\d{6}", "\\d{8}", , , "31234567"], [, , "80\\d{4,6}", "\\d{6,8}", , , "80123456"], [, , "90\\d{4,6}|89[1-3]\\d{2,5}", "\\d{5,8}", , , "90123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "(?:59|8[1-3])\\d{6}", "\\d{8}", , , "59012345"], "SI", 386, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|3[4-8]|4[24-8]|5[2-8]|7[3-8]"], "(0$1)", "", 0], [, "([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1", "", 0], [, "([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"], "0$1", "", 0], [, "([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SJ: [, [, , "0\\d{4}|[4789]\\d{7}", "\\d{5}(?:\\d{3})?"], [, , "79\\d{6}", "\\d{8}", , , "79123456"], [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", "\\d{8}", , , "41234567"], [, , "80[01]\\d{5}", "\\d{8}", , , "80012345"], [, , "82[09]\\d{5}", "\\d{8}", , , "82012345"], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234"], [, , "880\\d{5}", "\\d{8}", , , "88012345"], [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345"], "SJ", 47, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345"]],
    SK: [, [, , "[2-689]\\d{8}", "\\d{9}"], [, , "[2-5]\\d{8}", "\\d{9}", , , "212345678"], [, , "9(?:0[1-8]|1[0-24-9]|4[0489])\\d{6}", "\\d{9}", , , "912123456"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "9(?:[78]\\d{7}|00\\d{6})", "\\d{9}", , , "900123456"], [, , "8[5-9]\\d{7}", "\\d{9}", , , "850123456"], [, , "NA", "NA"], [, , "6(?:5[0-4]|9[0-6])\\d{6}", "\\d{9}", , , "690123456"], "SK", 421, "00", "0", , , "0", , , , [[, "(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1", "", 0], [, "([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1", "", 0], [, "([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "(?:8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}", "\\d{9}", , , "800123456"], [, , "96\\d{7}", "\\d{9}", , , "961234567"], , , [, , "NA", "NA"]],
    SL: [, [, , "[2-578]\\d{7}", "\\d{6,8}"], [, , "[235]2[2-4][2-9]\\d{4}", "\\d{6,8}", , , "22221234"], [, , "(?:2[15]|3[034]|4[04]|5[05]|7[6-9]|88)\\d{6}", "\\d{6,8}", , , "25123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SL", 232, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{6})", "$1 $2", , "(0$1)", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SM: [, [, , "[05-7]\\d{7,9}", "\\d{6,10}"], [, , "0549(?:8[0157-9]|9\\d)\\d{4}", "\\d{6,10}", , , "0549886377"], [, , "6[16]\\d{6}", "\\d{8}", , , "66661212"], [, , "NA", "NA"], [, , "7[178]\\d{6}", "\\d{8}", , , "71123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "5[158]\\d{6}", "\\d{8}", , , "58001110"], "SM", 378, "00", , , , "(?:0549)?([89]\\d{5})", "0549$1", , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"], "", "", 0], [, "(0549)(\\d{6})", "$1 $2", ["0"], "", "", 0], [, "(\\d{6})", "0549 $1", ["[89]"], "", "", 0]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"], "", "", 0], [, "(0549)(\\d{6})", "($1) $2", ["0"]], [, "(\\d{6})", "(0549) $1", ["[89]"]]], [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    SN: [, [, , "[3789]\\d{8}", "\\d{9}"], [, , "3(?:0(?:1[0-2]|80)|2(?:11|82)|3(?:8[1-9]|9[3-9])|90[1-5])\\d{5}", "\\d{9}", , , "301012345"], [, , "7(?:[067]\\d|8[0-26]|90)\\d{6}", "\\d{9}", , , "701234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "88[4689]\\d{6}", "\\d{9}", , , "884123456"], [, , "81[02468]\\d{6}", "\\d{9}", , , "810123456"], [, , "NA", "NA"], [, , "3392\\d{5}|93330\\d{4}", "\\d{9}", , , "933301234"], "SN", 221, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"], "", "", 0], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SO: [, [, , "[1-79]\\d{6,8}", "\\d{7,9}"], [, , "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}", "\\d{7}", , , "4012345"], [, , "(?:15\\d|2(?:4\\d|8)|6[137-9]?\\d{2}|7[1-9]\\d)\\d{5}", "\\d{7,9}", , , "71123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SO", 252, "00", "0", , , "0", , , , [[, "(\\d)(\\d{6})", "$1 $2", ["2[0-79]|[13-5]"], "", "", 0], [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"], "", "", 0], [, "(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1378]"], "", "", 0], [, "(69\\d)(\\d{6})", "$1 $2", ["69"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SR: [, [, , "[2-8]\\d{5,6}", "\\d{6,7}"], [, , "(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}", "\\d{6,7}", , , "211234"], [, , "(?:7(?:[1-357]\\d|4[0-5])|8[1-9]\\d)\\d{4}", "\\d{7}", , , "7412345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "56\\d{4}", "\\d{6}", , , "561234"], "SR", 597, "00", , , , , , , , [[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"], "", "", 0], [, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"], "", "", 0], [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SS: [, [, , "[19]\\d{8}", "\\d{9}"], [, , "18\\d{7}", "\\d{9}", , , "181234567"], [, , "(?:12|9[1257])\\d{7}", "\\d{9}", , , "977123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SS", 211, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    ST: [, [, , "[29]\\d{6}", "\\d{7}"], [, , "22\\d{5}", "\\d{7}", , , "2221234"], [, , "9[89]\\d{5}", "\\d{7}", , , "9812345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "ST", 239, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SV: [, [, , "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", "\\d{7,8}|\\d{11}"], [, , "2[1-6]\\d{6}", "\\d{8}", , , "21234567"], [, , "[67]\\d{7}", "\\d{8}", , , "70123456"], [, , "800\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "8001234"], [, , "900\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "9001234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SV", 503, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"], "", "", 0], [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"], "", "", 0], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SX: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7215425678"], [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", "\\d{10}", , , "7215205678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "SX", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "721", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SY: [, [, , "[1-59]\\d{7,8}", "\\d{6,9}"], [, , "(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}", "\\d{6,9}", , , "112345678"], [, , "9(?:22|[35][0-8]|4\\d|6[024-9]|88|9[0-489])\\d{6}", "\\d{9}", , , "944567890"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SY", 963, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", "", 1], [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", "", 1]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    SZ: [, [, , "[027]\\d{7}", "\\d{8}"], [, , "2(?:2(?:0[07]|[13]7|2[57])|3(?:0[34]|[1278]3|3[23]|[46][34])|(?:40[4-69]|67)|5(?:0[5-7]|1[6-9]|[23][78]|48|5[01]))\\d{4}", "\\d{8}", , , "22171234"], [, , "7[6-8]\\d{6}", "\\d{8}", , , "76123456"], [, , "0800\\d{4}", "\\d{8}", , , "08001234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "SZ", 268, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[027]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "0800\\d{4}", "\\d{8}", , , "08001234"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    TA: [, [, , "8\\d{3}", "\\d{4}"], [, , "8\\d{3}", "\\d{4}", , , "8999"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TA", 290, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TC: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "649(?:712|9(?:4\\d|50))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6497121234"], [, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-7])|4[34][1-3])\\d{4}", "\\d{10}", , , "6492311234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "64971[01]\\d{4}", "\\d{10}", , , "6497101234"], "TC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "649", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TD: [, [, , "[2679]\\d{7}", "\\d{8}"], [, , "22(?:[3789]0|5[0-5]|6[89])\\d{4}", "\\d{8}", , , "22501234"], [, , "(?:6[02368]\\d|77\\d|9(?:5[0-4]|9\\d))\\d{5}", "\\d{8}", , , "63012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TD", 235, "00|16", , , , , , "00", , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TG: [, [, , "[29]\\d{7}", "\\d{8}"], [, , "2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}", "\\d{8}", , , "22212345"], [, , "9[0-289]\\d{6}", "\\d{8}", , , "90112345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TG", 228, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TH: [, [, , "[2-9]\\d{7,8}|1\\d{3}(?:\\d{6})?", "\\d{4}|\\d{8,10}"], [, , "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", "\\d{8}", , , "21234567"], [, , "[89]\\d{8}", "\\d{9}", , , "812345678"], [, , "1800\\d{6}", "\\d{10}", , , "1800123456"], [, , "1900\\d{6}", "\\d{10}", , , "1900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "6[08]\\d{7}", "\\d{9}", , , "601234567"], "TH", 66, "00", "0", , , "0", , , , [[, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1", "", 0], [, "([3-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[3-9]"], "0$1", "", 0], [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "$1", "", 0]], , [, , "NA", "NA"], , , [, , "1\\d{3}", "\\d{4}", , , "1100"], [, , "1\\d{3}", "\\d{4}", , , "1100"], , , [, , "NA", "NA"]],
    TJ: [, [, , "[3-59]\\d{8}", "\\d{3,9}"], [, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", "\\d{3,9}", , , "372123456"], [, , "(?:50[15]|9[0-35-9]\\d)\\d{6}", "\\d{9}", , , "917123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TJ", 992, "810", "8", , , "8", , "8~10", , [[, "([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], "(8) $1", "", 1], [, "([459]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[48]|5|9(?:1[59]|[0235-9])"], "(8) $1", "", 1], [, "(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"], "(8) $1", "", 1], [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"], "(8) $1", "", 1]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TK: [, [, , "[2-9]\\d{3}", "\\d{4}"], [, , "[2-4]\\d{3}", "\\d{4}", , , "3010"], [, , "[5-9]\\d{3}", "\\d{4}", , , "5190"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TK", 690, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TL: [, [, , "[2-489]\\d{6}|7\\d{6,7}", "\\d{7,8}"], [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", "\\d{7}", , , "2112345"], [, , "7[3-8]\\d{6}", "\\d{8}", , , "77212345"], [, , "80\\d{5}", "\\d{7}", , , "8012345"], [, , "90\\d{5}", "\\d{7}", , , "9012345"], [, , "NA", "NA"], [, , "70\\d{5}", "\\d{7}", , , "7012345"], [, , "NA", "NA"], "TL", 670, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]"], "", "", 0], [, "(\\d{4})(\\d{4})", "$1 $2", ["7"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TM: [, [, , "[1-6]\\d{7}", "\\d{8}"], [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", "\\d{8}", , , "12345678"], [, , "6[2-8]\\d{6}", "\\d{8}", , , "66123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TM", 993, "810", "8", , , "8", , "8~10", , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)", "", 0], [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1", "", 0], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"], "(8 $1)", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TN: [, [, , "[2-57-9]\\d{7}", "\\d{8}"], [, , "3[012]\\d{6}|7\\d{7}|81200\\d{3}", "\\d{8}", , , "71234567"], [, , "(?:[259]\\d|4[0-2])\\d{6}", "\\d{8}", , , "20123456"], [, , "8010\\d{4}", "\\d{8}", , , "80101234"], [, , "88\\d{6}", "\\d{8}", , , "88123456"], [, , "8[12]10\\d{4}", "\\d{8}", , , "81101234"], [, , "NA", "NA"], [, , "NA", "NA"], "TN", 216, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TO: [, [, , "[02-8]\\d{4,6}", "\\d{5,7}"], [, , "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", "\\d{5}", , , "20123"], [, , "(?:7[578]|8[7-9])\\d{5}", "\\d{7}", , , "7715123"], [, , "0800\\d{3}", "\\d{7}", , , "0800222"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TO", 676, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"], "", "", 0], [, "(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[7-9]"], "", "", 0], [, "(\\d{4})(\\d{3})", "$1 $2", ["0"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    TR: [, [, , "[2-589]\\d{9}|444\\d{4}", "\\d{7,10}"], [, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", "\\d{10}", , , "2123456789"], [, , "5(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{7}", "\\d{10}", , , "5012345678"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "900\\d{7}", "\\d{10}", , , "9001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TR", 90, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[589]"], "0$1", "", 1], [, "(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"], "", "", 0]], , [, , "512\\d{7}", "\\d{10}", , , "5123456789"], , , [, , "444\\d{4}", "\\d{7}", , , "4441444"], [, , "444\\d{4}|850\\d{7}", "\\d{7,10}", , , "4441444"], , , [, , "NA", "NA"]],
    TT: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "868(?:2(?:01|2[1-5])|6(?:07|1[4-6]|2[1-9]|[3-6]\\d|7[0-79]|9[0-8])|82[12])\\d{4}", "\\d{7}(?:\\d{3})?", , , "8682211234"], [, , "868(?:2(?:8[5-9]|9\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:1[02-9]|[02-9]\\d))\\d{4}", "\\d{10}", , , "8682911234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "TT", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "868", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TV: [, [, , "[29]\\d{4,5}", "\\d{5,6}"], [, , "2[02-9]\\d{3}", "\\d{5}", , , "20123"], [, , "90\\d{4}", "\\d{6}", , , "901234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "TV", 688, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TW: [, [, , "[2-689]\\d{7,8}|7\\d{7,9}", "\\d{8,10}"], [, , "[2-8]\\d{7,8}", "\\d{8,9}", , , "21234567"], [, , "9\\d{8}", "\\d{9}", , , "912345678"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "900\\d{6}", "\\d{9}", , , "900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], "TW", 886, "0(?:0[25679]|19)", "0", "#", , "0", , , , [[, "([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[2-6]|[78][1-9]"], "0$1", "", 0], [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["80|9"], "0$1", "", 0], [, "(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    TZ: [, [, , "\\d{9}", "\\d{7,9}"], [, , "2[2-8]\\d{7}", "\\d{7,9}", , , "222345678"], [, , "(?:6[158]|7[1-9])\\d{7}", "\\d{9}", , , "612345678"], [, , "80[08]\\d{6}", "\\d{9}", , , "800123456"], [, , "90\\d{7}", "\\d{9}", , , "900123456"], [, , "8(?:40|6[01])\\d{6}", "\\d{9}", , , "840123456"], [, , "NA", "NA"], [, , "41\\d{7}", "\\d{9}", , , "412345678"], "TZ", 255, "00[056]", "0", , , "0", , , , [[, "([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1", "", 0], [, "([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1", "", 0], [, "([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    UA: [, [, , "[3-689]\\d{8}", "\\d{5,9}"], [, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", "\\d{5,9}", , , "311234567"], [, , "(?:39|50|6[36-8]|9[1-9])\\d{7}", "\\d{9}", , , "391234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "900\\d{6}", "\\d{9}", , , "900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "89\\d{7}", "\\d{9}", , , "891234567"], "UA", 380, "00", "0", , , "0", , "0~0", , [[, "([3-689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|9[1-9]"], "0$1", "", 0], [, "([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"], "0$1", "", 0], [, "([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])", "3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    UG: [, [, , "\\d{9}", "\\d{5,9}"], [, , "20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3[23]\\d|5[0-4]\\d|6[03]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}", "\\d{5,9}", , , "312345678"], [, , "7(?:0[0-7]|[15789]\\d|[23]0|[46][0-4])\\d{6}", "\\d{9}", , , "712345678"], [, , "800[123]\\d{5}", "\\d{9}", , , "800123456"], [, , "90[123]\\d{6}", "\\d{9}", , , "901123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "UG", 256, "00[057]", "0", , , "0", , , , [[, "(\\d{3})(\\d{6})", "$1 $2", ["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"], "0$1", "", 0], [, "(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"], "0$1", "", 0], [, "(2024)(\\d{5})", "$1 $2", ["2024"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    US: [, [, , "[2-9]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "(?:2(?:0[1-35-9]|1[02-9]|2[4589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[56])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[036]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[07]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[06-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[1678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2015555555"], [, , "(?:2(?:0[1-35-9]|1[02-9]|2[4589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[56])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[036]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[07]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[06-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[1678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2015555555"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "US", 1, "011", "1", , , "1", , , 1, [[, "(\\d{3})(\\d{4})", "$1-$2", , "", "", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", , "", "", 1]], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3"]], [, , "NA", "NA"], 1, , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    UY: [, [, , "[2489]\\d{6,7}", "\\d{7,8}"], [, , "2\\d{7}|4[2-7]\\d{6}", "\\d{7,8}", , , "21231234"], [, , "9[1-9]\\d{6}", "\\d{8}", , , "94231234"], [, , "80[05]\\d{4}", "\\d{7}", , , "8001234"], [, , "90[0-8]\\d{4}", "\\d{7}", , , "9001234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "UY", 598, "0(?:1[3-9]\\d|0)", "0", " int. ", , "0", , "00", , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"], "", "", 0], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1", "", 0], [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    UZ: [, [, , "[679]\\d{8}", "\\d{7,9}"], [, , "(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", "\\d{7,9}", , , "662345678"], [, , "6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}", "\\d{7,9}", , , "912345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "UZ", 998, "810", "8", , , "8", , "8~10", , [[, "([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "8 $1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    VA: [, [, , "06\\d{8}", "\\d{10}"], [, , "06698\\d{5}", "\\d{10}", , , "0669812345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "VA", 379, "00", , , , , , , , [[, "(06)(\\d{4})(\\d{4})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    VC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", "\\d{7}(?:\\d{3})?", , , "7842661234"], [, , "784(?:4(?:3[0-4]|5[45]|89|9[0-5])|5(?:2[6-9]|3[0-4]))\\d{4}", "\\d{10}", , , "7844301234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "VC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "784", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    VE: [, [, , "[24589]\\d{9}", "\\d{7,10}"], [, , "(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}", "\\d{7,10}", , , "2121234567"], [, , "4(?:1[24-8]|2[46])\\d{7}", "\\d{10}", , , "4121234567"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "900\\d{7}", "\\d{10}", , , "9001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "VE", 58, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{7})", "$1-$2", , "0$1", "$CC $1", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    VG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})", "\\d{7}(?:\\d{3})?", , , "2842291234"], [, , "284(?:(?:3(?:0[0-3]|4[0-367])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})", "\\d{10}", , , "2843001234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "VG", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "284", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    VI: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?"], [, , "340(?:2(?:01|2[067]|36|44|77)|3(?:32|44)|4(?:4[38]|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:[17]\\d|27)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"], [, , "340(?:2(?:01|2[067]|36|44|77)|3(?:32|44)|4(?:4[38]|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:[17]\\d|27)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA"], [, , "5(?:00|33|44|66|77)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA"], "VI", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "340", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    VN: [, [, , "[17]\\d{6,9}|[2-69]\\d{7,9}|8\\d{6,8}", "\\d{7,10}"], [, , "(?:2(?:[025-79]|1[0189]|[348][01])|3(?:[0136-9]|[25][01])|4\\d|5(?:[01][01]|[2-9])|6(?:[0-46-8]|5[01])|7(?:[02-79]|[18][01])|8[1-9])\\d{7}", "\\d{9,10}", , , "2101234567"], [, , "(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}", "\\d{9,10}", , , "912345678"], [, , "1800\\d{4,6}", "\\d{8,10}", , , "1800123456"], [, , "1900\\d{4,6}", "\\d{8,10}", , , "1900123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "VN", 84, "00", "0", , , "0", , , , [[, "([17]99)(\\d{4})", "$1 $2", ["[17]99"], "0$1", "", 1], [, "([48])(\\d{4})(\\d{4})", "$1 $2 $3", ["[48]"], "0$1", "", 1], [, "([235-7]\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"], "0$1", "", 1], [, "(80)(\\d{5})", "$1 $2", ["80"], "0$1", "", 1], [, "(69\\d)(\\d{4,5})", "$1 $2", ["69"], "0$1", "", 1], [, "([235-7]\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[1348]|3[25]|5[01]|65|7[18]"], "0$1", "", 1], [, "(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1", "", 1], [, "(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"], "0$1", "", 1], [, "(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0"], "$1", "", 1]], , [, , "NA", "NA"], , , [, , "[17]99\\d{4}|69\\d{5,6}", "\\d{7,8}", , , "1992000"], [, , "[17]99\\d{4}|69\\d{5,6}|80\\d{5}", "\\d{7,8}", , , "1992000"], , , [, , "NA", "NA"]],
    VU: [, [, , "[2-57-9]\\d{4,6}", "\\d{5,7}"], [, , "(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}", "\\d{5}", , , "22123"], [, , "(?:5(?:7[2-5]|[3-69]\\d)|7[013-7]\\d)\\d{4}", "\\d{7}", , , "5912345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "VU", 678, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "3[03]\\d{3}|900\\d{4}", "\\d{5,7}", , , "30123"], , , [, , "NA", "NA"]],
    WF: [, [, , "[5-7]\\d{5}", "\\d{6}"], [, , "(?:50|68|72)\\d{4}", "\\d{6}", , , "501234"], [, , "(?:50|68|72)\\d{4}", "\\d{6}", , , "501234"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "WF", 681, "00", , , , , , , 1, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    WS: [, [, , "[2-8]\\d{4,6}", "\\d{5,7}"], [, , "(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}", "\\d{5,7}", , , "22123"], [, , "(?:60|7[25-7]\\d)\\d{4}", "\\d{6,7}", , , "601234"], [, , "800\\d{3}", "\\d{6}", , , "800123"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "WS", 685, "0", , , , , , , , [[, "(8\\d{2})(\\d{3,4})", "$1 $2", ["8"], "", "", 0], [, "(7\\d)(\\d{5})", "$1 $2", ["7"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    YE: [, [, , "[1-7]\\d{6,8}", "\\d{6,9}"], [, , "(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", "\\d{6,8}", , , "1234567"], [, , "7[0137]\\d{7}", "\\d{9}", , , "712345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "YE", 967, "00", "0", , , "0", , , , [[, "([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1", "", 0], [, "(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    YT: [, [, , "[268]\\d{8}", "\\d{9}"], [, , "2696[0-4]\\d{4}", "\\d{9}", , , "269601234"], [, , "639\\d{6}", "\\d{9}", , , "639123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "YT", 262, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , "269|63", [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    ZA: [, [, , "[1-79]\\d{8}|8(?:[067]\\d{7}|[1-4]\\d{3,7})", "\\d{5,9}"], [, , "(?:1[0-8]|2[0-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", "\\d{9}", , , "101234567"], [, , "(?:6[0-5]|7[0-46-9])\\d{7}|8[1-4]\\d{3,7}", "\\d{5,9}", , , "711234567"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "86[2-9]\\d{6}|90\\d{7}", "\\d{9}", , , "862345678"], [, , "860\\d{6}", "\\d{9}", , , "860123456"], [, , "NA", "NA"], [, , "87\\d{7}", "\\d{9}", , , "871234567"], "ZA", 27, "00", "0", , , "0", , , , [[, "(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-47]|6[1-9])"], "0$1", "", 0], [, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1", "", 0], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "861\\d{6}", "\\d{9}", , , "861123456"], , , [, , "NA", "NA"]],
    ZM: [, [, , "[289]\\d{8}", "\\d{9}"], [, , "21[1-8]\\d{6}", "\\d{9}", , , "211234567"], [, , "9(?:5[05]|6\\d|7[13-9])\\d{6}", "\\d{9}", , , "955123456"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "ZM", 260, "00", "0", , , "0", , , , [[, "([29]\\d)(\\d{7})", "$1 $2", ["[29]"], "0$1", "", 0], [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    ZW: [, [, , "2(?:[012457-9]\\d{3,8}|6\\d{3,6})|[13-79]\\d{4,8}|8[06]\\d{8}", "\\d{3,10}"], [, , "(?:1[3-9]|2(?:0[45]|[16]|2[28]|[49]8?|58[23]|7[246]|8[1346-9])|3(?:08?|17?|3[78]|[2456]|7[1569]|8[379])|5(?:[07-9]|1[78]|483|5(?:7?|8))|6(?:0|28|37?|[45][68][78]|98?)|848)\\d{3,6}|(?:2(?:27|5|7[135789]|8[25])|3[39]|5[1-46]|6[126-8])\\d{4,6}|2(?:(?:0|70)\\d{5,6}|2[05]\\d{7})|(?:4\\d|9[2-8])\\d{4,7}", "\\d{3,10}", , , "1312345"], [, , "7[1378]\\d{7}|86(?:22|44)\\d{6}", "\\d{9,10}", , , "711234567"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "86(?:1[12]|30|55|77|8[367]|99)\\d{6}", "\\d{10}", , , "8686123456"], "ZW", 263, "00", "0", , , "0", , , , [[, "([49])(\\d{3})(\\d{2,5})", "$1 $2 $3", ["4|9[2-9]"], "0$1", "", 0], [, "([179]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[19]1|7"], "0$1", "", 0], [, "(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"], "0$1", "", 0], [, "([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:[278]|0[45]|[49]8)|3(?:08|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78])"], "0$1", "", 0], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:[278]|0[45]|48)|3(?:08|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78])|80"], "0$1", "", 0], [, "([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2(?:[1-469]|0[0-35-9]|[45][0-79])|3(?:0[0-79]|1[0-689]|[24-69]|3[0-69])|5(?:[02-46-9]|[15][0-69])|6(?:[0145]|[29][0-79]|3[0-689]|[68][0-69])"], "0$1", "", 0], [, "([1-356]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[3-9]|2(?:[1-469]|0[0-35-9]|[45][0-79])|3(?:0[0-79]|1[0-689]|[24-69]|3[0-69])|5(?:[02-46-9]|[15][0-69])|6(?:[0145]|[29][0-79]|3[0-689]|[68][0-69])"], "0$1", "", 0], [, "([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"], "0$1", "", 0], [, "([25]\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:25|54)8", "258[23]|5483"], "0$1", "", 0], [, "(8\\d{3})(\\d{6})", "$1 $2", ["86"], "0$1", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    800: [, [, , "\\d{8}", "\\d{8}", , , "12345678"], [, , "NA", "NA", , , "12345678"], [, , "NA", "NA", , , "12345678"], [, , "\\d{8}", "\\d{8}", , , "12345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "001", 800, "", , , , , , , 1, [[, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    808: [, [, , "\\d{8}", "\\d{8}", , , "12345678"], [, , "NA", "NA", , , "12345678"], [, , "NA", "NA", , , "12345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "\\d{8}", "\\d{8}", , , "12345678"], [, , "NA", "NA"], [, , "NA", "NA"], "001", 808, "", , , , , , , 1, [[, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]],
    870: [, [, , "[35-7]\\d{8}", "\\d{9}", , , "301234567"], [, , "NA", "NA", , , "301234567"], [, , "(?:[356]\\d|7[6-8])\\d{7}", "\\d{9}", , , "301234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "001", 870, "", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    878: [, [, , "1\\d{11}", "\\d{12}", , , "101234567890"], [, , "NA", "NA", , , "101234567890"], [, , "NA", "NA", , , "101234567890"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "10\\d{10}", "\\d{12}", , , "101234567890"], "001", 878, "", , , , , , , 1, [[, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    881: [, [, , "[67]\\d{8}", "\\d{9}", , , "612345678"], [, , "NA", "NA", , , "612345678"], [, , "[67]\\d{8}", "\\d{9}", , , "612345678"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "001", 881, "", , , , , , , , [[, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    882: [, [, , "[13]\\d{6,11}", "\\d{7,12}", , , "3451234567"], [, , "NA", "NA", , , "3451234567"], [, , "3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}", "\\d{7,10}", , , "3451234567"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|345\\d{7}", "\\d{7,12}", , , "3451234567"], "001", 882, "", , , , , , , , [[, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"], "", "", 0], [, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"], "", "", 0], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"], "", "", 0], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["348"], "", "", 0], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"], "", "", 0], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"], "", "", 0], [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["16"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "348[57]\\d{7}", "\\d{11}", , , "3451234567"]],
    883: [, [, , "51\\d{7}(?:\\d{3})?", "\\d{9}(?:\\d{3})?", , , "510012345"], [, , "NA", "NA", , , "510012345"], [, , "NA", "NA", , , "510012345"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})", "\\d{9}(?:\\d{3})?", , , "510012345"], "001", 883, "", , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"], "", "", 0], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"], "", "", 0], [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"], "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], , , [, , "NA", "NA"]],
    888: [, [, , "\\d{11}", "\\d{11}", , , "12345678901"], [, , "NA", "NA", , , "12345678901"], [, , "NA", "NA", , , "12345678901"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "001", 888, "", , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "\\d{11}", "\\d{11}", , , "12345678901"], 1, , [, , "NA", "NA"]],
    979: [, [, , "\\d{9}", "\\d{9}", , , "123456789"], [, , "NA", "NA", , , "123456789"], [, , "NA", "NA", , , "123456789"], [, , "NA", "NA"], [, , "\\d{9}", "\\d{9}", , , "123456789"], [, , "NA", "NA"], [, , "NA", "NA"], [, , "NA", "NA"], "001", 979, "", , , , , , , 1, [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", , "", "", 0]], , [, , "NA", "NA"], , , [, , "NA", "NA"], [, , "NA", "NA"], 1, , [, , "NA", "NA"]]
},
i18n.phonenumbers.PhoneNumberUtil = function() {
    this.regionToMetadataMap = {}
}
,
goog.addSingletonGetter(i18n.phonenumbers.PhoneNumberUtil),
i18n.phonenumbers.Error = {
    INVALID_COUNTRY_CODE: "Invalid country calling code",
    NOT_A_NUMBER: "The string supplied did not seem to be a phone number",
    TOO_SHORT_AFTER_IDD: "Phone number too short after IDD",
    TOO_SHORT_NSN: "The string supplied is too short to be a phone number",
    TOO_LONG: "The string supplied is too long to be a phone number"
},
i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ = 1,
i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ = 2,
i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_ = 17,
i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ = 3,
i18n.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_ = 250,
i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ = "ZZ",
i18n.phonenumbers.PhoneNumberUtil.COLOMBIA_MOBILE_TO_FIXED_LINE_PREFIX_ = "3",
i18n.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_ = {
    52: "1",
    54: "9"
},
i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN = "+",
i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ = "*",
i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ = ";ext=",
i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ = "tel:",
i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_ = ";phone-context=",
i18n.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_ = ";isub=",
i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "ï¼": "0",
    "ï¼‘": "1",
    "ï¼’": "2",
    "ï¼“": "3",
    "ï¼”": "4",
    "ï¼•": "5",
    "ï¼–": "6",
    "ï¼—": "7",
    "ï¼˜": "8",
    "ï¼™": "9",
    "Ù ": "0",
    "Ù¡": "1",
    "Ù¢": "2",
    "Ù£": "3",
    "Ù¤": "4",
    "Ù¥": "5",
    "Ù¦": "6",
    "Ù§": "7",
    "Ù¨": "8",
    "Ù©": "9",
    "Û°": "0",
    "Û±": "1",
    "Û²": "2",
    "Û³": "3",
    "Û´": "4",
    "Ûµ": "5",
    "Û¶": "6",
    "Û·": "7",
    "Û¸": "8",
    "Û¹": "9"
},
i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_ = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "+": i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN,
    "*": "*"
},
i18n.phonenumbers.PhoneNumberUtil.ALPHA_MAPPINGS_ = {
    A: "2",
    B: "2",
    C: "2",
    D: "3",
    E: "3",
    F: "3",
    G: "4",
    H: "4",
    I: "4",
    J: "5",
    K: "5",
    L: "5",
    M: "6",
    N: "6",
    O: "6",
    P: "7",
    Q: "7",
    R: "7",
    S: "7",
    T: "8",
    U: "8",
    V: "8",
    W: "9",
    X: "9",
    Y: "9",
    Z: "9"
},
i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_ = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "ï¼": "0",
    "ï¼‘": "1",
    "ï¼’": "2",
    "ï¼“": "3",
    "ï¼”": "4",
    "ï¼•": "5",
    "ï¼–": "6",
    "ï¼—": "7",
    "ï¼˜": "8",
    "ï¼™": "9",
    "Ù ": "0",
    "Ù¡": "1",
    "Ù¢": "2",
    "Ù£": "3",
    "Ù¤": "4",
    "Ù¥": "5",
    "Ù¦": "6",
    "Ù§": "7",
    "Ù¨": "8",
    "Ù©": "9",
    "Û°": "0",
    "Û±": "1",
    "Û²": "2",
    "Û³": "3",
    "Û´": "4",
    "Ûµ": "5",
    "Û¶": "6",
    "Û·": "7",
    "Û¸": "8",
    "Û¹": "9",
    A: "2",
    B: "2",
    C: "2",
    D: "3",
    E: "3",
    F: "3",
    G: "4",
    H: "4",
    I: "4",
    J: "5",
    K: "5",
    L: "5",
    M: "6",
    N: "6",
    O: "6",
    P: "7",
    Q: "7",
    R: "7",
    S: "7",
    T: "8",
    U: "8",
    V: "8",
    W: "9",
    X: "9",
    Y: "9",
    Z: "9"
},
i18n.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_ = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "N",
    O: "O",
    P: "P",
    Q: "Q",
    R: "R",
    S: "S",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
    "-": "-",
    "ï¼": "-",
    "â€": "-",
    "â€‘": "-",
    "â€’": "-",
    "â€“": "-",
    "â€”": "-",
    "â€•": "-",
    "âˆ’": "-",
    "/": "/",
    "ï¼": "/",
    " ": " ",
    "ã€€": " ",
    "â ": " ",
    ".": ".",
    "ï¼Ž": "."
},
i18n.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_ = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,
i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION = "-xâ€-â€•âˆ’ãƒ¼ï¼-ï¼ Â Â­â€‹â ã€€()ï¼ˆï¼‰ï¼»ï¼½.\\[\\]/~â“âˆ¼ï½ž",
i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ = "0-9ï¼-ï¼™Ù -Ù©Û°-Û¹",
i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ = "A-Za-z",
i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ = "+ï¼‹",
i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN = new RegExp("[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+"),
i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_ = new RegExp("^[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+"),
i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_ = "[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]+",
i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN = new RegExp("([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "])"),
i18n.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_ = new RegExp("[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]"),
i18n.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_ = /[\\\/] *x/,
i18n.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_ = new RegExp("[^" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + "#]+$"),
i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_ = /(?:.*?[A-Za-z]){3}.*/,
i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ = "[" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{" + i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ + "}",
i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ = "[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]*(?:[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + "]*[" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]){3,}[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]*",
i18n.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ = " ext. ",
i18n.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ = "([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{1,7})",
i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ = i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + i18n.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ + "|[ Â \\t,]*(?:e?xt(?:ensi(?:oÌ?|Ã³))?n?|ï½…?ï½˜ï½”ï½Ž?|[,xï½˜#ï¼ƒ~ï½ž]|int|anexo|ï½‰ï½Žï½”)[:\\.ï¼Ž]?[ Â \\t,-]*" + i18n.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ + "#?|[- ]+([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{1,5})#",
i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_ = new RegExp("(?:" + i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ + ")$","i"),
i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_ = new RegExp("^" + i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ + "$|^" + i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ + "(?:" + i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ + ")?$","i"),
i18n.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_ = /\D+/,
i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_ = /(\$\d)/,
i18n.phonenumbers.PhoneNumberUtil.NP_PATTERN_ = /\$NP/,
i18n.phonenumbers.PhoneNumberUtil.FG_PATTERN_ = /\$FG/,
i18n.phonenumbers.PhoneNumberUtil.CC_PATTERN_ = /\$CC/,
i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_ = /^\(?\$1\)?$/,
i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY = "001",
i18n.phonenumbers.PhoneNumberFormat = {
    E164: 0,
    INTERNATIONAL: 1,
    NATIONAL: 2,
    RFC3966: 3
},
i18n.phonenumbers.PhoneNumberType = {
    FIXED_LINE: 0,
    MOBILE: 1,
    FIXED_LINE_OR_MOBILE: 2,
    TOLL_FREE: 3,
    PREMIUM_RATE: 4,
    SHARED_COST: 5,
    VOIP: 6,
    PERSONAL_NUMBER: 7,
    PAGER: 8,
    UAN: 9,
    VOICEMAIL: 10,
    UNKNOWN: -1
},
i18n.phonenumbers.PhoneNumberUtil.MatchType = {
    NOT_A_NUMBER: 0,
    NO_MATCH: 1,
    SHORT_NSN_MATCH: 2,
    NSN_MATCH: 3,
    EXACT_MATCH: 4
},
i18n.phonenumbers.PhoneNumberUtil.ValidationResult = {
    IS_POSSIBLE: 0,
    INVALID_COUNTRY_CODE: 1,
    TOO_SHORT: 2,
    TOO_LONG: 3
},
i18n.phonenumbers.PhoneNumberUtil.extractPossibleNumber = function(e) {
    var t = e.search(i18n.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_);
    return t >= 0 ? (e = e.substring(t),
    e = e.replace(i18n.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_, ""),
    t = e.search(i18n.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_),
    t >= 0 && (e = e.substring(0, t))) : e = "",
    e
}
,
i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber = function(e) {
    return e.length < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ ? !1 : i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_, e)
}
,
i18n.phonenumbers.PhoneNumberUtil.normalize = function(e) {
    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, e) ? i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, !0) : i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(e)
}
,
i18n.phonenumbers.PhoneNumberUtil.normalizeSB_ = function(e) {
    var t = i18n.phonenumbers.PhoneNumberUtil.normalize(e.toString());
    e.clear(),
    e.append(t)
}
,
i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly = function(e) {
    return i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS, !0)
}
,
i18n.phonenumbers.PhoneNumberUtil.convertAlphaCharactersInNumber = function(e) {
    return i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, !1)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getLengthOfGeographicalAreaCode = function(e) {
    var t = this.getMetadataForRegion(this.getRegionCodeForNumber(e));
    return null != t && (t.hasNationalPrefix() || e.hasItalianLeadingZero()) && this.isNumberGeographical(e) ? this.getLengthOfNationalDestinationCode(e) : 0
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getLengthOfNationalDestinationCode = function(e) {
    var t;
    return e.hasExtension() ? (t = e.clone(),
    t.clearExtension()) : t = e,
    t = this.format(t, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL).split(i18n.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_),
    0 == t[0].length && t.shift(),
    2 >= t.length ? 0 : this.getNumberType(e) == i18n.phonenumbers.PhoneNumberType.MOBILE && (e = i18n.phonenumbers.PhoneNumberUtil.getCountryMobileToken(e.getCountryCodeOrDefault()),
    "" != e) ? t[2].length + e.length : t[1].length
}
,
i18n.phonenumbers.PhoneNumberUtil.getCountryMobileToken = function(e) {
    return i18n.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_[e] || ""
}
,
i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_ = function(e, t, n) {
    for (var o, r, d = new goog.string.StringBuffer, i = e.length, N = 0; i > N; ++N)
        o = e.charAt(N),
        r = t[o.toUpperCase()],
        null != r ? d.append(r) : n || d.append(o);
    return d.toString()
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formattingRuleHasFirstGroupOnly = function(e) {
    return 0 == e.length || i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_.test(e)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberGeographical = function(e) {
    return e = this.getNumberType(e),
    e == i18n.phonenumbers.PhoneNumberType.FIXED_LINE || e == i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isValidRegionCode_ = function(e) {
    return null != e && isNaN(e) && e.toUpperCase()in i18n.phonenumbers.metadata.countryToMetadata
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.hasValidCountryCallingCode_ = function(e) {
    return e in i18n.phonenumbers.metadata.countryCodeToRegionCodeMap
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.format = function(e, t) {
    if (0 == e.getNationalNumber() && e.hasRawInput()) {
        var n = e.getRawInputOrDefault();
        if (0 < n.length)
            return n
    }
    var n = e.getCountryCodeOrDefault()
      , o = this.getNationalSignificantNumber(e);
    if (t == i18n.phonenumbers.PhoneNumberFormat.E164)
        return this.prefixNumberWithCountryCallingCode_(n, i18n.phonenumbers.PhoneNumberFormat.E164, o, "");
    if (!this.hasValidCountryCallingCode_(n))
        return o;
    var r = this.getRegionCodeForCountryCode(n)
      , d = this.getMetadataForRegionOrCallingCode_(n, r)
      , r = this.maybeGetFormattedExtension_(e, d, t)
      , o = this.formatNsn_(o, d, t);
    return this.prefixNumberWithCountryCallingCode_(n, t, o, r)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatByPattern = function(e, t, n) {
    var o = e.getCountryCodeOrDefault()
      , r = this.getNationalSignificantNumber(e);
    if (!this.hasValidCountryCallingCode_(o))
        return r;
    var d = this.getRegionCodeForCountryCode(o)
      , d = this.getMetadataForRegionOrCallingCode_(o, d)
      , i = ""
      , i = this.chooseFormattingPatternForNumber_(n, r);
    if (null == i)
        i = r;
    else {
        if (n = i.clone(),
        i = i.getNationalPrefixFormattingRuleOrDefault(),
        0 < i.length) {
            var N = d.getNationalPrefixOrDefault();
            0 < N.length ? (i = i.replace(i18n.phonenumbers.PhoneNumberUtil.NP_PATTERN_, N).replace(i18n.phonenumbers.PhoneNumberUtil.FG_PATTERN_, "$1"),
            n.setNationalPrefixFormattingRule(i)) : n.clearNationalPrefixFormattingRule()
        }
        i = this.formatNsnUsingPattern_(r, n, t)
    }
    return e = this.maybeGetFormattedExtension_(e, d, t),
    this.prefixNumberWithCountryCallingCode_(o, t, i, e)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithCarrierCode = function(e, t) {
    var n = e.getCountryCodeOrDefault()
      , o = this.getNationalSignificantNumber(e);
    if (!this.hasValidCountryCallingCode_(n))
        return o;
    var r = this.getRegionCodeForCountryCode(n)
      , d = this.getMetadataForRegionOrCallingCode_(n, r)
      , r = this.maybeGetFormattedExtension_(e, d, i18n.phonenumbers.PhoneNumberFormat.NATIONAL)
      , o = this.formatNsn_(o, d, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, t);
    return this.prefixNumberWithCountryCallingCode_(n, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, o, r)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegionOrCallingCode_ = function(e, t) {
    return i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == t ? this.getMetadataForNonGeographicalRegion(e) : this.getMetadataForRegion(t)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithPreferredCarrierCode = function(e, t) {
    return this.formatNationalNumberWithCarrierCode(e, e.hasPreferredDomesticCarrierCode() ? e.getPreferredDomesticCarrierCodeOrDefault() : t)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatNumberForMobileDialing = function(e, t, n) {
    var o = e.getCountryCodeOrDefault();
    if (!this.hasValidCountryCallingCode_(o))
        return e.hasRawInput() ? e.getRawInputOrDefault() : "";
    var r = "";
    e = e.clone(),
    e.clearExtension();
    var d = this.getRegionCodeForCountryCode(o)
      , i = this.getNumberType(e)
      , N = i != i18n.phonenumbers.PhoneNumberType.UNKNOWN;
    if (t == d)
        r = i == i18n.phonenumbers.PhoneNumberType.FIXED_LINE || i == i18n.phonenumbers.PhoneNumberType.MOBILE || i == i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE,
        "CO" == d && i == i18n.phonenumbers.PhoneNumberType.FIXED_LINE ? r = this.formatNationalNumberWithCarrierCode(e, i18n.phonenumbers.PhoneNumberUtil.COLOMBIA_MOBILE_TO_FIXED_LINE_PREFIX_) : "BR" == d && r ? r = e.hasPreferredDomesticCarrierCode() ? this.formatNationalNumberWithPreferredCarrierCode(e, "") : "" : N && "HU" == d ? r = this.getNddPrefixForRegion(d, !0) + " " + this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL) : o == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ ? (t = this.getMetadataForRegion(t),
        r = this.canBeInternationallyDialled(e) && !this.isShorterThanPossibleNormalNumber_(t, this.getNationalSignificantNumber(e)) ? this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL)) : r = (d == i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY || ("MX" == d || "CL" == d) && r) && this.canBeInternationallyDialled(e) ? this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
    else if (N && this.canBeInternationallyDialled(e))
        return n ? this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, i18n.phonenumbers.PhoneNumberFormat.E164);
    return n ? r : i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(r, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryCallingNumber = function(e, t) {
    if (!this.isValidRegionCode_(t))
        return this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
    var n = e.getCountryCodeOrDefault()
      , o = this.getNationalSignificantNumber(e);
    if (!this.hasValidCountryCallingCode_(n))
        return o;
    if (n == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
        if (this.isNANPACountry(t))
            return n + " " + this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL)
    } else if (n == this.getCountryCodeForValidRegion_(t))
        return this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
    var r = this.getMetadataForRegion(t)
      , d = r.getInternationalPrefixOrDefault()
      , i = "";
    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_, d) ? i = d : r.hasPreferredInternationalPrefix() && (i = r.getPreferredInternationalPrefixOrDefault()),
    r = this.getRegionCodeForCountryCode(n),
    r = this.getMetadataForRegionOrCallingCode_(n, r),
    o = this.formatNsn_(o, r, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL),
    r = this.maybeGetFormattedExtension_(e, r, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL),
    0 < i.length ? i + " " + n + " " + o + r : this.prefixNumberWithCountryCallingCode_(n, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL, o, r)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatInOriginalFormat = function(e, t) {
    if (e.hasRawInput() && (this.hasUnexpectedItalianLeadingZero_(e) || !this.hasFormattingPatternForNumber_(e)))
        return e.getRawInputOrDefault();
    if (!e.hasCountryCodeSource())
        return this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
    var n;
    switch (e.getCountryCodeSource()) {
    case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN:
        n = this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
        break;
    case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD:
        n = this.formatOutOfCountryCallingNumber(e, t);
        break;
    case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN:
        n = this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL).substring(1);
        break;
    default:
        var o = this.getRegionCodeForCountryCode(e.getCountryCodeOrDefault())
          , r = this.getNddPrefixForRegion(o, !0);
        if (n = this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL),
        null == r || 0 == r.length)
            break;
        if (this.rawInputContainsNationalPrefix_(e.getRawInputOrDefault(), r, o))
            break;
        if (o = this.getMetadataForRegion(o),
        r = this.getNationalSignificantNumber(e),
        o = this.chooseFormattingPatternForNumber_(o.numberFormatArray(), r),
        null == o)
            break;
        var r = o.getNationalPrefixFormattingRuleOrDefault()
          , d = r.indexOf("$1");
        if (0 >= d)
            break;
        if (r = r.substring(0, d),
        r = i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(r),
        0 == r.length)
            break;
        n = o.clone(),
        n.clearNationalPrefixFormattingRule(),
        n = this.formatByPattern(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, [n])
    }
    return o = e.getRawInputOrDefault(),
    null != n && 0 < o.length && (r = i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(n, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0),
    d = i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(o, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0),
    r != d && (n = o)),
    n
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.rawInputContainsNationalPrefix_ = function(e, t, n) {
    if (e = i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(e),
    goog.string.startsWith(e, t))
        try {
            return this.isValidNumber(this.parse(e.substring(t.length), n))
        } catch (o) {}
    return !1
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.hasUnexpectedItalianLeadingZero_ = function(e) {
    return e.hasItalianLeadingZero() && !this.isLeadingZeroPossible(e.getCountryCodeOrDefault())
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.hasFormattingPatternForNumber_ = function(e) {
    var t = e.getCountryCodeOrDefault()
      , n = this.getRegionCodeForCountryCode(t)
      , t = this.getMetadataForRegionOrCallingCode_(t, n);
    return null == t ? !1 : (e = this.getNationalSignificantNumber(e),
    null != this.chooseFormattingPatternForNumber_(t.numberFormatArray(), e))
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryKeepingAlphaChars = function(e, t) {
    var n = e.getRawInputOrDefault();
    if (0 == n.length)
        return this.formatOutOfCountryCallingNumber(e, t);
    var o = e.getCountryCodeOrDefault();
    if (!this.hasValidCountryCallingCode_(o))
        return n;
    var n = i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(n, i18n.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_, !0)
      , r = this.getNationalSignificantNumber(e);
    if (3 < r.length) {
        var d = n.indexOf(r.substring(0, 3));
        -1 != d && (n = n.substring(d))
    }
    if (d = this.getMetadataForRegion(t),
    o == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
        if (this.isNANPACountry(t))
            return o + " " + n
    } else if (null != d && o == this.getCountryCodeForValidRegion_(t))
        return o = this.chooseFormattingPatternForNumber_(d.numberFormatArray(), r),
        null == o ? n : (o = o.clone(),
        o.setPattern("(\\d+)(.*)"),
        o.setFormat("$1$2"),
        this.formatNsnUsingPattern_(n, o, i18n.phonenumbers.PhoneNumberFormat.NATIONAL));
    return r = "",
    null != d && (r = d.getInternationalPrefixOrDefault(),
    r = i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_, r) ? r : d.getPreferredInternationalPrefixOrDefault()),
    d = this.getRegionCodeForCountryCode(o),
    d = this.getMetadataForRegionOrCallingCode_(o, d),
    d = this.maybeGetFormattedExtension_(e, d, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL),
    0 < r.length ? r + " " + o + " " + n + d : this.prefixNumberWithCountryCallingCode_(o, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL, n, d)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getNationalSignificantNumber = function(e) {
    var t = "" + e.getNationalNumber();
    return e.hasItalianLeadingZero() && e.getItalianLeadingZero() ? Array(e.getNumberOfLeadingZerosOrDefault() + 1).join("0") + t : t
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.prefixNumberWithCountryCallingCode_ = function(e, t, n, o) {
    switch (t) {
    case i18n.phonenumbers.PhoneNumberFormat.E164:
        return i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + n + o;
    case i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL:
        return i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + " " + n + o;
    case i18n.phonenumbers.PhoneNumberFormat.RFC3966:
        return i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ + i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + "-" + n + o;
    default:
        return n + o
    }
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatNsn_ = function(e, t, n, o) {
    return t = 0 == t.intlNumberFormatArray().length || n == i18n.phonenumbers.PhoneNumberFormat.NATIONAL ? t.numberFormatArray() : t.intlNumberFormatArray(),
    t = this.chooseFormattingPatternForNumber_(t, e),
    null == t ? e : this.formatNsnUsingPattern_(e, t, n, o)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.chooseFormattingPatternForNumber_ = function(e, t) {
    for (var n, o = e.length, r = 0; o > r; ++r) {
        n = e[r];
        var d = n.leadingDigitsPatternCount();
        if ((0 == d || 0 == t.search(n.getLeadingDigitsPattern(d - 1))) && (d = new RegExp(n.getPattern()),
        i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(d, t)))
            return n
    }
    return null
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.formatNsnUsingPattern_ = function(e, t, n, o) {
    var r = t.getFormatOrDefault()
      , d = new RegExp(t.getPattern())
      , i = t.getDomesticCarrierCodeFormattingRuleOrDefault()
      , N = "";
    return n == i18n.phonenumbers.PhoneNumberFormat.NATIONAL && null != o && 0 < o.length && 0 < i.length ? (t = i.replace(i18n.phonenumbers.PhoneNumberUtil.CC_PATTERN_, o),
    r = r.replace(i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, t),
    N = e.replace(d, r)) : (t = t.getNationalPrefixFormattingRuleOrDefault(),
    N = n == i18n.phonenumbers.PhoneNumberFormat.NATIONAL && null != t && 0 < t.length ? e.replace(d, r.replace(i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, t)) : e.replace(d, r)),
    n == i18n.phonenumbers.PhoneNumberFormat.RFC3966 && (N = N.replace(new RegExp("^" + i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_), ""),
    N = N.replace(new RegExp(i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_,"g"), "-")),
    N
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumber = function(e) {
    return this.getExampleNumberForType(e, i18n.phonenumbers.PhoneNumberType.FIXED_LINE)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForType = function(e, t) {
    if (!this.isValidRegionCode_(e))
        return null ;
    var n = this.getNumberDescByType_(this.getMetadataForRegion(e), t);
    try {
        if (n.hasExampleNumber())
            return this.parse(n.getExampleNumberOrDefault(), e)
    } catch (o) {}
    return null
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForNonGeoEntity = function(e) {
    var t = this.getMetadataForNonGeographicalRegion(e);
    if (null != t) {
        t = t.getGeneralDesc();
        try {
            if (t.hasExampleNumber())
                return this.parse("+" + e + t.getExampleNumber(), "ZZ")
        } catch (n) {}
    }
    return null
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.maybeGetFormattedExtension_ = function(e, t, n) {
    return e.hasExtension() && 0 != e.getExtension().length ? n == i18n.phonenumbers.PhoneNumberFormat.RFC3966 ? i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + e.getExtension() : t.hasPreferredExtnPrefix() ? t.getPreferredExtnPrefix() + e.getExtensionOrDefault() : i18n.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ + e.getExtensionOrDefault() : ""
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberDescByType_ = function(e, t) {
    switch (t) {
    case i18n.phonenumbers.PhoneNumberType.PREMIUM_RATE:
        return e.getPremiumRate();
    case i18n.phonenumbers.PhoneNumberType.TOLL_FREE:
        return e.getTollFree();
    case i18n.phonenumbers.PhoneNumberType.MOBILE:
        return e.getMobile();
    case i18n.phonenumbers.PhoneNumberType.FIXED_LINE:
    case i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE:
        return e.getFixedLine();
    case i18n.phonenumbers.PhoneNumberType.SHARED_COST:
        return e.getSharedCost();
    case i18n.phonenumbers.PhoneNumberType.VOIP:
        return e.getVoip();
    case i18n.phonenumbers.PhoneNumberType.PERSONAL_NUMBER:
        return e.getPersonalNumber();
    case i18n.phonenumbers.PhoneNumberType.PAGER:
        return e.getPager();
    case i18n.phonenumbers.PhoneNumberType.UAN:
        return e.getUan();
    case i18n.phonenumbers.PhoneNumberType.VOICEMAIL:
        return e.getVoicemail();
    default:
        return e.getGeneralDesc()
    }
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberType = function(e) {
    var t = this.getRegionCodeForNumber(e)
      , t = this.getMetadataForRegionOrCallingCode_(e.getCountryCodeOrDefault(), t);
    return null == t ? i18n.phonenumbers.PhoneNumberType.UNKNOWN : (e = this.getNationalSignificantNumber(e),
    this.getNumberTypeHelper_(e, t))
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberTypeHelper_ = function(e, t) {
    var n = t.getGeneralDesc();
    return n.hasNationalNumberPattern() && this.isNumberMatchingDesc_(e, n) ? this.isNumberMatchingDesc_(e, t.getPremiumRate()) ? i18n.phonenumbers.PhoneNumberType.PREMIUM_RATE : this.isNumberMatchingDesc_(e, t.getTollFree()) ? i18n.phonenumbers.PhoneNumberType.TOLL_FREE : this.isNumberMatchingDesc_(e, t.getSharedCost()) ? i18n.phonenumbers.PhoneNumberType.SHARED_COST : this.isNumberMatchingDesc_(e, t.getVoip()) ? i18n.phonenumbers.PhoneNumberType.VOIP : this.isNumberMatchingDesc_(e, t.getPersonalNumber()) ? i18n.phonenumbers.PhoneNumberType.PERSONAL_NUMBER : this.isNumberMatchingDesc_(e, t.getPager()) ? i18n.phonenumbers.PhoneNumberType.PAGER : this.isNumberMatchingDesc_(e, t.getUan()) ? i18n.phonenumbers.PhoneNumberType.UAN : this.isNumberMatchingDesc_(e, t.getVoicemail()) ? i18n.phonenumbers.PhoneNumberType.VOICEMAIL : this.isNumberMatchingDesc_(e, t.getFixedLine()) ? t.getSameMobileAndFixedLinePattern() || this.isNumberMatchingDesc_(e, t.getMobile()) ? i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE : i18n.phonenumbers.PhoneNumberType.FIXED_LINE : !t.getSameMobileAndFixedLinePattern() && this.isNumberMatchingDesc_(e, t.getMobile()) ? i18n.phonenumbers.PhoneNumberType.MOBILE : i18n.phonenumbers.PhoneNumberType.UNKNOWN : i18n.phonenumbers.PhoneNumberType.UNKNOWN
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegion = function(e) {
    if (null == e)
        return null ;
    e = e.toUpperCase();
    var t = this.regionToMetadataMap[e];
    if (null == t) {
        var t = new goog.proto2.PbLiteSerializer
          , n = i18n.phonenumbers.metadata.countryToMetadata[e];
        if (null == n)
            return null ;
        t = t.deserialize(i18n.phonenumbers.PhoneMetadata.getDescriptor(), n),
        this.regionToMetadataMap[e] = t
    }
    return t
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForNonGeographicalRegion = function(e) {
    return this.getMetadataForRegion("" + e)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberMatchingDesc_ = function(e, t) {
    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(t.getPossibleNumberPatternOrDefault(), e) && i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(t.getNationalNumberPatternOrDefault(), e)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isValidNumber = function(e) {
    var t = this.getRegionCodeForNumber(e);
    return this.isValidNumberForRegion(e, t)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isValidNumberForRegion = function(e, t) {
    var n = e.getCountryCodeOrDefault()
      , o = this.getMetadataForRegionOrCallingCode_(n, t);
    if (null == o || i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY != t && n != this.getCountryCodeForValidRegion_(t))
        return !1;
    var n = o.getGeneralDesc()
      , r = this.getNationalSignificantNumber(e);
    return n.hasNationalNumberPattern() ? this.getNumberTypeHelper_(r, o) != i18n.phonenumbers.PhoneNumberType.UNKNOWN : (o = r.length,
    o > i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ && o <= i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumber = function(e) {
    if (null == e)
        return null ;
    var t = e.getCountryCodeOrDefault()
      , t = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[t];
    return null == t ? null : 1 == t.length ? t[0] : this.getRegionCodeForNumberFromRegionList_(e, t)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumberFromRegionList_ = function(e, t) {
    for (var n, o = this.getNationalSignificantNumber(e), r = t.length, d = 0; r > d; d++) {
        n = t[d];
        var i = this.getMetadataForRegion(n);
        if (i.hasLeadingDigits()) {
            if (0 == o.search(i.getLeadingDigits()))
                return n
        } else if (this.getNumberTypeHelper_(o, i) != i18n.phonenumbers.PhoneNumberType.UNKNOWN)
            return n
    }
    return null
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForCountryCode = function(e) {
    return e = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[e],
    null == e ? i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ : e[0]
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodesForCountryCode = function(e) {
    return e = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[e],
    null == e ? [] : e
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForRegion = function(e) {
    return this.isValidRegionCode_(e) ? this.getCountryCodeForValidRegion_(e) : 0
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForValidRegion_ = function(e) {
    var t = this.getMetadataForRegion(e);
    if (null == t)
        throw "Invalid region code: " + e;
    return t.getCountryCodeOrDefault()
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.getNddPrefixForRegion = function(e, t) {
    var n = this.getMetadataForRegion(e);
    return null == n ? null : (n = n.getNationalPrefixOrDefault(),
    0 == n.length ? null : (t && (n = n.replace("~", "")),
    n))
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isNANPACountry = function(e) {
    return null != e && goog.array.contains(i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_], e.toUpperCase())
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isLeadingZeroPossible = function(e) {
    return e = this.getMetadataForRegionOrCallingCode_(e, this.getRegionCodeForCountryCode(e)),
    null != e && e.getLeadingZeroPossibleOrDefault()
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isAlphaNumber = function(e) {
    return i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(e) ? (e = new goog.string.StringBuffer(e),
    this.maybeStripExtension(e),
    i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, e.toString())) : !1
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumber = function(e) {
    return this.isPossibleNumberWithReason(e) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.testNumberLengthAgainstPattern_ = function(e, t) {
    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(e, t) ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE : 0 == t.search(e) ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG : i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isShorterThanPossibleNormalNumber_ = function(e, t) {
    var n = e.getGeneralDesc().getPossibleNumberPatternOrDefault();
    return this.testNumberLengthAgainstPattern_(n, t) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberWithReason = function(e) {
    var t = this.getNationalSignificantNumber(e);
    if (e = e.getCountryCodeOrDefault(),
    !this.hasValidCountryCallingCode_(e))
        return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE;
    var n = this.getRegionCodeForCountryCode(e);
    return e = this.getMetadataForRegionOrCallingCode_(e, n).getGeneralDesc(),
    e.hasNationalNumberPattern() ? (e = e.getPossibleNumberPatternOrDefault(),
    this.testNumberLengthAgainstPattern_(e, t)) : (t = t.length,
    t < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT : t > i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_ ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG : i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberString = function(e, t) {
    try {
        return this.isPossibleNumber(this.parse(e, t))
    } catch (n) {
        return !1
    }
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.truncateTooLongNumber = function(e) {
    if (this.isValidNumber(e))
        return !0;
    var t = e.clone()
      , n = e.getNationalNumberOrDefault();
    do
        if (n = Math.floor(n / 10),
        t.setNationalNumber(n),
        0 == n || this.isPossibleNumberWithReason(t) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT)
            return !1;
    while (!this.isValidNumber(t));return e.setNationalNumber(n),
    !0
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.extractCountryCode = function(e, t) {
    var n = e.toString();
    if (0 == n.length || "0" == n.charAt(0))
        return 0;
    for (var o, r = n.length, d = 1; d <= i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ && r >= d; ++d)
        if (o = parseInt(n.substring(0, d), 10),
        o in i18n.phonenumbers.metadata.countryCodeToRegionCodeMap)
            return t.append(n.substring(d)),
            o;
    return 0
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.maybeExtractCountryCode = function(e, t, n, o, r) {
    if (0 == e.length)
        return 0;
    e = new goog.string.StringBuffer(e);
    var d;
    if (null != t && (d = t.getInternationalPrefix()),
    null == d && (d = "NonMatch"),
    d = this.maybeStripInternationalPrefixAndNormalize(e, d),
    o && r.setCountryCodeSource(d),
    d != i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY) {
        if (e.getLength() <= i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)
            throw i18n.phonenumbers.Error.TOO_SHORT_AFTER_IDD;
        if (n = this.extractCountryCode(e, n),
        0 != n)
            return r.setCountryCode(n),
            n;
        throw i18n.phonenumbers.Error.INVALID_COUNTRY_CODE
    }
    if (null != t) {
        d = t.getCountryCodeOrDefault();
        var i = "" + d
          , N = e.toString();
        if (goog.string.startsWith(N, i)) {
            var a = new goog.string.StringBuffer(N.substring(i.length))
              , N = t.getGeneralDesc()
              , i = new RegExp(N.getNationalNumberPatternOrDefault());
            if (this.maybeStripNationalPrefixAndCarrierCode(a, t, null ),
            t = a.toString(),
            N = N.getPossibleNumberPatternOrDefault(),
            !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i, e.toString()) && i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i, t) || this.testNumberLengthAgainstPattern_(N, e.toString()) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG)
                return n.append(t),
                o && r.setCountryCodeSource(i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN),
                r.setCountryCode(d),
                d
        }
    }
    return r.setCountryCode(0),
    0
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.parsePrefixAsIdd_ = function(e, t) {
    var n = t.toString();
    if (0 == n.search(e)) {
        var o = n.match(e)[0].length
          , r = n.substring(o).match(i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN);
        return r && null != r[1] && 0 < r[1].length && "0" == i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(r[1]) ? !1 : (t.clear(),
        t.append(n.substring(o)),
        !0)
    }
    return !1
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripInternationalPrefixAndNormalize = function(e, t) {
    var n = e.toString();
    return 0 == n.length ? i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY : i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(n) ? (n = n.replace(i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_, ""),
    e.clear(),
    e.append(i18n.phonenumbers.PhoneNumberUtil.normalize(n)),
    i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN) : (n = new RegExp(t),
    i18n.phonenumbers.PhoneNumberUtil.normalizeSB_(e),
    this.parsePrefixAsIdd_(n, e) ? i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD : i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripNationalPrefixAndCarrierCode = function(e, t, n) {
    var o = e.toString()
      , r = o.length
      , d = t.getNationalPrefixForParsing();
    if (0 == r || null == d || 0 == d.length)
        return !1;
    var i = new RegExp("^(?:" + d + ")");
    if (r = i.exec(o)) {
        var d = new RegExp(t.getGeneralDesc().getNationalNumberPatternOrDefault())
          , N = i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(d, o)
          , a = r.length - 1;
        if (t = t.getNationalPrefixTransformRule(),
        null == t || 0 == t.length || null == r[a] || 0 == r[a].length) {
            if (N && !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(d, o.substring(r[0].length)))
                return !1;
            null != n && a > 0 && null != r[a] && n.append(r[1]),
            e.set(o.substring(r[0].length))
        } else {
            if (o = o.replace(i, t),
            N && !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(d, o))
                return !1;
            null != n && a > 0 && n.append(r[1]),
            e.set(o)
        }
        return !0
    }
    return !1
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripExtension = function(e) {
    var t = e.toString()
      , n = t.search(i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_);
    if (n >= 0 && i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(t.substring(0, n)))
        for (var o = t.match(i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_), r = o.length, d = 1; r > d; ++d)
            if (null != o[d] && 0 < o[d].length)
                return e.clear(),
                e.append(t.substring(0, n)),
                o[d];
    return ""
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.checkRegionForParsing_ = function(e, t) {
    return this.isValidRegionCode_(t) || null != e && 0 < e.length && i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(e)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.parse = function(e, t) {
    return this.parseHelper_(e, t, !1, !0)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.parseAndKeepRawInput = function(e, t) {
    if (!this.isValidRegionCode_(t) && 0 < e.length && e.charAt(0) != i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN)
        throw i18n.phonenumbers.Error.INVALID_COUNTRY_CODE;
    return this.parseHelper_(e, t, !0, !0)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.setItalianLeadingZerosForPhoneNumber_ = function(e, t) {
    if (1 < e.length && "0" == e.charAt(0)) {
        t.setItalianLeadingZero(!0);
        for (var n = 1; n < e.length - 1 && "0" == e.charAt(n); )
            n++;
        1 != n && t.setNumberOfLeadingZeros(n)
    }
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.parseHelper_ = function(e, t, n, o) {
    if (null == e)
        throw i18n.phonenumbers.Error.NOT_A_NUMBER;
    if (e.length > i18n.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_)
        throw i18n.phonenumbers.Error.TOO_LONG;
    var r = new goog.string.StringBuffer;
    if (this.buildNationalNumberForParsing_(e, r),
    !i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(r.toString()))
        throw i18n.phonenumbers.Error.NOT_A_NUMBER;
    if (o && !this.checkRegionForParsing_(r.toString(), t))
        throw i18n.phonenumbers.Error.INVALID_COUNTRY_CODE;
    o = new i18n.phonenumbers.PhoneNumber,
    n && o.setRawInput(e),
    e = this.maybeStripExtension(r),
    0 < e.length && o.setExtension(e),
    e = this.getMetadataForRegion(t);
    var d = new goog.string.StringBuffer
      , i = 0
      , N = r.toString();
    try {
        i = this.maybeExtractCountryCode(N, e, d, n, o)
    } catch (a) {
        if (a != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE || !i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(N))
            throw a;
        if (N = N.replace(i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_, ""),
        i = this.maybeExtractCountryCode(N, e, d, n, o),
        0 == i)
            throw a
    }
    if (0 != i ? (r = this.getRegionCodeForCountryCode(i),
    r != t && (e = this.getMetadataForRegionOrCallingCode_(i, r))) : (i18n.phonenumbers.PhoneNumberUtil.normalizeSB_(r),
    d.append(r.toString()),
    null != t ? (i = e.getCountryCodeOrDefault(),
    o.setCountryCode(i)) : n && o.clearCountryCodeSource()),
    d.getLength() < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)
        throw i18n.phonenumbers.Error.TOO_SHORT_NSN;
    if (null != e && (t = new goog.string.StringBuffer,
    r = new goog.string.StringBuffer(d.toString()),
    this.maybeStripNationalPrefixAndCarrierCode(r, e, t),
    this.isShorterThanPossibleNormalNumber_(e, r.toString()) || (d = r,
    n && o.setPreferredDomesticCarrierCode(t.toString()))),
    n = d.toString(),
    t = n.length,
    t < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)
        throw i18n.phonenumbers.Error.TOO_SHORT_NSN;
    if (t > i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_)
        throw i18n.phonenumbers.Error.TOO_LONG;
    return this.setItalianLeadingZerosForPhoneNumber_(n, o),
    o.setNationalNumber(parseInt(n, 10)),
    o
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.buildNationalNumberForParsing_ = function(e, t) {
    var n = e.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_);
    if (n > 0) {
        var o = n + i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_.length;
        if (e.charAt(o) == i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN) {
            var r = e.indexOf(";", o);
            t.append(r > 0 ? e.substring(o, r) : e.substring(o))
        }
        o = e.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_),
        t.append(e.substring(o >= 0 ? o + i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_.length : 0, n))
    } else
        t.append(i18n.phonenumbers.PhoneNumberUtil.extractPossibleNumber(e));
    n = t.toString(),
    o = n.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_),
    o > 0 && (t.clear(),
    t.append(n.substring(0, o)))
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberMatch = function(e, t) {
    var n, o;
    if ("string" == typeof e)
        try {
            n = this.parse(e, i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_)
        } catch (r) {
            if (r != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE)
                return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER;
            if ("string" != typeof t) {
                var d = this.getRegionCodeForCountryCode(t.getCountryCodeOrDefault());
                if (d != i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_) {
                    try {
                        n = this.parse(e, d)
                    } catch (i) {
                        return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER
                    }
                    return n = this.isNumberMatch(n, t),
                    n == i18n.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : n
                }
            }
            try {
                n = this.parseHelper_(e, null , !1, !1)
            } catch (N) {
                return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER
            }
        }
    else
        n = e.clone();
    if ("string" == typeof t)
        try {
            return o = this.parse(t, i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_),
            this.isNumberMatch(e, o)
        } catch (a) {
            return a != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER : this.isNumberMatch(t, n)
        }
    else
        o = t.clone();
    if (n.clearRawInput(),
    n.clearCountryCodeSource(),
    n.clearPreferredDomesticCarrierCode(),
    o.clearRawInput(),
    o.clearCountryCodeSource(),
    o.clearPreferredDomesticCarrierCode(),
    n.hasExtension() && 0 == n.getExtension().length && n.clearExtension(),
    o.hasExtension() && 0 == o.getExtension().length && o.clearExtension(),
    n.hasExtension() && o.hasExtension() && n.getExtension() != o.getExtension())
        return i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH;
    var d = n.getCountryCodeOrDefault()
      , u = o.getCountryCodeOrDefault();
    return 0 != d && 0 != u ? n.equals(o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH : d == u && this.isNationalNumberSuffixOfTheOther_(n, o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH : (n.setCountryCode(0),
    o.setCountryCode(0),
    n.equals(o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : this.isNationalNumberSuffixOfTheOther_(n, o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.isNationalNumberSuffixOfTheOther_ = function(e, t) {
    var n = "" + e.getNationalNumber()
      , o = "" + t.getNationalNumber();
    return goog.string.endsWith(n, o) || goog.string.endsWith(o, n)
}
,
i18n.phonenumbers.PhoneNumberUtil.prototype.canBeInternationallyDialled = function(e) {
    var t = this.getMetadataForRegion(this.getRegionCodeForNumber(e));
    return null == t ? !0 : (e = this.getNationalSignificantNumber(e),
    !this.isNumberMatchingDesc_(e, t.getNoInternationalDialling()))
}
,
i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_ = function(e, t) {
    var n = t.match("string" == typeof e ? "^(?:" + e + ")$" : e);
    return n && n[0].length == t.length ? !0 : !1
}
,
i18n.phonenumbers.AsYouTypeFormatter = function(e) {
    this.DIGIT_PLACEHOLDER_ = "â€ˆ",
    this.DIGIT_PATTERN_ = new RegExp(this.DIGIT_PLACEHOLDER_),
    this.currentOutput_ = "",
    this.formattingTemplate_ = new goog.string.StringBuffer,
    this.currentFormattingPattern_ = "",
    this.accruedInput_ = new goog.string.StringBuffer,
    this.accruedInputWithoutFormatting_ = new goog.string.StringBuffer,
    this.ableToFormat_ = !0,
    this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = this.inputHasFormatting_ = !1,
    this.phoneUtil_ = i18n.phonenumbers.PhoneNumberUtil.getInstance(),
    this.positionToRemember_ = this.originalPosition_ = this.lastMatchPosition_ = 0,
    this.prefixBeforeNationalNumber_ = new goog.string.StringBuffer,
    this.shouldAddSpaceAfterNationalPrefix_ = !1,
    this.extractedNationalPrefix_ = "",
    this.nationalNumber_ = new goog.string.StringBuffer,
    this.possibleFormats_ = [],
    this.defaultCountry_ = e,
    this.defaultMetadata_ = this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_)
}
,
i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ = " ",
i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_ = new i18n.phonenumbers.PhoneMetadata,
i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_.setInternationalPrefix("NA"),
i18n.phonenumbers.AsYouTypeFormatter.CHARACTER_CLASS_PATTERN_ = /\[([^\[\]])*\]/g,
i18n.phonenumbers.AsYouTypeFormatter.STANDALONE_DIGIT_PATTERN_ = /\d(?=[^,}][^,}])/g,
i18n.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_ = new RegExp("^[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*(\\$\\d[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*)+$"),
i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_ = /[- ]/,
i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ = 3,
i18n.phonenumbers.AsYouTypeFormatter.prototype.getMetadataForRegion_ = function(e) {
    return e = this.phoneUtil_.getCountryCodeForRegion(e),
    e = this.phoneUtil_.getRegionCodeForCountryCode(e),
    e = this.phoneUtil_.getMetadataForRegion(e),
    null != e ? e : i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.maybeCreateNewTemplate_ = function() {
    for (var e = this.possibleFormats_.length, t = 0; e > t; ++t) {
        var n = this.possibleFormats_[t]
          , o = n.getPatternOrDefault();
        if (this.currentFormattingPattern_ == o)
            return !1;
        if (this.createFormattingTemplate_(n))
            return this.currentFormattingPattern_ = o,
            this.shouldAddSpaceAfterNationalPrefix_ = i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(n.getNationalPrefixFormattingRule()),
            this.lastMatchPosition_ = 0,
            !0
    }
    return this.ableToFormat_ = !1
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.getAvailableFormats_ = function(e) {
    for (var t = this.isCompleteNumber_ && 0 < this.currentMetadata_.intlNumberFormatCount() ? this.currentMetadata_.intlNumberFormatArray() : this.currentMetadata_.numberFormatArray(), n = t.length, o = 0; n > o; ++o) {
        var r = t[o];
        (!this.currentMetadata_.hasNationalPrefix() || this.isCompleteNumber_ || r.getNationalPrefixOptionalWhenFormatting() || this.phoneUtil_.formattingRuleHasFirstGroupOnly(r.getNationalPrefixFormattingRuleOrDefault())) && this.isFormatEligible_(r.getFormatOrDefault()) && this.possibleFormats_.push(r)
    }
    this.narrowDownPossibleFormats_(e)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.isFormatEligible_ = function(e) {
    return i18n.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_.test(e)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.narrowDownPossibleFormats_ = function(e) {
    for (var t = [], n = e.length - i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_, o = this.possibleFormats_.length, r = 0; o > r; ++r) {
        var d = this.possibleFormats_[r];
        if (0 == d.leadingDigitsPatternCount())
            t.push(this.possibleFormats_[r]);
        else {
            var i = Math.min(n, d.leadingDigitsPatternCount() - 1)
              , d = d.getLeadingDigitsPattern(i);
            0 == e.search(d) && t.push(this.possibleFormats_[r])
        }
    }
    this.possibleFormats_ = t
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.createFormattingTemplate_ = function(e) {
    var t = e.getPatternOrDefault();
    return -1 != t.indexOf("|") ? !1 : (t = t.replace(i18n.phonenumbers.AsYouTypeFormatter.CHARACTER_CLASS_PATTERN_, "\\d"),
    t = t.replace(i18n.phonenumbers.AsYouTypeFormatter.STANDALONE_DIGIT_PATTERN_, "\\d"),
    this.formattingTemplate_.clear(),
    e = this.getFormattingTemplate_(t, e.getFormatOrDefault()),
    0 < e.length ? (this.formattingTemplate_.append(e),
    !0) : !1)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.getFormattingTemplate_ = function(e, t) {
    var n = "999999999999999".match(e)[0];
    return n.length < this.nationalNumber_.getLength() ? "" : (n = n.replace(new RegExp(e,"g"), t),
    n.replace(RegExp("9", "g"), this.DIGIT_PLACEHOLDER_))
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.clear = function() {
    this.currentOutput_ = "",
    this.accruedInput_.clear(),
    this.accruedInputWithoutFormatting_.clear(),
    this.formattingTemplate_.clear(),
    this.lastMatchPosition_ = 0,
    this.currentFormattingPattern_ = "",
    this.prefixBeforeNationalNumber_.clear(),
    this.extractedNationalPrefix_ = "",
    this.nationalNumber_.clear(),
    this.ableToFormat_ = !0,
    this.inputHasFormatting_ = !1,
    this.originalPosition_ = this.positionToRemember_ = 0,
    this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = !1,
    this.possibleFormats_ = [],
    this.shouldAddSpaceAfterNationalPrefix_ = !1,
    this.currentMetadata_ != this.defaultMetadata_ && (this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_))
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigit = function(e) {
    return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(e, !1)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitAndRememberPosition = function(e) {
    return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(e, !0)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitWithOptionToRememberPosition_ = function(e, t) {
    if (this.accruedInput_.append(e),
    t && (this.originalPosition_ = this.accruedInput_.getLength()),
    this.isDigitOrLeadingPlusSign_(e) ? e = this.normalizeAndAccrueDigitsAndPlusSign_(e, t) : (this.ableToFormat_ = !1,
    this.inputHasFormatting_ = !0),
    !this.ableToFormat_) {
        if (!this.inputHasFormatting_)
            if (this.attemptToExtractIdd_()) {
                if (this.attemptToExtractCountryCallingCode_())
                    return this.attemptToChoosePatternWithPrefixExtracted_()
            } else if (this.ableToExtractLongerNdd_())
                return this.prefixBeforeNationalNumber_.append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_),
                this.attemptToChoosePatternWithPrefixExtracted_();
        return this.accruedInput_.toString()
    }
    switch (this.accruedInputWithoutFormatting_.getLength()) {
    case 0:
    case 1:
    case 2:
        return this.accruedInput_.toString();
    case 3:
        if (!this.attemptToExtractIdd_())
            return this.extractedNationalPrefix_ = this.removeNationalPrefixFromNationalNumber_(),
            this.attemptToChooseFormattingPattern_();
        this.isExpectingCountryCallingCode_ = !0;
    default:
        if (this.isExpectingCountryCallingCode_)
            return this.attemptToExtractCountryCallingCode_() && (this.isExpectingCountryCallingCode_ = !1),
            this.prefixBeforeNationalNumber_.toString() + this.nationalNumber_.toString();
        if (0 < this.possibleFormats_.length) {
            var n = this.inputDigitHelper_(e)
              , o = this.attemptToFormatAccruedDigits_();
            return 0 < o.length ? o : (this.narrowDownPossibleFormats_(this.nationalNumber_.toString()),
            this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.ableToFormat_ ? this.appendNationalNumber_(n) : this.accruedInput_.toString())
        }
        return this.attemptToChooseFormattingPattern_()
    }
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToChoosePatternWithPrefixExtracted_ = function() {
    return this.ableToFormat_ = !0,
    this.isExpectingCountryCallingCode_ = !1,
    this.possibleFormats_ = [],
    this.attemptToChooseFormattingPattern_()
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.getExtractedNationalPrefix_ = function() {
    return this.extractedNationalPrefix_
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.ableToExtractLongerNdd_ = function() {
    if (0 < this.extractedNationalPrefix_.length) {
        var e = this.nationalNumber_.toString();
        this.nationalNumber_.clear(),
        this.nationalNumber_.append(this.extractedNationalPrefix_),
        this.nationalNumber_.append(e);
        var e = this.prefixBeforeNationalNumber_.toString()
          , t = e.lastIndexOf(this.extractedNationalPrefix_);
        this.prefixBeforeNationalNumber_.clear(),
        this.prefixBeforeNationalNumber_.append(e.substring(0, t))
    }
    return this.extractedNationalPrefix_ != this.removeNationalPrefixFromNationalNumber_()
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.isDigitOrLeadingPlusSign_ = function(e) {
    return i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN.test(e) || 1 == this.accruedInput_.getLength() && i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN.test(e)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToFormatAccruedDigits_ = function() {
    for (var e = this.nationalNumber_.toString(), t = this.possibleFormats_.length, n = 0; t > n; ++n) {
        var o = this.possibleFormats_[n]
          , r = o.getPatternOrDefault();
        if (new RegExp("^(?:" + r + ")$").test(e))
            return this.shouldAddSpaceAfterNationalPrefix_ = i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(o.getNationalPrefixFormattingRule()),
            e = e.replace(new RegExp(r,"g"), o.getFormat()),
            this.appendNationalNumber_(e)
    }
    return ""
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.appendNationalNumber_ = function(e) {
    var t = this.prefixBeforeNationalNumber_.getLength();
    return this.shouldAddSpaceAfterNationalPrefix_ && t > 0 && this.prefixBeforeNationalNumber_.toString().charAt(t - 1) != i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ ? this.prefixBeforeNationalNumber_ + i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ + e : this.prefixBeforeNationalNumber_ + e
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.getRememberedPosition = function() {
    if (!this.ableToFormat_)
        return this.originalPosition_;
    for (var e = 0, t = 0, n = this.accruedInputWithoutFormatting_.toString(), o = this.currentOutput_.toString(); e < this.positionToRemember_ && t < o.length; )
        n.charAt(e) == o.charAt(t) && e++,
        t++;
    return t
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToChooseFormattingPattern_ = function() {
    var e = this.nationalNumber_.toString();
    return e.length >= i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ ? (this.getAvailableFormats_(e),
    e = this.attemptToFormatAccruedDigits_(),
    0 < e.length ? e : this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.accruedInput_.toString()) : this.appendNationalNumber_(e)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.inputAccruedNationalNumber_ = function() {
    var e = this.nationalNumber_.toString()
      , t = e.length;
    if (t > 0) {
        for (var n = "", o = 0; t > o; o++)
            n = this.inputDigitHelper_(e.charAt(o));
        return this.ableToFormat_ ? this.appendNationalNumber_(n) : this.accruedInput_.toString()
    }
    return this.prefixBeforeNationalNumber_.toString()
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.isNanpaNumberWithNationalPrefix_ = function() {
    if (1 != this.currentMetadata_.getCountryCode())
        return !1;
    var e = this.nationalNumber_.toString();
    return "1" == e.charAt(0) && "0" != e.charAt(1) && "1" != e.charAt(1)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.removeNationalPrefixFromNationalNumber_ = function() {
    var e = this.nationalNumber_.toString()
      , t = 0;
    if (this.isNanpaNumberWithNationalPrefix_())
        t = 1,
        this.prefixBeforeNationalNumber_.append("1").append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_),
        this.isCompleteNumber_ = !0;
    else if (this.currentMetadata_.hasNationalPrefixForParsing()) {
        var n = new RegExp("^(?:" + this.currentMetadata_.getNationalPrefixForParsing() + ")")
          , n = e.match(n);
        null != n && null != n[0] && 0 < n[0].length && (this.isCompleteNumber_ = !0,
        t = n[0].length,
        this.prefixBeforeNationalNumber_.append(e.substring(0, t)))
    }
    return this.nationalNumber_.clear(),
    this.nationalNumber_.append(e.substring(t)),
    e.substring(0, t)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractIdd_ = function() {
    var e = this.accruedInputWithoutFormatting_.toString()
      , t = new RegExp("^(?:\\" + i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + "|" + this.currentMetadata_.getInternationalPrefix() + ")")
      , t = e.match(t);
    return null != t && null != t[0] && 0 < t[0].length ? (this.isCompleteNumber_ = !0,
    t = t[0].length,
    this.nationalNumber_.clear(),
    this.nationalNumber_.append(e.substring(t)),
    this.prefixBeforeNationalNumber_.clear(),
    this.prefixBeforeNationalNumber_.append(e.substring(0, t)),
    e.charAt(0) != i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN && this.prefixBeforeNationalNumber_.append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_),
    !0) : !1
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractCountryCallingCode_ = function() {
    if (0 == this.nationalNumber_.getLength())
        return !1;
    var e = new goog.string.StringBuffer
      , t = this.phoneUtil_.extractCountryCode(this.nationalNumber_, e);
    return 0 == t ? !1 : (this.nationalNumber_.clear(),
    this.nationalNumber_.append(e.toString()),
    e = this.phoneUtil_.getRegionCodeForCountryCode(t),
    i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == e ? this.currentMetadata_ = this.phoneUtil_.getMetadataForNonGeographicalRegion(t) : e != this.defaultCountry_ && (this.currentMetadata_ = this.getMetadataForRegion_(e)),
    this.prefixBeforeNationalNumber_.append("" + t).append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_),
    this.extractedNationalPrefix_ = "",
    !0)
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.normalizeAndAccrueDigitsAndPlusSign_ = function(e, t) {
    var n;
    return e == i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN ? (n = e,
    this.accruedInputWithoutFormatting_.append(e)) : (n = i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS[e],
    this.accruedInputWithoutFormatting_.append(n),
    this.nationalNumber_.append(n)),
    t && (this.positionToRemember_ = this.accruedInputWithoutFormatting_.getLength()),
    n
}
,
i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitHelper_ = function(e) {
    var t = this.formattingTemplate_.toString();
    if (0 <= t.substring(this.lastMatchPosition_).search(this.DIGIT_PATTERN_)) {
        var n = t.search(this.DIGIT_PATTERN_);
        return e = t.replace(this.DIGIT_PATTERN_, e),
        this.formattingTemplate_.clear(),
        this.formattingTemplate_.append(e),
        this.lastMatchPosition_ = n,
        e.substring(0, this.lastMatchPosition_ + 1)
    }
    return 1 == this.possibleFormats_.length && (this.ableToFormat_ = !1),
    this.currentFormattingPattern_ = "",
    this.accruedInput_.toString()
}
;
// if (typeof module === 'undefined') {
//     window.phoneParser = parsePhone;
// } else {
//     module.exports = parsePhone;
// }
