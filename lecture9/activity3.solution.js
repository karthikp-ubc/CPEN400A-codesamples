var dataflow = require('./lib/dataflow.js');

var tableRead = dataflow.tableRead;
var annotate = dataflow.annotate;
var decisionTreeTrain = dataflow.decisionTreeTrain;
var multiVarLinearRegression = dataflow.multiVarLinearRegression;
var blobWrite = dataflow.blobWrite;
var mqttPublish = dataflow.mqttPublish;

function trainModel(arg){
    return tableRead(arg)
    .then((result)=> {
        var flow0 = multiVarLinearRegression(result);

        var flow1 = annotate(result).then(decisionTreeTrain);

        return Promise.all([ flow0, flow1 ]);
    })
    .then((results)=> {
        var content = String(results[0]) + '\n' + String(results[1]);
        return blobWrite(content);
    })
    .then(mqttPublish)
    .catch((err)=> new Error("TrainModelError: "+err.message));
}

module.exports.trainModel = trainModel;
