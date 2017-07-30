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
    sandboxConnected: 'sandbox.connected',
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

exports.puzzleIndexSet = function (sessionId, participantId, puzzleIndex) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleIndexSet, sessionId, participantId, puzzleIndex });
};

exports.roundPhaseSet = function (sessionId, participantId, roundPhase) {
    return createMessage(identity, { name: MESSAGE_NAME.roundPhaseSet, sessionId, participantId, roundPhase });
};

exports.roundStart = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.roundStart, sessionId, participantId });
};

exports.roundStop = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.roundStop, sessionId, participantId });
};

exports.sandboxConnected = function () {
    return createMessage(identity, { name: MESSAGE_NAME.sandboxConnected });
};

exports.sessionCreate = function (gameMasterId, alias, puzzles) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionCreate, gameMasterId, alias, puzzles });
};

exports.sessionJoin = function (sessionId, participantId, role) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionJoin, sessionId, participantId, role });
};

exports.sessionLeave = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionLeave, sessionId, participantId });
};

exports.solutionEvaluated = function (taskId, result, error, correct) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, taskId, result, error, correct });
};
