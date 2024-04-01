function updateProgressText(percentage) {
    document.getElementById('progressText').innerText = percentage + '% ';
  }

  function updateProgressBar(percentage) {
    document.getElementById('progress').style.width = percentage + '%';
  }

  const initialProgress = 80;

  setTimeout(function() {
    updateProgressBar(initialProgress);
    updateProgressText(initialProgress);
  }, 1000);