function petPawty(arr) {

    if (!Array.isArray(arr)){
        return `This is not a list of dogs.`;
    }

    let dogCount = arr.length;

    if (dogCount === 0) {
        return `Aww man, no dogs?`;
    }

    if (dogCount === 1) {
        return `A proper party needs more than just ${arr[0]}!`;
    }

    if (dogCount < 5) {
        return `We need more than ${dogCount} dogs for a pawty!`;
    }

    if (dogCount > 25) {
        return `Woah ${dogCount}, that's a lot of dogs! Let's keep it reasonable.`;
    }

    return true;
}

module.exports = { petPawty }