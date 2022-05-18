
var app = new function() {
  this.el = document.getElementById('tareas');
  this.tareas = [];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'tareas';
    if (data) {
      if (data > 1) {
        name = 'tareas';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'Sin ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.tareas.length > 0) {
      for (i = 0; i < this.tareas.length; i++) {
        data += '<tr>';
        data += '<td>' + this.tareas[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.tareas.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var country = el.value;
    if (country) {
      // Add the new value
      this.tareas.push(country.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
    let tarea = [localStorage.setItem("Crear", country)];
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.tareas[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var country = el.value;
      if (country) {
        // Edit value
        self.tareas.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
    let tarea = [localStorage.setItem("Actualizar", el.value)];
  };
  this.Delete = function (item) {
    // Delete the current row
    this.tareas.splice(item, 1);
    // Display the new list
    this.FetchAll();
    let borrado = [localStorage.setItem("borrado", item)];
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
