const sumArrays = (arr1, arr2) => {
  var flattened1 = [];
  var flattened2 = [];

  const flatten = (array, result) => {
    array.forEach(element => {
      if (Array.isArray(element)) {
        flatten(element, result);
      } else {
        if (Array.isArray(result)) {
          result.push(element);
        }  
      }
    });
  }
  
  flatten(arr1, flattened1)
  flatten(arr2, flattened2)

  const isNotNumberArray = (arr) => {
    return arr.every(element => {
      return typeof element !== 'number';
    });
  }

  const containsNonNumbers = (arr) => {
    return arr.some(isNaN);
  }

  if (isNotNumberArray(flattened1) && isNotNumberArray(flattened2)) {
    return "No number type found in input arrays";
  }

  if (containsNonNumbers(flattened1)) {
    flattened1 = flattened1.filter( elem =>{
      return typeof(elem) === 'number';
    })
    flattened1.sort()
    return `Min number found is ${flattened1[0]}`;
  } else if (containsNonNumbers(flattened2)) {
    flattened2 = flattened2.filter( elem =>{
      return typeof(elem) === 'number';
    })
    flattened2.sort()
    return  `Min number found is ${flattened2[0]}`;
  }

  var intersection = [];

  const intersect = (array1, array2, destination) => {
    array1.forEach(element => {
      if (!destination.includes(element) && 
      array2.includes(element) && 
        element % 3 === 0) {
          if (Array.isArray(destination)) {
            destination.push(element);
          }
        }
    })
  }
  
  intersect(flattened1, flattened2, intersection)
  intersect(flattened2, flattened1, intersection)

  return intersection.reduce((partialValue, currentElem) => {
    return partialValue + currentElem;
  }, 0);
};

// console.log(sumArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [7, 8, 6, 10, 11, 12, 9])); // 15
// console.log(sumArrays([1, 2, [3, [4, [5, [6]]]]], [4, [[[[[[6]]]]]]])); // 6
// console.log(sumArrays([1, 2, 3, () => {}], [3, 4])); // Min number found is 1
// console.log(sumArrays([() => {}], ["1"])); // No number type found in input arrays
// console.log(sumArrays([() => {}], [{}])); // No number type found in input arrays

const input = [
  { name: "Martin", mark: 4, course: "SI" },
  { name: "Elena", mark: 6, course: "IS" },
  { name: "Tsani", mark: 5, course: "IS" },
  { name: "Niya", mark: 2.9, course: "IS" },
  { name: "Ivo", mark: 2.5, course: "KN" }
];

const getTopStudents = students => {
  return students.filter( element => {
    return element.mark > 5.5;
  })
};
const getLowStudents = students => {
  return students.filter( element => {
    return element.mark < 3;
})
};
const orderStudents = (students, criteria) => {
  var result = students;
  if (criteria) {
    var sortType = criteria.type;
    var courseName = criteria.course;
  }
  
  if (courseName) [
    result = students.filter(element => {
      return element.course === courseName;
    })
  ]

  if (sortType === "descending") {
    result.sort((lhs, rhs) => (lhs.mark < rhs.mark) ? 1 : -1);
  } else {
    result.sort((lhs, rhs) => (lhs.mark > rhs.mark) ? 1 : -1);
  }

  result = result.map( element => {
    return {
      ...element,
      mark: element.mark < 3 ? 2 : Math.round(element.mark)
    }
  })
  
  return result;
};

// console.log('Top: ', getTopStudents(input));
// console.log('Low: ', getLowStudents(input));
console.log('ascending all: ', orderStudents([...input]));
console.log('descending all: ', orderStudents([...input], { type: "descending" }));
console.log('ascending IS: ', orderStudents([...input], { course: "IS"}));
console.log('descending IS: ', orderStudents([...input], { type: "descending", course: "IS" }));
console.log('ascending: IS', orderStudents([...input], { type: "ascending", course: "IS" }));

export { sumArrays, getTopStudents, getLowStudents, orderStudents };
