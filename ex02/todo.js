

// recuperation des cookies
function fn_recup()
{
	var out = '';
	var arr = document.cookie.split(';');
  	 	
  	 var i = 0;
  	 //	alert (arr.length);
  	 //	alert (arr);
  	 i = arr.length-1;
	console.log(arr);
	console.log(i);

	if (arr == '')
	{	
		//	alert ('pas de cookies');
		return;
	}
		while( i >= 0  )
		{
		//	alert ('DES cookies');
		//	alert (i);
		  	var parts = arr[i].split('=');
		  	if(parts.length !== 2) continue;
		  		out = out + '<div id=' + parts[0].trim() + ' onclick=fn_supp("'+ parts[0].trim() + '")>' + parts[1] + '</div>';
		i--;
		}
		
		var my_position = document.getElementById('ft_list');
		my_position.insertAdjacentHTML('afterbegin', out);
}

// creation du cookies
function fn_ajout()
{
	my_todo = window.prompt('saisissez un todo','');
	//	alert ('entre fonction fn_ajout');


		var my_position = document.getElementById('ft_list');

		my_position.insertAdjacentHTML('afterbegin','<div id=todo' + my_todo + ' onclick=fn_supp("todo' + my_todo + '")>' + my_todo + '</div>');
		my_position = document.getElementById('ft_list');

		document.cookie = "todo"+my_todo+"="+my_todo+";path=/";
		
}

function fn_supp(my_current_todo_id)
{
	my_annulok = window.confirm('Etes-vous sur de vouloir supprimer cette tâche ?');

	if (my_annulok)
	{
		my_current_todo = document.getElementById(my_current_todo_id);
		my_current_todo.parentNode.removeChild(my_current_todo);
		document.cookie = my_current_todo_id + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
	}
}
