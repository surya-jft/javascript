const outputfreq = (input) => {
    let arr = input.toLowerCase().split(' ');

    const freq = new Map();
    let i=0;

    while(i<arr.length)
    {
        let count = 0;

        for(let j=0; j< arr.length; j++)
        {
            if(arr[i]==arr[j])
            {
                count++;
            }
        }
        freq.set(arr[i],count);

        arr = arr.filter((item) => {
            return item !== arr[i];
        });
    }
    const sortfreq = new Map([...freq].sort());

    const temp = [...sortfreq];

    temp.sort(tempDescending);

    function tempDescending(x,y)
    {
        if(x[1]==y[1])
        {
            return 0;
        }
        else if(x[1]<y[1])
        {
            return 1;
        }
        else if(x[1]>y[1])
        {
            return -1;
        }
    }

    const output = new Map(temp);
    return output;
};

const input =  "React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript";
console.log(outputfreq(input));