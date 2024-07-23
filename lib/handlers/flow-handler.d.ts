import Client from "../client/client";
import { Context } from "../types/exports-types";
import { BaseHandler } from "./base-handler";
export default class FlowCompletion extends BaseHandler {
    type: "interactive";
    timestamp: Date;
    context?: Context;
    body: string;
    clickType: "nfm_reply";
    data: object;
    constructor(client: Client, value: any);
    markMessageAsRead(): Promise<boolean>;
}
