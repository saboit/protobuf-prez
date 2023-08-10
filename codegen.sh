#!/bin/sh

rm -rf pbcode-*
mkdir pbcode-csharp
protoc --csharp_out=./pbcode-csharp --proto_path=./spec FieldThermometer.proto
mkdir pbcode-java
protoc --java_out=./pbcode-java --proto_path=./spec FieldThermometer.proto
mkdir pbcode-cpp
protoc --cpp_out=./pbcode-cpp --proto_path=./spec FieldThermometer.proto

mkdir pbcode-ts
protoc --ts_out=./pbcode-ts --proto_path=./spec FieldThermometer.proto --plugin ./node_modules/.bin/protoc-gen-ts

npm run build
npm run start
protoc --decode=MeasuredTemperatures spec/FieldThermometer.proto < payload.bin > payload.txt
