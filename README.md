## Groovy plugin for Light Table
This plugin aims to provide [Groovy](http://groovy.codehaus.org/) support for the [Light Table](http://www.lighttable.com) IDE.
At the moment it is quite rudementary. The short term plan is to grow it into a feasible groovy console/groovy shell alternative with some unique features enabled by the Light Table platform. A long term plan would be to slowly grow it into a feasible Groovy IDE alternative.

## Installation / Getting started

* The plugin is available from the Light Table plugin manager under the name Groovy.
* Check out the [screencast](http://bit.ly/ltgrscr)


## Development/Contributing
If you wish to submit pull request. Just fork this repo and install the plugin by cloning the repo into your Light Table plugin directory.
```bash
  $ cd /path/to/config/LightTable/plugins && git clone git@github.com:rundis/LightTable-Groovy.git
```

To build the groovy bits a [Gradle](http://www.gradle.org) wrapper script is provided:
```bash
  $ ./gradlew build deploy
```

Check out the wiki for more details: [Contributing](https://github.com/rundis/LightTable-Groovy/wiki/Contribute)



## Requirements
* You need to have groovy installed and available in your PATH. I would recommend using [GVM](http://gvmtool.net/)

## Features/Usage

### Syntax highlighting
Simple syntax highlighting is provided throught the use of [CodeMirror](https://github.com/marijnh/codemirror) groovy mode.

### Evaluate Groovy on Demand
* `ctrl/cmd-shift-enter` evaluates all content in the current editor, prints any output to the console and shows results line by line.
* `ctrl/cmd-enter` evaluates the selected text/current line, prints output to the console and shows results inline for selected line(s).


Values for all top level expressions are shown. In looping constructs a max of 10 values are displayed for any given line. Exceptions are also displayed. If there are any exceptions, any values recorded prior to the exception arising are also shown.

#### Bindings
Bindings are stored/cached per editor. This gives you a behavior resembling a repl, but with many limitations. Anything that is evaluated is run as a groovy script, so obviously the same restrictions apply.

```Groovy
def myVar = 4

println myVar // will crash if you evaluate each line separately (ie two separate evals)
```

```Groovy
myVar = 4

println myVar // will work fine when evaluating lines separately, because myVar will be stored in binding
```

```Groovy
def myDouble(x) {x*2} // evaluates and results in a closure stored in bindings

myDouble(2) // I can invoke it

myDouble.curry(4)() // Its a closure not a method !
```


If you wish to clear all bindings for an editor invoke the command __Groovy: Clear bindings for current editor__ (you probably would want to assign your own keyboard shortcut for it !)


### Gradle integration
You can connect the groovy plugin to a gradle project (its using the Gradle tooling API under the hood). Just use the command __Add connection__ and select "Groovy" from the list. Then select the directory where your build.gradle file resides.
```NOTE Won't work on multiprojects```

Once connected you can import and use classes available from the classpath of that project.
3rd party libraries are available without further ado, but for project internal classes you must explicitly compile your project. The plugin uses the runttime classpath available through your projects main sourceSet

#### Gradle task execution
When you have connected to a Gradle project you can invoke tasks (currently only one at a time).
* Select command: __Groovy: Select gradle task__
* A list of available tasks is shown. For multiprojects task selectors are shown in addition to the individual tasks available for each subproject
* Select task (or task selector)
* The task will be executed and progress shown in the status bar. If there is an error the stacktrace is logged to the console.

#### Show dependency graph
You can view a dependency graph for your connected gradle project via the command __Groovy: Show gradle dependencies__. Each dependency configuration available in your project can be viewed. For multiprojects you also get an overview diagram + the ability to drill down to individual projects. Feature hightlight:
* Zoom in / out with mouse or keyboard
* Pan (with mouse only currently)
* View dependency graph per configuration (tab/button per config)
* Overview diagram for multiproject (creates edges for any connection between projects regardless of configuration)
* Any project node (configured as ```project(....)``` dependency in gradle) should be clickable.
* Clicking on a project dep node should bring you to a detailed view of dependecies for that project
* If you click the "header" of the diagram you should be taken back to the default view




### Enable logging
If you wish to enable debug logging from the groovy client. Add the following to your user.behaviors
```clojure
  :editor.groovy [(:lt.plugins.groovy/client-enable-logging)]
```
Output is written to: ```$groovy-plugin-dir$/lt_groovy.log```

## Version history
* 0.0.6 Gradle dependency graph and execute tasks for gradle multi-projects. Cheers to hackergarten at Gr8Conf for contributions. Big cheers to [effrafax](https://github.com/effrafax) and [rlovtangen](https://github.com/rlovtangen) for contributions to this release !
* 0.0.5 Execute Gradle tasks for connected gradle project (with progress reporting)
* 0.0.4 Connect to gradle projects for exploratory testing of any classes in the classpath. Methods are now stored as closure binding variables.
* 0.0.3 A hint of REPL. Storing binding variables between evals allows for a more REPL like experience.
* 0.0.2 Inline results for almost any top level line expression yielding values are shown. Removed display of binding variables (no longer needed). The majority of the features for this release are due to awesome groovy ast contributions from [Jim White](https://github.com/jimwhite)
* 0.0.1 Support for simple syntax highligting and evaluation of groovy scripts with inline results.


### License

GPLv3 license, same as [Light Table](https://github.com/LightTable/LightTable). See LICENSE.md for the full text.
