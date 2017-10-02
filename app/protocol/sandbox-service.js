const { createMessage } = require('../message-factory');

const identity = 'sandbox-service';

// a-z order, please
const MESSAGE_NAME = {
    destroy: 'destroy',
    sandboxReset: 'sandbox.reset',
    sandboxSet: 'sandbox.set',
    solutionEvaluate: 'solution.evaluate',
};
exports.MESSAGE_NAME = MESSAGE_NAME;

exports.destroy = function () {
    return createMessage(identity, { name: MESSAGE_NAME.destroy });
};

exports.sandboxReset = function () {
    return createMessage(identity, { name: MESSAGE_NAME.sandboxReset });
};

exports.sandboxSet = function (input, expected, hidden, options) {
    return createMessage(identity, { name: MESSAGE_NAME.sandboxSet, input, expected, hidden, options });
};

exports.solutionEvaluate = function (solution, taskId) {
    return createMessage(identity, { name: MESSAGE_NAME.solutionEvaluate, solution, taskId });
};
