const { createMessage, parseMessage } = require('./message-factory');

const arnaux = require('./arnaux-messages');
const uiProtocol = require('./protocol/ui');
const stateServiceProtocol = require('./protocol/state-service');

module.exports = {
    createMessage,
    parseMessage,
    arnaux,
    protocol: {
        stateService: stateServiceProtocol,
        ui: uiProtocol,
    }
};
