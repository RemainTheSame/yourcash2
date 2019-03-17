$(document).ready(function () {
    //const Url = '//localhost:8080/users';
    const Url = '//localhost:8080/expenses/findbyuser/2username2';
    $('#req-but').click(function () {
        $.ajax({
            url: Url,
            type: "GET",
            success: function(response){
                console.log(response)
                var d = JSON.stringify(response);
                $('#displayData').text(d)
            },
            error: function (error) {
                console.log('Error ${error}')
                
            }

        })
        
    })
})