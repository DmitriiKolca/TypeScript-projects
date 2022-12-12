const tuple: [string, number, string] = ['g', 12, 'f'];

tuple.map(
    s => {
        switch (typeof s) {
            case "number":
                return ''
            case "string":
                return ''
        }
    }
)

const [firstMemberOfTuple, secondMemberOfTuple, thirdMemberOfTuple] = tuple;

console.log(firstMemberOfTuple)// = g

const [firstMemberOFFTuple, ...othersMembers] = tuple;

tuple[1].toString()// because is number
console.log(tuple[1])// = 12

tuple[0].toUpperCase()// because is string
console.log(tuple[0])// = G