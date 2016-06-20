function get_random()
{
	max = 0;
	for (var i=0; i<localStorage.length;i++)
	{
		if(!isNaN(parseInt(localStorage.getItem(localStorage.key(i))))) continue;
		if(parseInt(localStorage.key(i)) > max){
			max = localStorage.key(i) ;
		}
	}
    var ranNum= Math.floor(Math.random()*(max))+1;
	return ranNum;
}var el = document.getElementById('another');	if(el){	  el.addEventListener('click', refresh, false);	}
function refresh(){
	location.reload();
}