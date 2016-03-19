import Neuron from './neuron'
import {getIniValues, getQueryImageValues} from './helpers/getinivalues';
import {getColoredElements} from './helpers/userinterface';

const NUM_OF_TRY = 100;
let iniValues;
let weights = [];

let queryImage;
// let exitPictures = [[1,-1,-1,-1], [-1, 1, -1, -1], [-1, -1, 1, -1], [-1, -1, -1, 1]]
let outterNeurons = [[1,-1,-1,-1], [-1, 1, -1, -1], [-1, -1, 1, -1], [-1, -1, -1, 1]];
let countOfRight;

export function initialize() {
  iniValues = getIniValues();
  // iniValues = iniValues;

  console.log('iniValues', iniValues)
}

export default function learn() {
  initialize();

  weights = [];

  iniValues.map((el, index) => {
    weights.push([]);
    // weights[index].push(1);
    el.map((e, i) => {
      weights[index].push(0);
    })
  })

console.log('weights', weights);

  outterNeurons.map((outterNeuron, index) => {
    let isCorrect = false;
    countOfIterations = 0;

    while(!isCorrect && countOfIterations < NUM_OF_TRY ) {
      let countOfRightSums = 0
      countOfIterations++;
      iniValues[index].map((imagePixelsValue, ind) => {
        weights[index][ind] = weights[index][ind] + outterNeuron[index] * imagePixelsValue;
      })
      outterNeuron.map((outterNeuronValue, i) => {
        let outterSumOfWeights = 0;
        iniValues[i].map((imagePixelsValue, ind) => {
          outterSumOfWeights += imagePixelsValue;
        })
        outterSumOfWeights = outterSumOfWeights > 0 ? 1 : -1;
        
      })
    }
  })

  // outterNeurons.map((outterNeuron, index) => {
  //   let isCorrect = false;
  //   let countOfTries  = 0;
  //   while(!isCorrect && countOfTries < NUM_OF_TRY) {
  //     countOfTries++;
  //     iniValues.map((image, ind) => {
  //       weights[index].map((weight, i) => {
  //         weights[index][i] = weight + outterNeuron[ind] * image[i];
  //       })
  //     })
  //     countOfRight = 0;
  //     iniValues.map((image, ind) => {
  //       let outterSumOfWeights = 0;
  //       weights[index].map((weight, i) => {
  //         outterSumOfWeights += weight * image[i];
  //       })
  //       outterSumOfWeights = outterSumOfWeights > 0 ? 1 : -1;
  //       if(outterSumOfWeights === outterNeurons[index][ind]) countOfRight++;
  //       console.log("outterSumOfWeights", outterSumOfWeights);
  //     })
  //     if(countOfRight === outterNeurons.length) isCorrect = true;
  //     console.log('is correct', isCorrect);
  //   }
  // })

  console.log("weights", weights);
}

export function initializeQueryArr() {
  queryImage = getQueryImageValues();
}

export function recognize() {
  // console.log(queryImage);
  let res = [];

  weights.map((weight, index) => {
    let innerRes = 0;
    queryImage.map((el, ind) => {
      innerRes += el * weight[ind];
    });
    res[index] = innerRes > 0 ? 1:-1;
  })

  console.log(res);
}
