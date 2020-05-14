const g = [
    [0, 4, 3, 7, 0, 0],
    [4, 0, 0, 3, 2, 0],
    [3, 0, 0, 0, 3, 0],
    [7, 3, 0, 0, 0, 2],
    [0, 2, 3, 0, 0, 2],
    [0, 0, 0, 2, 2, 0]
  ];
  let endPoint = 6;
  startPoint = 0;
  
  function findShortestPath(g, startPoint, endPoint) {
    const weightMap = buildWeightMap(g, startPoint);
  } 
  
  function buildWeightMap(g, startPoint) {
    const visitedNode = new Array(g.length).fill(0);
    const weightsMap = new Array(g.length).fill(Infinity);
    weightsMap[startPoint] = 0;
    let currentNode = startPoint;
    let counterForward = +1;
    while (visitedNode.indexOf(0) > -1) {
         for (let j in g[currentNode]) {
        if (
          visitedNode[j] ||
          g[currentNode][j] + weightsMap[currentNode] > weightsMap[j] ||
          g[currentNode][j] === 0
        ) {
          continue;
        }
       weightsMap[j] = g[currentNode][j] + weightsMap[currentNode];
      }
      visitedNode[currentNode] = 1;
      currentNode += counterForward;
      if (currentNode >= g.length) {
       currentNode = startPoint;
        counterForward = -1;
      }
    }
    return weightsMap;
  }
  
  function buildShortestPath(g, weightsMap, endPos) {
    let endNodeWeight = weightsMap[endPos];
    const path = [];
    let pos = endPos;
    while (endNodeWeight !== 0) {
      for (let i in g[pos]) {
        if (endNodeWeight === g[pos][i] + weightsMap[i]) {
          path.unshift(+i);
          endNodeWeight = weightsMap[i];
          pos = i;
        }
      }
    }
    return path;
  }

function visitedNode(g) {
  let html = '';
  let preHtml = '';
  for (let i in g){
      let a = g[i];
    for (let j in a){
        preHtml += `<td>${a[j]}</td>`;
    }
    html += `<tr>
                ${preHtml}
            </tr>`;
    preHtml = '';
    }
    document.querySelector('.data_lab1').innerHTML += html;
    document.querySelector('.path_lab1').innerHTML += weightsMap;
    
}

  function visitedPath() {
    for (i in shortestPath){
       shortestPath[i] += 1;
}
    shortestPath.push(endPoint);
console.log("(Лаб 1) Кратчайший маршрут до конечной точки:", shortestPath);
document.querySelector('.res_lab1').innerHTML += shortestPath;
}

const weightsMap = buildWeightMap(g, 0);
console.log('(Лаб 1) Самые короткие пути от начальной точки:', weightsMap);
const shortestPath = buildShortestPath(g, weightsMap, 5);

visitedPath(endPoint);
visitedNode(g);