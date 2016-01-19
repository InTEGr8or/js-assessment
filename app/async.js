// http://dailyjs.com/2014/02/20/promises-in-detail/
// http://javascriptplayground.com/blog/2015/02/promises/
// https://davidwalsh.name/promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      value.then = function (val) { return true; }
      value.done = function(doneVal) {return true;}
      return value;
  },

  manipulateRemoteData : function(url) {

  }
};
