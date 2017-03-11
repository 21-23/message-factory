const { createMessage } = require('../message-factory');

const identity = 'ui';

const MESSAGE_NAME = {
    participantJoined: 'participant.joined',
    participantLeft: 'participant.left',
    solutionEvaluated: 'solution.evaluated',
    participantSolution: 'participant.solution',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantJoined = function (sessionId, participantId, displayName) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, displayName });
};

exports.participantLeft = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantLeft, sessionId, participantId });
};

exports.solutionEvaluated = function (result, error, correct, time) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, result, error, correct, time });
};

exports.participantSolution = function (participantId, correct, time, length) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, correct, time, length });
};
