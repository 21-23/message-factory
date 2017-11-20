/* eslint space-in-parens: off */

const { parseMessage } = require('../message-factory');

const frontService = require('../protocol/front-service');
const sandboxService = require('../protocol/sandbox-service');
const stateService = require('../protocol/state-service');
const ui = require('../protocol/ui');

/*
 Use case:
    Participant types a new symbol in input on game view;
 */

const participantId = 'part-1357-icip-2468-ant';
const sessionId = 'q1w2e3r4t5y6u7i8';
let msg;
let gMs; // message to game
let gmM; // message to game master

// Valid incorrect solution
msg = parseMessage( frontService.solution('map()') );
msg = parseMessage( stateService.participantInput(sessionId, participantId, msg.message.input, 1486383595315) );
msg = parseMessage( sandboxService.solutionEvaluate(msg.message.input, 'task-uniq-id-0') );
msg = parseMessage( stateService.solutionEvaluated(msg.message.taskId, '[1]', undefined, 'incorrect') );
msg = parseMessage( frontService.solutionEvaluated(sessionId, participantId, msg.message.result, msg.message.error, msg.message.correct, 5104, 5) );
gMs = parseMessage( ui.solutionEvaluated(msg.message.result, msg.message.error, msg.message.correct, msg.message.time) );
gmM = parseMessage( ui.participantSolution(msg.message.participantId, msg.message.correct, msg.message.time, msg.message.length) );

// Valid partially incorrect solution
msg = parseMessage( frontService.solution('map()') );
msg = parseMessage( stateService.participantInput(sessionId, participantId, msg.message.input, 1486383595316) );
msg = parseMessage( sandboxService.solutionEvaluate(msg.message.input, 'task-uniq-id-1') );
msg = parseMessage( stateService.solutionEvaluated(msg.message.taskId, '[1]', undefined, 'partial') );
msg = parseMessage( frontService.solutionEvaluated(sessionId, participantId, msg.message.result, msg.message.error, msg.message.correct, 5104, 5) );
gMs = parseMessage( ui.solutionEvaluated(msg.message.result, msg.message.error, msg.message.correct, msg.message.time) );
gmM = parseMessage( ui.participantSolution(msg.message.participantId, msg.message.correct, msg.message.time, msg.message.length) );

// Valid correct solution
msg = parseMessage( frontService.solution('map()') );
msg = parseMessage( stateService.participantInput(sessionId, participantId, msg.message.input, 1486383595317) );
msg = parseMessage( sandboxService.solutionEvaluate(msg.message.input, 'task-uniq-id-2') );
msg = parseMessage( stateService.solutionEvaluated(msg.message.taskId, '[1]', undefined, 'correct') );
msg = parseMessage( frontService.solutionEvaluated(sessionId, participantId, msg.message.result, msg.message.error, msg.message.correct, 5104, 5) );
gMs = parseMessage( ui.solutionEvaluated(msg.message.result, msg.message.error, msg.message.correct, msg.message.time) );
gmM = parseMessage( ui.participantSolution(msg.message.participantId, msg.message.correct, msg.message.time, msg.message.length) );

// Invalid solution (validation fail)
msg = parseMessage( frontService.solution('map(') );
msg = parseMessage( stateService.participantInput(sessionId, participantId, msg.message.input, 1486383595318) );
msg = parseMessage( sandboxService.solutionEvaluate(msg.message.input, 'task-uniq-id-3') );
msg = parseMessage( stateService.solutionEvaluated(msg.message.taskId, undefined, 'SyntaxError: Unexpected token (', undefined) );
msg = parseMessage( frontService.solutionEvaluated(sessionId, participantId, msg.message.result, msg.message.error, msg.message.correct, 5104, 4) );
gMs = parseMessage( ui.solutionEvaluated(msg.message.result, msg.message.error, msg.message.correct, msg.message.time) );
gmM = parseMessage( ui.participantSolution(msg.message.participantId, msg.message.correct, msg.message.time, msg.message.length) );

// Invalid solution
msg = parseMessage( frontService.solution('map1()') );
msg = parseMessage( stateService.participantInput(sessionId, participantId, msg.message.input, 1486383595318) );
msg = parseMessage( sandboxService.solutionEvaluate(msg.message.input, 'task-uniq-id-3') );
msg = parseMessage( stateService.solutionEvaluated(msg.message.taskId, undefined, 'map1 is not defined', undefined) );
msg = parseMessage( frontService.solutionEvaluated(sessionId, participantId, msg.message.result, msg.message.error, msg.message.correct, 5104, 6) );
gMs = parseMessage( ui.solutionEvaluated(msg.message.result, msg.message.error, msg.message.correct, msg.message.time) );
gmM = parseMessage( ui.participantSolution(msg.message.participantId, msg.message.correct, msg.message.time, msg.message.length) );
