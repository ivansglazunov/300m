"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (_a) {
    var currentUser = _a.currentUser, setCurrentUser = _a.setCurrentUser, count = _a.count, setCount = _a.setCount;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { onClick: function () { return setCurrentUser(currentUser ? 0 : 123); } },
            "currentUser: ",
            currentUser),
        react_1.default.createElement("button", { onClick: function () { return setCount(count + 1); } }, count)));
});
//# sourceMappingURL=index.js.map

//# sourceMappingURL={"version":3,"file":"index.js","sourceRoot":"","sources":["index.tsx"],"names":[],"mappings":";;;;;AAAA,gDAA0B;AAE1B,mBAAe,UAAC,EAAgD;QAA9C,4BAAW,EAAE,kCAAc,EAAE,gBAAK,EAAE,sBAAQ;IAC5D,OAAO,CACL;QACE,0CAAQ,OAAO,EAAE,cAAM,OAAA,cAAc,CAAC,WAAW,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,EAArC,CAAqC;;YAC5C,WAAW,CAClB;QACT,0CAAQ,OAAO,EAAE,cAAM,OAAA,QAAQ,CAAC,KAAK,GAAG,CAAC,CAAC,EAAnB,CAAmB,IAAG,KAAK,CAAU,CAC3D,CACJ,CAAC;AACJ,CAAC,EAAC"}