console.log("Let's get this party started!");

const $form = $(".form-control");
const $input = $("#search");
const $button = $("#remove");
const $gifArea = $("#gif")

function addGif(res) {
    
}

$form.on("submit", async function getGiphy(e) {
  e.preventDefault;
  const userInput = $input.val();
  $input.val("");
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: userInput, api_key: "5kqOJ0P9BZz3hE8pgl9dkZwb0xD0CWDy" },
  });
  addGif(res.data);
});

function removePicture() {}
