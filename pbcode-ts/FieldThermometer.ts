// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "FieldThermometer.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message MeasuredTemperatures
 */
export interface MeasuredTemperatures {
    /**
     * @generated from protobuf field: optional int64 fieldThermometerId = 1;
     */
    fieldThermometerId?: bigint;
    /**
     * @generated from protobuf field: optional MeasuredTemperatures.MeasurementType measurementType = 2;
     */
    measurementType?: MeasuredTemperatures_MeasurementType;
    /**
     * @generated from protobuf field: repeated float measuredTemperaturesInDegreeCelsius = 3;
     */
    measuredTemperaturesInDegreeCelsius: number[];
    /**
     * @generated from protobuf field: optional MeasuredTemperatures.DeviceError lastRecordedDeviceError = 4;
     */
    lastRecordedDeviceError?: MeasuredTemperatures_DeviceError;
}
/**
 * @generated from protobuf message MeasuredTemperatures.DeviceError
 */
export interface MeasuredTemperatures_DeviceError {
    /**
     * @generated from protobuf field: optional string message = 1;
     */
    message?: string;
}
/**
 * @generated from protobuf enum MeasuredTemperatures.MeasurementType
 */
export enum MeasuredTemperatures_MeasurementType {
    /**
     * @generated from protobuf enum value: PERIODIC = 0;
     */
    PERIODIC = 0,
    /**
     * @generated from protobuf enum value: REQUESTED = 1;
     */
    REQUESTED = 1,
    /**
     * @generated from protobuf enum value: EXTREMITY = 2;
     */
    EXTREMITY = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class MeasuredTemperatures$Type extends MessageType<MeasuredTemperatures> {
    constructor() {
        super("MeasuredTemperatures", [
            { no: 1, name: "fieldThermometerId", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "measurementType", kind: "enum", opt: true, T: () => ["MeasuredTemperatures.MeasurementType", MeasuredTemperatures_MeasurementType] },
            { no: 3, name: "measuredTemperaturesInDegreeCelsius", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "lastRecordedDeviceError", kind: "message", T: () => MeasuredTemperatures_DeviceError }
        ]);
    }
    create(value?: PartialMessage<MeasuredTemperatures>): MeasuredTemperatures {
        const message = { measuredTemperaturesInDegreeCelsius: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MeasuredTemperatures>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MeasuredTemperatures): MeasuredTemperatures {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 fieldThermometerId */ 1:
                    message.fieldThermometerId = reader.int64().toBigInt();
                    break;
                case /* optional MeasuredTemperatures.MeasurementType measurementType */ 2:
                    message.measurementType = reader.int32();
                    break;
                case /* repeated float measuredTemperaturesInDegreeCelsius */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.measuredTemperaturesInDegreeCelsius.push(reader.float());
                    else
                        message.measuredTemperaturesInDegreeCelsius.push(reader.float());
                    break;
                case /* optional MeasuredTemperatures.DeviceError lastRecordedDeviceError */ 4:
                    message.lastRecordedDeviceError = MeasuredTemperatures_DeviceError.internalBinaryRead(reader, reader.uint32(), options, message.lastRecordedDeviceError);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MeasuredTemperatures, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 fieldThermometerId = 1; */
        if (message.fieldThermometerId !== undefined)
            writer.tag(1, WireType.Varint).int64(message.fieldThermometerId);
        /* optional MeasuredTemperatures.MeasurementType measurementType = 2; */
        if (message.measurementType !== undefined)
            writer.tag(2, WireType.Varint).int32(message.measurementType);
        /* repeated float measuredTemperaturesInDegreeCelsius = 3; */
        if (message.measuredTemperaturesInDegreeCelsius.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.measuredTemperaturesInDegreeCelsius.length; i++)
                writer.float(message.measuredTemperaturesInDegreeCelsius[i]);
            writer.join();
        }
        /* optional MeasuredTemperatures.DeviceError lastRecordedDeviceError = 4; */
        if (message.lastRecordedDeviceError)
            MeasuredTemperatures_DeviceError.internalBinaryWrite(message.lastRecordedDeviceError, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MeasuredTemperatures
 */
export const MeasuredTemperatures = new MeasuredTemperatures$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MeasuredTemperatures_DeviceError$Type extends MessageType<MeasuredTemperatures_DeviceError> {
    constructor() {
        super("MeasuredTemperatures.DeviceError", [
            { no: 1, name: "message", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<MeasuredTemperatures_DeviceError>): MeasuredTemperatures_DeviceError {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MeasuredTemperatures_DeviceError>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MeasuredTemperatures_DeviceError): MeasuredTemperatures_DeviceError {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string message */ 1:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MeasuredTemperatures_DeviceError, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string message = 1; */
        if (message.message !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MeasuredTemperatures.DeviceError
 */
export const MeasuredTemperatures_DeviceError = new MeasuredTemperatures_DeviceError$Type();
