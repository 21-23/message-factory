const { createMessage } = require('../message-factory');

const identity = 'ui';

// a-z order, please
const MESSAGE_NAME = {
    participantJoined: 'participant.joined',
    participantLeft: 'participant.left',
    participantSolution: 'participant.solution',
    puzzle: 'puzzle',
    puzzleChanged: 'puzzle.changed',
    roundCountdownChanged: 'roundCountdown.changed',
    roundPhaseChanged: 'roundPhase.changed',
    solutionEvaluated: 'solution.evaluated',
    startCountdownChanged: 'startCountdown.changed',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.participantJoined = function (sessionId, participantId, displayName) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, displayName });
};

exports.participantLeft = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantLeft, sessionId, participantId });
};

exports.participantSolution = function (participantId, correct, time, length) {
    return createMessage(identity, { name: MESSAGE_NAME.participantSolution, correct, time, length });
};

exports.puzzle = function (input, expected) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzle, input, expected });
};

exports.puzzleChanged = function (puzzleIndex, puzzleName, timeLimit) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleChanged, puzzleIndex, puzzleName, timeLimit });
};

exports.roundCountdownChanged = function (roundCountdown) {
    return createMessage(identity, { name: MESSAGE_NAME.roundCountdownChanged, roundCountdown });
};

exports.roundPhaseChanged = function (roundPhase) {
    return createMessage(identity, { name: MESSAGE_NAME.roundPhaseChanged, roundPhase });
};

exports.solutionEvaluated = function (result, error, correct, time) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, result, error, correct, time });
};

exports.startCountdownChanged = function (startCountdown) {
    return createMessage(identity, { name: MESSAGE_NAME.startCountdownChanged, startCountdown });
};
