(function (root) {
	var BA = root.BA = (root.BA || {});
	
	var userHandler = BA.userHandler = function () {	
		addUserDeleteListener();	
	};
	
	var deleteAccount = BA.deleteAccount = function () {
		event.preventDefault();
		var url = event.target.action;
		
		var choice = confirm("Just checking if you really meant to do that... \n \n Click OK to delete your account... \n");
		if (choice) {
			BA.sendDeleteRequest(url, function(data) {
				
				var alert = JST['alert_template']({data: {'alertType': 'alert alert-error', 
														  'message': 'Your Account has been deleted'}});
				$('.alert').remove()										  									  
			    $('#editModal').modal('hide');
				$('#wrap').append(alert);	
				setTimeout(function() { 
					$(".alert").fadeOut(300);
					location.reload();
				}, 2000);  	
			});
			
		} else {
			var alert = JST['alert_template']({data: {'alertType': 'alert alert-success', 
													  'message': 'You chose... Wisely'}});
			$('.alert').remove()										  									  
		    $('#editModal').modal('hide');
			$('#wrap').append(alert);	
			setTimeout(function() { 
				$(".alert").fadeOut(300);
			}, 1500);  
		}		
	};

	var addUserDeleteListener = BA.addUserDeleteListener = function () {
		$('.account_delete_button').on('submit', deleteAccount);
	}
	
})(this);

$(document).ready(BA.userHandler);
