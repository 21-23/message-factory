const { createMessage } = require('../message-factory');

const identity = 'sandbox-service';

const MESSAGE_NAME = {
    sandboxSet: 'sandbox.set',
    sandboxReset: 'sandbox.reset',
    solutionEvaluate: 'solution.evaluate',
    destroy: 'destroy',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.sandboxSet = function (input, settings) {
    return createMessage(identity, { name: MESSAGE_NAME.sandboxSet, input, settings });
};

exports.sandboxReset = function () {
    return createMessage(identity, { name: MESSAGE_NAME.sandboxReset });
};

exports.solutionEvaluate = function (solution, taskId) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluate, solution, taskId });
};

exports.destroy = function () {
    return createMessage(identity, { name: MESSAGE_NAME.destroy });
};
