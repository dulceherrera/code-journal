var $photoUrl = document.querySelector('#photourl');
var $form = document.querySelector('.form');
var $img = document.querySelector('#img-entry');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
var $ul = document.querySelector('ul');
function updateImg(event) {
  $img.setAttribute('src', $photoUrl.value);
}

$photoUrl.addEventListener('input', updateImg);

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObj = {};
  if (data.editing === null) {
    newObj = {
      title: $title.value,
      photo: $photoUrl.value,
      notes: $notes.value
    };

    newObj.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(newObj);
    $img.setAttribute('src', './images/placeholder-image-square.jpg');
    $ul.prepend(createList(newObj));
    $form.reset();
  } else if (data.editing !== null) {
    newObj.title = $title.value;
    newObj.photo = $photoUrl.value;
    newObj.notes = $notes.value;
    newObj.entryId = data.editing.entryId;

    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === newObj.entryId) {
        data.entries[i] = newObj;
      }
    }

    data.editing = null;
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
    $liClosest.replaceWith(createList(newObj));
    $form.reset();
  }

  $entries.className = 'view entries container';
  $entryForm.className = 'view entry-form hidden container';
  data.view = 'entries';

});

function createList(data) {
  var $li = document.createElement('li');
  $li.setAttribute('class', 'row');
  $li.setAttribute('data-entry-id', data.entryId);

  var $imgElement = document.createElement('img');
  $imgElement.setAttribute('class', 'column-half');
  $imgElement.setAttribute('src', data.photo);

  $li.appendChild($imgElement);

  var $div = document.createElement('div');
  $div.setAttribute('class', 'column-half');

  $li.appendChild($div);

  var $titleDiv = document.createElement('div');
  $titleDiv.setAttribute('class', 'row space-between');
  $div.appendChild($titleDiv);

  var $h1 = document.createElement('h1');
  $h1.textContent = data.title;

  $titleDiv.appendChild($h1);

  var $editElement = document.createElement('i');
  $editElement.setAttribute('class', 'fa-solid fa-pen edit-icon align-items');

  $titleDiv.appendChild($editElement);

  var $p = document.createElement('p');
  $p.textContent = data.notes;

  $div.appendChild($p);

  return $li;

}
var $ulElement = document.querySelector('ul');

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var result = createList(data.entries[i]);
    $ulElement.appendChild(result);
  }

  if (data.view === 'entry-form') {
    $entries.className = 'view entries hidden';
    $entryForm.className = 'view entry-form container';
    data.view = 'entry-form';
  } else {
    $entries.className = 'view entries container';
    $entryForm.className = 'view entry-form hidden container';
    data.view = 'entries';
  }
});

var $buttonNew = document.querySelector('.button-new');
var $entryTab = document.querySelector('.entry-tab');
var $entries = document.querySelector('.entries');
var $entryForm = document.querySelector('.entry-form');
var $formTab = document.querySelector('.form-tab');

$buttonNew.addEventListener('click', function (event) {
  $entries.className = 'entries hidden';
  $entryForm.className = 'entry-form container';
  data.view = 'entry-form';
}
);

$entryTab.addEventListener('click', function (event) {
  $entries.className = 'entries container';
  $entryForm.className = 'entry-form hidden container';
  data.view = 'entry';
}
);

$formTab.addEventListener('click', function (event) {
  $entries.className = 'entries hidden';
  $entryForm.className = 'entry-form container';
  data.view = 'entry-form';
}
);

var $liClosest = null;

$ulElement.addEventListener('click', function (event) {
  var $h1Element = document.querySelector('h1');

  if (event.target && event.target.matches('i')) {
    $liClosest = event.target.closest('li');
    var $entryId = $liClosest.getAttribute('data-entry-id');
    $entryId = JSON.parse($entryId);

    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === $entryId) {
        data.editing = data.entries[i];
      }
    }

    $title.value = data.editing.title;
    $img.value = data.editing.photo;
    $notes.value = data.editing.notes;
    $img.setAttribute('src', data.editing.photo);

    $entries.className = 'view entries hidden';
    $entryForm.className = 'view entry-form container';
    $h1Element.textContent = 'Edit Entry';
    data.view = 'entry-form';
  }
});

var $deleteButton = document.querySelector('.delete-button');

$entries.addEventListener('click', function (event) {
  if (event.target.matches('i')) {
    $deleteButton.className = 'delete-button';
  } else {
    $deleteButton.className = 'delete-button visibility-hidden';
  }
});
