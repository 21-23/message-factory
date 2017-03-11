const { createMessage } = require('../message-factory');

const identity = 'state-service';

// a-z order, please
const MESSAGE_NAME = {
    participantInput: 'participant.input',
    puzzleIndexSet: 'puzzleIndex.set',
    roundPhaseSet: 'roundPhase.set',
    solutionEvaluated: 'solution.evaluated',
    sessionJoin: 'session.join',
    sessionLeave: 'session.leave',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantInput = function (sessionId, participantId, input, timestamp) {
    return createMessage(identity, { name: MESSAGE_NAME.participantInput, sessionId, participantId, input, timestamp });
};

exports.puzzleIndexSet = function (sessionId, puzzleIndex) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleIndexSet, sessionId, puzzleIndex });
};

exports.roundPhaseSet = function (sessionId, roundPhase) {
    return createMessage(identity, { name: MESSAGE_NAME.roundPhaseSet, sessionId, roundPhase });
};

exports.solutionEvaluated = function (taskId, result, error) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, taskId, result, error });
};

exports.sessionJoin = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionJoin, sessionId, participantId });
};

exports.sessionLeave = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionLeave, sessionId, participantId });
};
