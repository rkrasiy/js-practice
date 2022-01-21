/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. 
     ({ a: 1 }) => true, 
     ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */

     const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;
     console.log(isPlainObject({a: 1})); // true
     
     /** 
       * Task description: Write a method that returns a deep array like [[key, value]] 
       * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]] 
       * Task complexity: 1 of 5 
       * @param {Object} object - Any object to transform into array 
       * @returns {Array} - a deep array 
     */
     const makePairs = (object) => {
         return Object.entries(object)
     };
     
     const makePairs2 = (object) => Object.keys(object).map((el) => [el, object[el]]);
     
     console.log(makePairs({ a: 1, b: 2 })); // [['a', 1], ['b', 2]]
     console.log(makePairs2({ a: 1, b: 2 })); // [['a', 1], ['b', 2]]
     
     /** 
       * Task description: Write a method that returns new object without provided properties 
       * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 } 
       * Task complexity: 2 of 5 
       * @param {Object} object - Any object 
       * @param {?} args - list of properties to remove from object 
       * @returns {Object} - New object without listed values 
     */
     const without = (object, ...args) => {
         const newObject = { ...object };
         args.forEach(arg => {
             delete newObject[arg]
         });
         return newObject;
     };
     
     console.log(without({ a: 1, b: 2 }, 'b')); // { a: 1 }
     
     /** 
       * Task description: Write a method that makes a shallow check is object empty 
       * Expected Result: ({}) => true, ({ a: undefined }) => true, 
           ({ a: 1 }) => false 
       * Empty values: '', null, NaN, undefined 
       * Task complexity: 2 of 5 
       * @param {Object} object - Object with values of primitive data types 
       * @returns {boolean} 
     */
     const isEmpty = (object) => {
         const objectKeys = Object.keys(object);
         if(objectKeys.length === 0){
             return true;
         }
         console.log('ObjectKeys: ', objectKeys)
         return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
     };
     
     console.log(isEmpty({ a: 1, b: undefined })); // false
     console.log(isEmpty({ a: undefined })); // true
     console.log(isEmpty({})); // true
     
     
     /** 
       * Task description: Write a method that makes a shallow compare of two objects 
       * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true 
       * Task complexity: 2 of 5 
       * @param {Object<string | number>} firstObj - Object with values of primitive data types 
       * @param {Object<string | number>} secondObj - Object with values of primitive data types 
       * @returns {boolean} 
     */
     const isEqual = (firstObject, secondObject) => {
         const firstObjKeys = Object.keys(firstObject);
         const secondObjKeys = Object.keys(secondObject);
         if(firstObjKeys.length !== secondObjKeys.length)
             return false;
     
         return !firstObjKeys.filter( (key) => firstObject[key] !== secondObject[key]).length
     };
     
       console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })); // true
       console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 })); // false
     
       /** 
       * Task description: Write a method that invokes an array method on a specific path 
       * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3] 
       * Task complexity: 3 of 5 
       * @param {Object} object 
       * @param {String} path - path in an object to property 
       * @param {String} func - function to invoke 
       * @param {Array} [args] - list of args 
       * @returns {?} 
     */
     const invoke = (object, path, func, args) => {
         const splitePath = path.split('.');
     
         const target = splitePath.reduce( (acc, key) => {
             acc = acc[key] ? acc[key] : object[key];
             return acc;
         }, {})
     
         return Array.prototype[func].apply(target, args)
     };
     
     console.log(invoke({ a: { b: [1, 2, 3] } }, 'a.b', 'splice', [1, 2])); // [2, 3]
     
     /** 
       * Task description: Write a method that makes a deep check is an object empty 
       * Empty values: '', null, NaN, undefined, [], {} 
       * Expected Result: ({}) => true, 
           ({ a: { b: undefined } }) => true, 
           ({ a: { b: [] } }) => true 
       * Task complexity: 3 of 5 
       * @param {?} element - Object with values of any data types 
       * @returns {boolean} 
     */
     const isEmptyDeep = (element) => {
         if(element === null){
             return true;
         }
     
         if(Array.isArray(element)){
             if(element.length === 0){
                 return true;
             }
     
             let result;
             for(let i=0; i<element.length; i++){
                 if(typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i])) || typeof element[i] === 'string' && element[i] !== ''){
                     return false;
                     break;
                 }
                 if(Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)){
                     result = isEmptyDeep(element[i]);
                     break;
                 }
                 result = true;
             }
             return result;
         }
         if(typeof element === 'object'){
             const objectKeys = Object.keys(element);
             if(objectKeys.length === 0){
                 return true;
             }
             let result;
             for(let i = 0; i < objectKeys.length; i++){
                 const value = element[objectKeys[i]];
     
                 if(typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value)) 
                     || (typeof value === 'string' && value !== '')){
                         result = false;
                         break;
                 }
                 if(Array.isArray(value) || (typeof value === 'object' && value !== null)){
                     result = isEmptyDeep(value);
                 }
                 result = true;
             }
             return result;
         }
     
     };
     
     console.log(isEmptyDeep({ a: { b: undefined } })); // true
     
       