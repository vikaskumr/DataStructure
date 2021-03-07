// given an array of buildings and the direction the buildings face return an array of indices of the buildings that can see the sunset 
// A building can see the sunset if it's strictly tallet than all of the buildings that come after it in the diorection it faces
//important - indices of the output array should be in the ascending order
function sunsetViews(buildings, direction) {
    // Write your code here.
    const candidateBuildings = [];

    console.log('buildings', buildings);


    const startIdx = direction === 'EAST' ? 0 : buildings.length - 1;

    const step = direction === 'EAST' ? 1 : -1;

    let idx = startIdx;

    while (idx >= 0 && idx < buildings.length) {

        const buildingHeight = buildings[idx];

        while (candidateBuildings.length > 0 &&
            buildings[candidateBuildings[candidateBuildings.length - 1]] <= buildingHeight
        ) {
            candidateBuildings.pop();
        }

        candidateBuildings.push(idx);
        idx = idx + step;
    }

    if (direction === 'WEST') {
        candidateBuildings.reverse();
    }
    return candidateBuildings;
}
