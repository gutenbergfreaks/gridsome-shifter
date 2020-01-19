const input = process.argv[2];
const reg = new RegExp( 'https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+' );
const match = input.match( reg );
console.log( match[ 0 ] );


