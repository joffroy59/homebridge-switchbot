/// <reference types="node" />
import { MqttClient } from 'mqtt';
import { Subject } from 'rxjs';
import { SwitchBotPlatform } from '../platform.js';
import { Service, PlatformAccessory, CharacteristicValue, API, Logging, HAP } from 'homebridge';
import { device, devicesConfig, serviceData, deviceStatus, SwitchBotPlatformConfig } from '../settings.js';
export declare class Curtain {
    private readonly platform;
    private accessory;
    device: device & devicesConfig;
    readonly api: API;
    readonly log: Logging;
    readonly config: SwitchBotPlatformConfig;
    protected readonly hap: HAP;
    batteryService: Service;
    lightSensorService?: Service;
    windowCoveringService: Service;
    BatteryLevel: CharacteristicValue;
    HoldPosition: CharacteristicValue;
    PositionState: CharacteristicValue;
    TargetPosition: CharacteristicValue;
    CurrentPosition: CharacteristicValue;
    FirmwareRevision: CharacteristicValue;
    StatusLowBattery: CharacteristicValue;
    CurrentAmbientLightLevel?: CharacteristicValue;
    OpenAPI_InMotion: deviceStatus['moving'];
    OpenAPI_BatteryLevel: deviceStatus['battery'];
    OpenAPI_FirmwareRevision: deviceStatus['version'];
    OpenAPI_CurrentPosition: deviceStatus['slidePosition'];
    OpenAPI_CurrentAmbientLightLevel: deviceStatus['brightness'];
    Mode: string;
    setPositionMode?: string;
    BLE_InMotion: serviceData['inMotion'];
    BLE_BatteryLevel: serviceData['battery'];
    BLE_Calibration: serviceData['calibration'];
    BLE_CurrentPosition: serviceData['position'];
    BLE_CurrentAmbientLightLevel: serviceData['lightLevel'];
    BLE_IsConnected?: boolean;
    spaceBetweenLevels: number;
    setNewTarget: boolean;
    setNewTargetTimer: NodeJS.Timeout;
    mqttClient: MqttClient | null;
    updateRate: number;
    set_minLux: number;
    set_maxLux: number;
    set_minStep: number;
    setOpenMode: string;
    setCloseMode: string;
    scanDuration: number;
    deviceLogging: string;
    deviceRefreshRate: number;
    curtainUpdateInProgress: boolean;
    doCurtainUpdate: Subject<void>;
    private readonly OpenAPI;
    private readonly BLE;
    historyService: any;
    constructor(platform: SwitchBotPlatform, accessory: PlatformAccessory, device: device & devicesConfig);
    setupHistoryService(device: device & devicesConfig): Promise<void>;
    updateHistory(): Promise<void>;
    /**
     * Parse the device status from the SwitchBot api
     */
    parseStatus(): Promise<void>;
    BLEparseStatus(): Promise<void>;
    openAPIparseStatus(): Promise<void>;
    refreshStatus(): Promise<void>;
    BLERefreshStatus(): Promise<void>;
    openAPIRefreshStatus(): Promise<void>;
    pushChanges(): Promise<void>;
    BLEpushChanges(): Promise<void>;
    retry({ max, fn }: {
        max: number;
        fn: {
            (): any;
            (): Promise<any>;
        };
    }): Promise<null>;
    maxRetry(): number;
    openAPIpushChanges(): Promise<void>;
    /**
     * Handle requests to set the value of the "Target Position" characteristic
     */
    TargetPositionSet(value: CharacteristicValue): Promise<void>;
    /**
     * Handle requests to set the value of the "Target Position" characteristic
     */
    HoldPositionSet(value: CharacteristicValue): Promise<void>;
    updateHomeKitCharacteristics(): Promise<void>;
    mqttPublish(topic: string, message: any): void;
    setupMqtt(device: device & devicesConfig): Promise<void>;
    stopScanning(switchbot: any): Promise<void>;
    getCustomBLEAddress(switchbot: any): Promise<void>;
    BLEPushConnection(): Promise<void>;
    BLERefreshConnection(switchbot: any): Promise<void>;
    SilentPerformance(): Promise<void>;
    setMinMax(): Promise<void>;
    minStep(device: device & devicesConfig): number;
    minLux(): number;
    maxLux(): number;
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
//# sourceMappingURL=curtain.d.ts.map