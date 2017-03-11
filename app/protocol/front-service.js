const { createMessage } = require('../message-factory');

const identity = 'front-service';

const MESSAGE_NAME = {
    participantJoined: 'participant.joined',
    solution: 'solution',
    solutionEvaluated: 'solution.evaluated'
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantJoined = function (sessionId, participantId, role) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, role });
};

exports.solution = function (input) {
    return createMessage(identity, { name: MESSAGE_NAME.solution, input });
};

exports.solutionEvaluated = function (sessionId, participantId, result, error, correct, time, length) {
    return createMessage(identity, { name: MESSAGE_NAME.solution, sessionId, participantId, result, error, correct, time, length });
};
