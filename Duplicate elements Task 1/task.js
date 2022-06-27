const prompt= require('prompt-sync')();
const A=new Array[10];
A = prompt("Enter array numbers ")
console.log("Enter Elements  in array")
B= prompt("Enter elements of B")
var check, index;
for(var i=0; i<10;i++)
{
if(A[i]===null)
{check=ture;
index=i;}
}

for ( var i=0; i<10; i++)
{
    for(var j=0; j<10;j++)
    {
        if(A[i]===A[j])
        {
            console.log("Element"+A[i]+"is repeated")
        }
    }
}
console.log(A[i+1]+" has null element")


