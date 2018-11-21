/**
 * Created by alex on 11/21/18.
 */
let LISTCOUNTRY = ['Africa', 'America', 'Denmark', 'England', 'Belgium', 'Iceland', 'Ukraine'];
let newArrayCountry = [];
$("#target").keyup(changeValue);

function changeValue() {

  var Value = $('#target').val();
  for (let y = 0; y < Value.length; y++) {
    if (!!(Value[y].match(/^[a-z]$/i))) {
      compareLetters(Value);
      selectCompareList(newArrayCountry);
    } else {
      console.log('Не буква')
    }

  }
}

function compareLetters(Value) {


  newArrayCountry.splice(0, newArrayCountry.length);

  let valueLetter = Value;
  for (let i = 0; i < LISTCOUNTRY.length; i++) {

    let country = LISTCOUNTRY[i].toLowerCase();

    let foundPos = country.indexOf(valueLetter);

    //console.log(country,foundPos,valueLetter)

    if (foundPos >= 0) {

      newArrayCountry.push(country);

    } else {
      console.log('STOP')
    }

  }

  return newArrayCountry;

}


function selectCompareList() {
  $('.list-group-item').detach();
  let list = newArrayCountry;
  //console.log(list,'listlist')
  for (let l = 0; l < list.length; l++) {
    let first = list[l];
    let end = list[l].slice(1);
    let firstLetter = first[0].toUpperCase();
    let listNew = firstLetter + end;
    let newId = 'id' + l;
    $('#selectList').append('<li id="' + newId + '" class="list-group-item">' + listNew + '</li>');

    $('.list-group-item').click(addSeleteCountry);
  }

}

function addSeleteCountry(e) {
  let id  = e.target.id;
  let text = $('#'+id).text();
  $('#target').val(text);
  //console.log('selete',id,text)
  hideList();
}


function hideList() {
  setTimeout(() => {
    $('.list-group-item').remove();
  }, 200);
}

//changeValue();