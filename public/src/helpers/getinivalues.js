import Neuron from '../neuron';
import {getColoredElements, getColoredQueryElements} from './userinterface';

let numOfPixelsInImage;

export function getIniValues() {
  let coloredElements = getColoredElements();
  numOfPixelsInImage = coloredElements[0].length;
  return coloredElements;
}

export function getQueryImageValues() {
  let coloredElements = getColoredQueryElements();
  return coloredElements;
}
