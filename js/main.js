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

function createList(data) {
  var $li = document.createElement('li');
  $li.setAttribute('class', 'row');

  var $imgElement = document.createElement('img');
  $imgElement.setAttribute('class', 'column-half');
  $imgElement.setAttribute('src', data.photo);

  $li.appendChild($imgElement);

  var $div = document.createElement('div');
  $div.setAttribute('class', 'column-half');

  $li.appendChild($div);

  var $h1 = document.createElement('h1');
  $h1.textContent = data.title;

  $div.appendChild($h1);

  var $p = document.createElement('p');
  $p.textContent = data.notes;

  $div.appendChild($p);

  return $li;

}

document.addEventListener('DOMContentLoaded', function (event) {
  var $ul = document.createElement('ul');
  for (var i = 0; i < data.entries.length; i++) {
    var result = createList(data.entries[i]);
    $ul.appendChild(result);
  }
}
);
