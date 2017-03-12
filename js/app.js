var values = [];
var separators = [];
var result;
var i;


for (i = 0; i <= 9; i++) {
	document.getElementById('btn'+i).addEventListener('click', function(event){enterValue(event)},false);
}

document.getElementById('plus').addEventListener('click', function(event){addSeparator(event)},false);
document.getElementById('moins').addEventListener('click', function(event){addSeparator(event)},false);
document.getElementById('multiplier').addEventListener('click', function(event){addSeparator(event)},false);
document.getElementById('diviser').addEventListener('click', function(event){addSeparator(event)},false);
document.getElementById('egal').addEventListener('click', function(event){compute(event)},false);
document.getElementById('erase').addEventListener('click', function(event){erase(event)},false);
document.getElementById('reset').addEventListener('click', function(event){reset(event)},false);

function enterValue(event) {
	document.getElementById('afficheur').value+=event.toElement.innerHTML;
}

function addValue() {
	if(document.getElementById('afficheur').value != "")
	{
		values.push(Number(document.getElementById('afficheur').value));
		return true;
	}
	return false;
}

function addSeparator(event) {
	if(addValue())
	{
		separators.push(event.toElement.innerHTML);
		erase();
	}
}

function compute() {
	if(addValue())
	{
		separators.push(event.toElement.innerHTML);
		erase();
		if (values.length > 1){
			result = values[0];
			for(i = 1; i < values.length;i++){
				if (separators[i - 1] == "+")
				{
					result += values[i]; //result = result + 6;
				}
				if (separators[i - 1] == "-")
				{
					result -= values[i];
				}
				if (separators[i - 1] == "x")
				{
					result *= values[i]; //result = result + 6;
				}
				if (separators[i - 1] == "/")
				{
					result /= values[i];
				}
			}
			document.getElementById('afficheur').value = result;
			
		}
	}
}


function reset() {
	values = [];
	separators = [];
	erase();
}
function erase() {
	document.getElementById('afficheur').value = "";	
}