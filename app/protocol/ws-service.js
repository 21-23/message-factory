const { createMessage } = require('../message-factory');

const identity = require('./identity').WS_SERVICE;

// a-z order, please
const MESSAGE_NAME = {
    sessionJoinResult: 'sessionJoin.result',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.sessionJoinResult = function (connectionId, sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionJoinResult, connectionId, sessionId, participantId });
};
