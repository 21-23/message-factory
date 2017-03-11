const { createMessage } = require('../message-factory');

const identity = 'ui';

const MESSAGE_NAME = {
    participantJoined: 'participant.joined',
    participantLeft: 'participant.left',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantJoined = function (sessionId, participantId, displayName) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, displayName });
};

exports.participantLeft = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantLeft, sessionId, participantId });
};
