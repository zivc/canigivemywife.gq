module.exports = function(str) {

	var str = str||'';

	[
		{i:'Dog',o:'Wife'},
		{i:'dog',o:'wife'},
		{i:'wifes',o:'wives'},
		{i:'Wifes',o:'Wives'},
		{i:'canines',o:'women'},
		{i:'canine’s',o:'womans'},
		{i:'Fido',o:'Barbara'},
		{i:'pet',o:'spouse'},
		{i:'Pet owners',o:'Husbands'},
		{i:'wife owners',o:'husbands'},
		{i:'puppy',o:'naughty girl'},
		{i:'4-legged friends',o:'bitch face wives'},
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
		str = str.replace(RegExp(replacement.i, "gm"), replacement.o);
	});

	return str;

};
