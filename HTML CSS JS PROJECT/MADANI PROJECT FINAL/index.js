$(document).ready(function() {
    $('#login-form').submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform AJAX login request
      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: $(this).serialize(),
        success: function(response) {
          // Handle the response from the server
          if (response === 'success') {
            alert('Login successful!');
            // Redirect to another page or perform other actions
          } else {
            alert('Login failed. Please check your credentials.');
          }
        }
      });
    });
  });
  