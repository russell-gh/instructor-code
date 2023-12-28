// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "ap-southeast-1" });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

AWS.config.region = "ap-southeast-1"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "ap-southeast-1:b1120f26-a151-442d-8079-9cd39fbb600c",
});

var bucketParams = {
  Bucket: "mttestbucket12345",
};

// call S3 to retrieve the website configuration for selected bucket
s3.getBucketWebsite(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else if (data) {
    console.log("Success", data);
  }
});
