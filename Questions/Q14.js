const outputArray = (input) => {
    var twoDimArr = [];
    var arr = [];

    for(let key in input)
    {
        const temp = [];

        let count = input[key];

        for(let i=1; i<= count; i++)
        {
            temp.push(key);
            arr.push(key);
        }
        twoDimArr.push(temp);
    }

    console.log(twoDimArr);
    console.log(arr);
};

const input = {
    Developer : 5,
    Designer : 3,
    QA : 4,
    Manager : 1,
};

outputArray(input);