// Your code goes here

    //     {
    //       "login": "mojombo",
    //       "id": 1,
    //       "node_id": "MDQ6VXNlcjE=",
    //       "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
    //       "gravatar_id": "",
    //       "url": "https://api.github.com/users/mojombo",
    //       "html_url": "https://github.com/mojombo",
    //       "followers_url": "https://api.github.com/users/mojombo/followers",
    //       "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    //       "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    //       "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    //       "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    //       "organizations_url": "https://api.github.com/users/mojombo/orgs",
    //       "repos_url": "https://api.github.com/users/mojombo/repos",
    //       "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    //       "received_events_url": "https://api.github.com/users/mojombo/received_events",
    //       "type": "User",
    //       "site_admin": false
    //     }

    let list = document.querySelector(".list");

    let input = document.querySelector(".userInput");
    let submit = document.querySelector(".submit");
    submit.addEventListener("click",() => {
        
            let name = input.value;
            userDetails(name);
            
        });
    
    function userDetails(username){

        let xhr = new XMLHttpRequest();
        let url =  xhr.open("GET",`https://api.github.com/users/${username}`);
        xhr.onload = function(){
            let response = JSON.parse(xhr.response);
            // console.log(JSON.parse(xhr.response));
            console.log(response);
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            h2.innerText = response.name
            let img = document.createElement("img");
            img.src = response.avatar_url;
            let p = document.createElement("p");
            p.innerText = response.id;
            li.append(img,h2,p);
            list.append(li);
            
        }
        xhr.send();
    }
 
