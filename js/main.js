var $photoUrl = document.querySelector('#photourl');
var $form = document.querySelector('.form');
var $img = document.querySelector('#img-entry');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
var $noEntries = document.querySelector('.no-entries');

function updateImg(event) {
  $img.setAttribute('src', $photoUrl.value);
}

$photoUrl.addEventListener('input', updateImg);

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

  $entries.className = 'view entries container';
  $entryForm.className = 'view entry-form hidden container';
  data.view = 'entries';

  var $ul = document.querySelector('ul');
  var $newEntry = createList(newObj);
  $ul.prepend($newEntry);
  $noEntries.className = 'hidden';
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

window.addEventListener('DOMContentLoaded', function (event) {
  var $ul = document.createElement('ul');

  for (var i = 0; i < data.entries.length; i++) {
    var result = createList(data.entries[i]);
    $ul.appendChild(result);
  }
});

var $buttonNew = document.querySelector('.button-new');
var $entryTab = document.querySelector('.entry-tab');
var $entries = document.querySelector('.entries');
var $entryForm = document.querySelector('.entry-form');
var $formTab = document.querySelector('.form-tab');

$buttonNew.addEventListener('click', function (event) {
  if ($entryForm !== '') {
    $entries.className = 'entries hidden';
    $entryForm.className = 'entry-form container';
    data.view = 'entry-form';
  }
});

$entryTab.addEventListener('click', function (event) {
  if ($entryForm !== '') {
    $entries.className = 'entries hidden container';
    $entryForm.className = 'entry-form container';
    data.view = 'entry-form';
  }
});

$entryTab.addEventListener('click', function (event) {
  if ($entries !== '') {
    $entryForm.className = 'entry-form hidden';
    $entries.className = 'entries container';
    data.view = 'entries';
  } else {
    return 'No entries have been recorded';
  }
});

$formTab.addEventListener('click', function (event) {
  if ($entryForm !== '') {
    $entries.className = 'entries hidden';
    $entryForm.className = 'entry-form container';
    data.view = 'entry-form';
  }
});

if (data.view === 'entry-form') {
  $entries.className = 'view entries hidden';
  $entryForm.className = 'view entry-form container';
  data.view = 'entry-form';
} else {
  $entries.className = 'view entries container';
  $entryForm.className = 'view entry-form hidden container';
  data.view = 'entries';
}
