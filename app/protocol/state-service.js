const { createMessage } = require('../message-factory');

const identity = 'state-service';

const MESSAGE_NAME = {
    sessionJoin: 'session.join',
    sessionLeave: 'session.leave',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.sessionJoin = function (sessionId, participantId) {
    if (!sessionId || !participantId) {
        throw new TypeError('sessionId, participantId are required for session.join message');
    }

    return createMessage(identity, { name: MESSAGE_NAME.sessionJoin, sessionId, participantId });
};

exports.sessionLeave = function (sessionId, participantId) {
    if (!sessionId || !participantId) {
        throw new TypeError('sessionId, participantId are required for session.leave message');
    }

    return createMessage(identity, { name: MESSAGE_NAME.sessionLeave, sessionId, participantId });
};
