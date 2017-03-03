const { createMessage } = require('./message-factory');

const MESSAGE_NAME = {
    join: 'session.join',
    leave: 'session.leave',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.join = function (destination, sessionId, participantId) {
    if (!destination) {
        throw new TypeError('destination is required for session.join message');
    }

    return createMessage(destination, { name: MESSAGE_NAME.join, sessionId, participantId });
};

exports.leave = function (destination, sessionId, participantId) {
    if (!destination) {
        throw new TypeError('destination is required for session.leave message');
    }

    return createMessage(destination, { name: MESSAGE_NAME.leave, sessionId, participantId });
};
