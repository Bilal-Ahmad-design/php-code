/**
 * -----------------------------------------------------------------------------
 * (c) 2016-2021 Pine Grove Software, LLC -- All rights reserved.
 * Contact: webmaster@financial-calculators.com
 * License: GPL2
 * www.financial-calculators.com
 * -----------------------------------------------------------------------------
 * Common code and global variables.
 * -----------------------------------------------------------------------------
 * compiled at: http://closure-compiler.appspot.com/home
 */

/* required for JSLint processing */
/*global wp: false */
/*jslint nomen: true, vars: true, sub: true */


/** 
 * @preserve Copyright 2016-2022 Pine Grove Software, LLC
 * financial-calculators.com
 * License: GPL2
 * strs.SAVINGS-WIDGET.gpl.js
 */

// eslint-disable-next-line no-unused-vars
var FC$ = {}; 


/** 
 * @nocollapse
 * @return {Object}
 */
FC$ = (function (FC) {
	'use strict';

	// var FC = {};

	// const {__, _x, _n, sprintf} = wp.i18n;

	FC.strs = {
		// TRANSLATORS: ISO's language code en=English
		s000: wp.i18n.__('en', 'fc-savings-calculator'),
		s001: wp.i18n.__('Please use the backspace key to delete.', 'fc-savings-calculator'),
		s002: wp.i18n.__('Left, up & down arrow keys are disabled. So are the home, end, pgup and pgdn keys.', 'fc-savings-calculator'),
		s003: wp.i18n.__('Use backspace to delete.', 'fc-savings-calculator'),
		s004: wp.i18n.__('If value is selected, just start typing new value to clear prior value.', 'fc-savings-calculator'),
		s005: wp.i18n.__('When a number is selected (value shown in inverse), use right arrow key to clear selection without clearing value. Then backspace to edit.', 'fc-savings-calculator'),
		s006: wp.i18n.__('TIP: Generally it is best to use the TAB or SHIFT-TAB keys to move from one input to the next or previous input.', 'fc-savings-calculator'),
		s007: wp.i18n.__('TIP 2: Generally, editing a value is inefficient. Since values are auto selected, just type the number you want.', 'fc-savings-calculator'),
		s008: wp.i18n.__('Do not type the thousand separator character.', 'fc-savings-calculator'),
		s009: wp.i18n.__('(If using US convention, that would be the comma.)', 'fc-savings-calculator'),
		s010: wp.i18n.__('I\'m smart enough to enter them for you!', 'fc-savings-calculator'),
		s011: wp.i18n.__('An unknown date calculation error occurred.', 'fc-savings-calculator'),
		s012: wp.i18n.__('Please provide us with your inputs and settings so that we can fix this. Thank you.', 'fc-savings-calculator'),
		s013: wp.i18n.__('Date is not valid - bad year.', 'fc-savings-calculator'),
		s014: wp.i18n.__('Jan', 'fc-savings-calculator'),
		s015: wp.i18n.__('Feb', 'fc-savings-calculator'),
		s016: wp.i18n.__('Mar', 'fc-savings-calculator'),
		s017: wp.i18n.__('Apr', 'fc-savings-calculator'),
		s018: wp.i18n.__('May', 'fc-savings-calculator'),
		s019: wp.i18n.__('Jun', 'fc-savings-calculator'),
		s020: wp.i18n.__('Jul', 'fc-savings-calculator'),
		s021: wp.i18n.__('Aug', 'fc-savings-calculator'),
		s022: wp.i18n.__('Sept', 'fc-savings-calculator'),
		s023: wp.i18n.__('Oct', 'fc-savings-calculator'),
		s024: wp.i18n.__('Nov', 'fc-savings-calculator'),
		s025: wp.i18n.__('Dec', 'fc-savings-calculator'),
		s026: wp.i18n.__('Error: dates out of sequence.', 'fc-savings-calculator'),
		s027: wp.i18n.__('Exception', 'fc-savings-calculator'),
		s028: wp.i18n.__('occurred when accessing', 'fc-savings-calculator'),
		s029: wp.i18n.__('Invalid index', 'fc-savings-calculator'),
		// from eq.SAVINGS-WIDGET.gpl.js
		// s100: wp.i18n.__('Internal limit reached. Balance exceeds +/- 99 trillion.', 'fc-savings-calculator'),
		s101: wp.i18n.__('YTD', 'fc-savings-calculator'),
		s102: wp.i18n.__('Running Totals', 'fc-savings-calculator'),
		// from sc.SAVINGS-WIDGET.gpl.js
		s201: wp.i18n.__('Your Personalized Savings Schedule', 'fc-savings-calculator'),
		// s202: wp.i18n.__('Last payment amount decreased by', 'fc-savings-calculator'),
		// s203: wp.i18n.__('due to rounding', 'fc-savings-calculator'),
		// s204: wp.i18n.__('Last payment amount increased by', 'fc-savings-calculator'),
		s205: wp.i18n.__('Retirement Plan Summary', 'fc-savings-calculator'),
		s206: wp.i18n.__('Total Investmented', 'fc-savings-calculator'),
		s207: wp.i18n.__('Number of Investments', 'fc-savings-calculator'),
		s208: wp.i18n.__('Return on Investment (ROI)', 'fc-savings-calculator'),
		s209: wp.i18n.__('Total Gain', 'fc-savings-calculator'),
		s210: wp.i18n.__('Last Cash Flow Date', 'fc-savings-calculator'),
		s211: wp.i18n.__('Years', 'fc-savings-calculator'),
		// s212: wp.i18n.__('Loan Date', 'fc-savings-calculator'),
		// s213: wp.i18n.__('1st Payment Due', 'fc-savings-calculator'),
		// s214: wp.i18n.__('Payment Frequency', 'fc-savings-calculator'),
		// s215: wp.i18n.__('Last Payment Due', 'fc-savings-calculator'),
		// s216: wp.i18n.__('Total Interest Due', 'fc-savings-calculator'),
		// s217: wp.i18n.__('Total All Payments', 'fc-savings-calculator'),
		s218: wp.i18n.__('Investment Schedule', 'fc-savings-calculator'),
		s219: wp.i18n.__('Year', 'fc-savings-calculator'),
		s220: wp.i18n.__('Date', 'fc-savings-calculator'),
		// s221: wp.i18n.__('Investment', 'fc-savings-calculator'),
		s222: wp.i18n.__('Interest', 'fc-savings-calculator'),
		s223: wp.i18n.__('Net Change', 'fc-savings-calculator'),
		s224: wp.i18n.__('Balance', 'fc-savings-calculator'),
		// s225: wp.i18n.__('Calculation method: Normal', 'fc-savings-calculator'),
		// s226: wp.i18n.__('Annual Investment', 'fc-savings-calculator'),
		s227: wp.i18n.__('Annual Interest', 'fc-savings-calculator'),
		s228: wp.i18n.__('Change in Balance', 'fc-savings-calculator'),
		// s229: wp.i18n.__('Annual Investment and Interest Totals', 'fc-savings-calculator'),
		// s230: wp.i18n.__('Accumulated Investment and Interest', 'fc-savings-calculator'),
		s231: wp.i18n.__('Amount Invested & Interest as Percentage of Total Value', 'fc-savings-calculator'),
		// s232: wp.i18n.__('Loan', 'fc-savings-calculator'),
		// s233: wp.i18n.__('"Net Change" is change from prior period i.e. prior balance plus investment, plus gain on investment (interest).', 'fc-savings-calculator'),
		// s234: wp.i18n.__('Running Investment', 'fc-savings-calculator'),
		s235: wp.i18n.__('Running Interest', 'fc-savings-calculator'),
		s236: wp.i18n.__('Total Deposits', 'fc-savings-calculator'),
		s237: wp.i18n.__('Total Interest Earned', 'fc-savings-calculator'),
		s238: wp.i18n.__('Total Value', 'fc-savings-calculator'),
		s239: wp.i18n.__('Pct. of Total', 'fc-savings-calculator'),
		// s240: wp.i18n.__('Your Personalized Cash Flow Schedule', 'fc-savings-calculator'),
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
		// interface.SHARED-WIDGET.gpl.js has no strings
		// interface.SAVINGS-WIDGET.gpl.js
		// s401: wp.i18n.__('One of the following: "Price", "Down Payment" or "Loan Amount" must be "0".', 'fc-savings-calculator'),
		// s402: wp.i18n.__('You may use our general purpose loan calculator if you don\'t want to consider purchase price.', 'fc-savings-calculator'),
		// s403: wp.i18n.__('Only one of the following: "Price", "Down Payment" or "Loan Amount" can be "0".', 'fc-savings-calculator'),
		// s404: wp.i18n.__('You may use our general purpose loan calculator if you don\'t want to consider purchase price.', 'fc-savings-calculator'),
		// s405: wp.i18n.__('There are too many unknown values.', 'fc-savings-calculator'),
		// s406: wp.i18n.__('Only one value may be "0."', 'fc-savings-calculator'),
		s407: wp.i18n.__('There are unknown values.', 'fc-savings-calculator'),
		s408: wp.i18n.__('Please make sure all values are entered.', 'fc-savings-calculator')

	};


	return FC;
}(FC$));
