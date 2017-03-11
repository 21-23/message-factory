const { createMessage } = require('../message-factory');

const identity = 'state-service';

const MESSAGE_NAME = {
    sessionJoin: 'session.join',
    sessionLeave: 'session.leave',
    solutionEvaluated: 'solution.evaluated',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.sessionJoin = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionJoin, sessionId, participantId });
};

exports.sessionLeave = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionLeave, sessionId, participantId });
};

exports.solutionEvaluated = function (taskId, result, error) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, taskId, result, error });
};
