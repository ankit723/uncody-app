// Separate Function to change State of Text 

function selectHTML() {
  try {
      if (window.ActiveXObject) {
          var c = document.selection.createRange();
          return c.htmlText;
      }

      var nNd = document.createElement("span");
      var w = window.getSelection().getRangeAt(0);
      w.surroundContents(nNd);
      
      return nNd.innerHTML;
  } catch (e) {
      if (window.ActiveXObject) {
          return document.selection.createRange();
      } else {
          return window.getSelection();
      }
  }
}
// Fucntion Ends Here 


// Initializer and Eventlistner to Show the Text manupulation Options
const textSelectionToolbar = document.createElement('div');
textSelectionToolbar.className = 'text-selection-toolbar';
textSelectionToolbar.style.display = 'none';
document.body.appendChild(textSelectionToolbar);

document.addEventListener('mouseup', function(event) {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    const range = window.getSelection().getRangeAt(0).getBoundingClientRect();
    const toolbarWidth = textSelectionToolbar.offsetWidth;
    const toolbarHeight = textSelectionToolbar.offsetHeight;
    const toolbarTop = range.top - toolbarHeight - 5;
    const toolbarLeft = range.left + (range.width / 2) - (toolbarWidth / 2);
    textSelectionToolbar.style.display = 'block';
    textSelectionToolbar.style.top = toolbarTop + 'px';
    textSelectionToolbar.style.left = toolbarLeft + 'px';
  } else {
    textSelectionToolbar.style.display = 'none';
  }
});

// button to Bold the Selected Text
const boldButton = document.createElement('button');
boldButton.textContent = 'B';
boldButton.onclick = function() {
  selectHTML();
  document.querySelectorAll('span').forEach(function (span) {
    span.style.fontWeight = 'Bolder';
});
};

//Button to italic the Selected Text
const italicButton = document.createElement('button');
italicButton.textContent = 'I';
italicButton.onclick = function() {
  selectHTML();
  document.querySelectorAll('span').forEach(function (span) {
    span.style.fontStyle = 'italic';
  });
};


// Button to Underline the Selected Text
const underlineButton = document.createElement('button');
underlineButton.textContent = 'U';
underlineButton.onclick = function() {
  selectHTML();
  document.querySelectorAll('span').forEach(function (span) {
    span.style.textDecoration='underline'
  });
};

// Button to Re-Write the Selected Text
const textEditable = document.createElement('button');
textEditable.textContent = 'T';
textEditable.onclick = function() {
  selectHTML();
  document.querySelectorAll('span').forEach(function (span) {
    span.contentEditable=true
  });
};

// Button to Re-Size the Selected Text
const sizeEditable = document.createElement('button');
sizeEditable.textContent = 'Ss';
sizeEditable.onclick = function() {
  selectHTML();
  document.querySelectorAll('span').forEach(function (span) {
    let sizeInput = document.getElementById("name");
    var size = sizeInput.value;
    size=size+"rem"
    span.style.fontSize=size
  });
};

// Button to change color of the Selected Text
const colorEditable = document.createElement('button');
colorEditable.textContent = 'Cc';
colorEditable.onclick = function() {
  selectHTML();
  document.querySelectorAll('span').forEach(function (span) {
    const colorPicker = document.getElementById("color-picker");
    colorPicker.style.display='block'
    const new_color = colorPicker.value;
    span.style.color=new_color

  });
};




// Appending the option Button to the original code
textSelectionToolbar.appendChild(boldButton);
textSelectionToolbar.appendChild(italicButton);
textSelectionToolbar.appendChild(underlineButton);
textSelectionToolbar.appendChild(textEditable);
textSelectionToolbar.appendChild(sizeEditable);
textSelectionToolbar.appendChild(colorEditable);

