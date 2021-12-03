$.get('http://localhost:3046/1', (data) => {
    console.log(data);;
})


$.get('http://localhost:3770/index.html', (data) => {
    $('#adds').html(data);
})
