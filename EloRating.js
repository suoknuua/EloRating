function expectedScore(rating1, rating2) {
    return 1/(1+Math.pow(10,(rating1-rating2)/400));
}

function eloRating(ratingA, ratingB, K, winner){
    const expectedScorePlayerA = ExpectedScore(ratingA, ratingB);
    const expectedScorePlayerB = ExpectedScore(ratingB, ratingA);

    ratingA = (winner == 'A') ? ratingA + K * (1 - expectedScorePlayerA) : ratingA = ratingA + K * (0 - expectedScorePlayerA);
    ratingB = (winner == 'B') ? ratingB + K * (1 - expectedScorePlayerB) : ratingB = ratingB + K * (0 - expectedScorePlayerB);

    //Here we log the ratings of the players
    console.log("Player A rating =", ratingA," Player B rating =", ratingB)
}

const ratingA = 1000, ratingB = 1000, K = 30, winner = 'A';

const eloRator = eloRating(ratingA, ratingB, K, winner);


