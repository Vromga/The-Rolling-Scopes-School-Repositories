import celsiusToFahrenheit from "../src/js/utilities/celsiusToFarenheit";
import fahrenheitToCelsius from "../src/js/utilities/fahrenheitToCelsius";
import convertPressure from "../src/js/utilities/converPressure";
import setLocalStorage from "../src/js/utilities/setLocalStorage";
import {mouthBE, UI, keyWeather} from "../src/js/configuration";
import averageTemperature from "../src/js/utilities/averageTemperature";
import getDayInFuture from "../src/js/utilities/getDayInFuture";

it ('temperature celsius to fahrenheit', () =>{
	expect(celsiusToFahrenheit(35)).toEqual(95);
	expect(celsiusToFahrenheit(1)).toEqual(33);
	expect(celsiusToFahrenheit(-11)).toEqual(12);
	expect(celsiusToFahrenheit(17)).toEqual(62);
});

it ('temperature fahrenheit to celsius', () =>{
	expect(fahrenheitToCelsius(60)).toEqual(15);
	expect(fahrenheitToCelsius(34)).toEqual(1);
	expect(fahrenheitToCelsius(0)).toEqual(-17);
	expect(fahrenheitToCelsius(95)).toEqual(35);
});

it ('convert hectopascal to millimeter mercury', () =>{
	expect(convertPressure(1200)).toEqual('900');
	expect(convertPressure(988)).toEqual('741');
	expect(convertPressure(1024)).toEqual('768');
	expect(convertPressure(-1090)).toEqual('-818');
});

it ('setLocalStorage to be undefined', () =>{
	expect(setLocalStorage('city', 'Minsk')).toBeUndefined();
});

it ('mounts be lang is Array', () =>{
	expect(mouthBE).toBeInstanceOf(Array);
});

it ('UI is Object', () =>{
	expect(UI).toBeInstanceOf(Object);
});

it ('keyWeather is String', () =>{
	expect(keyWeather).toEqual(expect.any(String));
});

it ('mounts in be lang array length', () =>{
	expect(mouthBE.length).toEqual(12);
});

it ('mounts in be lang have correct name', () =>{
	expect(mouthBE.includes('Сакавiка')).toBeTruthy();
	expect(mouthBE.includes('Марта')).toBeFalsy();
});

it ('mounts in be lang have correct name', () =>{
	expect(mouthBE.includes('Сакавiка')).toBeTruthy();
	expect(mouthBE.includes('Марта')).toBeFalsy();
});

it ('mounts in be lang array have this name', () =>{
	expect(mouthBE).toContain('Лiстапада');
	expect(mouthBE[0]).toEqual('Студзеня');
	expect(mouthBE[5]).toMatch(/Чэрвеня/);
});

it ('setSnapshot', () =>{
	const resultPressure = convertPressure(1200);
	expect(resultPressure).toMatchSnapshot();
	const resultAvgTemper = averageTemperature(42, 30);
	expect(resultAvgTemper).toMatchSnapshot();
});

it ('average temperature', () =>{
	expect(averageTemperature(42, 15)).toEqual(28.5);
	expect(averageTemperature(-5, 2)).toEqual(-1.5);
	expect(averageTemperature(42, 30)).toEqual(36);
	expect(averageTemperature(60, 7)).toEqual(33.5);
});

it ('get day in future', () =>{
	expect(getDayInFuture()).toBeUndefined()
});












