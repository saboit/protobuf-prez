import { writeFileSync } from 'fs'

import {
    MeasuredTemperatures,
    MeasuredTemperatures_MeasurementType
} from '../pbcode-ts/FieldThermometer'

const temperatures: MeasuredTemperatures = {
    fieldThermometerId: BigInt(1234567890),
    measurementType: MeasuredTemperatures_MeasurementType.PERIODIC,
    measuredTemperaturesInDegreeCelsius: [
        22.31999999999998976,
        4.17999999999999971578290569596
    ],
    lastRecordedDeviceError: {
        message: 'Overheating'
    }
}

console.log( MeasuredTemperatures.toJsonString(temperatures))

const serialized: Uint8Array = MeasuredTemperatures.toBinary(temperatures)
writeFileSync('payload.bin', serialized);

(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

const deserialized = MeasuredTemperatures.fromBinary(serialized)
console.log(JSON.stringify(deserialized))
