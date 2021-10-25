const token = "KdjsxXsmxQLObWGK44QGwTDdABT0Y4le";
const page = 1;
const limit = 2;
const requestURL = `https://videocdn.tv/api/movies?api_token=${token}&limit=${limit}&page=${page}`

function sendRequest(method, url, body = null) {
    const headers = {
        'content-type': 'application/json'
    }

    return fetch(url, init = {
        method: method,
        headers: headers
    }).then( onfulfilled = response => {
        if (response.ok){
            return response.json()
        }
        
        return response.json().then( onfulfilled = error => {
            const e = new Error('Что то пошло не так')
            e.data = error
            throw e
        })
    })
}

sendRequest(method = 'GET', requestURL)
    .then( onfulfilled = data => {
        let col = data.data
        console.log(col);
        for (let i = 0; i < col.length; i++) {
            const element = col[i];
/*             let div = document.createElement('div');
            div.className = "slider-poster_info";
            div.innerHTML = `
            <h1 class="header-head">JOKER</h1>
          <div class="d-flex al-items">
            <ul class="rating-stars d-flex">
              <li class="stars-item"><i class="fas fa-star"></i></li>
              <li class="stars-item"><i class="fas fa-star"></i></li>
              <li class="stars-item"><i class="fas fa-star"></i></li>
              <li class="stars-item"><i class="fas fa-star"></i></li>
              <li class="stars-item"><i class="far fa-star"></i></li>
            </ul>
            <ul class="genre d-flex">
              <li class="genre-item">триллер | </li>
              <li class="genre-item">драма | </li>
              <li class="genre-item">криминал</li>
            </ul>
          </div>
    
          <span class="time">109 мин. / 01:4</span>
          <p class="header-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electroni
          </p>
            <a href="" class="header-btn">Watch now</a>
          `;
          let parent = document.querySelector('.header-content').querySelector(".slick-track");
            parent.append(div);
 */
            const requestURL = `https://imdb-api.com/en/API/Posters/k_6wh3jcb1/tt1375666`;
            sendRequest(method = 'GET', requestURL)
            .then( onfulfilled = data => {
                let col = data
                console.log(col);
                let div = document.createElement("div");
                div.className = "poster"
                div.innerHTML = `<img src="${col}" alt="">`

                document.body.append(div);

            })
            .catch( onrejected = err => console.log(err))

        }
    })
    .catch( onrejected = err => console.log(err))


