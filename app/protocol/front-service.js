const { createMessage } = require('../message-factory');

const identity = 'front-service';

const MESSAGE_NAME = {
    participantJoined: 'participant.joined',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantJoined = function (sessionId, participantId, role) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, role });
};
