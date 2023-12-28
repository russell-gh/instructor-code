const moods = {};
let moodNames = [];

function formatData(data) {
  if (!data)
    throw new Error(`No data provided to formatData. Received ${data}`);
  const { happy, ok, sad } = data;
  return [
    {
      label: "happy",
      value: happy,
    },
    {
      label: "ok",
      value: ok,
    },
    {
      label: "sad",
      value: sad,
    },
  ];
}

function drawGraph(data, mountNodeSelector = "#chart svg") {
  console.log("drawGraph data", data);

  nv.addGraph(function () {
    var chart = nv.models
      .pieChart()
      .x((d) => d.label)
      .y((d) => d.value)
      .showLabels(true);

    d3.select(mountNodeSelector)
      .datum(data)
      .transition()
      .duration(350)
      .call(chart);

    return chart;
  });
}

var firebaseConfig = {
  // apiKey: "AIzaSyDN4ftKNfv910nEuyLGtZEdGnSzSBnDQZA",
  // authDomain: "ft1-happy-meter.firebaseapp.com",
  // projectId: "ft1-happy-meter",
  // storageBucket: "ft1-happy-meter.appspot.com",
  // messagingSenderId: "858378407646",
  // appId: "1:858378407646:web:9b9aa268a6b914074cbc4f",
  apiKey: "AIzaSyBMg9Hfyz-QN0IbIlxo98f99BfZg893EPE",
  authDomain: "ch9-chart-demo.firebaseapp.com",
  projectId: "ch9-chart-demo",
  storageBucket: "ch9-chart-demo.appspot.com",
  messagingSenderId: "1001956098836",
  appId: "1:1001956098836:web:24d1dced015212437df801",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const moodsCollectionRef = db.collection("moods");

// Initial get
moodsCollectionRef.get().then((snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const { id } = childSnapshot;
    moodNames.push(id);
    const { value } = childSnapshot.data();
    console.log("value", value);
    moods[id] = value;
  });
});

moodsCollectionRef.onSnapshot((snapshot) => {
  snapshot.docChanges().forEach(function (change) {
    console.log("change", change);
    if (change.type === "added") {
      console.log("New tutorial: ", change.doc.data());
    }
    if (change.type === "modified") {
      console.log("Modified tutorial: ", change.doc.data());
    }
    if (change.type === "removed") {
      console.log("Removed tutorial: ", change.doc.data());
    }
    moods[change.doc.id] = change.doc.data().value;
  });

  drawGraph(formatData(moods));
});

async function incrementField(field) {
  if (typeof field !== "string" || !moodNames.includes(field))
    throw new Error(
      `Received ${field} for a mood. Expected one of: ${moodNames.join()}`
    );

  try {
    await moodsCollectionRef.doc(field).update({
      value: moods[field] + 1,
    });
    console.log("Document successfully updated!");
  } catch (error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  }
}

// DOM ELEMENTS (You could create these dynamically from the DB, but I kept it simple...)
const happyButton = document.getElementById("happy");
const okButton = document.getElementById("ok");
const sadButton = document.getElementById("sad");

// Event Listeners
happyButton.addEventListener("click", () => {
  console.log("making happy");
  incrementField("happy");
});
okButton.addEventListener("click", () => {
  console.log("making ok");
  incrementField("ok");
});
sadButton.addEventListener("click", () => {
  console.log("making sad");
  incrementField("sad");
});
