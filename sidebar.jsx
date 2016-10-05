import React from 'react';

var Menu = require('react-burger-menu').slide;

var Sidebar = React.createClass({

  getEducationData : function(){
    return {
      basics: {
        name: "John Doe",
        label: "Programmer",
        picture: "",
        email: "john@gmail.com",
        phone: "(912) 555-4321",
        website: "http://johndoe.com",
        summary: "A summary of John Doe...klgkrelge",
        location: {
          address: "2712 Broadway St",
          postalCode: "CA 94115",
          city: "San Francisco",
          countryCode: "US",
          region: "California"
        }
      }
    }
  },

  displayInfo: function(event) {
    var educationData = this.getEducationData()
    alert(educationData.basics.name);
  },

  showSettings: function(event) {showSettings
    event.preventDefault();
  },

  render: function() {
    return (
      <Menu>
        <img id="profile-picture" className="menu-item" src="./assets/michael-miller-software-developer-london.jpg"></img>
        <button id="education" onClick= {this.displayInfo} className="menu-item" href="">Education</button>
        <button id="projects" onClick= {this.displayInfo} className="menu-item" href="">Projects</button>
        <button id="contact" onClick= {this.displayInfo} className="menu-item" href="">Contact</button>
        <a onClick={ this.showSettings } className="menu-item--small" href=""></a>
      </Menu>
    );
  }

});

export default Sidebar;
