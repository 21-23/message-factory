const { createMessage } = require('../message-factory');

const identity = 'front-service';

// a-z order, please
const MESSAGE_NAME = {
    createParticipant: 'participant.create',
    gameMasterSessionState: 'gameMaster.sessionState',
    participantJoined: 'participant.joined',
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

exports.participantJoined = function (sessionId, participantId, role) {
    return createMessage(identity, { name: MESSAGE_NAME.participantJoined, sessionId, participantId, role });
};

exports.participantKick = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantKick, sessionId, participantId });
};

exports.participantLeft = function (sessionId, participantId) {
    return createMessage(identity, { name: MESSAGE_NAME.participantLeft, sessionId, participantId });
};

exports.playerSessionState = function (sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput) {
    return createMessage(identity, { name: MESSAGE_NAME.playerSessionState, sessionId, participantId, puzzleIndex, puzzleCount, puzzle, roundPhase, roundCountdown, startCountdown, playerInput });
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

exports.score = function (sessionId, players) {
    return createMessage(identity, { name: MESSAGE_NAME.score, sessionId, players });
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
