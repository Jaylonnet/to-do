const counter = () => {
    let count = 0;

    const getUniqueId = () => {
        return count++;
    };

    return {getUniqueId};
};