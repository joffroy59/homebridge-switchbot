/* Copyright(C) 2021-2023, SwitchBot (https://github.com/SwitchBot). All rights reserved.
 *
 * index.ts: @switchbot/homebridge-switchbot plugin registration.
 */
import { PLATFORM_NAME, PLUGIN_NAME } from './settings.js';
import { SwitchBotPlatform } from './platform.js';
// Register our platform with homebridge.
export default (api) => {
    api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, SwitchBotPlatform);
};
//# sourceMappingURL=index.js.map