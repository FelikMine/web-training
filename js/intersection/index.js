
function intersection(user1, user2) {

    let result = []

    for(let i = 0; i < user1.length; i++) {
        for(let j = 0; j<user2.length; j++) {

            if(user1[i][1] >= user2[j][0] && user2[j][1] >= user1[i][0]) {

                const start = Math.max(user1[i][0], user2[j][0]);
                const end = Math.min(user1[i][1], user2[j][1]);

                if (start < end) {
                    result.push([start, end]);
                }
            }
        }
    }

    return result
}
//если user1[i][1] >= user2[j][0] && user2[j][1] >= user1[i][0] ar.append

console.log(intersection(
    [[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
))

console.log(intersection(
    [[9, 15], [18, 21]],
    [[10, 14], [21, 22]]
) );
