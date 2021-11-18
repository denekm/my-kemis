let additionalPicture = prompt('Do you want to see another Kemis?');
let picURl = " https://d1v9pyzt136u2g.cloudfront.net/blog/wp-content/uploads/2021/07/23095000/habesha.jpg "
if (additionalPicture.toLowerCase() == "yes") {
    document.write('<img src="' + picURl + '">')
}