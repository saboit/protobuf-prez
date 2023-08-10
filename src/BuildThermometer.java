MeasuredTemperatures temperatures = MeasuredTemperatures.newBuilder()
  .setFieldThermometerId(1234567890)
  .setMeasurementType(MeasurementType.PERIODIC)
  .addMeasuredTemperaturesInDegreeCelsius(22.31999999999998976)
  .addMeasuredTemperaturesInDegreeCelsius(4.17999999999999971578290569596)  
  .setLastRecordedDeviceError(
    MeasuredTemperatures.setLastRecordedDeviceError.newBuilder()
      .setMessage('Overheating')
  )
.build();

temperatures.toByteArray()
MeasuredTemperatures.fromByteArray(array)
temperatures.writeTo(OutputStream)
