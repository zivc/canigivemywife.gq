var app = require('express')(),
	agent = require('superagent'),
	cheerio = require('cheerio');

app.get('*', function(req,res) {

	agent
		.get('http://canigivemydog.com'+req.originalUrl)
		.end(function(err,response) {
			if (err) return res.status(500).send(err);

			console.log(req.originalUrl);

			var $ = cheerio.load(response.text||''),
				body = $('body').html();

			if (body && body.length > 0) {
				[
					'[src*="http://s3.amazonaws.com/cc.silktide.com"]',
					'[src*="http://ps-us.amazon-adsystem.com/"]',
					'head > [src="//www.google-analytics.com/analytics.js"]',
					'head > [src="https://pagead2.googlesyndication.com/pub-config/ca-pub-1960739118173458.js"]',
					'#text-9'
				].forEach(function(selector) {
					$(selector).remove();
				});

				[
					{i:'Dog',o:'Wife'},
					{i:'dog',o:'wife'},
					{i:'canines',o:'women'},
					{i:'canine’s',o:'womans'},
					{i:'Fido',o:'Barbara'},
					{i:'pet',o:'spouse'},
					{i:'pooch',o:'significant other'},
					{i:'Veterinary',o:'Marriage'},

					{i:'spouse Wife', o:'Wife'},
					{i:'canigivemyWife.com', o:'canigivemydog.com'},
					{i:'canigivemywife.com', o:'canigivemydog.com'},
					{i:'-My-Wife-', o:'-My-Dog-'},
					{i:'-my-wife-', o:'-my-dog-'},
					{i:"<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-41212318-1','canigivemyWife.com');ga('require','linkid','linkid.js');ga('require','displayfeatures');ga('send','pageview');</script>",o:''},
					{i:'<script async="true" type="text/javascript" src="http://ps-us.amazon-adsystem.com/domains/qatarsucks-20_2963aa85-022b-47b9-aad2-347d0c72559d.js" charset="UTF-8"></script>',o:''},
					{i:"<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-41212318-1','canigivemydog.com');ga('require','linkid','linkid.js');ga('require','displayfeatures');ga('send','pageview');</script><script>window.amznpubstudioTag=\"canigivemywife-20\";</script>",o:''}
				].forEach(function(replacement) {
					body = body.replace(RegExp(replacement.i, "gm"), replacement.o);
				});

				$('body').html(body);

				$('a[href*="http://canigivemydog.com/"]').each(function(i,ele) {
					$(this).attr('href', $(this).attr('href').replace('canigivemydog.com', req.headers.host));
				});

				res.send($.html());
			}

		});

});


app.listen(8085,function() {
	console.log('app is listening');
});
