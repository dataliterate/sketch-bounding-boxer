//get layers with name
function getLayersWithName(name, rootLayer, exactMatch) {

  //prepare predicate format
  var predicateFormat = {
    key: '(name != NULL) && ' + ((exactMatch) ? '(name == %@)' : '(name like %@)'), 
    match: (exactMatch) ? name : (name + '*')
  };

  //get and return matches
  return jsArray(filterWithPredicate([rootLayer children], predicateFormat));
}

//filter array using NSPredicate
function filterWithPredicate(array, predicateFormat) {

  //make sure that format is speficied
  if(!predicateFormat || !predicateFormat.key  || !predicateFormat.match) return;

  //create predicate
  var predicate = NSPredicate.predicateWithFormat(predicateFormat.key, predicateFormat.match);
  var queryResult = array.filteredArrayUsingPredicate(predicate);

  return queryResult;
}

//convert NSArray to js array
function jsArray(array) {
  var length = [array count];
  var jsArray = [];

  while(length--) {
    jsArray.push([array objectAtIndex: length]);
  }
  return jsArray;
}