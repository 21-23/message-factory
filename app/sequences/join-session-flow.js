/* eslint space-in-parens: off */

const { parseMessage } = require('../message-factory');

const frontService = require('../protocol/front-service');
const stateService = require('../protocol/state-service');
const ui = require('../protocol/ui');

/*
 Use case:
    Participant opens a page (game or game master);
 */

const participantId = 'part-1357-icip-2468-ant';
const sessionId = 'q1w2e3r4t5y6u7i8';
const game = '*qd';
const sessionAlias = 'session-alias';
let role;
let msg;
let gMs; // message to game
let gmM; // message to game master

// Player joins the session (success flow)
role = 'player';
msg = parseMessage( stateService.sessionJoin('uniq-connection-id-0', game, sessionAlias, participantId, role) );
msg = parseMessage( frontService.sessionJoinResult(msg.message.connectionId, sessionId) );
gmM = parseMessage( ui.participantJoined(participantId, 'Participant name') );
msg = parseMessage( frontService.playerSessionState(
    sessionId,
    participantId,
    0, // puzzleIndex
    10, // puzzleCount
    { // puzzle
        name: 'Puzzle name',
        input: 'Puzzle input',
        expected: 'Puzzle expected',
        options: {
            timeLimit: 180,
            bannedCharacters: 'banned chars',
            more: 'values'
        }
    },
    'idle', // roundPhase
    180, // roundCountdown
    0, // startCountdown
    '', // playerInput
    null, // solution
) );
gMs = parseMessage( ui.playerSessionState(
    'Participant name',
    msg.message.puzzleIndex,
    msg.message.puzzleCount,
    msg.message.puzzle,
    msg.message.roundPhase,
    msg.message.roundCountdown,
    msg.message.startCountdown,
    msg.message.playerInput,
    msg.message.solution,
) );

// Player joins the session (requesting game master role)
role = 'game-master';
msg = parseMessage( stateService.sessionJoin('uniq-connection-id-0', game, sessionAlias, participantId, role) );
msg = parseMessage( frontService.sessionJoinResult(msg.message.connectionId, sessionId) );
msg = parseMessage( frontService.gameMasterSessionState(
    sessionId,
    participantId,
    0, // puzzleIndex
    10, // puzzleCount
    { // puzzle
        name: 'Puzzle name',
        input: 'Puzzle input',
        expected: 'Puzzle expected',
        options: {
            timeLimit: 180,
            bannedCharacters: 'banned chars',
            more: 'values'
        }
    },
    'idle', // roundPhase
    180, // roundCountdown
    0, // startCountdown
    [], // players
) );
gMs = parseMessage( ui.gameMasterSessionState(
    'Game master name',
    msg.message.puzzleIndex,
    msg.message.puzzleCount,
    msg.message.puzzle,
    msg.message.roundPhase,
    msg.message.roundCountdown,
    msg.message.startCountdown,
    [], // msg.message.players w/ full filled profiles
) );

// Player joins the session (success flow, middle of the round, re-connect)
role = 'player';
msg = parseMessage( stateService.sessionJoin('uniq-connection-id-0', game, sessionAlias, participantId, role) );
msg = parseMessage( frontService.sessionJoinResult(msg.message.connectionId, sessionId) );
gmM = parseMessage( ui.participantJoined(participantId, 'Participant name') );
msg = parseMessage( frontService.playerSessionState(
    sessionId,
    participantId,
    3, // puzzleIndex
    10, // puzzleCount
    { // puzzle
        name: 'Puzzle name',
        input: 'Puzzle input',
        expected: 'Puzzle expected',
        options: {
            timeLimit: 180,
            bannedCharacters: 'banned chars',
            more: 'values'
        }
    },
    'in-progress', // roundPhase
    54, // roundCountdown
    0, // startCountdown
    'map(', // playerInput
    null, // solution
) );
gMs = parseMessage( ui.playerSessionState(
    'Participant name',
    msg.message.puzzleIndex,
    msg.message.puzzleCount,
    msg.message.puzzle,
    msg.message.roundPhase,
    msg.message.roundCountdown,
    msg.message.startCountdown,
    msg.message.playerInput,
    msg.message.solution,
) );
