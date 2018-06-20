import _ from "lodash";
const tests = [
  {
    input: {
      a: {
        b: {
          c: "z"
        }
      },
      "a.b.d": "y"
    },
    output: {
      a: {
        b: {
          c: "z",
          d: "y"
        }
      }
    }
  }
];

const resolveObjects = input => {
  let objTemp = {},
    i,
    objSplitValue,
    objtronc,
    objSplitLast,
    objTemp2 = {};
  let objSplit = [];
  const inputFinal = {};
  Object.keys(input).forEach(key => {
    if (key.length > 1) {
      objSplit = key.split(".");
      objSplitValue = input[key];
      while (objSplit.length > 0) {
        objSplitLast = objSplit.pop();
        objSplitValue = { [objSplitLast]: objSplitValue };
        objTemp = objSplitValue;
      }
    } else {
      objTemp = { [key]: input[key] };
    }
    _.merge(inputFinal, objTemp);
  });
  return inputFinal;
};

tests.forEach(test => {
  console.log(_.isEqual(resolveObjects(test.input), test.output));
});
