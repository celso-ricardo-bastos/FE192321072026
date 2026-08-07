(function(){

    function call4() {
        console.log('Quarta chamada')
    }
    setTimeout(call4, 20);
    function call3(){
        console.log('Terceira chamada')
    }
    function call2(){
        call3()
        console.log('segunda chamada');
    }
    function call1(){
        console.log('Primeira chamada')
        call2();
    }
    call1();

    const data = new Date();
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    console.dir(data.toLocaleDateString("pt-BR", options))
    

    // setInterval(function(){
    //     const oswald = document.querySelector('.oswald');
    //     oswald.innerHTML = new Date()
    //     console.log(data)
    // }, 1000);

    const element = document.querySelector('.ourteam .cibo-container h2');
    element.innerHTML = '<h1>ola</h1>'

    
})()