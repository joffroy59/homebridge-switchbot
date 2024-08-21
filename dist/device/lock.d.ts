import { Subject } from 'rxjs';
import { SwitchBotPlatform } from '../platform.js';
import { Service, PlatformAccessory, CharacteristicValue, API, Logging, HAP } from 'homebridge';
import { device, devicesConfig, deviceStatus, serviceData, SwitchBotPlatformConfig } from '../settings.js';
export declare class Lock {
    private readonly platform;
    private accessory;
    device: device & devicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    lockService: Service;
    batteryService: Service;
    contactSensorService?: Service;
    latchButtonService?: Service;
    BatteryLevel: CharacteristicValue;
    LockTargetState: CharacteristicValue;
    LockCurrentState: CharacteristicValue;
    FirmwareRevision: CharacteristicValue;
    StatusLowBattery: CharacteristicValue;
    ContactSensorState: CharacteristicValue;
    OpenAPI_BatteryLevel: deviceStatus['battery'];
    OpenAPI_FirmwareRevision: deviceStatus['version'];
    OpenAPI_LockCurrentState: deviceStatus['lockState'];
    OpenAPI_ContactSensorState: deviceStatus['doorState'];
    BLE_BatteryLevel: serviceData['battery'];
    BLE_LockCurrentState: serviceData['state'];
    BLE_Calibration: serviceData['calibration'];
    BLE_ContactSensorState: serviceData['door_open'];
    BLE_IsConnected?: boolean;
    scanDuration: number;
    deviceLogging: string;
    deviceRefreshRate: number;
    lockUpdateInProgress: boolean;
    doLockUpdate: Subject<void>;
    private readonly OpenAPI;
    private readonly BLE;
    constructor(platform: SwitchBotPlatform, accessory: PlatformAccessory, device: device & devicesConfig);
    /**
     * Method for handling the LatchCharacteristic
     */
    handleLatchCharacteristic(value: boolean, callback: any): Promise<void>;
    /**
     * Parse the device status from the SwitchBot api
     */
    parseStatus(): Promise<void>;
    BLEparseStatus(): Promise<void>;
    openAPIparseStatus(): Promise<void>;
    /**
     * Asks the SwitchBot API for the latest device information
     */
    refreshStatus(): Promise<void>;
    BLERefreshStatus(): Promise<void>;
    openAPIRefreshStatus(): Promise<void>;
    /**
     * Pushes the requested changes to the SwitchBot API
     * deviceType	commandType	  Command	    command parameter	  Description
     * Lock   -    "command"     "lock"     "default"	 =        set to ???? state
     * Lock   -    "command"     "unlock"   "default"	 =        set to ???? state - LockCurrentState
     */
    pushChanges(): Promise<void>;
    BLEpushChanges(): Promise<void>;
    openAPIpushChanges(LatchUnlock?: any): Promise<void>;
    /**
     * Handle requests to set the value of the "On" characteristic
     */
    LockTargetStateSet(value: CharacteristicValue): Promise<void>;
    updateHomeKitCharacteristics(): Promise<void>;
    stopScanning(switchbot: any): Promise<void>;
    getCustomBLEAddress(switchbot: any): Promise<void>;
    BLEPushConnection(): Promise<void>;
    BLERefreshConnection(switchbot: any): Promise<void>;
    scan(device: device & devicesConfig): Promise<void>;
    statusCode(statusCode: number): Promise<void>;
    offlineOff(): Promise<void>;
    apiError(e: any): Promise<void>;
    deviceContext(): Promise<void>;
    refreshRate(device: device & devicesConfig): Promise<void>;
    deviceConfig(device: device & devicesConfig): Promise<void>;
    deviceLogs(device: device & devicesConfig): Promise<void>;
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
//# sourceMappingURL=lock.d.ts.map