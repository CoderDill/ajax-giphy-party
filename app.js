console.log("Let's get this party started!");

const $input = $("#search");
const $button = $("#remove");
const $gifArea = $("#gif");

function addGif(res) {
  let numOfGifs = res.data.length;
  const randomGif = Math.floor(Math.random() * numOfGifs);
  let newGif = $("<img>", { src: res.data[randomGif].images.original.url });
  $gifArea.append(newGif);
}
$("form").on("submit", async function (e) {
  e.preventDefault();

  const userInput = $input.val();
  $input.val("");

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: userInput, api_key: "5kqOJ0P9BZz3hE8pgl9dkZwb0xD0CWDy" },
  });

  addGif(res.data);
});

$gifArea.on("click", function removePicture() {
  $gifArea.empty();
});
