import { CountryCode } from './postcode-types';

// TODO: Remove CountryCode.UK in next major version release
export const POSTCODE_REGEXES: Map<string, RegExp> = new Map([
  [
    CountryCode.UK,
    /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i,
  ],
  [
    CountryCode.GB,
    /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i,
  ],
  [CountryCode.JE, /^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
  [CountryCode.GG, /^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
  [CountryCode.IM, /^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
  [CountryCode.US, /^([0-9]{5})(?:-([0-9]{4}))?$/],
  [CountryCode.CA, /^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],
  [CountryCode.IE, /^([AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/],
  [CountryCode.DE, /^\d{5}$/],
  [CountryCode.JP, /^\d{3}-\d{4}$/],
  [CountryCode.FR, /^\d{2}[ ]?\d{3}$/],
  [CountryCode.AU, /^\d{4}$/],
  [CountryCode.IT, /^\d{5}$/],
  [CountryCode.CH, /^\d{4}$/],
  [CountryCode.AT, /^(?!0)\d{4}$/],
  [CountryCode.ES, /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],
  [CountryCode.NL, /^\d{4}[ ]?[A-Z]{2}$/],
  [CountryCode.BE, /^\d{4}$/],
  [CountryCode.DK, /^\d{4}$/],
  [CountryCode.SE, /^(SE-)?\d{3}[ ]?\d{2}$/],
  [CountryCode.NO, /^\d{4}$/],
  [CountryCode.BR, /^\d{5}[\-]?\d{3}$/],
  [CountryCode.PT, /^\d{4}([\-]\d{3})?$/],
  [CountryCode.FI, /^(FI-|AX-)?\d{5}$/],
  [CountryCode.AX, /^22\d{3}$/],
  [CountryCode.KR, /^\d{5}$/],
  [CountryCode.CN, /^\d{6}$/],
  [CountryCode.TW, /^\d{3}(\d{2})?$/],
  [CountryCode.SG, /^\d{6}$/],
  [CountryCode.DZ, /^\d{5}$/],
  [CountryCode.AD, /^AD\d{3}$/],
  [CountryCode.AR, /^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],
  [CountryCode.AM, /^(37)?\d{4}$/],
  [CountryCode.AZ, /^\d{4}$/],
  [CountryCode.BH, /^((1[0-2]|[2-9])\d{2})?$/],
  [CountryCode.BD, /^\d{4}$/],
  [CountryCode.BB, /^(BB\d{5})?$/],
  [CountryCode.BY, /^\d{6}$/],
  [CountryCode.BM, /^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],
  [CountryCode.BA, /^\d{5}$/],
  [CountryCode.IO, /^BBND 1ZZ$/],
  [CountryCode.BN, /^[A-Z]{2}[ ]?\d{4}$/],
  [CountryCode.BG, /^\d{4}$/],
  [CountryCode.KH, /^\d{5}$/],
  [CountryCode.CV, /^\d{4}$/],
  [CountryCode.CL, /^\d{7}$/],
  [CountryCode.CR, /^(\d{4,5}|\d{3}-\d{4})$/],
  [CountryCode.HR, /^(HR-)?\d{5}$/],
  [CountryCode.CY, /^\d{4}$/],
  [CountryCode.CZ, /^\d{3}[ ]?\d{2}$/],
  [CountryCode.DO, /^\d{5}$/],
  [CountryCode.EC, /^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],
  [CountryCode.EG, /^\d{5}$/],
  [CountryCode.EE, /^\d{5}$/],
  [CountryCode.FO, /^\d{3}$/],
  [CountryCode.GE, /^\d{4}$/],
  [CountryCode.GR, /^\d{3}[ ]?\d{2}$/],
  [CountryCode.GL, /^39\d{2}$/],
  [CountryCode.GT, /^\d{5}$/],
  [CountryCode.HT, /^\d{4}$/],
  [CountryCode.HN, /^(?:\d{5})?$/],
  [CountryCode.HU, /^\d{4}$/],
  [CountryCode.IS, /^\d{3}$/],
  [CountryCode.IN, /^\d{6}$/],
  [CountryCode.ID, /^\d{5}$/],
  [CountryCode.IL, /^\d{5,7}$/],
  [CountryCode.JO, /^\d{5}$/],
  [CountryCode.KZ, /^\d{6}$/],
  [CountryCode.KE, /^\d{5}$/],
  [CountryCode.KW, /^\d{5}$/],
  [CountryCode.LA, /^\d{5}$/],
  [CountryCode.LV, /^(LV-)?\d{4}$/],
  [CountryCode.LB, /^(\d{4}([ ]?\d{4})?)?$/],
  [CountryCode.LI, /^(948[5-9])|(949[0-7])$/],
  [CountryCode.LT, /^(LT-)?\d{5}$/],
  [CountryCode.LU, /^(L-)?\d{4}$/],
  [CountryCode.MK, /^\d{4}$/],
  [CountryCode.MY, /^\d{5}$/],
  [CountryCode.MV, /^\d{5}$/],
  [CountryCode.MT, /^[A-Z]{3}[ ]?\d{2,4}$/],
  [CountryCode.MU, /^((\d|[A-Z])\d{4})?$/],
  [CountryCode.MX, /^\d{5}$/],
  [CountryCode.MD, /^\d{4}$/],
  [CountryCode.MC, /^980\d{2}$/],
  [CountryCode.MA, /^\d{5}$/],
  [CountryCode.NP, /^\d{5}$/],
  [CountryCode.NZ, /^\d{4}$/],
  [CountryCode.NI, /^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],
  [CountryCode.NG, /^(\d{6})?$/],
  [CountryCode.OM, /^(PC )?\d{3}$/],
  [CountryCode.PK, /^\d{5}$/],
  [CountryCode.PY, /^\d{4}$/],
  [CountryCode.PH, /^\d{4}$/],
  [CountryCode.PL, /^\d{2}-\d{3}$/],
  [CountryCode.PR, /^00[679]\d{2}([ \-]\d{4})?$/],
  [CountryCode.RO, /^\d{6}$/],
  [CountryCode.RU, /^\d{6}$/],
  [CountryCode.SM, /^4789\d$/],
  [CountryCode.SA, /^\d{5}$/],
  [CountryCode.SN, /^\d{5}$/],
  [CountryCode.SK, /^\d{3}[ ]?\d{2}$/],
  [CountryCode.SI, /^(SI-)?\d{4}$/],
  [CountryCode.ZA, /^\d{4}$/],
  [CountryCode.LK, /^\d{5}$/],
  [CountryCode.TJ, /^\d{6}$/],
  [CountryCode.TH, /^\d{5}$/],
  [CountryCode.TN, /^\d{4}$/],
  [CountryCode.TR, /^\d{5}$/],
  [CountryCode.TM, /^\d{6}$/],
  [CountryCode.UA, /^\d{5}$/],
  [CountryCode.UY, /^\d{5}$/],
  [CountryCode.UZ, /^\d{6}$/],
  [CountryCode.VA, /^00120$/],
  [CountryCode.VE, /^\d{4}$/],
  [CountryCode.ZM, /^\d{5}$/],
  [CountryCode.AS, /^96799$/],
  [CountryCode.CC, /^6799$/],
  [CountryCode.CK, /^\d{4}$/],
  [CountryCode.RS, /^\d{5,6}$/],
  [CountryCode.ME, /^8\d{4}$/],
  [CountryCode.CS, /^\d{5}$/],
  [CountryCode.YU, /^\d{5}$/],
  [CountryCode.CX, /^6798$/],
  [CountryCode.ET, /^\d{4}$/],
  [CountryCode.FK, /^FIQQ 1ZZ$/],
  [CountryCode.NF, /^2899$/],
  [CountryCode.FM, /^(9694[1-4])([ \-]\d{4})?$/],
  [CountryCode.GF, /^9[78]3\d{2}$/],
  [CountryCode.GN, /^\d{3}$/],
  [CountryCode.GP, /^9[78][01]\d{2}$/],
  [CountryCode.GS, /^SIQQ 1ZZ$/],
  [CountryCode.GU, /^969[123]\d([ \-]\d{4})?$/],
  [CountryCode.GW, /^\d{4}$/],
  [CountryCode.HM, /^\d{4}$/],
  [CountryCode.IQ, /^\d{5}$/],
  [CountryCode.KG, /^\d{6}$/],
  [CountryCode.LR, /^\d{4}$/],
  [CountryCode.LS, /^\d{3}$/],
  [CountryCode.MG, /^\d{3}$/],
  [CountryCode.MH, /^969[67]\d([ \-]\d{4})?$/],
  [CountryCode.MN, /^\d{6}$/],
  [CountryCode.MP, /^9695[012]([ \-]\d{4})?$/],
  [CountryCode.MQ, /^9[78]2\d{2}$/],
  [CountryCode.NC, /^988\d{2}$/],
  [CountryCode.NE, /^\d{4}$/],
  [CountryCode.VI, /^008(([0-4]\d)|(5[01]))([ \-]\d{4})?$/],
  [CountryCode.PF, /^987\d{2}$/],
  [CountryCode.PG, /^\d{3}$/],
  [CountryCode.PM, /^9[78]5\d{2}$/],
  [CountryCode.PN, /^PCRN 1ZZ$/],
  [CountryCode.PW, /^96940$/],
  [CountryCode.RE, /^9[78]4\d{2}$/],
  [CountryCode.SH, /^(ASCN|STHL) 1ZZ$/],
  [CountryCode.SJ, /^\d{4}$/],
  [CountryCode.SO, /^\d{5}$/],
  [CountryCode.SZ, /^[HLMS]\d{3}$/],
  [CountryCode.TC, /^TKCA 1ZZ$/],
  [CountryCode.WF, /^986\d{2}$/],
  [CountryCode.XK, /^\d{5}$/],
  [CountryCode.YT, /^976\d{2}$/],
  [CountryCode.INTL, /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i],
]);
