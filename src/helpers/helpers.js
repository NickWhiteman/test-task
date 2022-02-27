export var deletedData = function (id, data) {
    return data.filter(function (card) {
        if (card.id !== id)
            return card;
    });
};
