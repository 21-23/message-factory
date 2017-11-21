const { createMessage } = require('../message-factory');

const identity = require('./identity').FRONT_SERVICE;

// a-z order, please
const MESSAGE_NAME = {
    createParticipant: 'participant.create',
    gameMasterSessionState: 'gameMaster.sessionState',
    participantKick: 'participant.kick',
    participantLeft: 'participant.left',
    playerSessionState: 'player.sessionState',
    puzzle: 'puzzle',
    puzzleChanged: 'puzzle.changed',
    puzzleIndexSet: 'puzzleIndex.set',
    roundCountdownChanged: 'roundCountdown.changed',
    roundPhaseChanged: 'roundPhase.changed',
    roundStart: 'round.start',
    roundStop: 'round.stop',
    score: 'score',
    sessionJoinResult: 'sessionJoin.result',
    solution: 'solution',
    solutionEvaluated: 'solution.evaluated',
    startCountdownChanged: 'startCountdown.changed',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.createParticipant = function (participant) {
    return createMessage(identity, { name: MESSAGE_NAME.createParticipant, participant });
};

exports.gameMasterSessionState = function (sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, players) {
    return createMessage(identity, { name: MESSAGE_NAME.gameMasterSessionState, sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, players });
};

exports.participantKick = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantKick, sessionId, participantId });
};

exports.participantLeft = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantLeft, sessionId, participantId });
};

exports.playerSessionState = function (sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput, solution) {
    return createMessage(identity, { name: MESSAGE_NAME.playerSessionState, sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput, solution });
};

exports.puzzle = function (sessionId, input, expected, puzzleOptions) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzle, sessionId, input, expected, puzzleOptions });
};

exports.puzzleChanged = function (sessionId, puzzleIndex, puzzleName, puzzleOptions) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleChanged, sessionId, puzzleIndex, puzzleName, puzzleOptions });
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

exports.score = function (sessionId, players) {
    return createMessage(identity, { name: MESSAGE_NAME.score, sessionId, players });
};

exports.sessionJoinResult = function (connectionId, sessionId) {
    return createMessage(identity, { name: MESSAGE_NAME.sessionJoinResult, connectionId, sessionId });
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
