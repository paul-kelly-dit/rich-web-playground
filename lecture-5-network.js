console.log('loading event handlers');
let $response = document.getElementById("response");
let $getReposBtn = document.getElementById("get-repos");
$getReposBtn.onclick = function(){
    let xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function(e){
        console.log(this);
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                console.log(xhr.response);
                $response.innerHTML = xhr.response;
            } else {
                console.error("XHR didn't work: ", xhr.status);
            }
        }
    };
    xhr.ontimeout = function (){
        console.error("request timedout: ", xhr);
    };
    xhr.open("get", "https://api.github.com/users/paul-kelly-dit/repos", true);
    xhr.send();
};

let $getReposJQueryAjaxBtn = document.getElementById("get-repos-jquery-ajax");
$getReposJQueryAjaxBtn.onclick = function(){
    $.ajax("https://api.github.com/users/vintharas/repos")
        .done(function(data){
            $response.innerHTML = JSON.stringify(data,null,2);
        });
};

let $getReposJQueryGetBtn = document.getElementById("get-repos-jquery-get");
$getReposJQueryGetBtn.onclick = function(){
    $.get("https://api.github.com/users/paul-kelly-dit/repos")
        .done(function(data){
            $response.innerHTML = JSON.stringify(data,null,2);
        });
};