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
      return arr.indexOf(item);
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
          if(arr[i] === item && i > -1) arr.splice(i, 1);   
      }
      return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
      arr.splice(arr.length - 1, 1);
      return arr;
  },

  prepend : function(arr, item) {
    //   arr.splice(0, 0, item);
      arr.unshift(item);
      return arr;
  },

  curtail : function(arr) {
      //arr.splice(0, 1);
      arr.shift();
      return arr;
  },

  concat : function(arr1, arr2) {
      return arr1.concat(arr2); 
  },

  insert: function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
      var result = arr.filter(function (val) { return val === item; });
      return result.length;
  },

  duplicates: function (arr) {
      // Didn't use these, but lots of info in them
      // http://stackoverflow.com/questions/17968987/javascript-arrays-find-duplicates
      // http://stackoverflow.com/questions/840781/easiest-way-to-find-duplicate-values-in-a-javascript-array
      var dupes = [];
      for (var i = 0; i < 10; i++){
          if (arr.filter(
              function (item) { 
                    return item === i;
              }
              ).length > 1) {
              if (dupes.filter(
                  function (dupe) { 
                      return dupe === i;
                  }
                ).length === 0
            ) dupes.push(i);
          }
      }
      return dupes;
  },

  square : function(arr) {
      arr.forEach(function (item, index) {
          arr[index] = item * item;
      });
      return arr;
  },

  findAllOccurrences : function(arr, target) {
      var occurances = [];
      var index = arr.indexOf(target);
      while (index !== -1) {
          occurances.push(index);
          index = arr.indexOf(target, index + 1);
      } 
      return occurances;
  }
};
