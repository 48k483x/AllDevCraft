function stringContains(firstName = "abdu", contains="b") {
    for (Element of firstName) {
        if(contains === Element){
            return true;
        }
    }
        return false;

}
console.log(stringContains())