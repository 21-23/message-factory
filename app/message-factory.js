/*
 * The common interface to communicate with Messanger.
 *
 * Generic message example:
 * {
 *      destination: 'state-service',
 *      type: 'game-connect',
 *      payload: '{"user-id":"user-0-dqd3d-23dasd-3dasd"}'
 * }
 *
 */


function createMessage(destination, type, payload) {
    if (!destination) {
        throw new TypeError('"destination" is required for message');
    }
    if (!type) {
        throw new TypeError('"type" is required for message');
    }

    const message = {
        destination,
        type,
        payload: JSON.stringify(payload),
    };

    return JSON.stringify(message);
}

function parsePayload(payloadStr) {
    if (!payloadStr || typeof payloadStr !== 'string') {
        return payloadStr;
    }

    return JSON.parse(payloadStr);
}

function parseMessage(messageStr, payloadParse = false) {
    if (!messageStr) {
        throw new TypeError('no message to be parsed');
    }

    const message = JSON.parse(messageStr);

    if (payloadParse) {
        message.payload = parsePayload(message.payload);
    }

    return message;
}

module.exports = {
    createMessage,
    parseMessage,
    parsePayload,
};
