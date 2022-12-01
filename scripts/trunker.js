let cards = document.querySelectorAll('.card-info');

cards.forEach(card_info => {
    card_info.innerText = card_info.innerText.substr(0, 100) + '...';
});

