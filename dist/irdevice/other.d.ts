import { CharacteristicValue, PlatformAccessory, Service, API, Logging, HAP } from 'homebridge';
import { SwitchBotPlatform } from '../platform.js';
import { irDevicesConfig, irdevice, SwitchBotPlatformConfig } from '../settings.js';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class Others {
    private readonly platform;
    private accessory;
    device: irdevice & irDevicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    fanService?: Service;
    doorService?: Service;
    lockService?: Service;
    faucetService?: Service;
    windowService?: Service;
    switchService?: Service;
    outletService?: Service;
    garageDoorService?: Service;
    windowCoveringService?: Service;
    statefulProgrammableSwitchService?: Service;
    On?: CharacteristicValue;
    FirmwareRevision: CharacteristicValue;
    deviceLogging: string;
    disablePushOn?: boolean;
    otherDeviceType?: string;
    disablePushOff?: boolean;
    constructor(platform: SwitchBotPlatform, accessory: PlatformAccessory, device: irdevice & irDevicesConfig);
    /**
     * Handle requests to set the "On" characteristic
     */
    OnSet(value: CharacteristicValue): Promise<void>;
    /**
     * Pushes the requested changes to the SwitchBot API
     * deviceType	commandType     Command	          command parameter	         Description
     * Other -        "command"       "turnOff"         "default"	        =        set to OFF state
     * Other -       "command"       "turnOn"          "default"	        =        set to ON state
     * Other -       "command"       "volumeAdd"       "default"	        =        volume up
     * Other -       "command"       "volumeSub"       "default"	        =        volume down
     * Other -       "command"       "channelAdd"      "default"	        =        next channel
     * Other -       "command"       "channelSub"      "default"	        =        previous channel
     */
    pushOnChanges(): Promise<void>;
    pushOffChanges(): Promise<void>;
    pushChanges(bodyChange: any): Promise<void>;
    updateHomeKitCharacteristics(): Promise<void>;
    disablePushOnChanges(device: irdevice & irDevicesConfig): Promise<void>;
    disablePushOffChanges(device: irdevice & irDevicesConfig): Promise<void>;
    commandType(): Promise<string>;
    commandOn(): Promise<string>;
    commandOff(): Promise<string>;
    statusCode(statusCode: number): Promise<void>;
    apiError(e: any): Promise<void>;
    removeOutletService(accessory: PlatformAccessory): Promise<void>;
    removeGarageDoorService(accessory: PlatformAccessory): Promise<void>;
    removeDoorService(accessory: PlatformAccessory): Promise<void>;
    removeLockService(accessory: PlatformAccessory): Promise<void>;
    removeFaucetService(accessory: PlatformAccessory): Promise<void>;
    removeFanService(accessory: PlatformAccessory): Promise<void>;
    removeWindowService(accessory: PlatformAccessory): Promise<void>;
    removeWindowCoveringService(accessory: PlatformAccessory): Promise<void>;
    removeStatefulProgrammableSwitchService(accessory: PlatformAccessory): Promise<void>;
    removeSwitchService(accessory: PlatformAccessory): Promise<void>;
    deviceType(device: irdevice & irDevicesConfig): Promise<void>;
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
//# sourceMappingURL=other.d.ts.map