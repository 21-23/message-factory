// TODO: move all messages to protocol; forbid to use createMessage
const { createMessage, parseMessage } = require('./message-factory');

const arnaux = require('./arnaux-messages');
const frontServiceProtocol = require('./protocol/front-service');
const sandboxServiceProtocol = require('./protocol/sandbox-service');
const stateServiceProtocol = require('./protocol/state-service');
const uiProtocol = require('./protocol/ui');

module.exports = {
    createMessage,
    parseMessage,
    arnaux,
    protocol: {
        frontService: frontServiceProtocol,
        sandboxService: sandboxServiceProtocol,
        stateService: stateServiceProtocol,
        ui: uiProtocol,
    }
};
