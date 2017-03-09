/*
5. Praca z AJAX i JSON
Stwórz aplikację, która pozwoli po kliknięciu wybranego przycisku, np. “Załaduj”, pobrać
AJAXem dane typu JSON i wyświetlić je na stronie. Adres, pod który wyślesz zapytanie z
użyciem jQuery to https://jsonplaceholder.typicode.com/users
Otrzymane dane wyświetl na stronie w formie nieuporządkowanej listy <ul>, a każdego
użytkownika w tagu <li>. Z podanych danych wyłuskaj name, username, email oraz
phone. Sformatuj je według własnego uznania.
*/

(function($) {

    $(document).ready(function() {

        var list = $("<ul></ul>"); 
        $(".container").append(list);


        $("button").on('click', function(e){

            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
                dataType: "json",
                success: function(data, status, jqXHR) {

                    $.each(data, function(index, user) {
                        var name = user.name,
                            username = user.username,
                            email = user.email,
                            phone = user.phone

                        var text = "Name: " + name + ", Username: " + username + ", Email: " + email + ", Phone: " + phone;

                        list.append($("<li></li>").text(text)); 
                    });

                 },
                 error: function(jqXHR, status, errorThrown) {
                     list.append($("<li></li>").text("Wystąpił błąd - status: " + status + ", rodzaj błędu:" + errorThrown));
                },                    
            });
                   


        })


    })

})(jQuery)
