let searchresult = document.querySelector('.search-results');

document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    if (val != '') {
        searchresult.style.display = "block";
        const requestURL = `https://api.themoviedb.org/3/search/multi?api_key=773693ce3c3c310e407c18f8a66e5296&language=en,ru&query=${val}&page=1&include_adult=false`

        function sendRequest(method, url, body = null) {
            return new Promise( executor = (resolve, reject) => {
                const xhr = new XMLHttpRequest()

                xhr.open(method, url)
            
                xhr.responseType = "json"
                xhr.setRequestHeader( name = 'Content-Type', value = 'application/json')

                xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response)
                } else {
                    resolve(xhr.response)
                }
                };
            
                xhr.onerror = () => {
                    reject(xhr.response)
                };

                xhr.send();
            })

        }

        sendRequest(method = 'GET', requestURL)
            .then( onfulfilled = data => {
                let col = data;
                console.log(col.results);
                if(col.results.length != 0) {
                    searchresult.textContent = '';
                    for(i = 0; i < 3; i++) {
                        let div = document.createElement('a');
                        div.className = "search-poster";
                        div.setAttribute("href", `/pages.php?id=<?php echo $info["imdb_id"]?>`);
                        div.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500/${col.results[i].poster_path}" alt="">
                        <div class="content">
                          <h2>${col.results[i].title}</h2>
                          <p>${col.results[i].overview}</p>
                        </div>`;

                        searchresult.prepend(div);
                    }
                } else {
                    searchresult.textContent = '';
                    console.log(0);
                }

            })
            .catch( onrejected = err => console.log(err))

    } else {
        searchresult.style.display = "none";
    }
}