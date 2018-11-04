const { createMessage } = require('../message-factory');

const identity = require('./identity').UI;

// a-z order, please
const MESSAGE_NAME = {
    gameMasterSessionState: 'gameMaster.sessionState',
    participantJoined: 'participant.joined',
    participantLeft: 'participant.left',
    participantSolution: 'participant.solution',
    playerScore: 'player.score',
    playerSessionState: 'player.sessionState',
    puzzle: 'puzzle',
    puzzleChanged: 'puzzle.changed',
    roundCountdownChanged: 'roundCountdown.changed',
    roundPhaseChanged: 'roundPhase.changed',
    sandboxStatus: 'sandbox.status',
    score: 'score',
    solutionEvaluated: 'solution.evaluated',
    solutionSync: 'solution.sync',
    startCountdownChanged: 'startCountdown.changed',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.gameMasterSessionState = function (displayName, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, players, sandboxStatus) {
    return createMessage(identity, { name: MESSAGE_NAME.gameMasterSessionState, displayName, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, players, sandboxStatus });
};

exports.participantJoined = function (participantId, displayName) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, participantId, displayName });
};

exports.participantLeft = function (participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantLeft, participantId });
};

exports.participantSolution = function (participantId, correct, time, length) {
    return createMessage(identity, { name: MESSAGE_NAME.participantSolution, participantId, correct, time, length });
};

exports.playerScore = function (score, meta) {
    return createMessage(identity, { name: MESSAGE_NAME.playerScore, score, meta });
};

exports.playerSessionState = function (displayName, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput, solution) {
    return createMessage(identity, { name: MESSAGE_NAME.playerSessionState, displayName, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput, solution });
};

exports.puzzle = function (input, expected, puzzleOptions) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzle, input, expected, puzzleOptions });
};

exports.puzzleChanged = function (puzzleIndex, puzzleName, puzzleOptions) {
    return createMessage(identity, { name: MESSAGE_NAME.puzzleChanged, puzzleIndex, puzzleName, puzzleOptions });
};

exports.roundCountdownChanged = function (roundCountdown) {
    return createMessage(identity, { name: MESSAGE_NAME.roundCountdownChanged, roundCountdown });
};

exports.roundPhaseChanged = function (roundPhase) {
    return createMessage(identity, { name: MESSAGE_NAME.roundPhaseChanged, roundPhase });
};

exports.sandboxStatus = function (status) {
    return createMessage(identity, { name: MESSAGE_NAME.sandboxStatus, status });
};

exports.score = function (players) {
    return createMessage(identity, { name: MESSAGE_NAME.score, players });
};

exports.solutionEvaluated = function (result, error, correct, time) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluated, result, error, correct, time });
};

exports.solutionSync = function (solutions) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionSync, solutions });
};

exports.startCountdownChanged = function (startCountdown) {
    return createMessage(identity, { name: MESSAGE_NAME.startCountdownChanged, startCountdown });
};
