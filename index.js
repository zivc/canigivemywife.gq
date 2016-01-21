var express = require('express'),
	app = express(),
	agent = require('superagent'),
	cheerio = require('cheerio'),
	bigReplace = require('./lib/thebigreplacer.js');

app.use('/img', express.static('img'));

app.get('*', function(req,res) {

	agent
		.get('http://canigivemydog.com'+req.originalUrl)
		.end(function(err,response) {
			if (err) return res.status(500).send(err);

			console.log(req.originalUrl);

			var $ = cheerio.load(response.text||'');

			if ($('body')) {
				[
					'[src="//s3.amazonaws.com/cc.silktide.com/cookieconsent.latest.min.js"]',
					'[src*="http://s3.amazonaws.com/cc.silktide.com"]',
					'[src*="http://ps-us.amazon-adsystem.com/"]',
					'head > [src="//www.google-analytics.com/analytics.js"]',
					'head > [src="https://pagead2.googlesyndication.com/pub-config/ca-pub-1960739118173458.js"]',
					'#text-9'
				].forEach(function(selector) {
					$(selector).remove();
				});

				[
					{s:'title', f:'text'},
					{s:'body', f:'html'},
				].forEach(function(thing) {
					$(thing.s)[thing.f](bigReplace($(thing.s)[thing.f]()));
				});

				$('meta').each(function(i,ele) {
					$(this).attr('content', bigReplace($(this).attr('content')));
				});

				$('a[href*="http://canigivemydog.com/"]').each(function(i,ele) {
					$(this).attr('href', $(this).attr('href').replace('canigivemydog.com', req.headers.host));
				});

				$('body').prepend('<style type="text/css">#header { background-image:url("/img/logo.png") !important; }</style>');

				res.send($.html());
			}

		});

});

app.listen(8085,function() {
	console.log('app is listening');
});
