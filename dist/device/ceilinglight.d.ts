import { Subject } from 'rxjs';
import { SwitchBotPlatform } from '../platform.js';
import { device, devicesConfig, deviceStatus, serviceData, SwitchBotPlatformConfig } from '../settings.js';
import { Service, PlatformAccessory, CharacteristicValue, ControllerConstructor, Controller, ControllerServiceMap, API, Logging, HAP } from 'homebridge';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class CeilingLight {
    private readonly platform;
    private accessory;
    device: device & devicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    lightBulbService: Service;
    On: CharacteristicValue;
    Hue: CharacteristicValue;
    Saturation: CharacteristicValue;
    Brightness: CharacteristicValue;
    ColorTemperature?: CharacteristicValue;
    FirmwareRevision: CharacteristicValue;
    OpenAPI_On: deviceStatus['power'];
    OpenAPI_RGB: deviceStatus['color'];
    OpenAPI_Brightness: deviceStatus['brightness'];
    OpenAPI_FirmwareRevision: deviceStatus['version'];
    OpenAPI_ColorTemperature?: deviceStatus['colorTemperature'];
    BLE_Delay: serviceData['delay'];
    BLE_On: serviceData['state'];
    BLE_WifiRssi: serviceData['wifiRssi'];
    BLE_IsConnected?: boolean;
    set_minStep?: number;
    scanDuration: number;
    deviceLogging: string;
    deviceRefreshRate: number;
    adaptiveLightingShift?: number;
    AdaptiveLightingController?: ControllerConstructor | Controller<ControllerServiceMap>;
    minKelvin: number;
    maxKelvin: number;
    cacheKelvin: number;
    ceilingLightUpdateInProgress: boolean;
    doCeilingLightUpdate: Subject<void>;
    private readonly OpenAPI;
    private readonly BLE;
    constructor(platform: SwitchBotPlatform, accessory: PlatformAccessory, device: device & devicesConfig);
    private model;
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
     * deviceType	      commandType	          Command	               command parameter	                     Description
     * Color Bulb   -    "command"            "turnOff"                  "default"	              =        set to OFF state
     * Color Bulb   -    "command"            "turnOn"                   "default"	              =        set to ON state
     * Color Bulb   -    "command"            "toggle"                   "default"	              =        toggle state
     * Color Bulb   -    "command"         "setBrightness"	             "{1-100}"	              =        set brightness
     * Color Bulb   -    "command"           "setColor"	         "{0-255}:{0-255}:{0-255}"	      =        set RGB color value
     * Color Bulb   -    "command"     "setColorTemperature"	         "{2700-6500}"	            =        set color temperature
     *
     */
    pushChanges(): Promise<void>;
    BLEpushChanges(): Promise<void>;
    openAPIpushChanges(): Promise<void>;
    pushHueSaturationChanges(): Promise<void>;
    pushColorTemperatureChanges(): Promise<void>;
    pushBrightnessChanges(): Promise<void>;
    /**
     * Handle requests to set the value of the "On" characteristic
     */
    OnSet(value: CharacteristicValue): Promise<void>;
    /**
     * Handle requests to set the value of the "Brightness" characteristic
     */
    BrightnessSet(value: CharacteristicValue): Promise<void>;
    /**
     * Handle requests to set the value of the "ColorTemperature" characteristic
     */
    ColorTemperatureSet(value: CharacteristicValue): Promise<void>;
    /**
     * Handle requests to set the value of the "Hue" characteristic
     */
    HueSet(value: CharacteristicValue): Promise<void>;
    /**
     * Handle requests to set the value of the "Saturation" characteristic
     */
    SaturationSet(value: CharacteristicValue): Promise<void>;
    updateHomeKitCharacteristics(): Promise<void>;
    adaptiveLighting(device: device & devicesConfig): Promise<void>;
    stopScanning(switchbot: any): Promise<void>;
    getCustomBLEAddress(switchbot: any): Promise<void>;
    BLEPushConnection(): Promise<void>;
    BLERefreshConnection(switchbot: any): Promise<void>;
    retry({ max, fn }: {
        max: number;
        fn: {
            (): any;
            (): Promise<any>;
        };
    }): Promise<null>;
    maxRetry(): number;
    minStep(device: device & devicesConfig): number;
    scan(device: device & devicesConfig): Promise<void>;
    statusCode(statusCode: number): Promise<void>;
    offlineOff(): Promise<void>;
    apiError(e: any): void;
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
//# sourceMappingURL=ceilinglight.d.ts.map