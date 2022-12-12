// To parse this data:
//
//   const Convert = require("./file");
//
//   const transact = Convert.toTransact(json);

// Converts JSON strings to/from your types
function toTransact(json) {
    return JSON.parse(json);
}

function transactToJson(value) {
    return JSON.stringify(value);
}

module.exports = {
    "transactToJson": transactToJson,
    "toTransact": toTransact,
};

