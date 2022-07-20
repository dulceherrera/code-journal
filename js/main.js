var $photoUrl = document.querySelector('#photourl');
var $form = document.querySelector('.form');
var $img = document.querySelector('#img-entry');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');

$form.addEventListener('input', function (event) {
  if (event.target.id === 'photourl') {
    $img.setAttribute('src', event.target.value);
  }
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObj = {
    title: $title.value,
    photo: $photoUrl.value,
    notes: $notes.value
  };

  newObj.entryId = data.nextEntryId;
  data.entries.push(newObj);
  data.nextEntryId++;
  data.entries.unshift(newObj);
  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  $form.reset();

});
