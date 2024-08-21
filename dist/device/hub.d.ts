import { CharacteristicValue, PlatformAccessory, Service, API, Logging, HAP } from 'homebridge';
import { MqttClient } from 'mqtt';
import { SwitchBotPlatform } from '../platform.js';
import { device, deviceStatus, devicesConfig, SwitchBotPlatformConfig } from '../settings.js';
export declare class Hub {
    private readonly platform;
    private accessory;
    device: device & devicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    lightSensorService?: Service;
    humidityService?: Service;
    temperatureService?: Service;
    FirmwareRevision: CharacteristicValue;
    CurrentTemperature: CharacteristicValue;
    CurrentRelativeHumidity: CharacteristicValue;
    CurrentAmbientLightLevel: CharacteristicValue;
    OpenAPI_FirmwareRevision: deviceStatus['version'];
    OpenAPI_CurrentTemperature: deviceStatus['temperature'];
    OpenAPI_CurrentRelativeHumidity: deviceStatus['humidity'];
    OpenAPI_CurrentAmbientLightLevel: deviceStatus['brightness'];
    spaceBetweenLevels: number;
    mqttClient: MqttClient | null;
    historyService?: any;
    set_minStep: number;
    updateRate: number;
    set_minLux: number;
    set_maxLux: number;
    scanDuration: number;
    deviceLogging: string;
    deviceRefreshRate: number;
    private readonly OpenAPI;
    private readonly BLE;
    constructor(platform: SwitchBotPlatform, accessory: PlatformAccessory, device: device & devicesConfig);
    /**
     * Parse the device status from the SwitchBot api
     */
    parseStatus(): Promise<void>;
    openAPIparseStatus(): Promise<void>;
    refreshStatus(): Promise<void>;
    openAPIRefreshStatus(): Promise<void>;
    /**
     * Handle requests to set the value of the "Target Position" characteristic
     */
    updateHomeKitCharacteristics(): Promise<void>;
    mqttPublish(message: any): void;
    setupMqtt(device: device & devicesConfig): Promise<void>;
    setupHistoryService(device: device & devicesConfig): Promise<void>;
    statusCode(statusCode: number): Promise<void>;
    offlineOff(): Promise<void>;
    apiError(e: any): Promise<void>;
    minLux(): number;
    maxLux(): number;
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
//# sourceMappingURL=hub.d.ts.map