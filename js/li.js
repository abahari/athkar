for (var i=0; i<localStorage.length;i++)
{
	if(!isNaN(parseInt(localStorage.getItem(localStorage.key(i))))) continue;
	document.write('<li class="list_item"> <input type="checkbox" name="choix[]" value="'+localStorage.key(i)+'" onChange="return change(this);"/>'+localStorage.getItem(localStorage.key(i))+'</li>');
}						