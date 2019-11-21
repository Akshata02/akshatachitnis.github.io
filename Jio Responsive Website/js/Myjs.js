 //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

});
 //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

});
 //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

}); //buttons
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button(){
      event.preventDefault();
    });
  } );

	// Carousel Home page
	$('.carousel').carousel()
	
  //tabs for prepaid section
   $('.clothingnav1' () {
   $("#tabs").tabs({
   collapsible: true
  });
  });
	
	//Radio Buttons Device Page and Payment Method Page
	$( '.feature-1-content'() {
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
  } );
	
//Auto Select
 $(function () {
    var availableTags = [
      "United Kingdom",
      "United States",
      "United Arab Emirates",

    ];

    function split(val) {
      return val.split(/,\s*/);
    }

    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (event.keyCode === $.ui.keyCode.TAB
          && $(this).autocomplete("instance").menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            availableTags, extractLast(request.term)));
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
  });

});// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	function toggleIcon(e) {
  $(e.target)
    .prev(".panel-heading")
    .find(".more-less")
    .toggleClass("glyphicon-plus glyphicon-minus");
}
$(".panel-group").on("hidden.bs.collapse", toggleIcon);
$(".panel-group").on("shown.bs.collapse", toggleIcon);
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})