var values = [];
var separators = [];
var result;
var i;


for (i = 0; i <= 9; i++) {
	$('#btn'+i).click(function(event){enterValue(event)});
}
function erase() {
	$('#afficheur').val("");
}

$('#plus').click(function(event){addSeparator(event)});
$('#moins').click(function(event){addSeparator(event)});
$('#multiplier').click(function(event){addSeparator(event)});
$('#diviser').click(function(event){addSeparator(event)});
$('#egal').click(function(event){compute(event)});
$('#erase').click(function(event){erase(event)});
$('#reset').click(function(event){reset(event)});

/* ancienne ligne de code en java => transformer en jquery
document.getElementById('moins').addEventListener('click', function(event){addSeparator(event)},false);
document.getElementById('multiplier').addEventListener('click', function(event){addSeparator(event)},false);
document.getElementById('diviser').addEventListener('click', function(event){addSeparator(event)},false);
document.getElementById('egal').addEventListener('click', function(event){compute(event)},false);
document.getElementById('erase').addEventListener('click', function(event){erase(event)},false);
document.getElementById('reset').addEventListener('click', function(event){reset(event)},false);
*/
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
			$('#afficheur').val(result);
			
		}
	}
}


function reset() {
	values = [];
	separators = [];
	erase();
}
