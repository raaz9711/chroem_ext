const code = [
    {
        id:1,
        category:'SQL',
        shortcode:"SQL | Insert",
        code:`INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
        VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
        `
    },
    {
        id:2,
        category:'Js',
        shortcode:"Js | Map",
        code:'const map1 = array1.map(x => x * 2);'
    },
    {
        id:3,
        category:'Js',
        shortcode:"Js | Reduce",
        code:'const map1 = array1.map(x => x * 2);'
    },
    {
        id:4,
        category:'Js',
        shortcode:"Js | Filter",
        code:`const initialValue = 0;
        const sumWithInitial = array1.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );`
    },
    {
        id:5,
        category:'C++',
        shortcode:"For",
        code:` for(int i = 0; i < in.size(); i++) {

        }`
    }
    //data:text/html, <html contenteditable>
    ,{
        id:6,
        category:'MISC',
        shortcode:"Edit in Chrome",
        code:`data:text/html, <html contenteditable>`
    }
]

export default code