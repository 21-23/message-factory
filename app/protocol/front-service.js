const { createMessage } = require('../message-factory');

const identity = 'front-service';

// a-z order, please
const MESSAGE_NAME = {
    participantJoined: 'participant.joined',
    puzzle: 'puzzle',
    puzzleChanged: 'puzzle.changed',
    puzzleIndexSet: 'puzzleIndex.set',
    roundCountdownChanged: 'roundCountdown.changed',
    roundPhaseChanged: 'roundPhase.changed',
    roundStart: 'round.start',
    roundStop: 'round.stop',
    solution: 'solution',
    solutionEvaluated: 'solution.evaluated',
    startCountdownChanged: 'startCountdown.changed',
    registerGameMaster: 'gameMaster.register'
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantJoined = function (sessionId, participantId, role) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, role });
};

exports.puzzle = function (sessionId, input, expected) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzle, sessionId, input, expected });
};

exports.puzzleChanged = function (sessionId, puzzleIndex, puzzleName, timeLimit) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleChanged, sessionId, puzzleIndex, puzzleName, timeLimit });
};

exports.puzzleIndexSet = function (index) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleIndexSet, index });
};

exports.roundCountdownChanged = function (sessionId, roundCountdown) {
    return createMessage(identity, { name: MESSAGE_NAME.roundCountdownChanged, sessionId, roundCountdown });
};

exports.roundPhaseChanged = function (sessionId, roundPhase) {
    return createMessage(identity, { name: MESSAGE_NAME.roundPhaseChanged, sessionId, roundPhase });
};

exports.roundStart = function () {
    return createMessage(identity, { name: MESSAGE_NAME.roundStart });
};

exports.roundStop = function () {
    return createMessage(identity, { name: MESSAGE_NAME.roundStop });
};

exports.solution = function (input) {
    return createMessage(identity, { name: MESSAGE_NAME.solution, input });
};

exports.solutionEvaluated = function (sessionId, participantId, result, error, correct, time, length) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, sessionId, participantId, result, error, correct, time, length });
};

exports.startCountdownChanged = function (sessionId, startCountdown) {
    return createMessage(identity, { name: MESSAGE_NAME.startCountdownChanged, sessionId, startCountdown });
};
