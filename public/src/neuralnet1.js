import Neuron from './neuron'
import {getIniValues, getQueryImageValues} from './helpers/getinivalues';
import {getColoredElements} from './helpers/userinterface';

let iniValues = [];
let queryImage = [];
let neurons = [];
// let neuronsWeights = [];

initialize();

export function initialize() {
  iniValues = getIniValues();
}

export function initializeQueryArr() {
  queryImage = getQueryImageValues();
}

export function recognize() {
  initializeQueryArr();

  let sums = [];
  for(let i = 0; i < neurons.length; i++) {
    let weights = neurons[i].weights;
    weights.shift();
    let sum = 0
    for(let j = 0; j < weights.length; j++) {
       sum += weights[j] * queryImage[j];
    }

    sums.push(sum);
  }

  console.log('sums', sums);
}

export default function learn() {
  let numOfCorrectAnswers;
  let numOfNeurons = iniValues.length;
  initializeNeurons(numOfNeurons);

  let attempts = 0;

  do {
    attempts++;
    numOfCorrectAnswers = 0
    for(let i = 0; i < numOfNeurons; i++) {
      let localCorrectAnswers = 0;
      for(let j = 0; j < numOfNeurons; j++) {
        let weightsSum = 0;
        for(let k = 0; k < neurons[i].weights.length; k++) {
          weightsSum += neurons[i].weights[k] * iniValues[j][k];
        }
        if((i === j && weightsSum > 0) || (i !== j && weightsSum < 0)) {
          localCorrectAnswers++;
        }
      }
      if(localCorrectAnswers === numOfNeurons) {
        numOfCorrectAnswers++;
        neurons[i].isCorrectWeights = true;
      }
    }
    //correcting of weights
    if(numOfCorrectAnswers !== numOfNeurons) {
      for(let i = 0; i < numOfNeurons; i++) {
        for(let k = 0; k < numOfNeurons; k++) {
          for(let j = 0; j < neurons[i].weights.length; j++ ) {
            let expectedValue = (k === i) ? 1 : -1;
            if(!neurons[i].isCorrectWeights) {
              neurons[i].weights[j] += iniValues[k][j] * expectedValue;
            }
          }
        }
      }
    }

    if(attempts === 1000000) {
      console.log('neurons', neurons)
      console.log('to many attempts', 1000000)
      break;
    }

  } while(numOfCorrectAnswers !== numOfNeurons);
}

function initializeNeurons(numOfNeurons) {
  let numOfPixelsInImage = iniValues[0].length;
  for(let i = 0; i < numOfNeurons; i++) {
    neurons.push(new Neuron(numOfPixelsInImage));
  }
}
