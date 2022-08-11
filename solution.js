//Q1:

let treeArray=[];
for(let i=1;i<=4;i++){
treeArray = [...treeArray, "* ".repeat(i)]
}
for(line of treeArray)
{
line=line.trim();
console.log(line);
}

//Q2:
let ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(id in ARR){
console.log('row', id)
for(subItem of ARR[id])
console.log(subItem);
}

//Q3:

const arr2 = ["1","2","3","4"]
const arr3= ["",""]

for(n of arr2){
for(let i=0; i<3;i++)
arr3[0]=arr3[0]+n+' ';
}
for(let j=0;j<3;j++)
for(let i=0;i<=4;i++)
arr3[1]=arr3[1]+i+' ';

for(line of arr3)
console.log(line)

// 
for(let i = 1; i <= 5; i++) {
	if(i==1)
		 firstLine = secondLine = "";
    if(i < 5)
        firstLine += (i * 111);   
	secondLine += i - 1;
    if(i === 5){
        for(let j = 0; j < 2; j++)
            secondLine += secondLine.substr(0, 5);
		console.log(firstLine.split("").join(" "));
		console.log(secondLine.split("").join(" "));
    }
}
