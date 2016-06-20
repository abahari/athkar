message = localStorage[get_random()];
		if(message == undefined) message = "سبحـان الله وبحمـده عدد خلـقه ، ورضـا نفسـه ، وزنـة عـرشـه ، ومـداد كلمـاتـه";
		document.write('<div class="box_popup">'+message+'</div>');