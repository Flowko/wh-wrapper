"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../client/client");
const base_handler_1 = require("./base-handler");
class FlowCompletion extends base_handler_1.BaseHandler {
    constructor(client, value) {
        var _a;
        if (!(client instanceof client_1.Client))
            throw new Error("Invalid client - must be instance of Client");
        super(client, value);
        if (value.messages[0].type !== "interactive")
            throw new Error("");
        this.type = value.messages[0].type;
        this.body = value.messages[0].interactive.nfm_reply.body;
        this.clickType = value.messages[0].interactive.type;
        this.timestamp = new Date(+value.messages[0].timestamp * 1000);
        if ((_a = value.messages[0].context) === null || _a === void 0 ? void 0 : _a.from)
            this.context = {
                messageFrom: value.messages[0].context.from,
                messageID: value.messages[0].context.id,
            };
        this.data = value.messages[0].interactive.nfm_reply.response_json;
        Object.defineProperty(this, "client", { enumerable: false });
    }
    async markMessageAsRead() {
        return await this.client.markMessageAsRead(this.id);
    }
}
exports.default = FlowCompletion;
