// http://dailyjs.com/2014/02/20/promises-in-detail/
// http://javascriptplayground.com/blog/2015/02/promises/
// https://davidwalsh.name/promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      return new Promise(function (resolve, reject) {
          if (value) resolve(value);
          reject(Error("Somethine went wrong"));
      })
  },

  manipulateRemoteData : function(url) {
      return new Promise(function (resolve, reject) {
          var req = new XMLHttpRequest();
          req.open("GET", url);
          req.onload = function () {
              if (req.status == 200) {
                  var returnObj = JSON.parse(req.response);
                  if (returnObj.hasOwnProperty("people") && Array.isArray(returnObj.people)) {
                      resolve(returnObj.people.map(function(person){ return person.name;}).sort());
                  } else {
                      reject(Error("Did not return proper JSON array."))
                  }
              } else {
                  reject(Error("HTTP error:" + req.status));
              }
          };
          req.onerror = function () {
              reject(Error("Network Error"));
          };
          req.send();
      })
  }
};
