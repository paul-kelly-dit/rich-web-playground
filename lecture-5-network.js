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

let $getReposFetch = document.getElementById("get-repos-fetch");
$getReposFetch.onclick = function(){
    let response = fetch("https://api.github.com/users/paul-kelly-dit/repos").then(function(res) {
        if (res.ok) {
            res.json().then(function(data) {
                $response.innerHTML = JSON.stringify(data,null,2);
            });
        } else {
            $response.innerHTML("Response : " + res.statusText);
        }
    }, function(e) {
        $response.innerHTML("Error : " + e);
    });
};

let $getGitProfileInfo = document.getElementById("get-repos-fetch-profile");
$getGitProfileInfo.onclick = function(){
    let response = fetch("https://api.github.com/users/paul-kelly-dit").then(function(res) {
        if (res.ok) {
            res.json().then(function(data) {
                console.log("Number of gists : " + data.public_gists);
                $response.innerHTML = JSON.stringify(data,null,2);
            });
        } else {
            $response.innerHTML("Response : " + res.statusText);
        }
    }, function(e) {
        $response.innerHTML("Error : " + e);
    });
};


