import { Subject } from 'rxjs';
import { SwitchBotPlatform } from '../platform.js';
import { Service, PlatformAccessory, CharacteristicValue, API, Logging, HAP } from 'homebridge';
import { device, devicesConfig, serviceData, deviceStatus, SwitchBotPlatformConfig } from '../settings.js';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class Humidifier {
    private readonly platform;
    private accessory;
    device: device & devicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    humidifierService: Service;
    temperatureservice?: Service;
    Active: CharacteristicValue;
    WaterLevel: CharacteristicValue;
    FirmwareRevision: CharacteristicValue;
    CurrentTemperature: CharacteristicValue;
    CurrentRelativeHumidity: CharacteristicValue;
    TargetHumidifierDehumidifierState: CharacteristicValue;
    CurrentHumidifierDehumidifierState: CharacteristicValue;
    RelativeHumidityHumidifierThreshold: CharacteristicValue;
    OpenAPI_Active: deviceStatus['power'];
    OpenAPI_WaterLevel: deviceStatus['lackWater'];
    OpenAPI_FirmwareRevision: deviceStatus['version'];
    OpenAPI_CurrentTemperature: deviceStatus['temperature'];
    OpenAPI_CurrentRelativeHumidity: deviceStatus['humidity'];
    OpenAPI_CurrentHumidifierDehumidifierState: deviceStatus['auto'];
    OpenAPI_RelativeHumidityHumidifierThreshold: deviceStatus['nebulizationEfficiency'];
    connected?: boolean;
    onState: serviceData['onState'];
    autoMode: serviceData['autoMode'];
    percentage: serviceData['percentage'];
    set_minStep?: number;
    scanDuration: number;
    deviceLogging: string;
    deviceRefreshRate: number;
    humidifierUpdateInProgress: boolean;
    doHumidifierUpdate: Subject<void>;
    private readonly OpenAPI;
    private readonly BLE;
    constructor(platform: SwitchBotPlatform, accessory: PlatformAccessory, device: device & devicesConfig);
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
     */
    pushChanges(): Promise<void>;
    BLEpushChanges(): Promise<void>;
    openAPIpushChanges(): Promise<void>;
    /**
     * Pushes the requested changes to the SwitchBot API
     */
    pushAutoChanges(): Promise<void>;
    /**
     * Pushes the requested changes to the SwitchBot API
     */
    pushActiveChanges(): Promise<void>;
    /**
     * Handle requests to set the "Active" characteristic
     */
    ActiveSet(value: CharacteristicValue): Promise<void>;
    /**
     * Handle requests to set the "Target Humidifier Dehumidifier State" characteristic
     */
    TargetHumidifierDehumidifierStateSet(value: CharacteristicValue): Promise<void>;
    /**
     * Handle requests to set the "Relative Humidity Humidifier Threshold" characteristic
     */
    RelativeHumidityHumidifierThresholdSet(value: CharacteristicValue): Promise<void>;
    /**
     * Updates the status for each of the HomeKit Characteristics
     */
    updateHomeKitCharacteristics(): Promise<void>;
    stopScanning(switchbot: any): Promise<void>;
    getCustomBLEAddress(switchbot: any): Promise<void>;
    BLEPushConnection(): Promise<void>;
    BLERefreshConnection(switchbot: any): Promise<void>;
    minStep(): number;
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
    infoLog(...log: any[]): Promise<void>;
    warnLog(...log: any[]): Promise<void>;
    debugWarnLog(...log: any[]): Promise<void>;
    errorLog(...log: any[]): Promise<void>;
    debugErrorLog(...log: any[]): Promise<void>;
    debugLog(...log: any[]): Promise<void>;
    enablingDeviceLogging(): boolean;
}
//# sourceMappingURL=humidifier.d.ts.map