const { createMessage } = require('../message-factory');

const identity = 'ui';

const MESSAGE_NAME = {
    participantJoined: 'participant.joined',
    participantLeft: 'participant.left',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantJoined = function (sessionId, participantId, displayName) {
    if (!sessionId || !participantId || !displayName) {
        throw new TypeError('sessionId, participantId, displayName are required for participant.joined message');
    }

    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, displayName });
};

exports.participantLeft = function (sessionId, participantId) {
    if (!sessionId || !participantId) {
        throw new TypeError('sessionId, participantId are required for participant.left message');
    }

    return createMessage(identity, { name: MESSAGE_NAME.left, sessionId, participantId });
};
