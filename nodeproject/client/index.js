let login = 'admin';
let password = 'qwerty12345';

$.ajax({
type: 'POST',
url: 'http://localhost:3000/get',
}).then(function(event){
    console.log(data);
})