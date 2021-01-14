const tech = function() {
  $("#tech").collapse("hide")
}
const resume = function() {
  $("#resume").collapse("hide")
}
const about = function() {
  $("#about").collapse("hide")
  $("#buttonAbout").collapse("hide")
}
const projects = function() {
  $("#projects").collapse("hide")
}
$(() => {
  $("#buttonAbout").click(function() {
    resume()
    projects()
    tech()
  })
  $("#buttonTech").click(function() {
    resume()
    about()
    projects()
  })
  $("#buttonProjects").click(function() {
    resume()
    about()
    tech()
  })
  $("#buttonResume").click(function() {
    projects()
    about()
    tech()
  })

  $("#dropdownButtonAbout").click(function() {
    resume()
    projects()
    tech()
  })
  $("#dropdownButtonTech").click(function() {
    resume()
    about()
    projects()
  })
  $("#dropdownButtonProjects").click(function() {
    resume()
    about()
    tech()
  })
  $("#dropdownButtonResume").click(function() {
    projects()
    about()
    tech()
  })
  })
