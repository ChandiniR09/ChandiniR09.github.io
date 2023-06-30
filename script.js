document.addEventListener('DOMContentLoaded', function() {
    // Update visitor count
    var visitorCount = localStorage.getItem('visitorCount');
    if (visitorCount) {
      visitorCount = parseInt(visitorCount) + 1;
    } else {
      visitorCount = 1;
    }
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitorCount').textContent = 'Visitors: ' + visitorCount;
  
    // Update server time
    var updateTime = function() {
      var now = new Date();
      var hours = now.getHours().toString().padStart(2, '0');
      var minutes = now.getMinutes().toString().padStart(2, '0');
      var seconds = now.getSeconds().toString().padStart(2, '0');
      document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
    };
    updateTime();
    setInterval(updateTime, 1000);
  });
  