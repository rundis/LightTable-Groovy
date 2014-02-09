## Groovy plugin for Light Table
This plugin aims to provide [Groovy](http://groovy.codehaus.org/) suppert for the [Light Table](http://www.lighttable.com) IDE.
At the moment it is very very rudementary, but the plan is to grow it into a feasible Groovy IDE alternative, with some unique features enabled by the Light Table platform.

## Installation
Currently you can install it by cloning the repo into your Light Table plugin directory.
   ```bash
        $ cd /path/to/config/LightTable/plugins && git clone git@github.com:rundis/LightTable-Groovy.git
    ```


## Requirements
* You need to have groovy installed and available in your PATH. I would recommend using [GVM](http://gvmtool.net/)

## Features/Usage

### Syntax highlighting
Simple syntax highlighting is provided throught the use of [CodeMirror](https://github.com/marijnh/codemirror) groovy mode.

### Evaluate Groovy on Demand
* `ctrl/cmd-shift-enter` evaluates all content in the current editor and prints output to the console
* `ctrl/cmd-enter` evaluates the selected text/current line and prints output to the console