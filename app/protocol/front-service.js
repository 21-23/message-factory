const { createMessage } = require('../message-factory');

const identity = 'front-service';

// a-z order, please
const MESSAGE_NAME = {
    createParticipant: 'participant.create',
    participantJoined: 'participant.joined',
    puzzle: 'puzzle',
    puzzleChanged: 'puzzle.changed',
    puzzleIndexSet: 'puzzleIndex.set',
    roundCountdownChanged: 'roundCountdown.changed',
    roundPhaseChanged: 'roundPhase.changed',
    roundStart: 'round.start',
    roundStop: 'round.stop',
    sessionState: 'session.state',
    solution: 'solution',
    solutionEvaluated: 'solution.evaluated',
    startCountdownChanged: 'startCountdown.changed',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.createParticipant = function (sessionId, participant) {
    return createMessage(identity, { name: MESSAGE_NAME.createParticipant, participant });
};

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

exports.sessionState = function (sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput, score) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionState, sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput, score });
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
