function go() {
  //input data
  var data = [
    ["an", "AN_DEFINITION"],
    ["and", "AND_DEFINITION"],
    ["boat", "BOAT_DEFINITION"],
  ];

  //convert to object
  var dataObj = {};

  for (let i = 0; i < data.length; i++) {
    dataObj[data[i][0]] = data[i][1];
  }
  var dataObjKeys = Object.keys(dataObj);

  //the tree
  var tree = [];

  //iterate over each object key
  for (const key of dataObjKeys) {
    //for each entry create a node

    //check if the word exists as part of another word
    if (
      dataObjKeys.find((item) => item !== key && item.includes(key)) ===
      undefined
    ) {
      //split the key
      const split = key.split("");

      //node
      var node = {};

      //iterate over the key backwards
      for (var i = split.length - 1; i > -1; i--) {
        //create a node
        if (i === split.length - 1) {
          node = {
            letter: split[i],
            definition: dataObj[key.substring(0, i + 1)] || null,
          };
        } else {
          node = {
            letter: split[i],
            definition: dataObj[key.substring(0, i + 1)] || null,
            children: [node],
          };
        }
      }

      //add the node to the tree
      tree.push(node);
    }
  }

  return tree;
}

go();
