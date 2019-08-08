/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var language = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Rule":3,"List":4,"Effect":5,"For":6,"Conditions":7,"EOF":8,"Identifier":9,"AND":10,"LongList":11,"All":12,",":13,"CAN":14,"NOT":15,"If":16,"OrCondition":17,"IF":18,"WHEN":19,"WHERE":20,"OR":21,"AndCondition":22,"NotCondition":23,"Condition":24,"FOR":25,"String":26,"Lhs":27,"IN":28,"(":29,"CommaSeparatedList":30,")":31,"MATCH":32,"CONSUMER-IN-GROUP":33,"::":34,"STRING":35,"STRING_LITERAL":36,"FUZZY_STRING":37,"REGEX_LITERAL":38,"ALL":39,"EVERYTHING":40,"ANYTHING":41,"*":42,"$accept":0,"$end":1},
terminals_: {2:"error",8:"EOF",10:"AND",13:",",14:"CAN",15:"NOT",18:"IF",19:"WHEN",20:"WHERE",21:"OR",25:"FOR",28:"IN",29:"(",31:")",32:"MATCH",33:"CONSUMER-IN-GROUP",34:"::",35:"STRING",36:"STRING_LITERAL",37:"FUZZY_STRING",38:"REGEX_LITERAL",39:"ALL",40:"EVERYTHING",41:"ANYTHING",42:"*"},
productions_: [0,[3,7],[3,6],[3,6],[3,5],[4,1],[4,3],[4,1],[4,1],[11,6],[11,5],[11,3],[5,1],[5,2],[7,2],[7,0],[16,1],[16,1],[16,1],[17,3],[17,1],[22,3],[22,1],[23,2],[23,1],[6,3],[6,0],[24,3],[24,5],[24,5],[24,4],[24,3],[27,3],[27,1],[30,1],[30,3],[9,1],[9,1],[9,1],[9,1],[12,1],[12,1],[12,1],[12,1],[26,1],[26,1],[26,1],[26,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */
) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
            return {
                principals: $$[$0-6],
                effect: $$[$0-5],
                actions: $$[$0-4],
                resources: $$[$0-3],
                conditions: $$[$0-2],
		expiry: $$[$0-1]
            };
        
break;
case 2:
            return {
                principals: $$[$0-5],
                effect: $$[$0-4],
                actions: $$[$0-3],
                conditions: $$[$0-2],
		for: $$[$0-1]
            };
        
break;
case 3:
            return {
                effect: $$[$0-5],
                actions: $$[$0-4],
                resources: $$[$0-3],
                conditions: $$[$0-2],
		for: $$[$0-1]
            };
        
break;
case 4:
            return {
                effect: $$[$0-4],
                actions: $$[$0-3],
                conditions: $$[$0-2],
		for: $$[$0-1]
            };
        
break;
case 5:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 6:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-2] instanceof RegExp) {
                this.$.regex.push($$[$0-2].toString());
            } else {
                this.$.exact[$$[$0-2]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 8:
            this.$ = 1;
        
break;
case 9:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-5] instanceof RegExp) {
                this.$.regex.push($$[$0-5].toString());
            } else {
                this.$.exact[$$[$0-5]] = true;
            }

            if ($$[$0-3] instanceof RegExp) {
                this.$.regex.push($$[$0-3].toString());
            } else {
                this.$.exact[$$[$0-3]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 10:
            this.$ = {
                exact: {},
                regex: []
            };

            if ($$[$0-4] instanceof RegExp) {
                this.$.regex.push($$[$0-4].toString());
            } else {
                this.$.exact[$$[$0-4]] = true;
            }

            if ($$[$0-2] instanceof RegExp) {
                this.$.regex.push($$[$0-2].toString());
            } else {
                this.$.exact[$$[$0-2]] = true;
            }

            if ($$[$0] instanceof RegExp) {
                this.$.regex.push($$[$0].toString());
            } else {
                this.$.exact[$$[$0]] = true;
            }
        
break;
case 11:
            if ($$[$0-2] instanceof RegExp) {
                $$[$0].regex.push($$[$0-2].toString());
            } else {
                $$[$0].exact[$$[$0-2]] = true;
            }
            this.$ = $$[$0];
        
break;
case 12:
            this.$ = true;
        
break;
case 13:
            this.$ = false;
        
break;
case 14:
            this.$ = $$[$0];
        
break;
case 15:
            this.$ = [];
        
break;
case 19:
            this.$ = ['or', $$[$0-2], $$[$0]];
        
break;
case 21:
            this.$ = ['and', $$[$0-2], $$[$0]];
        
break;
case 23:
            this.$ = ['not', $$[$0]];
        
break;
case 25:
            var op = $$[$0-2].toLowerCase();
            var time = parseInt($$[$0-1],10); 
            var units = $$[$0].toLowerCase();
            
            if (time < 0)
		CHECK_YOUR_RULE ("time must be > 0");	

            switch (units)
            {
		case 'second':
		case 'seconds':
			time = time;
			break;

		case 'minute':
		case 'minutes':
			time = time*60;
			break;

		case 'hour':
		case 'hours':
			time = time*60*60;
			break;

		case 'day':
		case 'days':
			time = time*60*60*24;
			break;

		case 'week':
		case 'weeks':
			time = time*60*60*24*7;
			break;

		case 'month':
		case 'months':
			time = time*60*60*24*30;
			break;

		case 'year':
		case 'years':
			time = time*60*60*24*365;
			break;

		default:
			CHECK_YOUR_RULE ("Unit for time must be seconds, minutes, etc.");	
            }

	    if (time > 31536000)
		CHECK_YOUR_RULE("Maximum expiry is 1 year");

            this.$ = time; 
        
break;
case 26:
		this.$ = 3600; // 1 hour 
	
break;
case 27:
            var lhs = $$[$0-2];
            var op = $$[$0-1].toLowerCase();
            var rhs = $$[$0];
            yy.validate(op, lhs.name, rhs, lhs.type);
            this.$ = [ op, lhs, rhs ];
        
break;
case 28:
            var lhs = $$[$0-4];
            var op = $$[$0-3].toLowerCase();
            var rhs = $$[$0-1];
            rhs.forEach(function (i) {
                yy.validate('=', lhs.name, i, lhs.type);
            });
            this.$ = [ op, lhs, rhs ];
        
break;
case 29:
            var lhs = $$[$0-4];
            var op = $$[$0-3].toLowerCase();
            var rhs = $$[$0-1];
            rhs.forEach(function (i) {
                yy.validate('=', lhs.name, i, lhs.type);
            });
            this.$ = [ op, lhs, rhs ];
        
break;
case 30:
            var lhs = '';
            var op = $$[$0-3].toLowerCase();
            var rhs = $$[$0-1];
            rhs.forEach(function (i) {
                yy.validate('=', 'groups', i, 'string');
            });
            this.$ = [ op, lhs, rhs ];
        
break;
case 31:
            this.$ = $$[$0-1];
        
break;
case 32:
            this.$ = {name: $$[$0-2], type: $$[$0]};
        
break;
case 33:
            this.$ = {name: $$[$0]};
        
break;
case 34:
            this.$ = [ $$[$0] ];
        
break;
case 35:
            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 38:
            this.$ = new RegExp(fuzzyToRegex($$[$0]));
        
break;
case 39:
            var literal = $$[$0];
            var last = literal.lastIndexOf("/");
            var body = literal.substring(1, last);
            var flags = literal.substring(last + 1);
            this.$ = new RegExp(body, flags);
        
break;
}
},
table: [{3:1,4:2,5:3,9:4,11:5,12:6,14:[1,7],35:[1,8],36:[1,9],37:[1,10],38:[1,11],39:[1,12],40:[1,13],41:[1,14],42:[1,15]},{1:[3]},{5:16,14:[1,7]},{4:17,9:4,11:5,12:6,35:[1,8],36:[1,9],37:[1,10],38:[1,11],39:[1,12],40:[1,13],41:[1,14],42:[1,15]},{8:[2,5],10:[1,18],13:[1,19],14:[2,5],18:[2,5],19:[2,5],20:[2,5],25:[2,5],35:[2,5],36:[2,5],37:[2,5],38:[2,5],39:[2,5],40:[2,5],41:[2,5],42:[2,5]},{8:[2,7],14:[2,7],18:[2,7],19:[2,7],20:[2,7],25:[2,7],35:[2,7],36:[2,7],37:[2,7],38:[2,7],39:[2,7],40:[2,7],41:[2,7],42:[2,7]},{8:[2,8],14:[2,8],18:[2,8],19:[2,8],20:[2,8],25:[2,8],35:[2,8],36:[2,8],37:[2,8],38:[2,8],39:[2,8],40:[2,8],41:[2,8],42:[2,8]},{15:[1,20],35:[2,12],36:[2,12],37:[2,12],38:[2,12],39:[2,12],40:[2,12],41:[2,12],42:[2,12]},{8:[2,36],10:[2,36],13:[2,36],14:[2,36],18:[2,36],19:[2,36],20:[2,36],25:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36],42:[2,36]},{8:[2,37],10:[2,37],13:[2,37],14:[2,37],18:[2,37],19:[2,37],20:[2,37],25:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[2,37]},{8:[2,38],10:[2,38],13:[2,38],14:[2,38],18:[2,38],19:[2,38],20:[2,38],25:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[2,38]},{8:[2,39],10:[2,39],13:[2,39],14:[2,39],18:[2,39],19:[2,39],20:[2,39],25:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],41:[2,39],42:[2,39]},{8:[2,40],14:[2,40],18:[2,40],19:[2,40],20:[2,40],25:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40]},{8:[2,41],14:[2,41],18:[2,41],19:[2,41],20:[2,41],25:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],42:[2,41]},{8:[2,42],14:[2,42],18:[2,42],19:[2,42],20:[2,42],25:[2,42],35:[2,42],36:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],42:[2,42]},{8:[2,43],14:[2,43],18:[2,43],19:[2,43],20:[2,43],25:[2,43],35:[2,43],36:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],42:[2,43]},{4:21,9:4,11:5,12:6,35:[1,8],36:[1,9],37:[1,10],38:[1,11],39:[1,12],40:[1,13],41:[1,14],42:[1,15]},{4:22,6:23,8:[2,26],9:4,11:5,12:6,18:[2,26],19:[2,26],20:[2,26],25:[1,24],35:[1,8],36:[1,9],37:[1,10],38:[1,11],39:[1,12],40:[1,13],41:[1,14],42:[1,15]},{9:25,35:[1,8],36:[1,9],37:[1,10],38:[1,11]},{9:26,11:27,35:[1,8],36:[1,9],37:[1,10],38:[1,11]},{35:[2,13],36:[2,13],37:[2,13],38:[2,13],39:[2,13],40:[2,13],41:[2,13],42:[2,13]},{4:28,6:29,8:[2,26],9:4,11:5,12:6,18:[2,26],19:[2,26],20:[2,26],25:[1,24],35:[1,8],36:[1,9],37:[1,10],38:[1,11],39:[1,12],40:[1,13],41:[1,14],42:[1,15]},{6:30,8:[2,26],18:[2,26],19:[2,26],20:[2,26],25:[1,24]},{7:31,8:[2,15],16:32,18:[1,33],19:[1,34],20:[1,35]},{26:36,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{8:[2,6],14:[2,6],18:[2,6],19:[2,6],20:[2,6],25:[2,6],35:[2,6],36:[2,6],37:[2,6],38:[2,6],39:[2,6],40:[2,6],41:[2,6],42:[2,6]},{10:[1,42],13:[1,41]},{8:[2,11],14:[2,11],18:[2,11],19:[2,11],20:[2,11],25:[2,11],35:[2,11],36:[2,11],37:[2,11],38:[2,11],39:[2,11],40:[2,11],41:[2,11],42:[2,11]},{6:43,8:[2,26],18:[2,26],19:[2,26],20:[2,26],25:[1,24]},{7:44,8:[2,15],16:32,18:[1,33],19:[1,34],20:[1,35]},{7:45,8:[2,15],16:32,18:[1,33],19:[1,34],20:[1,35]},{8:[1,46]},{15:[1,50],17:47,22:48,23:49,24:51,26:55,27:52,29:[1,54],33:[1,53],35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{15:[2,16],29:[2,16],33:[2,16],35:[2,16],36:[2,16],37:[2,16],42:[2,16]},{15:[2,17],29:[2,17],33:[2,17],35:[2,17],36:[2,17],37:[2,17],42:[2,17]},{15:[2,18],29:[2,18],33:[2,18],35:[2,18],36:[2,18],37:[2,18],42:[2,18]},{26:56,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{8:[2,44],10:[2,44],13:[2,44],18:[2,44],19:[2,44],20:[2,44],21:[2,44],28:[2,44],31:[2,44],32:[2,44],34:[2,44],35:[2,44],36:[2,44],37:[2,44],42:[2,44]},{8:[2,45],10:[2,45],13:[2,45],18:[2,45],19:[2,45],20:[2,45],21:[2,45],28:[2,45],31:[2,45],32:[2,45],34:[2,45],35:[2,45],36:[2,45],37:[2,45],42:[2,45]},{8:[2,46],10:[2,46],13:[2,46],18:[2,46],19:[2,46],20:[2,46],21:[2,46],28:[2,46],31:[2,46],32:[2,46],34:[2,46],35:[2,46],36:[2,46],37:[2,46],42:[2,46]},{8:[2,47],10:[2,47],13:[2,47],18:[2,47],19:[2,47],20:[2,47],21:[2,47],28:[2,47],31:[2,47],32:[2,47],34:[2,47],35:[2,47],36:[2,47],37:[2,47],42:[2,47]},{9:26,10:[1,57],11:27,35:[1,8],36:[1,9],37:[1,10],38:[1,11]},{9:58,35:[1,8],36:[1,9],37:[1,10],38:[1,11]},{7:59,8:[2,15],16:32,18:[1,33],19:[1,34],20:[1,35]},{8:[1,60]},{8:[1,61]},{1:[2,4]},{8:[2,14],21:[1,62]},{8:[2,20],10:[1,63],21:[2,20],31:[2,20]},{8:[2,22],10:[2,22],21:[2,22],31:[2,22]},{15:[1,50],23:64,24:51,26:55,27:52,29:[1,54],33:[1,53],35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{8:[2,24],10:[2,24],21:[2,24],31:[2,24]},{26:65,28:[1,66],32:[1,67],35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{29:[1,68]},{15:[1,50],17:69,22:48,23:49,24:51,26:55,27:52,29:[1,54],33:[1,53],35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{28:[2,33],32:[2,33],34:[1,70],35:[2,33],36:[2,33],37:[2,33],42:[2,33]},{8:[2,25],18:[2,25],19:[2,25],20:[2,25]},{9:71,35:[1,8],36:[1,9],37:[1,10],38:[1,11]},{8:[2,10],14:[2,10],18:[2,10],19:[2,10],20:[2,10],25:[2,10],35:[2,10],36:[2,10],37:[2,10],38:[2,10],39:[2,10],40:[2,10],41:[2,10],42:[2,10]},{8:[1,72]},{1:[2,2]},{1:[2,3]},{15:[1,50],22:73,23:49,24:51,26:55,27:52,29:[1,54],33:[1,53],35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{15:[1,50],23:74,24:51,26:55,27:52,29:[1,54],33:[1,53],35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{8:[2,23],10:[2,23],21:[2,23],31:[2,23]},{26:75,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{29:[1,76]},{29:[1,77]},{26:79,30:78,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{21:[1,62],31:[1,80]},{26:81,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{8:[2,9],14:[2,9],18:[2,9],19:[2,9],20:[2,9],25:[2,9],35:[2,9],36:[2,9],37:[2,9],38:[2,9],39:[2,9],40:[2,9],41:[2,9],42:[2,9]},{1:[2,1]},{8:[2,19],10:[1,63],21:[2,19],31:[2,19]},{8:[2,21],10:[2,21],21:[2,21],31:[2,21]},{8:[2,27],10:[2,27],21:[2,27],31:[2,27]},{26:79,30:82,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{26:79,30:83,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{13:[1,85],31:[1,84]},{13:[2,34],31:[2,34]},{8:[2,31],10:[2,31],21:[2,31],31:[2,31]},{28:[2,32],32:[2,32],35:[2,32],36:[2,32],37:[2,32],42:[2,32]},{13:[1,85],31:[1,86]},{13:[1,85],31:[1,87]},{8:[2,30],10:[2,30],21:[2,30],31:[2,30]},{26:88,35:[1,37],36:[1,38],37:[1,39],42:[1,40]},{8:[2,28],10:[2,28],21:[2,28],31:[2,28]},{8:[2,29],10:[2,29],21:[2,29],31:[2,29]},{13:[2,35],31:[2,35]}],
defaultActions: {46:[2,4],60:[2,2],61:[2,3],72:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/**
 * Extremely roundabout way of processing escaped asterisks in a fuzzy string,
 * since Javascript doesn't support negative lookbehinds.
 *
 * First, escape all RegExp special characters. Unescaped * will now be '\*' and
 * escaped * will now be '\\\*'.
 * Replace '\\\*' with '*'. All literal * will have no backslashes before them.
 * Replace '\*' with '.*'. All fuzzy * will now be '.*'
 * Finally, replace all * with no . before them into '\*' using negative
 * lookahead.
 *
 * as\*d*f -> as\\\*d\*f -> as*d\*f -> as*d.*f -> as\*d.*f
 */
function fuzzyToRegex(str) {
    str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    str = str.replace('\\\\\\*', '*');
    str = str.replace('\\*', '.*');
    str = str.replace(/(?:([^\.]))\*/,'$1\\*');
    return (str);
}
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whritespace */
break;
case 1:return 8;
break;
case 2:return 10;
break;
case 3:return 21;
break;
case 4:return 15;
break;
case 5:return 14;
break;
case 6:return 'TO';
break;
case 7:return 18;
break;
case 8:return 19;
break;
case 9:return 20;
break;
case 10:return 39;
break;
case 11:return 40;
break;
case 12:return 41;
break;
case 13:return 28;
break;
case 14:return 32;
break;
case 15:return 25;
break;
case 16:return 33;
break;
case 17:return 34;
break;
case 18:return 13;
break;
case 19:return 29;
break;
case 20:return 31;
break;
case 21:
        yy_.yytext = yy_.yytext.substr(0, yy_.yytext.lastIndexOf('::'));
        return "REGEX_LITERAL";
    
break;
case 22:
        yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
        return 36;
    
break;
case 23:
        if (yy_.yytext === '*') {
            return 42;
        } else if (yy_.yytext.match(/[*]/)) {
            return 37;
        } else {
            return 35;
        }
    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:$)/i,/^(?:AND\b)/i,/^(?:OR\b)/i,/^(?:NOT\b)/i,/^(?:CAN\b)/i,/^(?:TO\b)/i,/^(?:IF\b)/i,/^(?:WHEN\b)/i,/^(?:WHERE\b)/i,/^(?:ALL\b)/i,/^(?:EVERYTHING\b)/i,/^(?:ANYTHING\b)/i,/^(?:IN\b)/i,/^(?:MATCH\b)/i,/^(?:FOR\b)/i,/^(?:CONSUMER-IN-GROUP\b)/i,/^(?:::)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:(\/((([^\n\r\*\\\/\[])|(\\([^\n\r]))|(\[([^\n\r\]\\]|(\\([^\n\r])))*\]))(([^\n\r\\\/\[])|(\\([^\n\r]))|(\[([^\n\r\]\\]|(\\([^\n\r])))*\]))*)\/([a-z]*))::regexp?)/i,/^(?:"(?:(\\)["bfnrt\/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])*")/i,/^(?:([^\s,():](:(?!:))?)+)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = language;
exports.Parser = language.Parser;
exports.parse = function () { return language.parse.apply(language, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}