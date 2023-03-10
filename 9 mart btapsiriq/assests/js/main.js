const body=document.querySelector("body");
fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
          data.forEach(element => {
            body.innerHTML+=`<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.username}</h6>
              <p class="card-text">${element.company.catchPhrase}</p>
              <a href="${element.website}" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
            `
          });
      })
      