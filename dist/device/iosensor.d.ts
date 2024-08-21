import { MqttClient } from 'mqtt';
import { Subject } from 'rxjs';
import { SwitchBotPlatform } from '../platform.js';
import { Service, PlatformAccessory, CharacteristicValue, API, Logging, HAP } from 'homebridge';
import { device, devicesConfig, serviceData, temperature, deviceStatus, SwitchBotPlatformConfig } from '../settings.js';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class IOSensor {
    private readonly platform;
    private accessory;
    device: device & devicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    batteryService: Service;
    humidityservice?: Service;
    temperatureservice?: Service;
    BatteryLevel: CharacteristicValue;
    StatusLowBattery: CharacteristicValue;
    FirmwareRevision: CharacteristicValue;
    CurrentTemperature?: CharacteristicValue;
    CurrentRelativeHumidity: CharacteristicValue;
    OpenAPI_BatteryLevel: deviceStatus['battery'];
    OpenAPI_FirmwareRevision: deviceStatus['version'];
    OpenAPI_CurrentTemperature: deviceStatus['temperature'];
    OpenAPI_CurrentRelativeHumidity: deviceStatus['humidity'];
    BLE_Celsius: temperature['c'];
    BLE_Fahrenheit: temperature['f'];
    BLE_BatteryLevel: serviceData['battery'];
    BLE_CurrentTemperature: serviceData['temperature'];
    BLE_CurrentRelativeHumidity: serviceData['humidity'];
    BLE_IsConnected?: boolean;
    mqttClient: MqttClient | null;
    historyService?: any;
    scanDuration: number;
    deviceLogging: string;
    deviceRefreshRate: number;
    ioSensorUpdateInProgress: boolean;
    doIOSensorUpdate: Subject<void>;
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
     * Updates the status for each of the HomeKit Characteristics
     */
    updateHomeKitCharacteristics(): Promise<void>;
    mqttPublish(message: any): void;
    setupMqtt(device: device & devicesConfig): Promise<void>;
    setupHistoryService(device: device & devicesConfig): Promise<void>;
    stopScanning(switchbot: any): Promise<void>;
    getCustomBLEAddress(switchbot: any): Promise<void>;
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
//# sourceMappingURL=iosensor.d.ts.map