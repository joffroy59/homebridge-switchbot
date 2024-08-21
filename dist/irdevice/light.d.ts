import { CharacteristicValue, PlatformAccessory, Service, API, Logging, HAP } from 'homebridge';
import { SwitchBotPlatform } from '../platform.js';
import { irDevicesConfig, irdevice, SwitchBotPlatformConfig } from '../settings.js';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class Light {
    private readonly platform;
    private accessory;
    device: irdevice & irDevicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    lightBulbService?: Service;
    ProgrammableSwitchServiceOn?: Service;
    ProgrammableSwitchServiceOff?: Service;
    On: CharacteristicValue;
    ProgrammableSwitchEventOn?: CharacteristicValue;
    ProgrammableSwitchOutputStateOn?: CharacteristicValue;
    ProgrammableSwitchEventOff?: CharacteristicValue;
    ProgrammableSwitchOutputStateOff?: CharacteristicValue;
    FirmwareRevision: CharacteristicValue;
    deviceLogging: string;
    disablePushOn?: boolean;
    disablePushOff?: boolean;
    constructor(platform: SwitchBotPlatform, accessory: PlatformAccessory, device: irdevice & irDevicesConfig);
    OnSet(value: CharacteristicValue): Promise<void>;
    ProgrammableSwitchOutputStateSetOn(value: CharacteristicValue): Promise<void>;
    ProgrammableSwitchOutputStateSetOff(value: CharacteristicValue): Promise<void>;
    /**
     * Pushes the requested changes to the SwitchBot API
     * deviceType	commandType     Command	          command parameter	         Description
     * Light -        "command"       "turnOff"         "default"	        =        set to OFF state
     * Light -       "command"       "turnOn"          "default"	        =        set to ON state
     * Light -       "command"       "volumeAdd"       "default"	        =        volume up
     * Light -       "command"       "volumeSub"       "default"	        =        volume down
     * Light -       "command"       "channelAdd"      "default"	        =        next channel
     * Light -       "command"       "channelSub"      "default"	        =        previous channel
     */
    pushLightOnChanges(): Promise<void>;
    pushLightOffChanges(): Promise<void>;
    pushChanges(bodyChange: any): Promise<void>;
    updateHomeKitCharacteristics(): Promise<void>;
    disablePushOnChanges(device: irdevice & irDevicesConfig): Promise<void>;
    disablePushOffChanges(device: irdevice & irDevicesConfig): Promise<void>;
    commandType(): Promise<string>;
    commandOn(): Promise<string>;
    commandOff(): Promise<string>;
    statusCode(statusCode: number): Promise<void>;
    apiError(e: any): Promise<void>;
    deviceContext(): Promise<void>;
    deviceConfig(device: irdevice & irDevicesConfig): Promise<void>;
    deviceLogs(device: irdevice & irDevicesConfig): Promise<void>;
    /**
     * Logging for Device
     */
    infoLog(...log: any[]): void;
    warnLog(...log: any[]): void;
    debugWarnLog(...log: any[]): void;
    errorLog(...log: any[]): void;
    debugErrorLog(...log: any[]): void;
    debugLog(...log: any[]): void;
    enablingDeviceLogging(): boolean;
}
//# sourceMappingURL=light.d.ts.map