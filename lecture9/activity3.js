var dataflow = require('./lib/dataflow.js');

function trainModel(arg) {
    // to implement
    // HINT: start by calling dataflow.tableRead(arg)
    return  dataflow.tableRead(arg).then(
		(x) => Promise.all( [ 
			dataflow.multiVarLinearRegression(x),
			dataflow.annotate(x).then(
				(y) => dataflow.decisionTreeTrain(y))
			] ) 
		).then( (z) => dataflow.blobWrite(z) )
		.then( (result) => dataflow.mqttPublish(result) );		
}

module.exports.trainModel = trainModel;
