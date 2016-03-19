function Neuron(numInputWeights) {
  this.weights = [];
  this.isCorrectWeights = false;
  this.initialize(numInputWeights);
}

Neuron.prototype.initialize = function(numWeights) {
  // this.weights[0] = 1;
  for(let i = 0; i < numWeights; i++) {
    this.weights[i] = 0;
  }

  return this.weights;
}

export default Neuron;
