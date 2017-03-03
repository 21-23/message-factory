const { createMessage } = require('./message-factory');

const MESSAGE_NAME = {
    joined: 'participant.joined',
    left: 'participant.left',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.joined = function (destination, sessionId, participantId) {
    if (!destination) {
        throw new TypeError('destination is required for participant.joined message');
    }

    return createMessage(destination, { name: MESSAGE_NAME.joined, sessionId, participantId });
};

exports.left = function (destination, sessionId, participantId) {
    if (!destination) {
        throw new TypeError('destination is required for participant.left message');
    }

    return createMessage(destination, { name: MESSAGE_NAME.left, sessionId, participantId });
};
