const { createMessage } = require('../message-factory');

const identity = 'state-service';

// a-z order, please
const MESSAGE_NAME = {
    participantInput: 'participant.input',
    puzzleCreate: 'puzzle.create',
    puzzleIndexSet: 'puzzleIndex.set',
    roundPhaseSet: 'roundPhase.set',
    roundStart: 'round.start',
    roundStop: 'round.stop',
    sessionCreate: 'session.create',
    sessionJoin: 'session.join',
    sessionLeave: 'session.leave',
    solutionEvaluated: 'solution.evaluated'
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantInput = function (sessionId, participantId, input, timestamp) {
    return createMessage(identity, { name: MESSAGE_NAME.participantInput, sessionId, participantId, input, timestamp });
};

exports.puzzleCreate = function (puzzle) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleCreate, puzzle });
};

exports.puzzleIndexSet = function (sessionId, puzzleIndex) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleIndexSet, sessionId, puzzleIndex });
};

exports.roundPhaseSet = function (sessionId, roundPhase) {
    return createMessage(identity, { name: MESSAGE_NAME.roundPhaseSet, sessionId, roundPhase });
};

exports.roundStart = function (sessionId) {
    return createMessage(identity, { name: MESSAGE_NAME.roundStart, sessionId });
};

exports.roundStop = function (sessionId) {
    return createMessage(identity, { name: MESSAGE_NAME.roundStop, sessionId });
};

exports.sessionCreate = function (gameMasterId, puzzles) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionCreate, gameMasterId, puzzles });
};

exports.sessionJoin = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionJoin, sessionId, participantId });
};

exports.sessionLeave = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionLeave, sessionId, participantId });
};

exports.solutionEvaluated = function (taskId, result, error) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, taskId, result, error });
};
