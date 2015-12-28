exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      //TODO: Handle multiple true results.
      var result = -1;
      arr.forEach(function (value, index) {
          if (value === item) {
              result = index;
              return;
          }
      })
      return result;
  },

  sum: function (arr) {
      // http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
      // http://stackoverflow.com/questions/16057672/sum-values-from-an-array-in-javascript
      return arr.reduce(function(a, b){ return a + b });
  },

  remove: function (arr, item) {
      for (var i = arr.length - 1; i >= 0; i--){
          if(arr[i] === item) arr.splice(i, 1);   
      }
      return arr;
  },

  removeWithoutCopy : function(arr, item) {
      for (var i = arr.length - 1; i >= 0; i--){
          if(arr[i] === item) arr.splice(i, 1);   
      }
      return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
