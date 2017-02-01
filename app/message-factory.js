/*
 * The common interface to communicate within services.
 *
 * Generic message example:
 * {
 *      to: 'state-service',
 *      message: { name: 'checkin', identity: 'front-service' }
 * }
 *
 */


function createMessage(to, payload) {
    if (!to) {
        throw new TypeError('"to" is required for message');
    }

    const message = {
        to,
        message: payload,
    };

    return JSON.stringify(message);
}

function parseMessage(messageStr) {
    if (!messageStr) {
        throw new TypeError('no message to be parsed');
    }

    const message = JSON.parse(messageStr);

    return message;
}

module.exports = {
    createMessage,
    parseMessage,
};
