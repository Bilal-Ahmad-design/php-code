/*
 Copyright 2016-2022 Pine Grove Software, LLC
 AccurateCalculators.com
 License: GPL2
 strs.SAVINGS-WIDGET.gpl.js
*/
var FC$ = {};

FC$ = function(e){
	e.strs = {s000: wp.i18n.__('en', 'fc-savings-calculator'),
		s001: wp.i18n.__('Please use the backspace key to delete.', 'fc-savings-calculator'),
		s002: wp.i18n.__('Left, up & down arrow keys are disabled. So are the home, end, pgup and pgdn keys.', 'fc-savings-calculator'),
		s003: wp.i18n.__('Use backspace to delete.', 'fc-savings-calculator'),
		s004: wp.i18n.__('If value is selected, just start typing new value to clear prior value.', 'fc-savings-calculator'),
		s005: wp.i18n.__('When a number is selected (value shown in inverse), use right arrow key to clear selection without clearing value. Then backspace to edit.', 'fc-savings-calculator'),
		s006: wp.i18n.__('TIP: Generally it is best to use the TAB or SHIFT-TAB keys to move from one input to the next or previous input.', 'fc-savings-calculator'),
		s007: wp.i18n.__('TIP 2: Generally, editing a value is inefficient. Since values are auto selected, just type the number you want.', 'fc-savings-calculator'),
		s008: wp.i18n.__('Do not type the thousand separator character.', 'fc-savings-calculator'),
		s009: wp.i18n.__('(If using US convention, that would be the comma.)', 'fc-savings-calculator'),
		s010: wp.i18n.__('I\'m smart enough to enter them for you!',
			'fc-savings-calculator'),
		s011: wp.i18n.__('An unknown date calculation error occurred.', 'fc-savings-calculator'),
		s012: wp.i18n.__('Please provide us with your inputs and settings so that we can fix this. Thank you.', 'fc-savings-calculator'),
		s013: wp.i18n.__('Date is not valid - bad year.', 'fc-savings-calculator'),
		s014: wp.i18n.__('Jan', 'fc-savings-calculator'),
		s015: wp.i18n.__('Feb', 'fc-savings-calculator'),
		s016: wp.i18n.__('Mar', 'fc-savings-calculator'),
		s017: wp.i18n.__('Apr', 'fc-savings-calculator'),
		s018: wp.i18n.__('May',
			'fc-savings-calculator'),
		s019: wp.i18n.__('Jun', 'fc-savings-calculator'),
		s020: wp.i18n.__('Jul', 'fc-savings-calculator'),
		s021: wp.i18n.__('Aug', 'fc-savings-calculator'),
		s022: wp.i18n.__('Sept', 'fc-savings-calculator'),
		s023: wp.i18n.__('Oct', 'fc-savings-calculator'),
		s024: wp.i18n.__('Nov', 'fc-savings-calculator'),
		s025: wp.i18n.__('Dec', 'fc-savings-calculator'),
		s026: wp.i18n.__('Error: dates out of sequence.', 'fc-savings-calculator'),
		s027: wp.i18n.__('Exception', 'fc-savings-calculator'),
		s028: wp.i18n.__('occurred when accessing',
			'fc-savings-calculator'),
		s029: wp.i18n.__('Invalid index', 'fc-savings-calculator'),
		s101: wp.i18n.__('YTD', 'fc-savings-calculator'),
		s102: wp.i18n.__('Running Totals', 'fc-savings-calculator'),
		s201: wp.i18n.__('Your Personalized Savings Schedule', 'fc-savings-calculator'),
		s205: wp.i18n.__('Retirement Plan Summary', 'fc-savings-calculator'),
		s206: wp.i18n.__('Total Investmented', 'fc-savings-calculator'),
		s207: wp.i18n.__('Number of Investments', 'fc-savings-calculator'),
		s208: wp.i18n.__('Return on Investment (ROI)',
			'fc-savings-calculator'),
		s209: wp.i18n.__('Total Gain', 'fc-savings-calculator'),
		s210: wp.i18n.__('Last Cash Flow Date', 'fc-savings-calculator'),
		s211: wp.i18n.__('Years', 'fc-savings-calculator'),
		s218: wp.i18n.__('Investment Schedule', 'fc-savings-calculator'),
		s219: wp.i18n.__('Year', 'fc-savings-calculator'),
		s220: wp.i18n.__('Date', 'fc-savings-calculator'),
		s222: wp.i18n.__('Interest', 'fc-savings-calculator'),
		s223: wp.i18n.__('Net Change', 'fc-savings-calculator'),
		s224: wp.i18n.__('Balance', 'fc-savings-calculator'),
		s227: wp.i18n.__('Annual Interest', 'fc-savings-calculator'),
		s228: wp.i18n.__('Change in Balance', 'fc-savings-calculator'),
		s231: wp.i18n.__('Amount Invested & Interest as Percentage of Total Value', 'fc-savings-calculator'),
		s235: wp.i18n.__('Running Interest', 'fc-savings-calculator'),
		s236: wp.i18n.__('Total Deposits', 'fc-savings-calculator'),
		s237: wp.i18n.__('Total Interest Earned', 'fc-savings-calculator'),
		s238: wp.i18n.__('Total Value', 'fc-savings-calculator'),
		s239: wp.i18n.__('Pct. of Total', 'fc-savings-calculator'),
		s241: wp.i18n.__('Number of Deposits', 'fc-savings-calculator'),
		s242: wp.i18n.__('Initial Interest Rate', 'fc-savings-calculator'),
		s243: wp.i18n.__('Total Interest', 'fc-savings-calculator'),
		s244: wp.i18n.__('Savings Schedule', 'fc-savings-calculator'),
		s245: wp.i18n.__('Deposit', 'fc-savings-calculator'),
		s246: wp.i18n.__('"Net Change" is change from prior period i.e. prior balance plus deposit, plus interest less withdrawal.', 'fc-savings-calculator'),
		s247: wp.i18n.__('Annual Deposit and Interest Totals', 'fc-savings-calculator'),
		s248: wp.i18n.__('Accumulated Deposit and Interest', 'fc-savings-calculator'),
		s249: wp.i18n.__('Annual Deposit', 'fc-savings-calculator'),
		s250: wp.i18n.__('Running Deposit', 'fc-savings-calculator'),
		s407: wp.i18n.__('There are unknown values.', 'fc-savings-calculator'),
		s408: wp.i18n.__('Please make sure all values are entered.', 'fc-savings-calculator')};return e;
}(FC$);/*
 Copyright 2016-2022 Pine Grove Software, LLC
 AccurateCalculators.com
 License: GPL2
 common.LIB.gpl.js
*/
FC$ = function(e){
	var b = e || {};

	b.ERR_MSGS = {noDelKey: b.strs.s001, noCurKeys: b.strs.s002 + '\n\n' + b.strs.s003 + '\n\n' + b.strs.s004 + '\n\n' + b.strs.s005 + '\n\n' + b.strs.s006 + '\n\n' + b.strs.s007, noSeparators: b.strs.s008 + '\n\n' + b.strs.s009 + '\n\n' + b.strs.s010};var k = Error(b.strs.s011 + '\n\n' + b.strs.s012), w = Error(b.strs.s013);

	b.zoomLevel = 1;b.AMORT_MTHD = {AM_NORMAL: 0};b.CCY_FORMATS = {USD1: 0,
		USD2: 1,
		GBH: 2,
		NON: 3,
		EUR1: 4,
		EUR2: 5,
		EUR3: 6,
		EUR4: 7,
		RND: 8,
		NOK: 9,
		NGN: 10,
		THB: 11,
		DEFAULT: 12,
		AFZA: 62,
		ENZA: 62,
		AZAZ: 84,
		ENAZ: 84,
		BEBY: 54,
		ENBY: 54,
		BGBG: 27,
		ENBG: 27,
		CSCZ: 15,
		ENCZ: 15,
		DADK: 30,
		DA: 30,
		ENDK: 30,
		DEAT: 43,
		ENAT: 43,
		DECH: 103,
		ENCH: 103,
		DEDE: 34,
		DE: 34,
		ENDE: 34,
		DELI: 103,
		ENLI: 103,
		DELU: 34,
		ENLU: 34,
		DVMV: 99,
		ELGR: 33,
		EL: 33,
		ENGR: 33,
		ENAE: 87,
		ARAE: 87,
		ENAU: 49,
		ENBH: 89,
		ARBH: 89,
		ENBZ: 53,
		ENCA: 50,
		ENDZ: 90,
		ARDZ: 90,
		ENEG: 70,
		AREG: 70,
		ENGB: 71,
		ENIE: 80,
		ENIQ: 92,
		ARIQ: 92,
		ENJM: 57,
		ENJO: 93,
		ARJO: 93,
		ENKW: 95,
		ARKW: 95,
		ENLB: 70,
		ARLB: 70,
		ENLY: 96,
		ARLY: 96,
		ENMA: 97,
		ARMA: 97,
		ENNZ: 49,
		ENOM: 86,
		AROM: 86,
		ENPH: 82,
		ENQA: 85,
		ARQA: 85,
		ENSA: 85,
		AR: 85,
		ARSA: 85,
		ENSY: 69,
		ARSY: 69,
		ENTN: 100,
		ARTN: 100,
		ENTT: 66,
		ENUS: 48,
		EN: 48,
		ENYE: 85,
		ARYE: 85,
		ENZW: 101,
		ESAR: 36,
		ENAR: 36,
		ESBO: 38,
		ENBO: 38,
		ESCL: 35,
		ENCL: 35,
		ESCO: 36,
		ENCO: 36,
		ESCR: 26,
		ENCR: 26,
		ESDO: 63,
		ENDO: 63,
		ESEC: 36,
		ENEC: 36,
		ESES: 33,
		ES: 33,
		ENES: 33,
		ESGT: 61,
		ENGT: 61,
		ESHN: 58,
		ENHN: 58,
		ESMX: 49,
		ENMX: 49,
		ESNI: 55,
		ENNI: 55,
		ESPA: 52,
		ENPA: 52,
		ESPE: 65,
		ENPE: 65,
		ESPR: 48,
		ENPR: 48,
		ESPY: 39,
		ENPY: 39,
		ESSV: 49,
		ENSV: 49,
		ESUY: 37,
		ENUY: 37,
		ESVE: 46,
		ENVE: 46,
		ETEE: 20,
		ENEE: 20,
		FAIR: 85,
		FA: 85,
		ENIR: 85,
		FIFI: 20,
		FI: 20,
		ENFI: 20,
		FOFO: 68,
		FO: 68,
		ENFO: 68,
		FRBE: 18,
		ENBE: 18,
		FRCA: 13,
		FRCH: 47,
		FRFR: 18,
		FR: 18,
		ENFR: 18,
		FRLU: 33,
		FRMC: 18,
		ENMC: 18,
		HEIL: 78,
		ENIL: 78,
		HIIN: 83,
		HI: 83,
		ENIN: 83,
		HRHR: 29,
		ENHR: 29,
		HUHU: 14,
		HU: 14,
		ENHU: 14,
		HYAM: 88,
		IDID: 41,
		ENID: 41,
		ISIS: 67,
		IS: 67,
		ENIS: 67,
		ITCH: 102,
		ITIT: 33,
		IT: 33,
		ENIT: 33,
		JAJP: 72,
		JA: 72,
		ENJP: 72,
		KAGE: 91,
		ENGE: 91,
		KKKZ: 74,
		ENKZ: 74,
		KOKR: 77,
		KO: 77,
		ENKR: 77,
		KYKG: 74,
		KY: 74,
		ENKG: 74,
		LTLT: 19,
		ENLT: 19,
		LVLV: 21,
		ENLV: 21,
		MNMN: 81,
		ENMN: 81,
		MSBN: 49,
		ENBN: 49,
		MSMY: 64,
		ENMY: 64,
		MTMT: 79,
		NBNO: 25,
		NB: 25,
		ENNO: 25,
		NLBE: 42,
		NLNL: 44,
		ENNL: 44,
		NNNO: 68,
		NN: 68,
		PLPL: 17,
		PL: 17,
		ENPL: 17,
		PTBR: 40,
		ENBR: 40,
		PTPT: 18,
		PT: 18,
		ENPT: 18,
		RORO: 31,
		RO: 31,
		ENRO: 31,
		RURU: 23,
		RU: 23,
		ENRU: 23,
		SKSK: 20,
		ENSK: 20,
		SLSI: 34,
		ENSI: 34,
		SQAL: 59,
		SRBA: 28,
		SR: 28,
		ENBA: 28,
		SVSE: 16,
		SV: 16,
		ENSE: 16,
		SWKE: 94,
		SW: 94,
		ENKE: 94,
		THTH: 75,
		TH: 75,
		ENTH: 75,
		TRTR: 45,
		TR: 45,
		ENTR: 45,
		UKUA: 22,
		UK: 22,
		ENUA: 22,
		URPK: 76,
		UR: 76,
		ENPK: 76,
		UZUZ: 74,
		ENUZ: 74,
		VIVN: 32,
		ENVN: 32,
		ZHCN: 73,
		ZH: 73,
		ENCN: 73,
		ZHHK: 56,
		ENHK: 56,
		ZHMO: 98,
		ENMO: 98,
		ZHSG: 51,
		ENSG: 51,
		ZHTW: 60,
		ENTW: 60,
		ENNG: 104};b.DEFAULT = {sep: ',', dPnt: '.', ccy: '$', ccy_r: ''};b.CCY_CONVENTIONS = [{indx: 0, sep: ',', dPnt: '.', ccy: '$', ccy_r: '', precision: 2, enum_date: 0}, {indx: 1,
		sep: '.',
		dPnt: ',',
		ccy: '$',
		ccy_r: '',
		precision: 2,
		enum_date: 0}, {indx: 2, sep: ',', dPnt: '.', ccy: '\u00a3', ccy_r: '', precision: 2, enum_date: 1}, {indx: 3, sep: ',', dPnt: '.', ccy: '', ccy_r: '', precision: 2, enum_date: 2}, {indx: 4, sep: ',', dPnt: '.', ccy: '\u20ac', ccy_r: '', precision: 2, enum_date: 2}, {indx: 5, sep: '.', dPnt: ',', ccy: '\u20ac', ccy_r: '', precision: 2, enum_date: 2}, {indx: 6, sep: ' ', dPnt: ',', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 2}, {indx: 7, sep: '.', dPnt: ',', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 2}, {indx: 8, sep: ' ', dPnt: '.', ccy: 'R', ccy_r: '', precision: 2, enum_date: 2},
	{indx: 9, sep: ' ', dPnt: ',', ccy: 'kr', ccy_r: '', precision: 2, enum_date: 2}, {indx: 10, sep: ',', dPnt: '.', ccy: '\u20a6', ccy_r: '', precision: 2, enum_date: 2}, {indx: 11, sep: ',', dPnt: '.', ccy: '\u0e3f', ccy_r: '', precision: 2, enum_date: 2}, {indx: 12, sep: ',', dPnt: '.', ccy: '', ccy_r: '', precision: 2, enum_date: 2}, {indx: 13, dPnt: ',', sep: ' ', ccy: '', ccy_r: '$', precision: 2, enum_date: 2}, {indx: 14, dPnt: ',', sep: ' ', ccy: '', ccy_r: 'Ft', precision: 2, enum_date: 5}, {indx: 15, dPnt: ',', sep: ' ', ccy: '', ccy_r: 'K\u010d', precision: 2, enum_date: 3}, {indx: 16,
		dPnt: ',',
		sep: ' ',
		ccy: '',
		ccy_r: 'kr',
		precision: 2,
		enum_date: 2}, {indx: 17, dPnt: ',', sep: ' ', ccy: '', ccy_r: 'z\u0142', precision: 2, enum_date: 3}, {indx: 18, dPnt: ',', sep: ' ', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 1}, {indx: 19, dPnt: ',', sep: ' ', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 2}, {indx: 20, dPnt: ',', sep: ' ', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 3}, {indx: 21, dPnt: ',', sep: ' ', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 5}, {indx: 22, dPnt: ',', sep: ' ', ccy: '', ccy_r: '\u20b4', precision: 2, enum_date: 3}, {indx: 23,
		dPnt: ',',
		sep: ' ',
		ccy: '',
		ccy_r: '\u20bd',
		precision: 2,
		enum_date: 3}, {indx: 24, dPnt: ',', sep: ' ', ccy: 'R', ccy_r: '', precision: 2, enum_date: 6}, {indx: 25, dPnt: ',', sep: ' ', ccy: 'kr', ccy_r: '', precision: 2, enum_date: 3}, {indx: 26, dPnt: ',', sep: ' ', ccy: '\u20a1', ccy_r: '', precision: 2, enum_date: 1}, {indx: 27, dPnt: ',', sep: '', ccy: '', ccy_r: '\u043b\u0432', precision: 2, enum_date: 3}, {indx: 28, dPnt: ',', sep: '.', ccy: '', ccy_r: 'KM', precision: 2, enum_date: 3}, {indx: 29, dPnt: ',', sep: '.', ccy: '', ccy_r: 'kn', precision: 2, enum_date: 3}, {indx: 30,
		dPnt: ',',
		sep: '.',
		ccy: '',
		ccy_r: 'kr',
		precision: 2,
		enum_date: 3}, {indx: 31, dPnt: ',', sep: '.', ccy: '', ccy_r: 'lei', precision: 2, enum_date: 3}, {indx: 32, dPnt: ',', sep: '.', ccy: '', ccy_r: '\u20ab', precision: 0, enum_date: 1}, {indx: 33, dPnt: ',', sep: '.', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 1}, {indx: 34, dPnt: ',', sep: '.', ccy: '', ccy_r: '\u20ac', precision: 2, enum_date: 3}, {indx: 35, dPnt: ',', sep: '.', ccy: '$', ccy_r: '', precision: 0, enum_date: 4}, {indx: 36, dPnt: ',', sep: '.', ccy: '$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 37,
		dPnt: ',',
		sep: '.',
		ccy: '$U',
		ccy_r: '',
		precision: 2,
		enum_date: 1}, {indx: 38, dPnt: ',', sep: '.', ccy: '$b', ccy_r: '', precision: 2, enum_date: 1}, {indx: 39, dPnt: ',', sep: '.', ccy: 'Gs', ccy_r: '', precision: 0, enum_date: 1}, {indx: 40, dPnt: ',', sep: '.', ccy: 'R$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 41, dPnt: ',', sep: '.', ccy: 'Rp', ccy_r: '', precision: 2, enum_date: 1}, {indx: 42, dPnt: ',', sep: '.', ccy: '\u20ac', ccy_r: '', precision: 2, enum_date: 1}, {indx: 43, dPnt: ',', sep: '.', ccy: '\u20ac', ccy_r: '', precision: 2, enum_date: 3}, {indx: 44,
		dPnt: ',',
		sep: '.',
		ccy: '\u20ac',
		ccy_r: '',
		precision: 2,
		enum_date: 4}, {indx: 45, dPnt: ',', sep: '.', ccy: '\u20ba', ccy_r: '', precision: 2, enum_date: 3}, {indx: 46, dPnt: ',', sep: '.', ccy: 'VES', ccy_r: '', precision: 2, enum_date: 1}, {indx: 47, dPnt: '.', sep: '\u202f', ccy: '', ccy_r: 'CHF', precision: 2, enum_date: 3}, {indx: 48, dPnt: '.', sep: ',', ccy: '$', ccy_r: '', precision: 2, enum_date: 0}, {indx: 49, dPnt: '.', sep: ',', ccy: '$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 50, dPnt: '.', sep: ',', ccy: '$', ccy_r: '', precision: 2, enum_date: 2}, {indx: 51,
		dPnt: '.',
		sep: ',',
		ccy: '$',
		ccy_r: '',
		precision: 2,
		enum_date: 6}, {indx: 52, dPnt: '.', sep: ',', ccy: 'B/.', ccy_r: '', precision: 2, enum_date: 0}, {indx: 53, dPnt: '.', sep: ',', ccy: 'BZ$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 54, dPnt: '.', sep: ',', ccy: 'Br', ccy_r: '', precision: 2, enum_date: 0}, {indx: 55, dPnt: '.', sep: ',', ccy: 'C$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 56, dPnt: '.', sep: ',', ccy: 'HK$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 57, dPnt: '.', sep: ',', ccy: 'J$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 58, dPnt: '.', sep: ',', ccy: 'L', ccy_r: '', precision: 2, enum_date: 1}, {indx: 59,
		dPnt: '.',
		sep: ',',
		ccy: 'Lek',
		ccy_r: '',
		precision: 2,
		enum_date: 0}, {indx: 60, dPnt: '.', sep: ',', ccy: 'NT$', ccy_r: '', precision: 2, enum_date: 6}, {indx: 61, dPnt: '.', sep: ',', ccy: 'Q', ccy_r: '', precision: 2, enum_date: 1}, {indx: 62, dPnt: '.', sep: ',', ccy: 'R', ccy_r: '', precision: 2, enum_date: 0}, {indx: 63, dPnt: '.', sep: ',', ccy: 'RD$', ccy_r: '', precision: 2, enum_date: 1}, {indx: 64, dPnt: '.', sep: ',', ccy: 'RM', ccy_r: '', precision: 2, enum_date: 1}, {indx: 65, dPnt: '.', sep: ',', ccy: 'S/.', ccy_r: '', precision: 2, enum_date: 1}, {indx: 66,
		dPnt: '.',
		sep: ',',
		ccy: 'TT$',
		ccy_r: '',
		precision: 2,
		enum_date: 1}, {indx: 67, dPnt: '.', sep: ',', ccy: 'kr', ccy_r: '', precision: 0, enum_date: 0}, {indx: 68, dPnt: '.', sep: ',', ccy: 'kr', ccy_r: '', precision: 2, enum_date: 0}, {indx: 69, dPnt: '.', sep: ',', ccy: '\u00a3', ccy_r: '', precision: 0, enum_date: 0}, {indx: 70, dPnt: '.', sep: ',', ccy: '\u00a3', ccy_r: '', precision: 2, enum_date: 0}, {indx: 71, dPnt: '.', sep: ',', ccy: '\u00a3', ccy_r: '', precision: 2, enum_date: 1}, {indx: 72, dPnt: '.', sep: ',', ccy: '\u00a5', ccy_r: '', precision: 0, enum_date: 6}, {indx: 73,
		dPnt: '.',
		sep: ',',
		ccy: '\u00a5',
		ccy_r: '',
		precision: 2,
		enum_date: 6}, {indx: 74, dPnt: '.', sep: ',', ccy: '\u043b\u0432', ccy_r: '', precision: 2, enum_date: 0}, {indx: 75, dPnt: '.', sep: ',', ccy: '\u0e3f', ccy_r: '', precision: 2, enum_date: 1}, {indx: 76, dPnt: '.', sep: ',', ccy: '\u20a8', ccy_r: '', precision: 2, enum_date: 0}, {indx: 77, dPnt: '.', sep: ',', ccy: '\u20a9', ccy_r: '', precision: 0, enum_date: 5}, {indx: 78, dPnt: '.', sep: ',', ccy: '\u20aa', ccy_r: '', precision: 2, enum_date: 3}, {indx: 79, dPnt: '.', sep: ',', ccy: '\u20ac', ccy_r: '', precision: 2, enum_date: 0}, {indx: 80,
		dPnt: '.',
		sep: ',',
		ccy: '\u20ac',
		ccy_r: '',
		precision: 2,
		enum_date: 1}, {indx: 81, dPnt: '.', sep: ',', ccy: '\u20ae', ccy_r: '', precision: 2, enum_date: 0}, {indx: 82, dPnt: '.', sep: ',', ccy: '\u20b1', ccy_r: '', precision: 2, enum_date: 1}, {indx: 83, dPnt: '.', sep: ',', ccy: '\u20b9', ccy_r: '', precision: 2, enum_date: 1}, {indx: 84, dPnt: '.', sep: ',', ccy: '\u20bc', ccy_r: '', precision: 2, enum_date: 0}, {indx: 85, dPnt: '.', sep: ',', ccy: '\ufdfc', ccy_r: '', precision: 2, enum_date: 0}, {indx: 86, dPnt: '.', sep: ',', ccy: '\ufdfc', ccy_r: '', precision: 3, enum_date: 0}, {indx: 87,
		dPnt: '.',
		sep: ',',
		ccy: 'AED',
		ccy_r: '',
		precision: 2,
		enum_date: 0}, {indx: 88, dPnt: '.', sep: ',', ccy: 'AMD', ccy_r: '', precision: 2, enum_date: 0}, {indx: 89, dPnt: '.', sep: ',', ccy: 'BHD', ccy_r: '', precision: 3, enum_date: 0}, {indx: 90, dPnt: '.', sep: ',', ccy: 'DZD', ccy_r: '', precision: 2, enum_date: 0}, {indx: 91, dPnt: '.', sep: ',', ccy: 'GEL', ccy_r: '', precision: 2, enum_date: 0}, {indx: 92, dPnt: '.', sep: ',', ccy: 'IQD', ccy_r: '', precision: 3, enum_date: 0}, {indx: 93, dPnt: '.', sep: ',', ccy: 'JOD', ccy_r: '', precision: 3, enum_date: 0}, {indx: 94,
		dPnt: '.',
		sep: ',',
		ccy: 'KES',
		ccy_r: '',
		precision: 2,
		enum_date: 1}, {indx: 95, dPnt: '.', sep: ',', ccy: 'KWD', ccy_r: '', precision: 3, enum_date: 0}, {indx: 96, dPnt: '.', sep: ',', ccy: 'LYD', ccy_r: '', precision: 3, enum_date: 0}, {indx: 97, dPnt: '.', sep: ',', ccy: 'MAD', ccy_r: '', precision: 2, enum_date: 0}, {indx: 98, dPnt: '.', sep: ',', ccy: 'MOP', ccy_r: '', precision: 2, enum_date: 6}, {indx: 99, dPnt: '.', sep: ',', ccy: 'MVR', ccy_r: '', precision: 2, enum_date: 0}, {indx: 100, dPnt: '.', sep: ',', ccy: 'TND', ccy_r: '', precision: 3, enum_date: 0}, {indx: 101,
		dPnt: '.',
		sep: ',',
		ccy: 'ZWL',
		ccy_r: '',
		precision: 2,
		enum_date: 1}, {indx: 102, dPnt: '.', sep: '\u2019', ccy: 'CHF', ccy_r: '', precision: 2, enum_date: 1}, {indx: 103, dPnt: '.', sep: '\u2019', ccy: 'CHF', ccy_r: '', precision: 2, enum_date: 3}, {indx: 104, dPnt: '.', sep: ',', ccy: '\u20a6', ccy_r: '', precision: 2, enum_date: 3}];b.DATE_FORMATS = {MDY: 0, DMY: 1, YMD: 2, DMY2: 3, DMY3: 4, YMD2: 5, YMD3: 6};b.DATE_FORMAT_STRS = 'MM/DD/YYYY DD/MM/YYYY YYYY-MM-DD DD.MM.YYYY DD-MM-YYYY YYYY.MM.DD YYYY/MM/DD'.split(' ');b.DATE_CONVENTIONS = [{date_format: 0,
		date_mask: 'MM/DD/YYYY',
		date_sep: '/',
		sep_pos1: 2,
		sep_pos2: 5}, {date_format: 1, date_mask: 'DD/MM/YYYY', date_sep: '/', sep_pos1: 2, sep_pos2: 5}, {date_format: 2, date_mask: 'YYYY-MM-DD', date_sep: '-', sep_pos1: 4, sep_pos2: 7}, {date_format: 3, date_mask: 'DD.MM.YYYY', date_sep: '.', sep_pos1: 2, sep_pos2: 5}, {date_format: 4, date_mask: 'DD-MM-YYYY', date_sep: '-', sep_pos1: 2, sep_pos2: 5}, {date_format: 5, date_mask: 'YYYY.MM.DD', date_sep: '.', sep_pos1: 4, sep_pos2: 7}, {date_format: 6, date_mask: 'YYYY/MM/DD', date_sep: '/', sep_pos1: 4, sep_pos2: 7}];b.ROW_TYPES = {DETAIL: 0, ANNUAL_TOTALS: 1, RUNNING_TOTALS: 2};
	b.STR_FREQUENCIES = [];b.STR_FREQUENCIES[6] = 'Monthly';b.CURRENCIES = {EUR: '\u20ac', GBP: '\u00a3', INR: '\u20b9', JPY: '\u00a5', KPW: '\u20a9', THB: '\u0e3f', USD: '$'};b.INITIAL_PERIOD_TYPE = {REGULAR: 1};b.EMPTY_STR = '';b.PCT = '%';b.US_DECIMAL = '.';b.MONTHS = [b.strs.s014, b.strs.s015, b.strs.s016, b.strs.s017, b.strs.s018, b.strs.s019, b.strs.s020, b.strs.s021, b.strs.s022, b.strs.s023, b.strs.s024, b.strs.s025];b.MIN_YEAR = 1970;b.MIN_DATE = new Date(b.MIN_YEAR, 0, 1, 0, 0, 0, 0);b.MAX_YEAR = 2099;b.MAX_DATE = new Date(b.MAX_YEAR, 11, 31, 0, 0,
		0, 0);b.INITIAL_CASH_FLOWS = 500;b.DIY = 0;b.PPY = [];b.PPY[6] = 12;b.LIPM = 2;b.SIPM = 2;b.displayExceptionMsg = function(a){
		alert(a);
	};b.print_calc = function(){
		window.print();
	};b.focusSelect = function(a){
		a.onfocus = function(){
			a.select();
		};
	};b.stripCharsInBag = function(a, c){
		var d, h = '';

		for(d = 0;d < a.length;d += 1){
			var m = a.charAt(d);

			-1 === c.indexOf(m) && (h += m);
		}return h;
	};b.StringBuffer = function(){
		this.buffer = [];
	};b.StringBuffer.prototype.append = function(a){
		this.buffer.push(a);return this;
	};b.StringBuffer.prototype.toString = function(){
		return this.buffer.join('');
	};
	b.LocalConventions = function(a){
		if(void 0 === a){
			if(a = (new Intl.NumberFormat).resolvedOptions(), a.locale){
				if(a = a.locale.replace('-', ''), a = a.toUpperCase(), a = b.CCY_FORMATS[a], void 0 === a || 0 > a || 93 < a){
					a = b.CCY_FORMATS.ENUS;
				}
			}else {
				a = b.CCY_FORMATS.ENUS;
			}
		}void 0 !== b.CCY_CONVENTIONS[a] ? (this.ccy_format = a, this.sep = b.CCY_CONVENTIONS[a].sep, this.dPnt = b.CCY_CONVENTIONS[a].dPnt, this.ccy = b.CCY_CONVENTIONS[a].ccy, this.ccy_r = b.CCY_CONVENTIONS[a].ccy_r, this.precision = b.CCY_CONVENTIONS[a].precision) : (this.ccy_format = b.CCY_FORMATS.ENUS,
		this.sep = ',', this.dPnt = '.', this.ccy_r = this.ccy = '', this.precision = 2);
	};b.LocalConventions.prototype.numConvention = function(){
		var a = new b.LocalConventions(this.ccy_format);

		a.ccy = '';a.ccy_r = '';return a;
	};b.LocalConventions.prototype.rateConvention = function(){
		var a = new b.LocalConventions(this.ccy_format);

		a.ccy = '';a.ccy_r = '%';return a;
	};b.LocalDateConventions = function(a){
		if(void 0 === a || null === a){
			a = (new Intl.NumberFormat).resolvedOptions();if(a.locale){
				if(a = a.locale.replace('-', ''), a = a.toUpperCase(), a = b.CCY_FORMATS[a],
				!a || 0 > a || 93 < a){
					a = b.CCY_FORMATS.ENUS;
				}
			}else {
				a = b.CCY_FORMATS.ENUS;
			}a = b.CCY_CONVENTIONS[a].enum_date;if(void 0 === a || null === a || 0 > a || 6 < a){
				a = b.DATE_FORMATS.ENUS;
			}
		}void 0 !== b.DATE_CONVENTIONS[a] ? (this.date_format = a, this.date_mask = b.DATE_CONVENTIONS[a].date_mask, this.date_sep = b.DATE_CONVENTIONS[a].date_sep, this.sep_pos1 = b.DATE_CONVENTIONS[a].sep_pos1, this.sep_pos2 = b.DATE_CONVENTIONS[a].sep_pos2) : (this.date_format = 2, this.date_mask = b.DATE_FORMATS.YMD, this.date_sep = '-', this.sep_pos1 = 4, this.sep_pos2 = 7);
	};b.dateNow = new Date;
	b.yearNow = b.dateNow.getFullYear().toString();b.monthNowName = b.MONTHS[b.dateNow.getMonth()];b.monthNow = ('0' + (b.dateNow.getMonth() + 1)).slice(-2);b.dayNow = '01';b.pmt_method = 0;b.pmt_frequency = 6;b.cmp_frequency = 6;b.ppy = b.PPY[b.pmt_frequency];b.cmpPPY = b.PPY[b.cmp_frequency];b.moneyConventions = new b.LocalConventions;b.rateConventions = b.moneyConventions.rateConvention();b.numConventions = b.moneyConventions.numConvention();b.resetNumConventions = function(a){
		'number' === typeof a && a !== b.moneyConventions.ccy_format &&
(b.moneyConventions = new b.LocalConventions(a), b.rateConventions = b.moneyConventions.rateConvention(), b.numConventions = b.moneyConventions.numConvention(), Cookies.set('ccy_format', a, {expires: Infinity}));
	};b.updateNumConventions = function(a){
		a !== b.moneyConventions.ccy_format && void 0 !== b.CCY_CONVENTIONS[a].sep && (b.moneyConventions.ccy_format = a, b.moneyConventions.sep = b.CCY_CONVENTIONS[a].sep, b.moneyConventions.dPnt = b.CCY_CONVENTIONS[a].dPnt, b.moneyConventions.ccy = b.CCY_CONVENTIONS[a].ccy, b.moneyConventions.ccy_r =
b.CCY_CONVENTIONS[a].ccy_r, b.moneyConventions.precision = b.CCY_CONVENTIONS[a].precision, b.rateConventions.ccy_format = a, b.rateConventions.sep = b.moneyConventions.sep, b.rateConventions.dPnt = b.moneyConventions.dPnt, b.rateConventions.precision = b.moneyConventions.precision, b.numConventions.ccy_format = a, b.numConventions.sep = b.moneyConventions.sep, b.numConventions.dPnt = b.moneyConventions.dPnt, b.numConventions.precision = b.moneyConventions.precision);
	};b.dateConventions = new b.LocalDateConventions;b.sortConventions =
new b.LocalDateConventions(b.DATE_FORMATS.YMD);b.resetDateConventions = function(a){
		a !== b.dateConventions.date_format && (b.dateConventions = new b.LocalDateConventions(a), Cookies.set('date_format', parseInt(a, 10), {expires: Infinity}));
	};b.updateDateConventions = function(a){
		a !== b.dateConventions.date_format && (b.dateConventions = new b.LocalDateConventions(a));
	};b.evenRound = function(a, c){
		c = c || 0;var d = Math.pow(10, c);

		a = +(c ? a * d : a).toFixed(8);var h = Math.floor(a), m = a - h;

		a = 0.49999999 < m && 0.50000001 > m ? 0 === h % 2 ? h : h + 1 : Math.round(a);
		return c ? a / d : a;
	};b.roundMoney = function(a, c, d){
		0 === c && (a = 0 <= a ? Math.round(a) + 1E-4 : Math.round(a) - 1E-4, c = 4);var h = Math.pow(10, c || 2);

		return void 0 === a || null === a || 'number' !== typeof a ? '' : void 0 !== d && d ? b.evenRound(a, c) : Math.round(a * h) / h;
	};b.addSeparators = function(a, c, d, h){
		var m = a.indexOf(d), f = /(\d+)(\d{3})/, l = '', g;

		for(g = 0;g < a.length;g += 1){
			a.charAt(g) !== c && (l += a.charAt(g));
		}if(-1 === m && 0 < h){
			for(;1 < l.length && '0' === l.charAt(0) || '-' === l.charAt(0) && 2 < l.length && '0' === l.charAt(1);){
				l = l.substr(1, l.length - 1);
			}for(;f.test(l);){
				l =
l.replace(f, '$1' + c + '$2');
			}return l;
		}if(-1 === m && 0 === h){
			for(;f.test(l) && '' !== c;){
				l = l.replace(f, '$1' + c + '$2');
			}return l;
		}for(a = l.split(d);f.test(a[0]) && '' !== c;){
			a[0] = a[0].replace(f, '$1' + c + '$2');
		}return 0 !== h && a[1].length <= h ? a[0] + d + a[1] : 0 !== h ? a[0] + d + a[1].substr(0, h) : a[0];
	};var p = function(a, c, d){
		'string' === typeof a && (a = parseFloat(a));return a.toLocaleString('en-IN', {maximumFractionDigits: d, minimumFractionDigits: d, style: '' !== c ? 'currency' : 'decimal', currency: 'INR'});
	};

	b.getLocalNumStr = function(a, c){
		if(null === a){
			return'';
		}
		a += b.EMPTY_STR;c !== b.US_DECIMAL && (a = a.replace(/\./, c));return a;
	};b.formatFloat = function(a, c, d, h){
		var m = b.getLocalNumStr(a, d), f = m.indexOf(d);

		if(null === m || 0 === m.length){
			return b.EMPTY_STR;
		}-1 === f && 0 !== h && (m += d, f = m.length - 1);if(0 < h){
			for(;m.length - 1 - f < h;){
				m += '0';
			}
		}return 83 !== this.moneyConventions.ccy_format || 83 === this.moneyConventions.ccy_format && '%' === this.numConventions.ccy_r ? b.addSeparators(m, c, d, h) : p(a, this.numConventions.ccy, h);
	};b.formatLocalFloat = function(a, c, d){
		d = 0 === d ? 0 : '%' === c.ccy_r || '' === c.ccy &&
'' === c.ccy_r ? d : c.precision;'number' === typeof a && (a = b.roundMoney(a, d, !1));'' === c.dPnt && (c.dPnt = '.');var h = b.getLocalNumStr(a, c.dPnt), m = h.indexOf(c.dPnt);

		if(null === h || 0 === h.length){
			return b.EMPTY_STR;
		}if('u' === h.charAt(0) || 'U' === h.charAt(0)){
			return b.UNKNOWN_STR;
		}if(83 === this.moneyConventions.ccy_format && '%' !== c.ccy_r){
			return p(a, c.ccy, d);
		}-1 === m && 0 !== d && (h += c.dPnt, m = h.length - 1);if(0 < d){
			for(;h.length - 1 - m < d;){
				h += '0';
			}
		}h = b.addSeparators(h, c.sep, c.dPnt, d);'' !== c.ccy && h.charAt(0) !== c.ccy ? h = c.ccy + h : '' !== c.ccy_r &&
h.charAt(h.length - 1) !== c.ccy_r && (h += c.ccy_r);return h;
	};b.getUSNumStr = function(a, c, d, h, m){
		a !== b.UNKNOWN_STR ? (c = '.' !== c ? c : '\\.', a = a.replace('' !== h ? new RegExp('\\' + h + '|' + h + '|' + c, 'g') : new RegExp('\\' + m + '|' + m + '|' + c, 'g'), b.EMPTY_STR), d !== b.US_DECIMAL && (a = a.replace(d, b.US_DECIMAL)), a.charAt(a.length - 1) === b.PCT && (a = a.slice(0, -1))) : a = '0';return a;
	};b.getUSNum = function(a, c, d){
		a = b.getUSNumStr(a, c.sep, c.dPnt, c.ccy, c.ccy_r);return d ? parseFloat(a) : parseInt(a, 10);
	};e = function(a, c, d){
		this.isValid = !1;this.element = document.getElementById(a);
		null !== this.element && (this.id = a, this.conventions = c && null !== c ? c : b.moneyConventions, this.ccy_format = c.ccy_format, this.precision = void 0 !== d ? d : 2, this.sep = c.sep, this.dPnt = c.dPnt, this.ccy = c.ccy, this.ccy_r = c.ccy_r, this.PCT = '%', this.customMouseUpHandler = this.customKeyDownHandler = this.customKeyPressHandler = this.customBlurHandler = null, this.UNKNOWN_STR = b.UNKNOWN_STR, this.isTableEditor = !1, this.init(), this.isValid = !0);
	};b.NE = e;e.prototype.initRateEditor = function(){
		this.ccy = '';this.ccy_r = '%';
	};e.prototype.initNumEditor =
function(){
	this.ccy_r = this.ccy = '';
};e.prototype.addEvent = function(a, c, d){
		if('function' === typeof window.addEventListener){
			var h = function(m){
				c.call(d, m);
			};

			this.element.addEventListener(a, h, !1);
		}else {
			h = function(){
				c.call(d, window.event);
			}, this.element.attachEvent('on' + a, h);
		}return h;
	};e.prototype.init = function(){
		this.isTableEditor || (this.customBlurHandler = this.addEvent('blur', this.onCustomBlur, this));this.customKeyPressHandler = this.addEvent('keypress', this.onCustomKeyPress, this);this.customKeyDownHandler = this.addEvent('keydown',
			this.onCustomKeyDown, this);this.customMouseUpHandler = this.addEvent('mouseup', this.onCustomMouseUp, this);
	};e.prototype.removeEvent = function(a, c){
		'function' === typeof window.addEventListener ? this.element.removeEventListener(a, c, !1) : this.element.detachEvent('on' + a, c);
	};e.prototype.destroy = function(){
		this.removeEvent('mouseup', this.customMouseUpHandler);this.customMouseUpHandler = null;this.removeEvent('keydown', this.customKeyDownHandler);this.customKeyDownHandler = null;this.removeEvent('keypress', this.customKeyPressHandler);
		this.customKeyPressHandler = null;this.isTableEditor || (this.removeEvent('blur', this.customBlurHandler), this.customBlurHandler = null);this.element = null;
	};e.prototype.onCustomKeyDown = function(a){
		return 46 === a.keyCode ? (a.preventDefault(), alert(b.ERR_MSGS.noDelKey), !1) : 37 === a.keyCode || 33 === a.keyCode || 34 === a.keyCode || 35 === a.keyCode || 36 === a.keyCode || 38 === a.keyCode || 40 === a.keyCode ? (this.isTableEditor || alert(b.ERR_MSGS.noCurKeys), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1) : 188 === a.keyCode && ',' ===
this.sep || (110 === a.keyCode || 190 === a.keyCode) && '.' === this.sep || 32 === a.keyCode && ' ' === this.sep ? (alert(b.ERR_MSGS.noSeparators), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1) : !0;
	};e.prototype.onCustomKeyPress = function(a){
		var c = 0 <= this.element.value.indexOf(this.dPnt);

		if(a.which){
			var d = 0 !== this.element.selectionEnd - this.element.selectionStart;var h = a.which;
		}else if(window.event){
			h = document.selection.createRange(), d = '' !== h.text, h = a.keyCode;
		}else {
			return 37 === a.keyCode || 33 === a.keyCode || 34 === a.keyCode ||
35 === a.keyCode || 36 === a.keyCode ? (a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1) : !0;
		}var m = String.fromCharCode(h);

		(c = /\d/.test(m) || 8 === h || m === this.dPnt && !c && 0 < this.precision || 45 === h && (0 === this.element.value.length || d)) && !d && 8 !== h && this.element.value.length < this.element.maxLength && 85 !== h && 117 !== h && (d = this.element.value + m, 45 === h ? this.element.value = '' : 1 < d.length && this.element.value !== this.UNKNOWN_STR ? this.element.value = d.substr(0, d.length - 1) : (this.element.value = m, c = !1));c || (a.preventDefault ? a.preventDefault() :
			a.returnValue = !1);return c;
	};e.prototype.onCustomBlur = function(){
		if(0 === this.element.value.length){
			this.element.value = 0;
		}else if(this.element.value === b.UNKNOWN_STR){
			return;
		}this.element.value = b.formatLocalFloat(b.getUSNum(this.element.value, this.conventions, this.precision), this.conventions, this.precision, this.element.maxLength);return!0;
	};e.prototype.onCustomMouseUp = function(a){
		a.preventDefault ? (this.element.selectionStart = 0, this.element.selectionEnd = this.element.value.length, a.preventDefault()) : (this.element.select(),
		a.returnValue = !1);return!1;
	};e.prototype.setValue = function(a){
		this.element.value = b.formatLocalFloat(a, this.conventions, this.precision, this.element.maxLength);
	};e.prototype.getUSNumber = function(){
		var a = this.element.value;

		isNaN(a) && (a = b.getUSNumStr(a, this.sep, this.dPnt, this.ccy, this.ccy_r));return 0 !== this.precision ? parseFloat(a) : parseInt(a, 10);
	};b.dateMath = function(){
		var a = 0, c = 0, d = 0, h = {days: null, periods: null, oddDays: null}, m = function(l, g){
				l.setMonth(l.getMonth() + g);return l.getTime();
			}, f = function(l, g, n){
				var r =
!0;

				if(1 > g || 12 < g || isNaN(g)){
					r = !1;
				}if(l < b.MIN_YEAR || l > b.MAX_YEAR || isNaN(l)){
					r = !1;
				}if((9 === g || 4 === g || 6 === g || 11 === g) && (1 > n || 30 < n)){
					r = !1;
				}else if(2 === g){
					if(1 > n || 29 < n){
						r = !1;
					}
				}else if(1 > n || 31 < n || isNaN(n)){
					r = !1;
				}return r;
			};

		return{addPeriods: function(l, g){
			var n = new Date;

			n.setTime(l.getTime());n.setHours(0, 0, 0, 0);m(n, g);return n.getTime();
		},
		countPeriods: function(l, g){
			d = c = a = 0;if(l.getTime() > g.getTime()){
				return alert(b.strs.s026), !1;
			}if(l.getTime() === g.getTime()){
				return h.days = a, h.periods = c, h.oddDays = d, h;
			}var n = new Date, r = new Date,
				q = new Date, t = 0;

			r.setTime(l.getTime());q.setTime(g.getTime());a = Math.round((q.getTime() - r.getTime()) / b.ONE_DAY);do {
				if(c += 1, n.setTime(q.getTime()), q.setTime(m(q, -1)), t += 1, 1E4 === t){
					throw k;
				}
			}while(q.getTime() > r.getTime() && 1E4 > t);q.getTime() < r.getTime() && (--c, q.setTime(n.getTime()), d = Math.round((q.getTime() - r.getTime()) / b.ONE_DAY));h.days = a;h.periods = c;h.oddDays = d;return h;
		},
		isValidDate: f,
		dateStrToDate: function(l, g){
			var n = [], r = new Date;

			if(g){
				var q = g.date_format;

				g = g.date_sep;
			}else {
				q = b.dateConventions.date_format,
				g = b.dateConventions.date_sep;
			}l = l.split(g);n[0] = parseInt(l[0], 10);n[1] = parseInt(l[1], 10);n[2] = parseInt(l[2], 10);switch(q){
			case b.DATE_FORMATS.MDY:f(n[2], n[0], n[1]) && (r = new Date(n[2], n[0] - 1, n[1], 0, 0, 0, 0));break;case b.DATE_FORMATS.DMY:case b.DATE_FORMATS.DMY2:case b.DATE_FORMATS.DMY3:f(n[2], n[1], n[0]) && (r = new Date(n[2], n[1] - 1, n[0], 0, 0, 0, 0));break;case b.DATE_FORMATS.YMD:case b.DATE_FORMATS.YMD2:case b.DATE_FORMATS.YMD3:f(n[0], n[1], n[2]) && (r = new Date(n[0], n[1] - 1, n[2], 0, 0, 0, 0));
			}return r;
		},
		dateToDateStr: function(l,
			g){
			var n = l.getFullYear();

			if(n < b.MIN_YEAR || n > b.MAX_YEAR){
				throw w;
			}if(g){
				var r = g.date_format;

				g = g.date_sep;
			}else {
				r = b.dateConventions.date_format, g = b.dateConventions.date_sep;
			}var q = ('0' + (l.getMonth() + 1)).slice(-2);

			l = ('0' + l.getDate()).slice(-2);switch(r){
			case b.DATE_FORMATS.MDY:var t = q + g + l + g + n;

				break;case b.DATE_FORMATS.DMY:case b.DATE_FORMATS.DMY2:case b.DATE_FORMATS.DMY3:t = l + g + q + g + n;break;case b.DATE_FORMATS.YMD:case b.DATE_FORMATS.YMD2:case b.DATE_FORMATS.YMD3:t = n + g + q + g + l;
			}return t;
		},
		getFirstNextMonth: function(l){
			return new Date(l.getFullYear(),
				l.getMonth() + 1);
		}};
	}();e = function(a){
		if(void 0 === a || 0 === a){
			a = 100;
		}this.data = [];this.increment = a;this.size = 0;
	};b.Vector = e;b.Vector = e;e.prototype.getCapacity = function(){
		return this.data.length;
	};e.prototype.getSize = function(){
		return this.size;
	};e.prototype.isEmpty = function(){
		return 0 === this.getSize();
	};e.prototype.getLastElement = function(){
		if(null !== this.data[this.getSize() - 1]){
			return this.data[this.getSize() - 1];
		}
	};e.prototype.getFirstElement = function(){
		if(null !== this.data[0]){
			return this.data[0];
		}
	};e.prototype.getElementAt =
function(a){
	try{
		return this.data[a];
	}catch(c){
		return b.strs.s027 + ' ' + c + ' ' + b.strs.s028 + ' ' + a;
	}
};e.prototype.addElement = function(a){
		this.data[this.size] = a;this.size += 1;
	};e.prototype.insertElementAt = function(a, c){
		var d;

		try{
			this.size === this.getCapacity() && this.resize();for(d = this.getSize();d > c;--d){
				this.data[d] = this.data[d - 1];
			}this.data[c] = a;this.size += 1;
		}catch(h){
			return b.strs.s029 + ' ' + d;
		}
	};e.prototype.removeElementAt = function(a){
		var c;

		try{
			var d = this.data[a];

			for(c = a;c < this.getSize() - 1;c += 1){
				this.data[c] = this.data[c +
1];
			}this.data[this.getSize() - 1] = null;--this.size;return d;
		}catch(h){
			return b.strs.s029 + ' ' + a;
		}
	};e.prototype.removeAllElements = function(){
		var a;

		for(a = this.size = 0;a < this.data.length;a += 1){
			this.data[a] = null;
		}
	};e.prototype.indexOf = function(a){
		var c;

		for(c = 0;c < this.getSize();c += 1){
			if(this.data[c] === a){
				return c;
			}
		}return-1;
	};e.prototype.contains = function(a){
		var c;

		for(c = 0;c < this.getSize();c += 1){
			if(this.data[c] === a){
				return!0;
			}
		}return!1;
	};e.prototype.resize = function(){
		var a, c = [];

		for(a = 0;a < this.data.length;a += 1){
			c[a] = this.data[a];
		}
		this.data = c;
	};e.prototype.trimToSize = function(){
		var a, c = [];

		for(a = 0;a < this.getSize();a += 1){
			c[a] = this.data[a];
		}this.size = c.length;this.data = c;
	};e.prototype.sort = function(a){
		var c;

		for(c = 1;c < this.getSize();c += 1){
			var d = this.data[c];var h = d[a];var m = c - 1;var f = this.data[m];

			for(f = f[a];0 <= m && f > h;){
				this.data[m + 1] = this.data[m], --m, 0 <= m && (f = this.data[m], f = f[a]);
			}this.data[m + 1] = d;
		}
	};e.prototype.clone = function(){
		var a, c = new b.Vector(this.size);

		for(a = 0;a < this.size;a += 1){
			'function' === typeof this.data[a].clone ? c.addElement(this.data[a].clone()) :
				c.addElement(this.data[a]);
		}return c;
	};e.prototype.toString = function(){
		var a, c, d = 'Vector Object properties:\nIncrement: ' + this.increment + '\nSize: ' + this.size + '\nElements:\n';

		for(a = 0;a < this.getSize();a += 1){
			for(c in this.data[a]){
				if(this.data[a].hasOwnProperty(c)){
					var h = this.data[a];

					d += '\tObject.' + c + ' = ' + h[c] + '\n';
				}
			}
		}return d;
	};e.prototype.overwriteElementAt = function(a, c){
		this.data[c] = a;
	};return b;
}(FC$);/*
 Copyright 2016-2022 Pine Grove Software, LLC
 AccurateCalculators.com
 pine-grove.com
 equations.js
*/
FC$ = function(e){
	function b(a, c){
		var d = a;

		0 !== w && (c = Math.pow(1 + w, c), d *= c);return d - a;
	}var k = e || {}, w, p = [];

	k.roundingMethod = 0;k.AMORT_MTHD_EXT = {NORMAL: 0};k.AMORT_MTHD_STRS_EXT = ['Normal'];k.schedule = {schedule1: 1};k.summary = {cf: [],
		firstDebitDateStr: '',
		firstCreditDateStr: '',
		lastDebitDateStr: [],
		lastCreditDateStr: [],
		totalNDebits: [],
		totalNCredits: [],
		totalInterest: [],
		totalPmts: [],
		nominalRate: [],
		NYears: 0,
		pointsPct: 0,
		pointsMoney: 0,
		amortMthd: 0,
		DIY: 0,
		unadjustedBalance: 0,
		roundingMethod: k.roundingMethod,
		cashFlowType: 1,
		xPmtTotal: 0};k.fin_params = function(a){
		a = a || {};this.nominalRate = void 0 !== a.nominalRate ? a.nominalRate : null;this.n = a.n || null;this.cf = a.cf || 0;this.pv = a.pv || 0;this.fv = a.fv || 0;this.pmtMthd = void 0 !== a.pmtMthd ? a.pmtMthd : null;this.amortMthd = void 0 !== a.amortMthd ? a.amortMthd : k.AMORT_MTHD_EXT.NORMAL;this.oDate = a.oDate || new Date(0);this.fDate = a.fDate || new Date(0);this.lDate = a.lDate || new Date(0);
	};k.fin_params.prototype.clone = function(){
		return new k.fin_params({nominalRate: this.nominalRate,
			n: this.n,
			cf: this.cf,
			pv: this.pv,
			fv: this.fv,
			pmtFreq: this.pmtFreq,
			cmpFreq: this.cmpFreq,
			daysPerYear: this.daysPerYear,
			pmtMthd: this.pmtMthd,
			amortMthd: this.amortMthd,
			oDate: new Date(this.oDate.valueOf()),
			fDate: new Date(this.fDate.valueOf()),
			lDate: new Date(this.lDate.valueOf())});
	};k.SAVINGS_SCHEDULE = {calc: function(a){
		var c = void 0, d, h = 1, m = 0, f = new Date(0), l = new Date(0), g = [];

		if(void 0 === c || null === c){
			c = e.schedule.schedule1;
		}0 === a.oDate.valueOf() && a.oDate.setTime(e.dateMath.getFirstNextMonth(new Date));0 === a.fDate.valueOf() && a.pmtMthd === e.PMT_METHOD.ARREARS &&
a.fDate.setTime(e.dateMath.addPeriods(a.oDate, 1, a.pmtFreq));if(!(a.oDate.valueOf() > a.fDate.valueOf())){
			k.summary.totalNDebits[c] = 0;k.summary.totalNCredits[c] = 0;k.summary.NYears = 0;k.summary.nominalRate[c] = a.nominalRate;k.summary.pmtFreq = a.pmtFreq;k.summary.cmpFreq = a.cmpFreq;k.summary.amortMthd = a.amortMthd;w = a.nominalRate / e.PPY[a.cmpFreq];var n = d = a.pv;

			if(0 < d){
				var r = d;var q = 0;

				k.summary.totalNCredits[c] += 1;
			}else {
				0 > d ? (q = d, r = 0, k.summary.totalNDebits[c] += 1) : q = r = 0;
			}f.setTime(a.oDate.getTime());var t = e.dateMath.dateToDateStr(f,
				e.dateConventions);

			g.push(['', '', e.ROW_TYPES.DETAIL, '1:' + h, t, d, r, q, m, null, n, d, f.getMonth() + 1, f.getFullYear(), f, f.valueOf()]);var v = 2;

			l.setTime(a.fDate.getTime());t = e.dateMath.dateToDateStr(l, e.dateConventions);var u = a.cf;

			0 < u ? (r = u, q = 0, k.summary.totalNCredits[c] += 1) : 0 > u ? (q = u, r = 0, k.summary.totalNDebits[c] += 1) : q = r = 0;m = e.roundMoney(b(d, 1));n = e.roundMoney(u + m);d = e.roundMoney(d + m + a.cf);g.push(['', '', e.ROW_TYPES.DETAIL, v + ':' + h, t, u, r, q, m, null, n, d, l.getMonth() + 1, l.getFullYear(), l, l.valueOf()]);v = 3;do{
				f.setTime(l.getTime());
				l.setTime(e.dateMath.addPeriods(l, 1, a.pmtFreq));m = e.roundMoney(b(d, 1));n = e.roundMoney(u + m);d = e.roundMoney(d + m + a.cf);t = e.dateMath.dateToDateStr(l, e.dateConventions);0 !== q && (k.summary.totalNDebits[c] += 1);0 !== r && (k.summary.totalNCredits[c] += 1);1 === v % e.PPY[a.pmtFreq] && (h += 1, k.summary.NYears = h);var x = v + ':' + h;

				g.push(['', '', e.ROW_TYPES.DETAIL, x, t, u, r, q, m, null, n, d, l.getMonth() + 1, l.getFullYear(), l, l.valueOf()]);v += 1;
			}while(v <= a.n && 0 < d);a = g[g.length - 1];k.summary.lastDebitDateStr[c] = g[0][4];k.summary.lastCreditDateStr[c] =
a[4];k.summary.unadjustedBalance = d;c = void 0;n = m = q = r = h = x = t = u = v = a = 0;if(void 0 === c || null === c){
				c = e.schedule.schedule1;
			}d = 0;do {
				if(d += 1, a = e.roundMoney(g[d - 1][5] + a), v = e.roundMoney(g[d - 1][6] + v), u = e.roundMoney(g[d - 1][8] + u), t = e.roundMoney(g[d - 1][9] + t), x = e.roundMoney(g[d - 1][10] + x), h = e.roundMoney(g[d - 1][5] + h), r = e.roundMoney(g[d - 1][6] + r), q = e.roundMoney(g[d - 1][8] + q), m = e.roundMoney(g[d - 1][9] + m), n = e.roundMoney(g[d - 1][10] + n), g[d - 1][13] !== g[d][13] && (12 >= g[d - 1][12] || 12 < g[d][12]) || g[d - 1][13] === g[d][13] && 12 >= g[d - 1][12] &&
12 < g[d][12]){
					f = [], f[0] = g[d - 1][0], f[0] = f[0].substr(0, f[0].length - 3) + '-99', f[1] = c, f[2] = e.ROW_TYPES.ANNUAL_TOTALS, f[3] = g[d - 1][13] + ' ' + k.strs.s101 + ':', f[4] = null, f[5] = a, f[6] = v, f[8] = u, f[10] = x, f[9] = t, f[11] = null, f[12] = 12, f[13] = g[d - 1][13], x = t = u = v = a = 0, g.splice(d, 0, f), d += 1, f = [], f[0] = g[d - 1][0], f[0] = f[0].substr(0, f[0].length - 3) + '-99', f[1] = c, f[2] = e.ROW_TYPES.RUNNING_TOTALS, f[3] = k.strs.s102 + ':', f[4] = null, f[5] = h, f[6] = r, f[8] = q, f[10] = n, f[9] = m, f[11] = null, f[12] = 12, f[13] = g[d - 1][13], g.splice(d, 0, f), d += 1;
				}
			}while(d < g.length -
1);g[g.length - 1][2] !== e.ROW_TYPES.RUNNING_TOTALS && (a = e.roundMoney(g[g.length - 1][5] + a), v = e.roundMoney(g[g.length - 1][6] + v), u = e.roundMoney(g[g.length - 1][8] + u), t = e.roundMoney(g[g.length - 1][9] + t), x = e.roundMoney(g[g.length - 1][10] + x), h = e.roundMoney(g[g.length - 1][5] + h), r = e.roundMoney(g[g.length - 1][6] + r), q = e.roundMoney(g[g.length - 1][8] + q), m = e.roundMoney(g[g.length - 1][9] + m), n = e.roundMoney(g[g.length - 1][10] + n), f = [], f[0] = g[d][0], f[0] = f[0].substr(0, f[0].length - 3) + '-99', f[1] = c, f[2] = e.ROW_TYPES.ANNUAL_TOTALS, f[3] =
g[g.length - 1][13] + ' ' + k.strs.s101 + ':', f[4] = null, f[5] = a, f[6] = v, f[8] = u, f[9] = t, f[10] = x, f[11] = null, f[12] = 12, f[13] = g[g.length - 1][13], g.push(f), f = [], f[0] = g[d][0], f[0] = f[0].substr(0, f[0].length - 3) + '-99', f[1] = c, f[2] = e.ROW_TYPES.RUNNING_TOTALS, f[3] = k.strs.s102 + ':', f[4] = null, f[5] = h, f[6] = r, f[8] = q, f[9] = m, f[10] = n, f[11] = null, f[12] = 12, f[13] = g[g.length - 1][13], g.push(f));k.summary.totalInterest[c] = q;k.summary.totalPmts[c] = h;p = g;
		}return p;
	}};return k;
}(FC$);/*
 Copyright 2016-2022 Pine Grove Software, LLC
 AccurateCalculators.com
 pine-grove.com
 interface.schedules_and_charts.js
*/
FC$ = function(e, b){
	var k = e || {}, w = '<title>' + k.strs.s201 + '</title>', p = '<style type="text/css" media="screen">';

	p += 'html,body{margin:0;padding:0;color:#333;height:100%;width:100%;min-width:320px;font-family:"Source Code Pro",monospace; font-size:8px; font-weight:400; overflow: hidden;} body{overflow-y: scroll} tr {line-height: 1.2} @media (min-width: 569px) {html,body{font-size:12px}} @media (min-width: 768px) {html,body{font-size:14px}} .label {font-family: "Roboto", sans-serif;} .medium {font-weight: 600; font-style: italic} .bold {font-weight: 700} .center {text-align: center} .left {text-align: left} .right {text-align: right} .wrapper {padding:1px; width:100%; height: 100%} table {width: 100%; border-collapse:collapse; margin-bottom: 20px;} #rpt tbody tr.totals, #rpt tbody tr:nth-child(even).totals {background-color: transparent;} #rpt tbody tr:nth-child(even) {background: #FCFFFF;} #rpt tbody tr:hover, #rpt tbody tr:hover.totals {background: #303E64; color: #fff; font-weight:400} #rpt tbody::after {content: ""; display: block; height: 29px;} .cHead {background: #303E64; color: #fff} td {padding: 5px 5px;} .spcr {width: 2%} .hCell {width: 24%} .rpt_title {width: 100%; font-size: 120%} .rpt_footer {width: 100%; font-style: italic; font-size: 90%;}  .btn {display: inline-block; margin-bottom: 0; font-weight: normal; vertical-align: middle; touch-action: manipulation; cursor: pointer; background-image: none; border: 1px solid transparent; white-space: nowrap; padding: 6px 12px; font-size: 100%; line-height: 1.42857143; border-radius: 4px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } td.brder {border-top: 1px solid #303E64} #btnPrint {margin-right:15px} #btnCopy {margin-left:15px} tr.empty {background-color: transparent !important; color:#333 !important;} .i {font-style: italic} .altColor{color:#00c} .rpt6col {width: 19%;} .rpt6colvnarrow {width: 7%;} .rpt6colnarrow {width: 15%;} .rpt6colwide {width: 21%;}  ';
	p += '</style></head>';var a = function(d){
			var h = {};var m = new e.StringBuffer;var f = new e.StringBuffer;var l = d.length - 1;

			h = e.summary;w = '<title>' + k.strs.s201 + '</title>';if(0 !== l){
				var g = d[0];var n = g[4];var r = e.formatLocalFloat(g[11], e.moneyConventions, 2);

				r = e.formatLocalFloat(100 * e.summary.nominalRate[1], e.rateConventions, 4);var q = 1;

				do {
					g = d[q], g = g[4], q += 1;
				}while(null === g && q < d.length);g = d[l];q = e.formatLocalFloat(g[6], e.moneyConventions, 2);n = e.formatLocalFloat(g[8], e.moneyConventions, 2);g = h.lastCreditDateStr[1];
				h = e.formatLocalFloat(h.totalNCredits[1], e.numConventions, 0);var t = d[l - 2][13] - d[0][13] + 1;

				f.append('<table>');f.append('<thead>');f.append('<tr class="label rpt_title center bold i"><td colspan="6">Cash Flow Summary</td></tr>');f.append('<tr class="empty"><td colspan="6"></td></tr>');f.append('</thead>');f.append('<tbody>');f.append('<tr><td class="label hCell">' + k.strs.s236 + ':</td><td class="right">' + q + '</td><td class="spcr">&nbsp;</td><td class="spcr">&nbsp;</td><td class="label hCell">' + k.strs.s241 +
':</td><td class="right">' + h + '</td></tr>');f.append('<tr><td class="label hCell">' + k.strs.s242 + ':</td><td class="right">' + r + '</td><td class="spcr">&nbsp;</td><td class="spcr">&nbsp;</td><td class="label hCell">' + k.strs.s243 + ':</td><td class="right">' + n + '</td></tr>');f.append('<tr><td class="label hCell">' + k.strs.s210 + ':</td><td class="right">' + g + '</td><td class="spcr">&nbsp;</td><td class="spcr">&nbsp;</td><td class="label hCell">' + k.strs.s211 + ':</td><td class="right">' + t + '</td></tr>');f.append('</tbody>');
				f.append('</table>');f.append('<table id="rpt">');f.append('<thead>');f.append('<tr class="label rpt_title center bold"><td colspan="7">' + k.strs.s244 + '</td></tr>');f.append('<tr class="empty"><td colspan="7"></td></tr>');f.append('<tr class="label cHead"><td class="rpt6colvnarrow">#/' + k.strs.s219 + '</td><td class="rpt6colnarrow center">' + k.strs.s220 + '</td><td class="rpt6col right">' + k.strs.s245 + '</td><td class="rpt6col right">' + k.strs.s222 + '</td><td class="rpt6col right">' + k.strs.s223 + '</td><td class="rpt6colwide right">' +
k.strs.s224 + '</td></tr>');f.append('</thead>');f.append('<tfoot>');f.append('<tr class="label rpt_footer"><td colspan="5">' + k.strs.s246 + '</td><td colspan="2" class="right">AccurateCalculators.com</td></tr>');f.append('</tfoot>');f.append('<tbody>');for(q = 0;q <= l;q += 1){
					g = d[q];var v = g[3];

					n = g[4];h = e.formatLocalFloat(g[6], e.numConventions, 2);t = e.formatLocalFloat(g[8], e.numConventions, 2);var u = e.formatLocalFloat(g[10], e.numConventions, 2);

					r = e.formatLocalFloat(g[11], e.numConventions, 2);g[2] === e.ROW_TYPES.DETAIL ?
						f.append('<tr><td>' + v + '</td><td class="center">' + n + '</td><td class="right">' + h + '</td><td class="right">' + t + '</td><td class="right">' + u + '</td><td class="right">' + r + '</td></tr>') : g[2] === e.ROW_TYPES.ANNUAL_TOTALS ? f.append('<tr class="totals medium"><td class="right" colspan="2">' + v + '</td><td class="right brder">' + h + '</td><td class="right brder">' + t + '</td><td class="right brder">' + u + '</td><td></td></tr>') : (f.append('<tr class="totals medium"><td class="right" colspan="2">' + v + '</td><td class="right">' +
h + '</td><td class="right">' + t + '</td><td class="right"></td><td></td></tr>'), f.append('<tr class="empty"><td colspan="7"></td></tr>'));
				}f.append('</tbody>');f.append('</table>');
			}m.append('<!DOCTYPE html>');m.append('<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1">');m.append(w);m.append(p);m.append('<body><div class="wrapper">');m.append(f.toString());m.append('</div></body></html>');b.featherlight({iframe: 'about:blank',
				beforeOpen: function(){
					b('body').css({'overflow-y': 'hidden'});
				},
				afterClose: function(){
					b('body').css({'overflow-y': 'scroll'});
				}});d = document.getElementById('featherlight-id-fc');d = d.contentWindow.document || d.contentDocument;d.open();d.write(m.toString());d.close();
		}, c = {html3: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Financial Calculators Charts</title><style type="text/css" media="screen">html,body{margin:0;padding:0;color:#333;height:100%;width:100%;overflow: hidden;} body{overflow-y: scroll} #container{width: 95%; margin: 10px auto;} canvas {margin-bottom:25px;}</style></head><body><div id="container"><canvas id="canvas1"></canvas><canvas id="canvas2"></canvas><canvas id="canvas3"></canvas></div></body></html>',
			L: 0,
			annualTotals: null,
			runningTotals: null,
			totalsPie: null,
			years: null,
			chart0Title: k.strs.s247,
			chart1Title: k.strs.s248,
			chart2Title: k.strs.s231,
			bs_primary_blue: '#337ab7',
			bs_info_blue: '#5bc0de',
			bs_success_green: '#5cb85c',
			bs_orange_warning: '#f0ad4e',
			bs_red_danger: '#d9534f',
			EVENT_DATE: 0,
			LOAN_NO: 1,
			ROW_TYPE: 2,
			PER_STR: 3,
			DATE_STR: 4,
			CF: 5,
			CREDIT: 6,
			DEBIT: 7,
			INT: 8,
			PRIN: 9,
			NET: 10,
			BAL: 11,
			MONTH: 12,
			YEAR: 13,
			annual_int: [],
			annual_prin: [],
			annual_pmt: [],
			annual_credit: [],
			running_int: [],
			running_prin: [],
			running_pmt: [],
			net_change: [],
			bal: [],
			d8: [],
			d9: [],
			d10: [],
			d11: [],
			category: [],
			interest: 0,
			prin: 0,
			rate: 0,
			payments: 0,
			balance: 0,
			strDate: '01/01/1999',
			strDate2: '01/01/1999',
			strDate2bi: '01/01/1999',
			kStr: '' === e.moneyConventions.ccy_r ? 'k' : ' k',
			clear: function(){
				c.L = 0;c.annual_int = [];c.annual_prin = [];c.annual_pmt = [];c.annual_credit = [];c.net_change = [];c.d8 = [];c.d9 = [];c.d10 = [];c.d11 = [];c.running_int = [];c.running_prin = [];c.running_pmt = [];c.bal = [];c.category = [];
			},
			initAnnualSavingsTotalChart: function(d){
				var h = {labels: c.category,
					datasets: [{type: 'bar',
						label: k.strs.s249,
						backgroundColor: 'rgba(217,83,79,0.75)',
						data: c.annual_credit}, {type: 'bar', label: k.strs.s227, backgroundColor: 'rgba(92,184,92,0.75)', data: c.annual_int}, {type: 'line', label: k.strs.s228, borderWidth: 1, borderColor: 'rgba(51,51,51,0.5)', pointBackgroundColor: 'rgba(0,0,0,0.75)', data: c.net_change}]};

				d = d.getElementById('canvas1').getContext('2d');c.runningTotals = new Chart(d, {type: 'bar',
					data: h,
					options: {title: {display: !0, text: c.chart0Title},
						tooltips: {mode: 'label',
							callbacks: {label: function(m){
								return e.formatLocalFloat(m.yLabel,
									e.moneyConventions, 0);
							}}},
						responsive: !0,
						scales: {xAxes: [{stacked: !0}],
							yAxes: [{stacked: !0,
								ticks: {callback: function(m){
									return e.formatLocalFloat(m / 1E3, e.moneyConventions, 0) + c.kStr;
								}}}]}}});
			},
			initAccumulatedSavingsTotalChart: function(d){
				var h = {labels: c.category,
					datasets: [{type: 'bar', label: k.strs.s250, backgroundColor: 'rgba(217,83,79,0.75)', data: c.d9}, {type: 'bar', label: k.strs.s235, backgroundColor: 'rgba(92,184,92,0.75)', data: c.running_int}, {type: 'line',
						label: k.strs.s224,
						borderWidth: 1,
						borderColor: 'rgba(51,51,51,0.5)',
						pointBackgroundColor: 'rgba(0,0,0,0.75)',
						data: c.bal}]};

				d = d.getElementById('canvas2').getContext('2d');c.annualTotals = new Chart(d, {type: 'bar',
					data: h,
					options: {title: {display: !0, text: c.chart1Title},
						tooltips: {mode: 'label',
							callbacks: {label: function(m){
								return e.formatLocalFloat(m.yLabel, e.moneyConventions, 0);
							}}},
						responsive: !0,
						scales: {xAxes: [{stacked: !0}],
							yAxes: [{stacked: !0,
								ticks: {callback: function(m){
									return e.formatLocalFloat(m / 1E3, e.moneyConventions, 0) + c.kStr;
								}}}]}}});
			},
			initSavingsPIPieChart: function(d){
				var h =
{type: 'pie',
	data: {datasets: [{data: [c.prin, c.interest], backgroundColor: ['rgba(217,83,79,0.75)', 'rgba(92,184,92,0.75)']}], labels: [k.strs.s236, k.strs.s237]},
	options: {tooltips: {mode: 'label',
		callbacks: {label: function(m, f){
			var l = f.datasets[m.datasetIndex].data[m.index], g = [];

			g[0] = f.labels[m.index] + ': ' + e.formatLocalFloat(l, e.moneyConventions, 0);g[1] = k.strs.s238 + ': ' + e.formatLocalFloat(e.roundMoney(c.prin + c.interest, 2), e.moneyConventions, 0);g[2] = k.strs.s239 + ': ' + e.formatLocalFloat(e.roundMoney(l / (c.prin +
c.interest) * 100, 1), e.rateConventions, 1);return g;
		}}},
	responsive: !0,
	title: {display: !0, text: c.chart2Title}}};

				d = d.getElementById('canvas3').getContext('2d');c.totalsPie = new Chart(d, h);
			},
			createSavingsCharts: function(d){
				var h;var m = 0;var f = d.length - 1;

				c.years = e.summary.NYears;for(h = 0;h <= f;h += 1){
					var l = d[h];

					if(l[2] === e.ROW_TYPES.ANNUAL_TOTALS){
						c.annual_credit.push(l[6]), c.annual_int.push(l[8]), c.net_change.push(l[10]), 11 >= c.years || 0 === m % 3 || 0 === m ? c.category.push(l[13]) : c.category.push(''), m += 1;
					}else if(l[2] ===
e.ROW_TYPES.RUNNING_TOTALS){
						c.d9.push(l[6]), c.running_int.push(l[8]), c.running_prin.push(l[9]), c.bal.push(g);
					}else {
						var g = l[11];
					}
				}l = d[f];c.interest = l[8];c.prin = l[6];l = d[0];c.strDate = l[4];l = d[f - 1];c.strDate2 = l[4];c.balance = l[11];c.rate = 100 * e.summary.nominalRate[1];b.featherlight({iframe: 'about:blank',
					beforeOpen: function(){
						b('body').css({'overflow-y': 'hidden'});
					},
					beforeClose: function(){
						c.clear();c.annualTotals.destroy();c.annualTotals = null;c.runningTotals.destroy();c.runningTotals = null;c.totalsPie.destroy();
						c.totalsPie = null;
					},
					afterClose: function(){
						b('body').css({'overflow-y': 'scroll'});
					}});d = document.getElementById('featherlight-id-fc');var n = d.contentDocument || d.contentWindow.document;

				n.open();n.write(c.html3);n.close();setTimeout(function(){
					c.initAnnualSavingsTotalChart(n);
				}, 500);setTimeout(function(){
					c.initAccumulatedSavingsTotalChart(n);
				}, 500);setTimeout(function(){
					c.initSavingsPIPieChart(n);
				}, 500);
			}};

	k.showSavingsSchedule = function(d){
		a(d);
	};k.showSavingsCharts = function(d){
		c.createSavingsCharts(d);
	};return k;
}(FC$,
	jQuery);/*
 Copyright 2016-2022 Pine Grove Software, LLC
 AccurateCalculators.com
 interface.SHARED.js
*/
FC$ = function(e, b){
	var k = b || {};

	e(document.body).addClass('fc-calculator');e('#fc-modals').appendTo('body');k.show_help = function(p){
		e.featherlight(p, {beforeOpen: function(){
			e('body').css({'overflow-y': 'hidden'});
		},
		afterClose: function(){
			e('body').css({'overflow-y': 'scroll'});
		}});e('.featherlight-content').css('overflow-y', 'auto');
	};var w = function(p){
		k.zoomLevel = void 0 === p || null === p ? 1 : 0.5 < k.zoomLevel + p && 1.5 > k.zoomLevel + p ? k.zoomLevel + p : k.zoomLevel;e('.calc-wrap').css({'-webkit-transform': 'scale(' + k.zoomLevel +
')',
		'-moz-transform': 'scale(' + k.zoomLevel + ')',
		'-ms-transform': 'scale(' + k.zoomLevel + ')',
		'-o-transform': 'scale(' + k.zoomLevel + ')',
		transform: 'scale(' + k.zoomLevel + ')'});
	};

	e('#grow-al, #grow-ln, #grow-mtg, #grow-ra, #grow-ne, #grow-rs, #grow-sv').click(function(){
		w(0.1);
	});e('#shrink-al, #shrink-ln, #shrink-mtg, #shrink-ra, #shrink-ne, #shrink-rs, #shrink-sv').click(function(){
		w(-0.1);
	});e('#original-al, #original-ln, #original-mtg, #original-ra, #original-ne, #original-rs, #original-sv').click(function(){
		w();
	});
	k.init_CURRENCYDATE_Dlg = function(){
		document.getElementById('ccy-select').value = k.moneyConventions.ccy_format;document.getElementById('date-select').value = k.dateConventions.date_format;e('#CURRENCYDATE').modal();
	};e('#CURRENCYDATE_save').click(function(p){
		p.preventDefault();k.resetNumConventions(parseInt(document.getElementById('ccy-select').value, 10));k.resetDateConventions(parseInt(document.getElementById('date-select').value, 10));window.location.reload(!1);
	});e(function(){
		e('[data-toggle="tooltip"]').tooltip();
	});
	e('input').focus(function(){
		if('checkbox' === this.type || 'radio' === this.type){
			return!1;
		}this.setSelectionRange(0, 999);return!1;
	}).mouseup(function(){
		return!1;
	});document.getElementById('pop-up-help') && e('#pop-up-help').addClass('pop-up');return k;
}(jQuery, FC$);/*
 Copyright 2016-2022 Pine Grove Software, LLC
 AccurateCalculators.com
 pine-grove.com
 interface.SAVINGS-WIDGET.gpl.js
*/
(function(e, b){
	function k(){
		p = {};p.pv = a.getUSNumber();p.cf = p.pv;p.n = c.getUSNumber();p.nominalRate = d.getUSNumber() / 100;p.fv = 0;p.oDate = b.dateMath.getFirstNextMonth(new Date);p.oDate.setHours(0, 0, 0, 0);p.fDate = b.dateMath.getFirstNextMonth(new Date(p.oDate));p.lDate = new Date;p.pmtFreq = 6;p.cmpFreq = 6;p.pmtMthd = 1;
	}

	function w(){
		if(0 === p.cf || 0 === p.nominalRate || 0 === p.n){
			return alert(b.strs.s407 + '\n\n' + b.strs.s408), null;
		}p.lDate.setTime(b.dateMath.addPeriods(p.oDate, p.n, p.pmtFreq));b.SAVINGS_SCHEDULE.calc(p);p.fv =
b.summary.unadjustedBalance;var h = p.cf * p.n;

		p.lDate.setTime(b.dateMath.addPeriods(p.oDate, p.n - 1, p.pmtFreq));document.getElementById('edFV-sv').value = b.formatLocalFloat(b.roundMoney(p.fv, 2), b.moneyConventions, 2);document.getElementById('edInterest-sv').value = b.formatLocalFloat(b.roundMoney(p.fv - h, 2), b.moneyConventions, 2);document.getElementById('edTotalInvested-sv').value = b.formatLocalFloat(b.roundMoney(h, 2), b.moneyConventions, 2);document.getElementById('edFVDate-sv').value = b.dateMath.dateToDateStr(p.lDate,
			b.dateConventions);return 1;
	}

	if(document.getElementById('savings-plugin')){
		var p = {}, a, c, d;

		e(document).ready(function(){
			var h = parseInt(document.getElementById('currency-sv').value, 10);

			Cookies.get('ccy_format') ? b.updateNumConventions(parseInt(Cookies.get('ccy_format'), 10)) : void 0 !== h && null !== h && 'number' === typeof h && 999 !== h && b.updateNumConventions(h);h = parseInt(document.getElementById('date_mask-sv').value, 10);Cookies.get('date_format') ? b.dateConventions = new b.LocalDateConventions(parseInt(Cookies.get('date_format'),
				10)) : void 0 !== h && null !== h && 'number' === typeof h && 999 !== h && b.updateDateConventions(h);a = new b.NE('edCF-sv', b.moneyConventions, 2);c = new b.NE('edNumPmts-sv', b.numConventions, 0);d = new b.NE('edRate-sv', b.rateConventions, 4);(new Date).setHours(0, 0, 0, 0);a.setValue(a.getUSNumber());c.setValue(c.getUSNumber());d.setValue(d.getUSNumber());document.getElementById('edFV-sv').value = b.formatLocalFloat(0, b.moneyConventions, 2);document.getElementById('edInterest-sv').value = b.formatLocalFloat(0, b.moneyConventions,
				2);document.getElementById('edTotalInvested-sv').value = b.formatLocalFloat(0, b.moneyConventions, 2);document.getElementById('edFVDate-sv').value = b.dateConventions.date_mask;e('#btnCalc-sv').click(function(){
				null !== k() && (p.fv = 0, w());
			});e('#btnClear-sv').click(function(){
				a.setValue(0);c.setValue(0);d.setValue(0);document.getElementById('edFV-sv').value = b.formatLocalFloat(0, b.moneyConventions, 2);document.getElementById('edInterest-sv').value = b.formatLocalFloat(0, b.moneyConventions, 2);document.getElementById('edTotalInvested-sv').value =
b.formatLocalFloat(0, b.moneyConventions, 2);document.getElementById('edFVDate-sv').value = b.dateConventions.date_mask;
			});e('#btnPrint-sv').click(function(){
				k();p.fv = 0;null !== w() && b.print_calc();
			});e('#btnSchedule-sv').click(function(){
				k();p.fv = 0;null !== w() && b.showSavingsSchedule(b.SAVINGS_SCHEDULE.calc(p));
			});e('#btnCharts-sv').click(function(){
				b.summary.cashFlowType = 1;k();null !== w() && b.showSavingsCharts(b.SAVINGS_SCHEDULE.calc(p));
			});e('#btnHelp-sv').click(function(){
				b.show_help('#hText-savings');
			});e('#btnCcyDate, #btnCcyDate2, #CCY-sv').click(function(){
				b.init_CURRENCYDATE_Dlg();
			});
		});
	}
})(jQuery,
	FC$);
