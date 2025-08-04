document.getElementById('add-game-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('game-title').value;
    const genre = document.getElementById('game-genre').value;
    const rating = document.getElementById('game-rating').value;
    const image = document.getElementById('game-image').value;
    const desc = document.getElementById('game-description').value;
    
    const article = document.createElement('article');
    article.innerHTML = `
        <img src="${image}" width="300" height="300" alt="Cover image for ${title}"
             srcset="${image} 300w,
                     ${image} 600w"
             sizes="(max-width: 300px) 300px
                    (max-width: 600px) 600px"
        />
        <div class="game-info">
            <p><b>${title}</b></p>
            <p>${genre} &middot; ${rating}</p>
            <p class="game-desc" data-short="${desc.slice(0, 40)}..." data-full="${desc}">${desc.slice(0, 40)}...</p>
            <button class="toggle-desc">Show More</button>
            <a href="#">See Details</a>
        </div>
    `;
    document.getElementById('game-grid').appendChild(article);
    this.reset();
});

document.getElementById('game-grid').addEventListener('click', function(e) {
    if (e.target.classList.contains('toggle-desc')) {
        const descP = e.target.parentElement.querySelector('.game-desc');
        const isShort = descP.textContent === descP.dataset.short;
        descP.textContent = isShort ? descP.dataset.full : descP.dataset.short;
        e.target.textContent = isShort ? 'Show Less' : 'Show More';
    }
});